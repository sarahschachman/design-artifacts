import React, { useState, useRef, useEffect, useCallback, useMemo, lazy, Suspense } from 'react';

// ── Injected CSS ──
const NOTEBOOK_CSS = `/* ── Design tokens ── */
:root {
  --nb-bg: #fafafa;
  --nb-surface: #ffffff;
  --nb-surface-raised: #f5f5f5;
  --nb-border: #e5e3df;

  --nb-text: #1a1a1a;
  --nb-text-muted: #6b6966;
  --nb-text-dim: #807d79;
  --nb-accent: #1a1a1a;
  --nb-accent-soft: rgba(0, 0, 0, 0.05);
  --nb-accent-border: rgba(0, 0, 0, 0.2);
  --nb-accent-text: #1a1a1a;
  --nb-diff-add: #16a34a;
  --nb-diff-remove: #dc2626;
  --nb-font-sans: 'DM Sans', sans-serif;
  --nb-radius: 14px;
  --nb-radius-sm: 8px;
  --nb-radius-xs: 6px;
  --nb-radius-pill: 4px;
}

/* ── Global reset ── */
body {
  margin: 0;
  background: var(--nb-bg);
  color: var(--nb-text);
  font-family: var(--nb-font-sans);
  -webkit-font-smoothing: antialiased;
}

/* ── Iteration layout ── */
.nb-iteration {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.nb-iteration--variant {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 4px;
}

/* ── Content card ── */
.nb-content-card {
  min-width: 0;
  border: none;
  border-radius: 12px;
  overflow: visible;
  background: #fff;
  box-shadow: 0 0 0 1px rgba(0,0,0,0.03), 0 2px 4px rgba(0,0,0,0.04), 0 8px 16px rgba(0,0,0,0.04);
  transition: box-shadow 0.2s ease;
}

.nb-content-card:hover {
  box-shadow: 0 0 0 1px rgba(0,0,0,0.03), 0 4px 8px rgba(0,0,0,0.06), 0 12px 24px rgba(0,0,0,0.06);
}

/* ── Control buttons (states / reset) ── */
.nb-btn {
  background: none;
  border: 1px solid rgba(0,0,0,0.06);
  border-radius: var(--nb-radius-xs);
  padding: 6px 10px;
  font-size: 13px;
  color: var(--nb-text-dim);
  cursor: pointer;
  font-family: var(--nb-font-sans);
  transition: all 0.2s ease;
}

.nb-btn:hover {
  background: #fff;
  border-color: rgba(0,0,0,0.06);
  box-shadow: 0 1px 3px rgba(0,0,0,0.06);
  color: var(--nb-text-muted);
}

.nb-btn--active {
  background: var(--nb-accent-soft);
  border-color: var(--nb-accent-border);
  color: var(--nb-accent-text);
}

.nb-btn--active:hover {
  border-color: var(--nb-accent-border);
  color: var(--nb-accent-text);
}

/* ── State explorer popover ── */
.nb-state-explorer {
  width: 320px;
  background: var(--nb-surface);
  border: none;
  border-radius: 14px;
  padding: 0;
  box-shadow: 0 0 0 1px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.08), 0 20px 48px rgba(0,0,0,0.06);
  font-family: var(--nb-font-sans);
  overflow: hidden auto;
  max-height: calc(100vh - 120px);
  animation: nb-popover-in 0.15s ease-out;
}

.nb-state-explorer-section {
  padding: 10px;
}

.nb-state-explorer-section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6px;
  padding: 0 2px;
}

.nb-state-explorer-section-title {
  font-size: 12px;
  font-weight: 550;
  color: var(--nb-text-muted);
}

.nb-state-explorer-divider {
  height: 1px;
  background: rgba(0,0,0,0.06);
  margin: 4px 12px;
}

.nb-state-explorer-presets {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.nb-state-explorer-empty {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 20px 16px;
  align-items: center;
  text-align: center;
  color: var(--nb-text-dim);
  font-size: 13px;
  line-height: 1.4;
}

.nb-state-explorer-empty > span:first-child {
  font-weight: 500;
  color: var(--nb-text);
}

.nb-state-explorer-empty > span:last-child {
  font-size: 12px;
  opacity: 0.6;
}

.nb-state-preset {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 7px 10px;
  background: var(--nb-surface);
  border: 1px solid rgba(0,0,0,0.04);
  border-radius: var(--nb-radius-sm);
  cursor: pointer;
  text-align: left;
  font-family: var(--nb-font-sans);
  transition: all 0.15s ease;
}

.nb-state-preset:hover {
  background: var(--nb-surface-raised);
  border-color: rgba(0,0,0,0.08);
  box-shadow: 0 1px 3px rgba(0,0,0,0.04);
}

.nb-state-preset--active {
  background: var(--nb-accent-soft);
  border-color: var(--nb-accent-border);
}

.nb-state-preset-content {
  flex: 1;
  min-width: 0;
}

.nb-state-preset-label {
  font-size: 12px;
  font-weight: 550;
  color: var(--nb-text);
  margin-bottom: 1px;
}

.nb-state-preset--active .nb-state-preset-label {
  color: var(--nb-accent-text);
}

.nb-state-preset-hint {
  font-size: 11px;
  color: var(--nb-text-dim);
  line-height: 1.3;
}

.nb-state-preset--active .nb-state-preset-hint {
  color: var(--nb-accent-text);
  opacity: 0.7;
}

.nb-state-preset-check {
  display: flex;
  flex-shrink: 0;
  margin-left: 8px;
  color: var(--nb-accent);
}

.nb-state-explorer-reset {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 3px 8px;
  background: transparent;
  border: 1px solid rgba(0,0,0,0.04);
  border-radius: 6px;
  font-size: 11px;
  font-weight: 500;
  color: var(--nb-text-dim);
  cursor: pointer;
  font-family: var(--nb-font-sans);
  transition: all 0.15s ease;
}

.nb-state-explorer-reset:hover {
  background: var(--nb-surface-raised);
  border-color: rgba(0,0,0,0.1);
  box-shadow: 0 1px 2px rgba(0,0,0,0.04);
  color: var(--nb-text);
}

/* ── Controls toggle (collapsible fine-tuning) ── */
.nb-state-explorer-controls-toggle {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 8px 2px 0;
  border: none;
  background: none;
  cursor: pointer;
  font-family: var(--nb-font-sans);
}

.nb-state-explorer-controls-chevron {
  color: var(--nb-text-dim);
  display: flex;
  transition: transform 0.2s ease;
}

.nb-state-explorer-controls-chevron--collapsed {
  transform: rotate(-90deg);
}

.nb-state-explorer-controls-body {
  overflow: hidden;
  transition: max-height 0.25s ease;
}

.nb-state-explorer-controls-body--open {
  max-height: 500px;
}

.nb-state-explorer-controls-body--closed {
  max-height: 0;
}

/* ── Keyframes ── */
@keyframes nb-stagger-in {
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes nb-popover-in {
  from { opacity: 0; transform: translateY(-4px) scale(0.98); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}

/* ── Scrollbar styling ── */
.nb-scroll::-webkit-scrollbar {
  width: 6px;
}

.nb-scroll::-webkit-scrollbar-track {
  background: transparent;
}

.nb-scroll::-webkit-scrollbar-thumb {
  background: var(--nb-border);
  border-radius: 3px;
}

.nb-scroll::-webkit-scrollbar-thumb:hover {
  background: var(--nb-text-dim);
}

/* ── Working state — applied by agent before generating next iteration ── */
@keyframes nb-working-shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}
@keyframes nb-working-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}
.nb-working {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
}
.nb-working > * {
  opacity: 0.5;
  pointer-events: none;
  transition: opacity 0.3s ease;
}
.nb-working::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  z-index: 1;
  pointer-events: none;
  border-radius: 12px;
  overflow: hidden;
}
.nb-working::after {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  z-index: 2;
  pointer-events: none;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(0, 0, 0, 0.03) 30%,
    rgba(0, 0, 0, 0.06) 50%,
    rgba(0, 0, 0, 0.03) 70%,
    transparent 100%
  );
  animation: nb-working-shimmer 2s ease-in-out infinite;
}

/* ── Feedback button ── */
.nb-feedback-link {
  transition: background 0.15s ease, border-color 0.15s ease;
}
.nb-feedback-link:hover {
  background: var(--nb-surface-raised);
  border-color: var(--nb-text-dim);
}

/* ── Chrome button (unified header action) ── */
.nb-chrome-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  padding: 0 10px;
  gap: 6px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  font-family: var(--nb-font-sans);
  cursor: pointer;
  white-space: nowrap;
  text-decoration: none;
  transition: background 0.15s ease, color 0.15s ease;
  flex-shrink: 0;
  background: transparent;
  color: var(--nb-text-muted);
}

.nb-chrome-btn:hover {
  background: var(--nb-surface-raised);
  color: var(--nb-text);
}

.nb-chrome-btn--active {
  background: var(--nb-accent-soft);
  color: var(--nb-accent-text);
}

/* ── Header bar ── */
.nb-chrome {
  border-bottom: 1px solid var(--nb-border);
}

.nb-header-bar {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 24px;
  font-family: var(--nb-font-sans);
}

.nb-header-center {
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
}

.nb-header-right {
  display: flex;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
}

.nb-iteration-nav-summary {
  font-size: 14px;
  font-weight: 500;
  color: var(--nb-text-muted);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 0;
}

.nb-iteration-nav-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  padding: 0;
  border: none;
  border-radius: 6px;
  background: none;
  color: var(--nb-text);
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease;
}

.nb-iteration-nav-btn:hover:not(:disabled) {
  background: rgba(0, 0, 0, 0.08);
  color: var(--nb-text);
}

.nb-iteration-nav-btn:disabled {
  opacity: 0.25;
  cursor: default;
}

.nb-iteration-nav-index {
  font-size: 14px;
  font-weight: 500;
  color: var(--nb-text-dim);
  padding: 0 4px;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  flex-shrink: 0;
}

/* ── Timeline scrubber ── */
.nb-timeline-scrubber {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0 6px;
}

.nb-timeline-tick {
  width: 8px;
  height: 8px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: var(--nb-border);
  cursor: pointer;
  transition: background 0.15s ease, transform 0.15s ease;
  flex-shrink: 0;
}

.nb-timeline-tick:hover {
  background: var(--nb-text-muted);
  transform: scale(1.3);
}

.nb-timeline-tick--active {
  background: var(--nb-accent);
  transform: scale(1.2);
}

.nb-timeline-tick--active:hover {
  background: var(--nb-accent);
  transform: scale(1.3);
}

.nb-timeline-tick--group {
  width: 16px;
  border-radius: 4px;
}

/* ── Change annotation (transient) ── */
.nb-change-annotation {
  position: absolute;
  left: 24px;
  z-index: 99;
  border-radius: 10px;
  padding: 8px 14px;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow:
    0 0 0 1px rgba(0, 0, 0, 0.04),
    0 2px 8px rgba(0, 0, 0, 0.06);
  font-family: var(--nb-font-sans);
  max-width: 400px;
  opacity: 0;
  transform: translateY(-4px);
  transition: opacity 0.25s ease, transform 0.25s ease;
  pointer-events: none;
}

.nb-change-annotation--visible {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

/* ── Trail panel ── */
.nb-trail-panel {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  width: 360px;
  max-height: 400px;
  background: var(--nb-surface);
  border-radius: 12px;
  padding: 12px;
  box-shadow: 0 0 0 1px rgba(0,0,0,0.03), 0 4px 12px rgba(0,0,0,0.06), 0 16px 32px rgba(0,0,0,0.08);
  font-family: var(--nb-font-sans);
  z-index: 200;
  display: flex;
  flex-direction: column;
}

.nb-trail-list {
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 2px;
  max-height: 340px;
}

.nb-trail-row {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 6px 8px;
  border: none;
  border-radius: 6px;
  background: none;
  cursor: pointer;
  font-family: var(--nb-font-sans);
  text-align: left;
  transition: background 0.15s ease;
}

.nb-trail-row:hover {
  background: rgba(0, 0, 0, 0.03);
}

.nb-trail-row--active {
  background: var(--nb-accent-soft);
}

.nb-trail-row--active:hover {
  background: var(--nb-accent-soft);
}

.nb-trail-row-index {
  font-size: 11px;
  font-weight: 500;
  color: var(--nb-text-dim);
  font-variant-numeric: tabular-nums;
  flex-shrink: 0;
}

.nb-trail-row--active .nb-trail-row-index {
  color: var(--nb-accent-text);
}

.nb-trail-row-summary {
  font-size: 12px;
  color: var(--nb-text);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
}

/* ── Project banner ── */
.nb-project-banner {
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: var(--nb-font-sans);
  font-size: 13px;
  font-weight: 400;
  color: var(--nb-text-dim);
  white-space: nowrap;
  padding-right: 12px;
  margin-right: 0;
}

.nb-project-banner-title {
  font-weight: 600;
  color: var(--nb-text);
}

.nb-project-banner-feedback {
  margin-left: auto;
  flex-shrink: 0;
  font-size: 12px;
  font-weight: 500;
  color: var(--nb-text-dim);
  text-decoration: none;
  padding: 3px 10px;
  border: 1px solid var(--nb-border);
  border-radius: 5px;
  transition: background 0.15s ease, border-color 0.15s ease;
}

.nb-project-banner-feedback:hover {
  background: var(--nb-surface-raised);
  border-color: var(--nb-text-dim);
}

/* ── Filmstrip drawer ── */
.nb-filmstrip-drawer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.25s ease;
}

.nb-filmstrip-drawer--open {
  max-height: 400px;
}

/* ── Filmstrip ── */
.nb-filmstrip {
  display: flex;
  gap: 16px;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  padding: 0 0 16px;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.nb-filmstrip::-webkit-scrollbar {
  display: none;
}

.nb-filmstrip::before,
.nb-filmstrip::after {
  content: '';
  flex-shrink: 0;
  width: 8px;
}

.nb-filmstrip-card {
  flex-shrink: 0;
  width: 360px;
  scroll-snap-align: start;
  cursor: pointer;
  border-radius: 12px;
  border: 2px solid transparent;
  padding: 10px;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
}

.nb-filmstrip-group {
  flex-shrink: 0;
  scroll-snap-align: start;
  background: rgba(0, 0, 0, 0.02);
  border-radius: 14px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.nb-filmstrip-group-label {
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: var(--nb-font-sans);
  font-size: 12px;
  font-weight: 500;
  color: var(--nb-text-dim);
  padding: 0 2px;
}

.nb-filmstrip-group-variants {
  display: flex;
  gap: 10px;
}

.nb-filmstrip-card--variant {
  width: 240px;
}

.nb-filmstrip-card:hover {
  border-color: var(--nb-border);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.nb-filmstrip-card--active {
  border-color: var(--nb-border);
  background: var(--nb-surface);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
}

.nb-filmstrip-card--active:hover {
  border-color: var(--nb-border);
}

.nb-filmstrip-card-label {
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: var(--nb-font-sans);
  font-size: 13px;
  font-weight: 450;
  color: var(--nb-text-muted);
  margin-bottom: 6px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.nb-filmstrip-card-index {
  font-weight: 500;
  color: var(--nb-text-dim);
  font-variant-numeric: tabular-nums;
  flex-shrink: 0;
}

.nb-filmstrip-card--active .nb-filmstrip-card-index {
  color: var(--nb-accent-text);
}


.nb-filmstrip-card-meta {
  margin-top: 8px;
}

.nb-filmstrip-card-preview {
  overflow: hidden;
  border-radius: 8px;
  pointer-events: none;
  position: relative;
  max-height: 180px;
}

.nb-filmstrip-group--active {
  background: rgba(0, 0, 0, 0.03);
}

/* Active toggle style for nav button */
.nb-iteration-nav-btn--active {
  background: var(--nb-accent-soft);
  color: var(--nb-accent-text);
}

/* ── Picked badge ── */
.nb-picked-badge {
  font-size: 11px;
  font-weight: 600;
  color: var(--nb-accent-text);
  background: var(--nb-accent-soft);
  padding: 1px 6px;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

/* ── Range input utility ── */
.nb-range {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 4px;
  border-radius: 2px;
  background: rgba(0,0,0,0.08);
  outline: none;
}

.nb-range::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--nb-text);
  border: 2px solid var(--nb-surface);
  box-shadow: 0 1px 3px rgba(0,0,0,0.15);
  cursor: pointer;
  transition: transform 0.1s ease;
}

.nb-range::-webkit-slider-thumb:hover {
  transform: scale(1.15);
}

.nb-range::-webkit-slider-thumb:active {
  transform: scale(0.95);
}
`;

