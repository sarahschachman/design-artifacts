// Exploration 3 — PLAIN-LANGUAGE STORY. No ratio jargon. Three scannable steps that
// explain how imports work in human terms, with an optional "show me an example".
import { useState } from 'react'

const T = {
  lemon: '#e7ff33', obsidian: '#222222', grey90: '#383838', grey70: '#646464',
  grey60: '#7a7a7a', grey40: '#a7a7a7', grey20: '#d3d3d3', grey12: '#e4e4e4',
  grey6: '#f2f2f2', grey3: '#f8f8f8', white: '#ffffff', brand: '#faffd6',
  serif: "'Fraunces', Palatino, Georgia, serif",
  sans: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
}

function Icon({ name, size = 20, color }: { name: string; size?: number; color?: string }) {
  return <span className="material-symbols-outlined" style={{ fontSize: size, width: size, height: size, color }}>{name}</span>
}

export interface StoryState { exampleOn: boolean }

const STEPS = [
  { icon: 'redeem', title: 'You start with 50 free imports', sub: 'Included with your Builder plan, ready to use right now.', ex: 'Import your first 50 students — $0.' },
  { icon: 'sell', title: 'Earn 2 more with every sale', sub: 'Each paid sale you make on Teachable adds 2 free imports to your balance.', ex: 'Make 25 sales → 50 more free imports (100 total).' },
  { icon: 'add_card', title: 'Need more right now?', sub: 'Extra imports are 50¢ per student a month — and each new sale turns one back to free.', ex: 'Import 120 with 50 free → 70 at $0.50 = $35/mo, dropping as you sell.' },
]

export function Content({ state }: { state: StoryState }) {
  const [exampleOn, setExampleOn] = useState(state.exampleOn)

  return (
    <div style={{ background: '#fbfbfb', minHeight: 560, padding: '40px 32px', fontFamily: T.sans, color: T.obsidian }}>
      <div style={{ maxWidth: 1040, margin: '0 auto' }}>
        <h1 style={{ fontFamily: T.serif, fontWeight: 400, fontSize: 32, letterSpacing: '-0.3px', margin: '0 0 6px' }}>Import students</h1>
        <p style={{ color: T.grey60, fontSize: 16, margin: '0 0 24px', maxWidth: '64ch' }}>Bring your existing students into Teachable.</p>

        <div style={{ background: T.white, border: `1px solid ${T.grey12}`, borderRadius: 12, padding: 28, maxWidth: 660 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
            <h2 style={{ fontFamily: T.serif, fontWeight: 400, fontSize: 26, margin: 0 }}>How imports work</h2>
            <button onClick={() => setExampleOn(o => !o)} style={{ background: 'none', border: `1px solid ${T.grey20}`, borderRadius: 999, padding: '6px 12px', fontSize: 12.5, fontWeight: 600, cursor: 'pointer', color: T.grey70, fontFamily: T.sans }}>{exampleOn ? 'Hide example' : 'Show me an example'}</button>
          </div>
          <p style={{ color: T.grey60, fontSize: 14.5, margin: '0 0 22px' }}>Three simple steps — no math required.</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {STEPS.map((s, i) => (
              <div key={i} style={{ display: 'flex', gap: 16, padding: '16px 0', borderTop: i > 0 ? `1px solid ${T.grey12}` : 'none' }}>
                <div style={{ flexShrink: 0, width: 40, height: 40, borderRadius: 999, background: i === 2 ? T.grey6 : T.brand, border: `1px solid ${i === 2 ? T.grey20 : T.obsidian}`, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                  <Icon name={s.icon} size={20} color={T.obsidian} />
                  <span style={{ position: 'absolute', top: -7, left: -7, width: 20, height: 20, borderRadius: 999, background: T.obsidian, color: T.white, fontSize: 11, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{i + 1}</span>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 2 }}>{s.title}</div>
                  <div style={{ fontSize: 14, color: T.grey70, lineHeight: 1.5 }}>{s.sub}</div>
                  {exampleOn && (
                    <div style={{ marginTop: 8, fontSize: 13, color: T.grey90, background: T.grey3, border: `1px solid ${T.grey12}`, borderRadius: 6, padding: '8px 10px' }}>
                      <b>Example:</b> {s.ex}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <button onClick={() => alert('Import students (prototype)')} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: T.sans, fontSize: 14, fontWeight: 600, height: 40, padding: '0 18px', borderRadius: 6, background: T.lemon, color: T.obsidian, border: `1px solid ${T.obsidian}`, cursor: 'pointer', marginTop: 22 }}><Icon name="upload" size={18} /> Import students</button>
        </div>
      </div>
    </div>
  )
}
