#!/usr/bin/env node
// gen-components.mjs — generate DESIGN.md's `components:` block from mono-frontend's
// design tokens (packages/ui/src/shared-styles/design-tokens/json/tokens.json).
//
// Usage:  node tools/gen-components.mjs <path/to/tokens.json> [--write]
//   without --write: prints the generated YAML block + a summary (dry run)
//   with --write:    splices it into ./DESIGN.md, replacing the existing components block
//
// It walks each component namespace, keeps the base + first-level named variants that
// have a visible surface (background / border / text color), and skips interaction
// states (hover/active/…) and internal sub-parts (icon/caret/thumb/track/…). Values are
// resolved to concrete hex / px so the block is self-contained.

import { readFileSync, writeFileSync } from 'node:fs';

const [tokensPath, flag] = process.argv.slice(2);
if (!tokensPath) { console.error('usage: node tools/gen-components.mjs <tokens.json> [--write]'); process.exit(1); }
const T = JSON.parse(readFileSync(tokensPath, 'utf-8'));

const isLeaf = o => o && typeof o === 'object' && 'value' in o;
function resolve(v, depth = 0) {
  if (typeof v !== 'string' || depth > 8) return v;
  const m = v.match(/^\{(.+)\}$/);
  if (!m) return v;
  const node = m[1].split('.').reduce((o, k) => (o == null ? o : o[k]), T);
  return isLeaf(node) ? resolve(node.value, depth + 1) : v;
}

const STATES = /^(hover|active|focus|disabled|error|selected|pressed|visited|placeholder|checked|touched)$/;
const SUBPARTS = /^(icon|caret|thumb|track-bar|range-bar|line|divider|description|placeholder-icon|progess|progress|controls|prefix|postfix|overlay|close-icon|cta|back-link|title|heading|cell|thead|row|copy|link|element|bottom-line|indicator|clear|add|remove|treenode|item|controls|label-text)$/;
const ROUND = { '0px':'none', '4px':'sm', '6px':'md', '8px':'lg', '16px':'xl', '9999px':'full', '50%':'full' };

// pull renderable props from a node's *direct* leaves
function leafProps(node) {
  const p = {};
  for (const [k, v] of Object.entries(node)) {
    if (!isLeaf(v)) continue;
    const val = resolve(v.value);
    if (k === 'background-color' || k === 'background') { if (/^#|^rgb|gradient/.test(val)) p.backgroundColor = val; }
    else if (k === 'color') { if (/^#|^rgb/.test(val)) p.textColor = val; }
    else if (k === 'border-color') { if (/^#|^rgb/.test(val)) p.borderColor = val; }
    else if (k === 'border-radius') p.rounded = ROUND[val] ? '{rounded.' + ROUND[val] + '}' : val;
    else if (k === 'height') p.height = val;
  }
  return p;
}
const hasPaint = node => Object.values(node).some((v, i) => isLeaf(v) && /^(background|background-color|color|border-color)$/.test(Object.keys(node)[i]));
const orderedKeys = ['backgroundColor', 'textColor', 'borderColor', 'rounded', 'height'];

const entries = [];
for (const comp of Object.keys(T)) {
  if (comp === 'base') continue;
  const root = T[comp];
  if (!root || typeof root !== 'object') continue;
  const rootProps = leafProps(root);
  // base entry (flat components like card, badge, banner often hold the shared radius/height here)
  if (hasPaint(root)) entries.push([comp, rootProps]);
  // first-level named variants
  for (const [k, v] of Object.entries(root)) {
    if (!v || typeof v !== 'object' || isLeaf(v)) continue;
    if (STATES.test(k) || SUBPARTS.test(k)) continue;
    if (!hasPaint(v)) continue;
    const props = { ...rootProps, ...leafProps(v) }; // inherit radius/height from root
    entries.push([comp + '-' + k, props]);
  }
}

// emit YAML
let yaml = 'components:\n';
for (const [name, props] of entries) {
  const lines = orderedKeys.filter(k => props[k] != null).map(k => {
    const val = props[k];
    const q = /^[#{]/.test(val) || /\s/.test(val) ? '"' + val + '"' : val;
    return '    ' + k + ': ' + q;
  });
  if (!lines.length) continue;
  yaml += '  ' + name + ':\n' + lines.join('\n') + '\n';
}

if (flag === '--write') {
  let md = readFileSync('./DESIGN.md', 'utf-8');
  // replace from `^components:` up to (not including) the closing frontmatter `---`
  md = md.replace(/\ncomponents:\n[\s\S]*?\n---\n/, '\n' + yaml + '---\n');
  writeFileSync('./DESIGN.md', md);
  console.error('Wrote ' + entries.length + ' component entries into DESIGN.md');
} else {
  process.stdout.write(yaml);
  console.error('\n--- ' + entries.length + ' entries (dry run; pass --write to apply) ---');
}