function useStyles() {
  useEffect(() => {
    const id = 'design-notebook-styles';
    if (document.getElementById(id)) return;
    const style = document.createElement('style');
    style.id = id;
    style.textContent = NOTEBOOK_CSS;
    document.head.appendChild(style);
    return () => { style.remove(); };
  }, []);
}

function useFonts() {
  useEffect(() => {
    const id = 'design-notebook-fonts';
    if (document.getElementById(id)) return;
    const link = document.createElement('link');
    link.id = id;
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Instrument+Serif:ital@0;1&display=swap';
    document.head.appendChild(link);

    const preconnect1 = document.createElement('link');
    preconnect1.rel = 'preconnect';
    preconnect1.href = 'https://fonts.googleapis.com';
    document.head.appendChild(preconnect1);

    const preconnect2 = document.createElement('link');
    preconnect2.rel = 'preconnect';
    preconnect2.href = 'https://fonts.gstatic.com';
    preconnect2.crossOrigin = '';
    document.head.appendChild(preconnect2);
  }, []);
}

// ── Bundled notebook code ──
// .artifact-build/NotebookApp.tsx

// .artifact-build/chrome.tsx

// .artifact-build/state-explorer.tsx

var ResetIcon = () => /* @__PURE__ */ React.createElement("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("polyline", { points: "1 4 1 10 7 10" }), /* @__PURE__ */ React.createElement("path", { d: "M3.51 15a9 9 0 1 0 2.13-9.36L1 10" }));
var CheckIcon = ({ size = 12 }) => /* @__PURE__ */ React.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("polyline", { points: "20 6 9 17 4 12" }));
var ChevronDown = ({ size = 12 }) => /* @__PURE__ */ React.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("polyline", { points: "6 9 12 15 18 9" }));
function PresetCard({ preset, isActive, onClick }) {
  return /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick,
      className: `nb-state-preset ${isActive ? "nb-state-preset--active" : ""}`
    },
    /* @__PURE__ */ React.createElement("div", { className: "nb-state-preset-content" }, /* @__PURE__ */ React.createElement("div", { className: "nb-state-preset-label" }, preset.label), preset.hint && /* @__PURE__ */ React.createElement("div", { className: "nb-state-preset-hint" }, preset.hint)),
    isActive && /* @__PURE__ */ React.createElement("span", { className: "nb-state-preset-check" }, /* @__PURE__ */ React.createElement(CheckIcon, { size: 12 }))
  );
}
function StateExplorer({ presets, active, onSelect, onReset, triggerClassName, triggerContent, children, direction = "down" }) {
  const [open, setOpen] = useState(false);
  const [fineTuningOpen, setFineTuningOpen] = useState(true);
  const wrapperRef = useRef(null);
  const hasFineTuning = !!children;
  useEffect(() => {
    if (!open) return;
    function handleMouseDown(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleMouseDown);
    return () => document.removeEventListener("mousedown", handleMouseDown);
  }, [open]);
  const clampToViewport = useCallback((el) => {
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (rect.left < 16) el.style.right = `${rect.left - 16}px`;
  }, []);
  return /* @__PURE__ */ React.createElement("div", { ref: wrapperRef, style: { position: "relative" } }, /* @__PURE__ */ React.createElement(
    "button",
    {
      className: triggerClassName,
      style: triggerContent ? { border: "none", padding: 4, background: "none", cursor: "pointer" } : void 0,
      onClick: () => setOpen((o) => !o)
    },
    triggerContent ?? "states"
  ), open && /* @__PURE__ */ React.createElement("div", { ref: clampToViewport, className: "nb-state-explorer", style: { position: "absolute", ...direction === "up" ? { bottom: "100%", marginBottom: 6 } : { top: "100%", marginTop: 6 }, right: 0, zIndex: 50 } }, presets.length > 0 ? /* @__PURE__ */ React.createElement("div", { className: "nb-state-explorer-section" }, /* @__PURE__ */ React.createElement("div", { className: "nb-state-explorer-section-header" }, /* @__PURE__ */ React.createElement("span", { className: "nb-state-explorer-section-title" }, "Presets"), onReset && /* @__PURE__ */ React.createElement("button", { onClick: onReset, className: "nb-state-explorer-reset" }, /* @__PURE__ */ React.createElement(ResetIcon, null), /* @__PURE__ */ React.createElement("span", null, "Reset"))), /* @__PURE__ */ React.createElement("div", { className: "nb-state-explorer-presets" }, presets.map((p) => /* @__PURE__ */ React.createElement(
    PresetCard,
    {
      key: p.id,
      preset: p,
      isActive: active === p.id,
      onClick: () => onSelect(p.id)
    }
  )))) : /* @__PURE__ */ React.createElement("div", { className: "nb-state-explorer-empty" }, /* @__PURE__ */ React.createElement("span", null, "No states yet"), /* @__PURE__ */ React.createElement("span", null, "States will show up here after you add a first iteration.")), hasFineTuning && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "nb-state-explorer-divider" }), /* @__PURE__ */ React.createElement("div", { className: "nb-state-explorer-section" }, /* @__PURE__ */ React.createElement(
    "button",
    {
      className: "nb-state-explorer-controls-toggle",
      onClick: () => setFineTuningOpen((o) => !o)
    },
    /* @__PURE__ */ React.createElement("span", { className: "nb-state-explorer-section-title" }, "Controls"),
    /* @__PURE__ */ React.createElement("span", { className: `nb-state-explorer-controls-chevron ${!fineTuningOpen ? "nb-state-explorer-controls-chevron--collapsed" : ""}` }, /* @__PURE__ */ React.createElement(ChevronDown, { size: 12 }))
  ), /* @__PURE__ */ React.createElement("div", { className: `nb-state-explorer-controls-body ${fineTuningOpen ? "nb-state-explorer-controls-body--open" : "nb-state-explorer-controls-body--closed"}` }, children)))));
}

// .artifact-build/chrome.tsx
var DESIGN_WIDTH = 1440;
function ScaledContent({ scale, children }) {
  const innerRef = useRef(null);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    if (!innerRef.current) return;
    const ro = new ResizeObserver(([entry]) => setHeight(entry.borderBoxSize[0].blockSize));
    ro.observe(innerRef.current);
    return () => ro.disconnect();
  }, []);
  return /* @__PURE__ */ React.createElement("div", { style: { height: height * scale, overflow: "hidden" } }, /* @__PURE__ */ React.createElement(
    "div",
    {
      ref: innerRef,
      style: {
        width: DESIGN_WIDTH,
        transform: `scale(${scale})`,
        transformOrigin: "top left"
      }
    },
    children
  ));
}

// .artifact-build/NotebookApp.tsx
function isGroup(entry) {
  return "group" in entry;
}
var CONTENT_WIDTH = 1440;
var FILMSTRIP_CARD_WIDTH = 360;
function useContainerWidth(ref) {
  const [width, setWidth] = useState(CONTENT_WIDTH);
  useEffect(() => {
    if (!ref.current) return;
    const ro = new ResizeObserver(([entry]) => setWidth(entry.contentRect.width));
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);
  return width;
}
function entrySummary(entry) {
  if (isGroup(entry)) {
    return `Exploring ${entry.group.length} directions`;
  }
  return entry.config.summary || entry.config.label;
}
var SlidersIcon = ({ size = 16 }) => /* @__PURE__ */ React.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("path", { d: "M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" }));
var ClockIcon = ({ size = 14 }) => /* @__PURE__ */ React.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("path", { d: "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" }));
var FeedbackIcon = ({ size = 14 }) => /* @__PURE__ */ React.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("path", { d: "M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" }));
var ChevronLeft = () => /* @__PURE__ */ React.createElement("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("polyline", { points: "15 18 9 12 15 6" }));
var ChevronRight = () => /* @__PURE__ */ React.createElement("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("polyline", { points: "9 6 15 12 9 18" }));
function ChangePills({ changes }) {
  if (!changes || changes.length === 0) return null;
  const adds = changes.filter((c) => c.startsWith("+ ")).map((c) => c.slice(2));
  const removes = changes.filter((c) => c.startsWith("\u2212 ")).map((c) => c.slice(2));
  return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: 6, fontSize: 13, fontWeight: 450 } }, adds.length > 0 && /* @__PURE__ */ React.createElement("span", { style: { color: "var(--nb-diff-add)" } }, "+ ", adds.join(", ")), removes.length > 0 && /* @__PURE__ */ React.createElement("span", { style: { color: "var(--nb-diff-remove)" } }, "\u2212 ", removes.join(", ")));
}
function FilmstripCard({ isActive, onClick, children, animDelay }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), animDelay);
    return () => clearTimeout(t);
  }, [animDelay]);
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: `nb-filmstrip-card ${isActive ? "nb-filmstrip-card--active" : ""}`,
      style: {
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(4px)",
        transition: "border-color 0.15s ease, box-shadow 0.15s ease, opacity 0.2s ease-out, transform 0.2s ease-out"
      },
      onClick
    },
    children
  );
}
function FilmstripVariantCard({ isActive, onClick, children, animDelay }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), animDelay);
    return () => clearTimeout(t);
  }, [animDelay]);
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: `nb-filmstrip-card nb-filmstrip-card--variant ${isActive ? "nb-filmstrip-card--active" : ""}`,
      style: {
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(4px)",
        transition: "border-color 0.15s ease, box-shadow 0.15s ease, opacity 0.2s ease-out, transform 0.2s ease-out"
      },
      onClick
    },
    children
  );
}
function NotebookApp({ iterations: ITERATIONS2, project: PROJECT2 }) {
  const [iterationStates, setIterationStates] = useState({});
  const [activeIndex, setActiveIndex] = useState(ITERATIONS2.length - 1);
  const [activeVariantIndex, setActiveVariantIndex] = useState(0);
  const [filmstripOpen, setFilmstripOpen] = useState(false);
  const [filmstripKey, setFilmstripKey] = useState(0);
  const containerRef = useRef(null);
  const filmstripRef = useRef(null);
  useContainerWidth(containerRef);
  useEffect(() => {
    if (activeIndex >= ITERATIONS2.length) {
      setActiveIndex(Math.max(0, ITERATIONS2.length - 1));
    }
  }, [ITERATIONS2.length, activeIndex]);
  const safeIndex = Math.min(activeIndex, ITERATIONS2.length - 1);
  const activeEntry = ITERATIONS2[safeIndex];
  const scrollToActive = (index, instant = false) => {
    if (!filmstripRef.current) return;
    const card = filmstripRef.current.children[index];
    if (card) card.scrollIntoView({ behavior: instant ? "instant" : "smooth", block: "nearest", inline: "center" });
  };
  useEffect(() => {
    if (filmstripOpen) scrollToActive(activeIndex);
  }, [activeIndex, filmstripOpen]);
  const getState = (key, def) => iterationStates[key] ?? def.defaultState;
  const updateState = (key, def, patch) => {
    setIterationStates((prev) => ({
      ...prev,
      [key]: { ...getState(key, def), ...patch, activePreset: null }
    }));
  };
  const handlePreset = (key, def, presetId) => {
    const resolved = def.resolvePreset(presetId);
    setIterationStates((prev) => ({ ...prev, [key]: { ...resolved, activePreset: presetId } }));
  };
  const handleReset = (key, def) => {
    setIterationStates((prev) => ({ ...prev, [key]: { ...def.defaultState, activePreset: null } }));
  };
  const goPrev = useCallback(() => {
    if (isGroup(activeEntry) && activeVariantIndex > 0) {
      setActiveVariantIndex((v) => v - 1);
    } else if (activeIndex > 0) {
      const prevEntry = ITERATIONS2[activeIndex - 1];
      setActiveIndex(activeIndex - 1);
      if (isGroup(prevEntry)) {
        setActiveVariantIndex(prevEntry.group.length - 1);
      } else {
        setActiveVariantIndex(0);
      }
    }
  }, [activeEntry, activeVariantIndex, activeIndex, ITERATIONS2]);
  const goNext = useCallback(() => {
    if (isGroup(activeEntry) && activeVariantIndex < activeEntry.group.length - 1) {
      setActiveVariantIndex((v) => v + 1);
    } else if (activeIndex < ITERATIONS2.length - 1) {
      setActiveIndex(activeIndex + 1);
      setActiveVariantIndex(0);
    }
  }, [activeEntry, activeVariantIndex, activeIndex, ITERATIONS2]);
  const isAtStart = activeIndex === 0 && (!isGroup(activeEntry) || activeVariantIndex === 0);
  const isAtEnd = activeIndex === ITERATIONS2.length - 1 && (!isGroup(activeEntry) || activeVariantIndex === activeEntry.group.length - 1);
  const variantSuffix = isGroup(activeEntry) ? String.fromCharCode(97 + Math.min(activeVariantIndex, activeEntry.group.length - 1)) : "";
  const pageLabel = `${activeIndex + 1}${variantSuffix}`;
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "Escape") setFilmstripOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [goPrev, goNext]);
  const renderActiveContent = () => {
    if (isGroup(activeEntry)) {
      const variantIdx = Math.min(activeVariantIndex, activeEntry.group.length - 1);
      const def2 = activeEntry.group[variantIdx];
      const state2 = getState(`active-${activeIndex}-${variantIdx}`, def2);
      return /* @__PURE__ */ React.createElement("div", { className: "nb-content-card" }, /* @__PURE__ */ React.createElement(def2.Content, { state: state2 }));
    }
    const def = activeEntry;
    const state = getState(`active-${activeIndex}`, def);
    return /* @__PURE__ */ React.createElement("div", { className: "nb-content-card" }, /* @__PURE__ */ React.createElement(def.Content, { state }));
  };
  const renderFilmstrip = () => {
    const scale = FILMSTRIP_CARD_WIDTH / CONTENT_WIDTH;
    const VARIANT_CARD_WIDTH = 240;
    let cardIndex = 0;
    return /* @__PURE__ */ React.createElement("div", { ref: filmstripRef, className: "nb-filmstrip nb-scroll", key: filmstripKey }, ITERATIONS2.map((entry, i) => {
      const isActive = i === activeIndex;
      if (isGroup(entry)) {
        const groupDelay = cardIndex * 40;
        cardIndex++;
        return /* @__PURE__ */ React.createElement(
          "div",
          {
            key: `group-${i}`,
            className: `nb-filmstrip-group ${isActive ? "nb-filmstrip-group--active" : ""}`,
            style: {
              opacity: 0,
              animation: `nb-stagger-in 0.2s ease-out ${groupDelay}ms forwards`
            }
          },
          /* @__PURE__ */ React.createElement("div", { className: "nb-filmstrip-group-label" }, /* @__PURE__ */ React.createElement("span", { className: "nb-filmstrip-card-index" }, String(i + 1).padStart(2, "0")), /* @__PURE__ */ React.createElement("span", null, entrySummary(entry))),
          /* @__PURE__ */ React.createElement("div", { className: "nb-filmstrip-group-variants" }, entry.group.map((def2, vi) => {
            const isVariantActive = isActive && vi === activeVariantIndex;
            const state2 = getState(`filmstrip-${i}-${vi}`, def2);
            const isPicked = def2.config.tag === "picked";
            const changes = def2.config.changes;
            return /* @__PURE__ */ React.createElement(
              FilmstripVariantCard,
              {
                key: vi,
                isActive: isVariantActive,
                onClick: () => {
                  setActiveIndex(i);
                  setActiveVariantIndex(vi);
                },
                animDelay: groupDelay + (vi + 1) * 30
              },
              /* @__PURE__ */ React.createElement("div", { className: "nb-filmstrip-card-label" }, /* @__PURE__ */ React.createElement("span", null, def2.config.summary || def2.config.label), isPicked && /* @__PURE__ */ React.createElement("span", { className: "nb-picked-badge" }, "Picked")),
              /* @__PURE__ */ React.createElement("div", { className: "nb-filmstrip-card-preview" }, /* @__PURE__ */ React.createElement(ScaledContent, { scale: VARIANT_CARD_WIDTH / CONTENT_WIDTH }, /* @__PURE__ */ React.createElement("div", { className: "nb-content-card" }, /* @__PURE__ */ React.createElement(def2.Content, { state: state2 })))),
              changes && changes.length > 0 && /* @__PURE__ */ React.createElement("div", { className: "nb-filmstrip-card-meta" }, /* @__PURE__ */ React.createElement(ChangePills, { changes }))
            );
          }))
        );
      }
      const def = entry;
      const state = getState(`filmstrip-${i}`, def);
      const delay = cardIndex * 40;
      cardIndex++;
      return /* @__PURE__ */ React.createElement(
        FilmstripCard,
        {
          key: i,
          isActive,
          onClick: () => setActiveIndex(i),
          animDelay: delay
        },
        /* @__PURE__ */ React.createElement("div", { className: "nb-filmstrip-card-label" }, /* @__PURE__ */ React.createElement("span", { className: "nb-filmstrip-card-index" }, String(i + 1).padStart(2, "0")), /* @__PURE__ */ React.createElement("span", null, entrySummary(entry))),
        /* @__PURE__ */ React.createElement("div", { className: "nb-filmstrip-card-preview" }, /* @__PURE__ */ React.createElement(ScaledContent, { scale }, /* @__PURE__ */ React.createElement("div", { className: "nb-content-card" }, /* @__PURE__ */ React.createElement(def.Content, { state })))),
        def.config.changes && def.config.changes.length > 0 && /* @__PURE__ */ React.createElement("div", { className: "nb-filmstrip-card-meta" }, /* @__PURE__ */ React.createElement(ChangePills, { changes: def.config.changes }))
      );
    }));
  };
  const getActiveStateExplorerProps = () => {
    if (isGroup(activeEntry)) {
      const variantIdx = Math.min(activeVariantIndex, activeEntry.group.length - 1);
      const def2 = activeEntry.group[variantIdx];
      const stateKey2 = `active-${activeIndex}-${variantIdx}`;
      const state2 = getState(stateKey2, def2);
      return { def: def2, stateKey: stateKey2, presets: def2.presets, activePreset: state2.activePreset ?? null, hasFineTuning: !!def2.FineTuning, state: state2 };
    }
    const def = activeEntry;
    const stateKey = `active-${activeIndex}`;
    const state = getState(stateKey, def);
    return { def, stateKey, presets: def.presets, activePreset: state.activePreset ?? null, hasFineTuning: !!def.FineTuning, state };
  };
  const stateProps = getActiveStateExplorerProps();
  const hasStateExplorer = stateProps.presets.length > 0 || stateProps.hasFineTuning;
  return /* @__PURE__ */ React.createElement("div", { style: { minHeight: "100vh", display: "flex", flexDirection: "column" } }, /* @__PURE__ */ React.createElement("div", { style: { flex: 1, overflow: "auto" } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "nb-chrome" }, /* @__PURE__ */ React.createElement("div", { className: "nb-header-bar" }, /* @__PURE__ */ React.createElement("div", { className: "nb-project-banner" }, /* @__PURE__ */ React.createElement("span", null, "Design Notebook"), /* @__PURE__ */ React.createElement("span", { className: "nb-project-banner-title" }, PROJECT2.title || "Untitled")), /* @__PURE__ */ React.createElement("div", { className: "nb-header-center" }, /* @__PURE__ */ React.createElement(
    "button",
    {
      className: "nb-iteration-nav-btn",
      onClick: goPrev,
      disabled: isAtStart
    },
    /* @__PURE__ */ React.createElement(ChevronLeft, null)
  ), /* @__PURE__ */ React.createElement("span", { className: "nb-iteration-nav-summary" }, entrySummary(activeEntry)), /* @__PURE__ */ React.createElement("span", { className: "nb-iteration-nav-index" }, pageLabel, " / ", ITERATIONS2.length), /* @__PURE__ */ React.createElement(
    "button",
    {
      className: "nb-iteration-nav-btn",
      onClick: goNext,
      disabled: isAtEnd
    },
    /* @__PURE__ */ React.createElement(ChevronRight, null)
  )), /* @__PURE__ */ React.createElement("div", { className: "nb-header-right" }, /* @__PURE__ */ React.createElement(
    "button",
    {
      className: `nb-chrome-btn ${filmstripOpen ? "nb-chrome-btn--active" : ""}`,
      onClick: () => {
        const next = !filmstripOpen;
        setFilmstripOpen(next);
        if (next) {
          setFilmstripKey((k) => k + 1);
          requestAnimationFrame(() => scrollToActive(activeIndex, true));
        }
      }
    },
    /* @__PURE__ */ React.createElement(ClockIcon, { size: 14 }),
    /* @__PURE__ */ React.createElement("span", null, "History")
  ), hasStateExplorer && /* @__PURE__ */ React.createElement(
    StateExplorer,
    {
      presets: stateProps.presets,
      active: stateProps.activePreset,
      onSelect: (id) => handlePreset(stateProps.stateKey, stateProps.def, id),
      onReset: () => handleReset(stateProps.stateKey, stateProps.def),
      direction: "down",
      triggerContent: /* @__PURE__ */ React.createElement("span", { className: "nb-chrome-btn" }, /* @__PURE__ */ React.createElement(SlidersIcon, { size: 14 }), /* @__PURE__ */ React.createElement("span", null, "States"))
    },
    stateProps.hasFineTuning && stateProps.def.FineTuning && /* @__PURE__ */ React.createElement(
      stateProps.def.FineTuning,
      {
        state: stateProps.state,
        onChange: (patch) => updateState(stateProps.stateKey, stateProps.def, patch)
      }
    )
  ), /* @__PURE__ */ React.createElement(
    "a",
    {
      href: "https://forms.gle/tgWrQPEvzAF2Z7rw9",
      target: "_blank",
      rel: "noopener noreferrer",
      className: "nb-chrome-btn"
    },
    /* @__PURE__ */ React.createElement(FeedbackIcon, { size: 14 }),
    /* @__PURE__ */ React.createElement("span", null, "Feedback")
  ))), /* @__PURE__ */ React.createElement("div", { className: `nb-filmstrip-drawer ${filmstripOpen ? "nb-filmstrip-drawer--open" : ""}` }, renderFilmstrip())), /* @__PURE__ */ React.createElement("div", { ref: containerRef }, renderActiveContent()))));
}

// .artifact-build/iterations/baseline/Content.tsx
var T = {
  lemon: "#e7ff33",
  obsidian: "#222222",
  grey90: "#383838",
  grey70: "#646464",
  grey60: "#7a7a7a",
  grey40: "#a7a7a7",
  grey20: "#d3d3d3",
  grey12: "#e4e4e4",
  grey6: "#f2f2f2",
  grey3: "#f8f8f8",
  white: "#ffffff",
  brand: "#faffd6",
  serif: "'Fraunces', Palatino, Georgia, serif",
  sans: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
};
function Icon({ name, size = 20, color }) {
  return /* @__PURE__ */ React.createElement("span", { className: "material-symbols-outlined", style: { fontSize: size, width: size, height: size, color } }, name);
}
function Content(_props) {
  return /* @__PURE__ */ React.createElement("div", { style: { background: "#fbfbfb", minHeight: 560, padding: "40px 32px", fontFamily: T.sans, color: T.obsidian } }, /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 1040, margin: "0 auto" } }, /* @__PURE__ */ React.createElement("h1", { style: { fontFamily: T.serif, fontWeight: 400, fontSize: 32, letterSpacing: "-0.3px", margin: "0 0 6px" } }, "Import students"), /* @__PURE__ */ React.createElement("p", { style: { color: T.grey60, fontSize: 16, margin: "0 0 24px", maxWidth: "64ch" } }, "Bring your existing students into Teachable."), /* @__PURE__ */ React.createElement("div", { style: { background: T.white, border: `1px solid ${T.grey12}`, borderRadius: 12, overflow: "hidden", maxWidth: 660 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "22px 24px 0" } }, /* @__PURE__ */ React.createElement("span", { style: { display: "flex", alignItems: "center", gap: 8, fontSize: 13, fontWeight: 600, color: T.grey70 } }, /* @__PURE__ */ React.createElement(Icon, { name: "redeem", size: 18, color: T.grey90 }), " Import rewards"), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11, fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase", padding: "4px 10px", borderRadius: 999, background: T.grey6, color: T.grey70 } }, "Not started")), /* @__PURE__ */ React.createElement("div", { style: { padding: "8px 24px 24px", textAlign: "center" } }, /* @__PURE__ */ React.createElement("div", { style: { width: 56, height: 56, borderRadius: 999, background: T.brand, border: `1px solid ${T.obsidian}`, display: "flex", alignItems: "center", justifyContent: "center", margin: "4px auto 16px" } }, /* @__PURE__ */ React.createElement(Icon, { name: "redeem", size: 28, color: T.obsidian })), /* @__PURE__ */ React.createElement("h2", { style: { fontFamily: T.serif, fontWeight: 400, fontSize: 26, margin: "0 0 8px" } }, "Your sales earn you free imports"), /* @__PURE__ */ React.createElement("p", { style: { color: T.grey60, fontSize: 15, maxWidth: "46ch", margin: "0 auto 22px" } }, "Bring your audience over without the upfront cost. Every 2 paid sales you make through Teachable earns you 1 free student import."), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", gap: 8, maxWidth: 460, margin: "0 auto 22px" } }, /* @__PURE__ */ React.createElement("div", { style: { border: `1px solid ${T.grey12}`, borderRadius: 10, padding: "16px 12px", background: T.grey3 } }, /* @__PURE__ */ React.createElement(Icon, { name: "sell", size: 26, color: T.grey90 }), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: T.serif, fontSize: 24, lineHeight: 1 } }, "2 sales"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12.5, color: T.grey70, marginTop: 4 } }, "paid through Teachable")), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 22, color: T.grey40 } }, "="), /* @__PURE__ */ React.createElement("div", { style: { border: `1px solid ${T.grey12}`, borderRadius: 10, padding: "16px 12px", background: T.grey3 } }, /* @__PURE__ */ React.createElement(Icon, { name: "redeem", size: 26, color: T.grey90 }), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: T.serif, fontSize: 24, lineHeight: 1 } }, "1 import"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12.5, color: T.grey70, marginTop: 4 } }, "free, yours to keep"))), /* @__PURE__ */ React.createElement("p", { style: { fontSize: 13, color: T.grey70, marginBottom: 0 } }, "Need to import more than you\u2019ve earned? Extra imports are just ", /* @__PURE__ */ React.createElement("b", { style: { color: T.obsidian } }, "$0.50 each"), "."), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 20 } }, /* @__PURE__ */ React.createElement("button", { style: { display: "inline-flex", alignItems: "center", gap: 8, fontFamily: T.sans, fontSize: 14, fontWeight: 600, height: 40, padding: "0 18px", borderRadius: 6, background: T.lemon, color: T.obsidian, border: `1px solid ${T.obsidian}`, cursor: "pointer" }, onClick: () => alert("Start an import (prototype)") }, /* @__PURE__ */ React.createElement(Icon, { name: "upload", size: 18 }), " Start an import"))))));
}

// .artifact-build/iterations/baseline/definition.ts
var baseline = {
  config: {
    label: "Current (baseline)",
    summary: 'The shipped empty state \u2014 tested as "not user-friendly"',
    changes: ["ratio math up front", "old 2:1 framing", "job buried below the pitch"]
  },
  defaultState: {},
  presets: [
    { id: "default", label: "Default", hint: "As it ships today \u2014 0 sales, 0 imports" }
  ],
  resolvePreset() {
    return {};
  },
  Content
};

// .artifact-build/iterations/task-first/Content.tsx

var T2 = {
  lemon: "#e7ff33",
  obsidian: "#222222",
  grey90: "#383838",
  grey70: "#646464",
  grey60: "#7a7a7a",
  grey40: "#a7a7a7",
  grey20: "#d3d3d3",
  grey12: "#e4e4e4",
  grey6: "#f2f2f2",
  grey3: "#f8f8f8",
  white: "#ffffff",
  brand: "#faffd6",
  success: "#38ba5f",
  serif: "'Fraunces', Palatino, Georgia, serif",
  sans: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
};
function Icon2({ name, size = 20, color }) {
  return /* @__PURE__ */ React.createElement("span", { className: "material-symbols-outlined", style: { fontSize: size, width: size, height: size, color } }, name);
}
var btnPrimary = { display: "inline-flex", alignItems: "center", gap: 8, fontFamily: T2.sans, fontSize: 14, fontWeight: 600, height: 40, padding: "0 18px", borderRadius: 6, background: T2.lemon, color: T2.obsidian, border: `1px solid ${T2.obsidian}`, cursor: "pointer", marginTop: 6 };
var linkBtn = { background: "none", border: "none", padding: 0, marginLeft: 6, color: T2.obsidian, fontWeight: 600, fontSize: 13.5, cursor: "pointer", textDecoration: "underline", textUnderlineOffset: 2, fontFamily: T2.sans };
function Content2({ state }) {
  const [dragOver, setDragOver] = useState(state.dragOver);
  const [filePicked, setFilePicked] = useState(state.filePicked);
  const [pricingOpen, setPricingOpen] = useState(state.pricingOpen);
  return /* @__PURE__ */ React.createElement("div", { style: { background: "#fbfbfb", minHeight: 560, padding: "40px 32px", fontFamily: T2.sans, color: T2.obsidian } }, /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 1040, margin: "0 auto" } }, /* @__PURE__ */ React.createElement("h1", { style: { fontFamily: T2.serif, fontWeight: 400, fontSize: 32, letterSpacing: "-0.3px", margin: "0 0 6px" } }, "Import students"), /* @__PURE__ */ React.createElement("p", { style: { color: T2.grey60, fontSize: 16, margin: "0 0 24px", maxWidth: "64ch" } }, "Add the students you already have to your school."), /* @__PURE__ */ React.createElement("div", { style: { background: T2.white, border: `1px solid ${T2.grey12}`, borderRadius: 12, padding: 24, maxWidth: 660 } }, /* @__PURE__ */ React.createElement(
    "div",
    {
      onDragOver: (e) => {
        e.preventDefault();
        setDragOver(true);
      },
      onDragLeave: () => setDragOver(false),
      onDrop: (e) => {
        e.preventDefault();
        setDragOver(false);
        setFilePicked(true);
      },
      style: { border: `2px dashed ${dragOver ? T2.obsidian : T2.grey20}`, background: dragOver ? T2.brand : T2.grey3, borderRadius: 10, padding: "36px 24px", textAlign: "center", transition: "all .15s" }
    },
    filePicked ? /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 8 } }, /* @__PURE__ */ React.createElement(Icon2, { name: "description", size: 30, color: T2.grey90 }), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 15, fontWeight: 600 } }, "students.csv \xB7 128 students found"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, color: T2.grey60 } }, "All 128 are within your free allowance."), /* @__PURE__ */ React.createElement("button", { onClick: () => alert("Map columns \u2192 import (prototype)"), style: btnPrimary }, "Review & import")) : /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 10 } }, /* @__PURE__ */ React.createElement("div", { style: { width: 48, height: 48, borderRadius: 999, background: T2.white, border: `1px solid ${T2.grey12}`, display: "flex", alignItems: "center", justifyContent: "center" } }, /* @__PURE__ */ React.createElement(Icon2, { name: "upload_file", size: 24, color: T2.grey90 })), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: T2.serif, fontSize: 22 } }, "Drag in a CSV of your students"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13.5, color: T2.grey60 } }, "or export from your current platform and upload it here"), /* @__PURE__ */ React.createElement("button", { onClick: () => setFilePicked(true), style: btnPrimary }, /* @__PURE__ */ React.createElement(Icon2, { name: "folder_open", size: 18 }), " Choose file"))
  ), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 10, alignItems: "flex-start", marginTop: 16, fontSize: 13.5, color: T2.grey70, lineHeight: 1.5 } }, /* @__PURE__ */ React.createElement(Icon2, { name: "check_circle", size: 18, color: T2.success }), /* @__PURE__ */ React.createElement("div", null, "Your ", /* @__PURE__ */ React.createElement("b", { style: { color: T2.obsidian } }, "Builder plan includes 50 free imports"), ", and you earn 2 more with every sale you make on Teachable.", /* @__PURE__ */ React.createElement("button", { onClick: () => setPricingOpen((o) => !o), style: linkBtn }, "How import pricing works ", pricingOpen ? "\u25B2" : "\u25BE"))), pricingOpen && /* @__PURE__ */ React.createElement("div", { style: { marginTop: 12, background: T2.grey3, border: `1px solid ${T2.grey12}`, borderRadius: 8, padding: "14px 16px", fontSize: 13.5, color: T2.grey90, lineHeight: 1.6 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("b", null, "50 free"), " with your plan, today."), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("b", null, "+2 free"), " every time you make a paid sale on Teachable."), /* @__PURE__ */ React.createElement("div", null, "Beyond that, extra imports are ", /* @__PURE__ */ React.createElement("b", null, "$0.50 per student / month"), " \u2014 and each new sale brings one back to free.")))));
}

// .artifact-build/iterations/task-first/controls.tsx
function Toggle({ label, checked, onChange }) {
  return /* @__PURE__ */ React.createElement("label", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, fontSize: 13, cursor: "pointer" } }, /* @__PURE__ */ React.createElement("span", null, label), /* @__PURE__ */ React.createElement("input", { type: "checkbox", checked, onChange: (e) => onChange(e.target.checked) }));
}
function FineTuning({ state, onChange }) {
  return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 10 } }, /* @__PURE__ */ React.createElement(Toggle, { label: "File chosen", checked: state.filePicked, onChange: (v) => onChange({ filePicked: v }) }), /* @__PURE__ */ React.createElement(Toggle, { label: "Dragging over drop zone", checked: state.dragOver, onChange: (v) => onChange({ dragOver: v }) }), /* @__PURE__ */ React.createElement(Toggle, { label: "Pricing detail expanded", checked: state.pricingOpen, onChange: (v) => onChange({ pricingOpen: v }) }));
}

// .artifact-build/iterations/task-first/definition.ts
var taskFirst = {
  config: {
    label: "A \xB7 Task-first",
    summary: "Lead with the job; allowance is a quiet one-liner",
    changes: ["+ CSV drop zone as hero", "+ pricing tucked behind a link", "\u2212 ratio diagram"]
  },
  defaultState: { dragOver: false, filePicked: false, pricingOpen: false },
  presets: [
    { id: "default", label: "Default", hint: "Empty drop zone, reassurance line collapsed" },
    { id: "drag-over", label: "Dragging a file", hint: "Drop zone is highlighted" },
    { id: "file-picked", label: "File chosen", hint: "128 students found, all within allowance" },
    { id: "pricing-open", label: "Pricing expanded", hint: 'User tapped "How import pricing works"' }
  ],
  resolvePreset(id) {
    switch (id) {
      case "drag-over":
        return { dragOver: true, filePicked: false, pricingOpen: false };
      case "file-picked":
        return { dragOver: false, filePicked: true, pricingOpen: false };
      case "pricing-open":
        return { dragOver: false, filePicked: false, pricingOpen: true };
      default:
        return { dragOver: false, filePicked: false, pricingOpen: false };
    }
  },
  Content: Content2,
  FineTuning
};

// .artifact-build/iterations/estimator/Content.tsx

var T3 = {
  lemon: "#e7ff33",
  obsidian: "#222222",
  grey90: "#383838",
  grey70: "#646464",
  grey60: "#7a7a7a",
  grey40: "#a7a7a7",
  grey20: "#d3d3d3",
  grey12: "#e4e4e4",
  grey9: "#ebebeb",
  grey6: "#f2f2f2",
  grey3: "#f8f8f8",
  white: "#ffffff",
  brand: "#faffd6",
  warn: "#f8c821",
  warnD: "#957814",
  success: "#38ba5f",
  serif: "'Fraunces', Palatino, Georgia, serif",
  sans: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
};
var BASELINE = 50;
var PER_SALE = 2;
var PRICE = 0.5;
function Icon3({ name, size = 20, color }) {
  return /* @__PURE__ */ React.createElement("span", { className: "material-symbols-outlined", style: { fontSize: size, width: size, height: size, color } }, name);
}
function Slider({ label, value, max, onChange, suffix }) {
  return /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 18 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 6 } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 14, fontWeight: 600 } }, label), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: T3.serif, fontSize: 22 } }, value.toLocaleString(), suffix)), /* @__PURE__ */ React.createElement("input", { type: "range", min: 0, max, value, onChange: (e) => onChange(Number(e.target.value)), style: { width: "100%", accentColor: T3.obsidian } }));
}
function Content3({ state }) {
  const [imports, setImports] = useState(state.imports);
  const [sales, setSales] = useState(state.sales);
  const allowance = BASELINE + sales * PER_SALE;
  const free = Math.min(imports, allowance);
  const paid = Math.max(0, imports - allowance);
  const cost = paid * PRICE;
  const freePct = imports > 0 ? free / imports * 100 : 0;
  return /* @__PURE__ */ React.createElement("div", { style: { background: "#fbfbfb", minHeight: 560, padding: "40px 32px", fontFamily: T3.sans, color: T3.obsidian } }, /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 1040, margin: "0 auto" } }, /* @__PURE__ */ React.createElement("h1", { style: { fontFamily: T3.serif, fontWeight: 400, fontSize: 32, letterSpacing: "-0.3px", margin: "0 0 6px" } }, "Import students"), /* @__PURE__ */ React.createElement("p", { style: { color: T3.grey60, fontSize: 16, margin: "0 0 24px", maxWidth: "64ch" } }, "See exactly what importing will cost \u2014 for your numbers."), /* @__PURE__ */ React.createElement("div", { style: { background: T3.white, border: `1px solid ${T3.grey12}`, borderRadius: 12, padding: 24, maxWidth: 660 } }, /* @__PURE__ */ React.createElement("h2", { style: { fontFamily: T3.serif, fontWeight: 400, fontSize: 24, margin: "0 0 18px" } }, "Estimate your import cost"), /* @__PURE__ */ React.createElement(Slider, { label: "Students you want to import", value: imports, max: 500, onChange: setImports }), /* @__PURE__ */ React.createElement(Slider, { label: "Sales you expect per month", value: sales, max: 100, onChange: setSales }), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 8, padding: 18, borderRadius: 10, background: paid > 0 ? T3.grey3 : T3.brand, border: `1px solid ${paid > 0 ? T3.grey12 : T3.obsidian}` } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "baseline", gap: 10, flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement("span", { style: { fontFamily: T3.serif, fontSize: 30 } }, paid > 0 ? `$${cost.toFixed(2)}/mo` : "Free"), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 14, color: T3.grey70 } }, paid > 0 ? /* @__PURE__ */ React.createElement(React.Fragment, null, free.toLocaleString(), " free, ", paid.toLocaleString(), " paid \xD7 $", PRICE.toFixed(2), "/mo") : /* @__PURE__ */ React.createElement(React.Fragment, null, "all ", imports.toLocaleString(), " imports are covered"))), /* @__PURE__ */ React.createElement("div", { style: { position: "relative", height: 10, borderRadius: 999, background: T3.grey9, overflow: "hidden", marginTop: 14 } }, /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", left: 0, top: 0, bottom: 0, width: `${freePct}%`, background: paid > 0 ? T3.lemon : T3.success } }), paid > 0 && /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", left: `${freePct}%`, right: 0, top: 0, bottom: 0, background: T3.warn } })), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 18, marginTop: 12, fontSize: 12.5, color: T3.grey70 } }, /* @__PURE__ */ React.createElement("span", { style: { display: "flex", alignItems: "center", gap: 6 } }, /* @__PURE__ */ React.createElement("span", { style: { width: 11, height: 11, borderRadius: 3, background: paid > 0 ? T3.lemon : T3.success } }), " Free allowance (", allowance.toLocaleString(), ")"), paid > 0 && /* @__PURE__ */ React.createElement("span", { style: { display: "flex", alignItems: "center", gap: 6 } }, /* @__PURE__ */ React.createElement("span", { style: { width: 11, height: 11, borderRadius: 3, background: T3.warn } }), " Paid (", paid.toLocaleString(), ")"))), /* @__PURE__ */ React.createElement("p", { style: { display: "flex", gap: 8, alignItems: "flex-start", fontSize: 13.5, color: T3.grey70, lineHeight: 1.5, margin: "16px 0 0" } }, /* @__PURE__ */ React.createElement(Icon3, { name: "trending_up", size: 18, color: T3.grey90 }), /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("b", { style: { color: T3.obsidian } }, "Your cost drops as you grow."), " 50 imports come free with Builder, and every sale you make adds 2 more \u2014 so the more you sell here, the more you import for free.")), /* @__PURE__ */ React.createElement("button", { onClick: () => alert("Start importing (prototype)"), style: { display: "inline-flex", alignItems: "center", gap: 8, fontFamily: T3.sans, fontSize: 14, fontWeight: 600, height: 40, padding: "0 18px", borderRadius: 6, background: T3.lemon, color: T3.obsidian, border: `1px solid ${T3.obsidian}`, cursor: "pointer", marginTop: 18 } }, /* @__PURE__ */ React.createElement(Icon3, { name: "upload", size: 18 }), " Start importing"))));
}

// .artifact-build/iterations/estimator/controls.tsx
function Range({ label, value, max, onChange }) {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 4 } }, /* @__PURE__ */ React.createElement("span", null, label), /* @__PURE__ */ React.createElement("span", { style: { fontWeight: 600 } }, value)), /* @__PURE__ */ React.createElement("input", { type: "range", min: 0, max, value, onChange: (e) => onChange(Number(e.target.value)), style: { width: "100%" } }));
}
function FineTuning2({ state, onChange }) {
  return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 12 } }, /* @__PURE__ */ React.createElement(Range, { label: "Students to import", value: state.imports, max: 500, onChange: (v) => onChange({ imports: v }) }), /* @__PURE__ */ React.createElement(Range, { label: "Sales per month", value: state.sales, max: 100, onChange: (v) => onChange({ sales: v }) }));
}

// .artifact-build/iterations/estimator/definition.ts
var estimator = {
  config: {
    label: "B \xB7 Cost estimator",
    summary: "Interactive calculator \u2014 the model in the creator\u2019s own numbers",
    changes: ["+ live free-vs-paid math", "+ sliders for imports & sales", '+ "cost drops as you grow"']
  },
  defaultState: { imports: 120, sales: 10 },
  presets: [
    { id: "default", label: "Typical", hint: "120 imports, 10 sales/mo \u2192 some paid" },
    { id: "all-free", label: "All free", hint: "40 imports \u2014 under the 50 baseline" },
    { id: "bypasser", label: "Heavy importer", hint: "300 imports, 0 sales \u2192 mostly paid" },
    { id: "big-seller", label: "Active seller", hint: "200 imports, 80 sales \u2192 grown allowance" }
  ],
  resolvePreset(id) {
    switch (id) {
      case "all-free":
        return { imports: 40, sales: 0 };
      case "bypasser":
        return { imports: 300, sales: 0 };
      case "big-seller":
        return { imports: 200, sales: 80 };
      default:
        return { imports: 120, sales: 10 };
    }
  },
  Content: Content3,
  FineTuning: FineTuning2
};

// .artifact-build/iterations/story/Content.tsx

var T4 = {
  lemon: "#e7ff33",
  obsidian: "#222222",
  grey90: "#383838",
  grey70: "#646464",
  grey60: "#7a7a7a",
  grey40: "#a7a7a7",
  grey20: "#d3d3d3",
  grey12: "#e4e4e4",
  grey6: "#f2f2f2",
  grey3: "#f8f8f8",
  white: "#ffffff",
  brand: "#faffd6",
  serif: "'Fraunces', Palatino, Georgia, serif",
  sans: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
};
function Icon4({ name, size = 20, color }) {
  return /* @__PURE__ */ React.createElement("span", { className: "material-symbols-outlined", style: { fontSize: size, width: size, height: size, color } }, name);
}
var STEPS = [
  { icon: "redeem", title: "You start with 50 free imports", sub: "Included with your Builder plan, ready to use right now.", ex: "Import your first 50 students \u2014 $0." },
  { icon: "sell", title: "Earn 2 more with every sale", sub: "Each paid sale you make on Teachable adds 2 free imports to your balance.", ex: "Make 25 sales \u2192 50 more free imports (100 total)." },
  { icon: "add_card", title: "Need more right now?", sub: "Extra imports are 50\xA2 per student a month \u2014 and each new sale turns one back to free.", ex: "Import 120 with 50 free \u2192 70 at $0.50 = $35/mo, dropping as you sell." }
];
function Content4({ state }) {
  const [exampleOn, setExampleOn] = useState(state.exampleOn);
  return /* @__PURE__ */ React.createElement("div", { style: { background: "#fbfbfb", minHeight: 560, padding: "40px 32px", fontFamily: T4.sans, color: T4.obsidian } }, /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 1040, margin: "0 auto" } }, /* @__PURE__ */ React.createElement("h1", { style: { fontFamily: T4.serif, fontWeight: 400, fontSize: 32, letterSpacing: "-0.3px", margin: "0 0 6px" } }, "Import students"), /* @__PURE__ */ React.createElement("p", { style: { color: T4.grey60, fontSize: 16, margin: "0 0 24px", maxWidth: "64ch" } }, "Bring your existing students into Teachable."), /* @__PURE__ */ React.createElement("div", { style: { background: T4.white, border: `1px solid ${T4.grey12}`, borderRadius: 12, padding: 28, maxWidth: 660 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4 } }, /* @__PURE__ */ React.createElement("h2", { style: { fontFamily: T4.serif, fontWeight: 400, fontSize: 26, margin: 0 } }, "How imports work"), /* @__PURE__ */ React.createElement("button", { onClick: () => setExampleOn((o) => !o), style: { background: "none", border: `1px solid ${T4.grey20}`, borderRadius: 999, padding: "6px 12px", fontSize: 12.5, fontWeight: 600, cursor: "pointer", color: T4.grey70, fontFamily: T4.sans } }, exampleOn ? "Hide example" : "Show me an example")), /* @__PURE__ */ React.createElement("p", { style: { color: T4.grey60, fontSize: 14.5, margin: "0 0 22px" } }, "Three simple steps \u2014 no math required."), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 4 } }, STEPS.map((s, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: { display: "flex", gap: 16, padding: "16px 0", borderTop: i > 0 ? `1px solid ${T4.grey12}` : "none" } }, /* @__PURE__ */ React.createElement("div", { style: { flexShrink: 0, width: 40, height: 40, borderRadius: 999, background: i === 2 ? T4.grey6 : T4.brand, border: `1px solid ${i === 2 ? T4.grey20 : T4.obsidian}`, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" } }, /* @__PURE__ */ React.createElement(Icon4, { name: s.icon, size: 20, color: T4.obsidian }), /* @__PURE__ */ React.createElement("span", { style: { position: "absolute", top: -7, left: -7, width: 20, height: 20, borderRadius: 999, background: T4.obsidian, color: T4.white, fontSize: 11, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" } }, i + 1)), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 16, fontWeight: 600, marginBottom: 2 } }, s.title), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14, color: T4.grey70, lineHeight: 1.5 } }, s.sub), exampleOn && /* @__PURE__ */ React.createElement("div", { style: { marginTop: 8, fontSize: 13, color: T4.grey90, background: T4.grey3, border: `1px solid ${T4.grey12}`, borderRadius: 6, padding: "8px 10px" } }, /* @__PURE__ */ React.createElement("b", null, "Example:"), " ", s.ex))))), /* @__PURE__ */ React.createElement("button", { onClick: () => alert("Import students (prototype)"), style: { display: "inline-flex", alignItems: "center", gap: 8, fontFamily: T4.sans, fontSize: 14, fontWeight: 600, height: 40, padding: "0 18px", borderRadius: 6, background: T4.lemon, color: T4.obsidian, border: `1px solid ${T4.obsidian}`, cursor: "pointer", marginTop: 22 } }, /* @__PURE__ */ React.createElement(Icon4, { name: "upload", size: 18 }), " Import students"))));
}

// .artifact-build/iterations/story/controls.tsx
function FineTuning3({ state, onChange }) {
  return /* @__PURE__ */ React.createElement("label", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, fontSize: 13, cursor: "pointer" } }, /* @__PURE__ */ React.createElement("span", null, "Show worked example"), /* @__PURE__ */ React.createElement("input", { type: "checkbox", checked: state.exampleOn, onChange: (e) => onChange({ exampleOn: e.target.checked }) }));
}

// .artifact-build/iterations/story/definition.ts
var story = {
  config: {
    label: "C \xB7 Plain-language story",
    summary: "Three human-readable steps, no ratio jargon",
    changes: ["+ numbered 1-2-3 steps", "+ optional worked example", "\u2212 ratio diagram & %s"]
  },
  defaultState: { exampleOn: false },
  presets: [
    { id: "default", label: "Default", hint: "Three steps, example hidden" },
    { id: "example", label: "Example shown", hint: "Each step shows a worked example" }
  ],
  resolvePreset(id) {
    return { exampleOn: id === "example" };
  },
  Content: Content4,
  FineTuning: FineTuning3
};

// .artifact-build/iterations/transparency/Content.tsx

var T5 = {
  lemon: "#e7ff33",
  obsidian: "#222222",
  grey90: "#383838",
  grey70: "#646464",
  grey60: "#7a7a7a",
  grey40: "#a7a7a7",
  grey20: "#d3d3d3",
  grey12: "#e4e4e4",
  grey6: "#f2f2f2",
  grey3: "#f8f8f8",
  white: "#ffffff",
  brand: "#faffd6",
  serif: "'Fraunces', Palatino, Georgia, serif",
  sans: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
};
function Icon5({ name, size = 20, color }) {
  return /* @__PURE__ */ React.createElement("span", { className: "material-symbols-outlined", style: { fontSize: size, width: size, height: size, color } }, name);
}
function Content5({ state }) {
  const [overageOpen, setOverageOpen] = useState(state.overageOpen);
  return /* @__PURE__ */ React.createElement("div", { style: { background: "#fbfbfb", minHeight: 560, padding: "40px 32px", fontFamily: T5.sans, color: T5.obsidian } }, /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 1040, margin: "0 auto" } }, /* @__PURE__ */ React.createElement("h1", { style: { fontFamily: T5.serif, fontWeight: 400, fontSize: 32, letterSpacing: "-0.3px", margin: "0 0 6px" } }, "Import students"), /* @__PURE__ */ React.createElement("p", { style: { color: T5.grey60, fontSize: 16, margin: "0 0 24px", maxWidth: "64ch" } }, "Bring your existing students into Teachable."), /* @__PURE__ */ React.createElement("div", { style: { background: T5.white, border: `1px solid ${T5.grey12}`, borderRadius: 12, overflow: "hidden", maxWidth: 660 } }, /* @__PURE__ */ React.createElement("div", { style: { background: T5.brand, borderBottom: `1px solid ${T5.obsidian}`, padding: "26px 24px", display: "flex", alignItems: "center", gap: 18 } }, /* @__PURE__ */ React.createElement("div", { style: { flexShrink: 0, textAlign: "center" } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: T5.serif, fontSize: 44, lineHeight: 1 } }, "50"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: T5.grey70 } }, "free imports")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", { style: { fontFamily: T5.serif, fontWeight: 400, fontSize: 24, margin: "0 0 4px" } }, "Most creators import for free"), /* @__PURE__ */ React.createElement("p", { style: { fontSize: 14, color: T5.grey90, margin: 0, lineHeight: 1.5 } }, "Your Builder plan covers 50 students, and every sale you make adds 2 more. You only pay if you go past what you\u2019ve earned."))), /* @__PURE__ */ React.createElement("div", { style: { padding: 24 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 0 } }, /* @__PURE__ */ React.createElement(Row, { icon: "redeem", label: "Included with Builder", value: "50 imports", note: "free, available now" }), /* @__PURE__ */ React.createElement(Row, { icon: "sell", label: "Earned as you sell", value: "+2 each sale", note: "added automatically" })), /* @__PURE__ */ React.createElement("button", { onClick: () => setOverageOpen((o) => !o), style: { width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", background: T5.grey3, border: `1px solid ${T5.grey12}`, borderRadius: 8, padding: "12px 14px", marginTop: 14, cursor: "pointer", fontFamily: T5.sans, fontSize: 14, fontWeight: 600, color: T5.obsidian } }, /* @__PURE__ */ React.createElement("span", { style: { display: "flex", alignItems: "center", gap: 8 } }, /* @__PURE__ */ React.createElement(Icon5, { name: "help", size: 18, color: T5.grey90 }), " What if I need more than that?"), /* @__PURE__ */ React.createElement(Icon5, { name: overageOpen ? "expand_less" : "expand_more", size: 20, color: T5.grey60 })), overageOpen && /* @__PURE__ */ React.createElement("div", { style: { border: `1px solid ${T5.grey12}`, borderTop: "none", borderRadius: "0 0 8px 8px", padding: "14px 16px", fontSize: 13.5, color: T5.grey90, lineHeight: 1.6 } }, "Extra imports beyond your allowance are ", /* @__PURE__ */ React.createElement("b", null, "$0.50 per student, per month"), ". There\u2019s no big bill and no commitment \u2014 and the moment you make another sale, one of those paid imports becomes free again. So a paid balance shrinks every time you sell."), /* @__PURE__ */ React.createElement("button", { onClick: () => alert("Import students (prototype)"), style: { display: "inline-flex", alignItems: "center", gap: 8, fontFamily: T5.sans, fontSize: 14, fontWeight: 600, height: 40, padding: "0 18px", borderRadius: 6, background: T5.lemon, color: T5.obsidian, border: `1px solid ${T5.obsidian}`, cursor: "pointer", marginTop: 20 } }, /* @__PURE__ */ React.createElement(Icon5, { name: "upload", size: 18 }), " Import students")))));
}
function Row({ icon, label, value, note }) {
  return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 12, padding: "12px 0", borderBottom: `1px solid ${T5.grey12}` } }, /* @__PURE__ */ React.createElement(Icon5, { name: icon, size: 20, color: T5.grey90 }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14, fontWeight: 600 } }, label), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12.5, color: T5.grey60 } }, note)), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: T5.serif, fontSize: 18 } }, value));
}

// .artifact-build/iterations/transparency/controls.tsx
function FineTuning4({ state, onChange }) {
  return /* @__PURE__ */ React.createElement("label", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, fontSize: 13, cursor: "pointer" } }, /* @__PURE__ */ React.createElement("span", null, "Overage detail expanded"), /* @__PURE__ */ React.createElement("input", { type: "checkbox", checked: state.overageOpen, onChange: (e) => onChange({ overageOpen: e.target.checked }) }));
}

// .artifact-build/iterations/transparency/definition.ts
var transparency = {
  config: {
    label: "D \xB7 Cost-transparency",
    summary: '"Most import for free" \u2014 money fears addressed head-on',
    changes: ["+ reassurance hero (50 free)", "+ itemized allowance", "+ honest expandable overage"]
  },
  defaultState: { overageOpen: false },
  presets: [
    { id: "default", label: "Default", hint: "Overage detail collapsed" },
    { id: "overage-open", label: "Overage expanded", hint: '"What if I need more?" opened' }
  ],
  resolvePreset(id) {
    return { overageOpen: id === "overage-open" };
  },
  Content: Content5,
  FineTuning: FineTuning4
};

// .artifact-build/iterations/growth/Content.tsx

var T6 = {
  lemon: "#e7ff33",
  obsidian: "#222222",
  grey90: "#383838",
  grey70: "#646464",
  grey60: "#7a7a7a",
  grey40: "#a7a7a7",
  grey20: "#d3d3d3",
  grey12: "#e4e4e4",
  grey9: "#ebebeb",
  grey6: "#f2f2f2",
  grey3: "#f8f8f8",
  white: "#ffffff",
  brand: "#faffd6",
  serif: "'Fraunces', Palatino, Georgia, serif",
  sans: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
};
var BASELINE2 = 50;
var PER_SALE2 = 2;
function Icon6({ name, size = 20, color }) {
  return /* @__PURE__ */ React.createElement("span", { className: "material-symbols-outlined", style: { fontSize: size, width: size, height: size, color } }, name);
}
function Content6({ state }) {
  const [sales, setSales] = useState(state.sales);
  const allowance = BASELINE2 + sales * PER_SALE2;
  const maxRef = BASELINE2 + 50 * PER_SALE2;
  const pct = Math.min(100, allowance / maxRef * 100);
  return /* @__PURE__ */ React.createElement("div", { style: { background: "#fbfbfb", minHeight: 560, padding: "40px 32px", fontFamily: T6.sans, color: T6.obsidian } }, /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 1040, margin: "0 auto" } }, /* @__PURE__ */ React.createElement("h1", { style: { fontFamily: T6.serif, fontWeight: 400, fontSize: 32, letterSpacing: "-0.3px", margin: "0 0 6px" } }, "Import students"), /* @__PURE__ */ React.createElement("p", { style: { color: T6.grey60, fontSize: 16, margin: "0 0 24px", maxWidth: "64ch" } }, "Bring the audience you already have \u2014 then grow it here."), /* @__PURE__ */ React.createElement("div", { style: { background: T6.white, border: `1px solid ${T6.grey12}`, borderRadius: 12, overflow: "hidden", maxWidth: 660 } }, /* @__PURE__ */ React.createElement("div", { style: { background: `linear-gradient(150deg, ${T6.lemon}, ${T6.brand})`, padding: "28px 24px 24px" } }, /* @__PURE__ */ React.createElement("h2", { style: { fontFamily: T6.serif, fontWeight: 400, fontSize: 28, margin: "0 0 6px", color: T6.obsidian } }, "Bring your audience. Grow it here."), /* @__PURE__ */ React.createElement("p", { style: { fontSize: 14.5, color: T6.grey90, margin: 0, maxWidth: "52ch", lineHeight: 1.5 } }, "Start with 50 free imports on Builder. Then every sale you make on Teachable earns 2 more \u2014 your space grows as you do.")), /* @__PURE__ */ React.createElement("div", { style: { padding: 24 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 10 } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 14, fontWeight: 600 } }, "Your free import allowance"), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: T6.serif, fontSize: 26 } }, allowance.toLocaleString())), /* @__PURE__ */ React.createElement("div", { style: { position: "relative", height: 12, borderRadius: 999, background: T6.grey9, overflow: "hidden" } }, /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", left: 0, top: 0, bottom: 0, width: `${pct}%`, background: T6.obsidian, transition: "width .35s cubic-bezier(.2,.9,.3,1.1)" } })), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", fontSize: 12, color: T6.grey60, marginTop: 6 } }, /* @__PURE__ */ React.createElement("span", null, "50 to start"), /* @__PURE__ */ React.createElement("span", null, sales, " ", sales === 1 ? "sale" : "sales", " \u2192 +", sales * PER_SALE2)), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 10, alignItems: "center", marginTop: 18, flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement("button", { onClick: () => setSales((s) => s + 5), style: { display: "inline-flex", alignItems: "center", gap: 6, fontFamily: T6.sans, fontSize: 13.5, fontWeight: 600, height: 36, padding: "0 14px", borderRadius: 6, background: T6.white, color: T6.obsidian, border: `1px solid ${T6.obsidian}`, cursor: "pointer" } }, /* @__PURE__ */ React.createElement(Icon6, { name: "add", size: 16 }), " Make 5 sales"), /* @__PURE__ */ React.createElement("button", { onClick: () => setSales(0), style: { background: "none", border: "none", color: T6.grey60, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: T6.sans } }, "Reset"), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 13, color: T6.grey70 } }, "See how selling expands your free space.")), /* @__PURE__ */ React.createElement("button", { onClick: () => alert("Import & start selling (prototype)"), style: { display: "inline-flex", alignItems: "center", gap: 8, fontFamily: T6.sans, fontSize: 14, fontWeight: 600, height: 40, padding: "0 18px", borderRadius: 6, background: T6.lemon, color: T6.obsidian, border: `1px solid ${T6.obsidian}`, cursor: "pointer", marginTop: 22 } }, /* @__PURE__ */ React.createElement(Icon6, { name: "rocket_launch", size: 18 }), " Import & start selling"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12.5, color: T6.grey60, marginTop: 10 } }, "Importing more than your allowance? Extra students are $0.50/month each \u2014 and shrink with every sale.")))));
}

// .artifact-build/iterations/growth/controls.tsx
function FineTuning5({ state, onChange }) {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 4 } }, /* @__PURE__ */ React.createElement("span", null, "Sales made"), /* @__PURE__ */ React.createElement("span", { style: { fontWeight: 600 } }, state.sales, " \u2192 ", 50 + state.sales * 2, " allowance")), /* @__PURE__ */ React.createElement("input", { type: "range", min: 0, max: 50, value: state.sales, onChange: (e) => onChange({ sales: Number(e.target.value) }), style: { width: "100%" } }));
}

// .artifact-build/iterations/growth/definition.ts
var growth = {
  config: {
    label: "E \xB7 Growth-momentum",
    summary: "Importing as the start of growth; allowance you can watch expand",
    changes: ["+ aspirational framing", '+ "make 5 sales" demo grows the bar', "+ allowance = upside, not a cap"]
  },
  defaultState: { sales: 0 },
  presets: [
    { id: "default", label: "Brand new", hint: "0 sales \u2014 just the 50 baseline" },
    { id: "some", label: "A few sales", hint: "10 sales \u2192 70 allowance" },
    { id: "growing", label: "Growing", hint: "25 sales \u2192 100 allowance" },
    { id: "thriving", label: "Thriving", hint: "50 sales \u2192 150 allowance" }
  ],
  resolvePreset(id) {
    switch (id) {
      case "some":
        return { sales: 10 };
      case "growing":
        return { sales: 25 };
      case "thriving":
        return { sales: 50 };
      default:
        return { sales: 0 };
    }
  },
  Content: Content6,
  FineTuning: FineTuning5
};

// .artifact-build/iterations/index.ts
var PROJECT = {
  title: "Import allowance \u2014 new-user state",
  description: [
    "Divergent directions for the brand-new (0 sales, 0 imports) state of the usage-based import allowance.",
    "Model: Builder includes 50 free imports; every paid sale on Teachable adds 2 more; extra imports are $0.50/student/month.",
    'Baseline is the shipped empty state that tested as "not user-friendly". A\u2013E explore five different strategies.'
  ]
};
var ITERATIONS = [
  baseline,
  {
    group: [taskFirst, estimator, story, transparency, growth]
  }
];


// ── Artifact entry point ──
export default function DesignNotebookArtifact() {
  useStyles();
  useFonts();
  return React.createElement(NotebookApp, { iterations: ITERATIONS, project: PROJECT });
}
