// Exploration 1 — TASK-FIRST. Lead with the job (import your students). The allowance
// is a single quiet line of reassurance, not the headline. Pricing detail is one tap away.
import { useState } from 'react'

const T = {
  lemon: '#e7ff33', obsidian: '#222222', grey90: '#383838', grey70: '#646464',
  grey60: '#7a7a7a', grey40: '#a7a7a7', grey20: '#d3d3d3', grey12: '#e4e4e4',
  grey6: '#f2f2f2', grey3: '#f8f8f8', white: '#ffffff', brand: '#faffd6', success: '#38ba5f',
  serif: "'Fraunces', Palatino, Georgia, serif",
  sans: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
}

function Icon({ name, size = 20, color }: { name: string; size?: number; color?: string }) {
  return <span className="material-symbols-outlined" style={{ fontSize: size, width: size, height: size, color }}>{name}</span>
}

export interface TaskFirstState { dragOver: boolean; filePicked: boolean; pricingOpen: boolean }

const btnPrimary: React.CSSProperties = { display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: T.sans, fontSize: 14, fontWeight: 600, height: 40, padding: '0 18px', borderRadius: 6, background: T.lemon, color: T.obsidian, border: `1px solid ${T.obsidian}`, cursor: 'pointer', marginTop: 6 }
const linkBtn: React.CSSProperties = { background: 'none', border: 'none', padding: 0, marginLeft: 6, color: T.obsidian, fontWeight: 600, fontSize: 13.5, cursor: 'pointer', textDecoration: 'underline', textUnderlineOffset: 2, fontFamily: T.sans }

export function Content({ state }: { state: TaskFirstState }) {
  const [dragOver, setDragOver] = useState(state.dragOver)
  const [filePicked, setFilePicked] = useState(state.filePicked)
  const [pricingOpen, setPricingOpen] = useState(state.pricingOpen)

  return (
    <div style={{ background: '#fbfbfb', minHeight: 560, padding: '40px 32px', fontFamily: T.sans, color: T.obsidian }}>
      <div style={{ maxWidth: 1040, margin: '0 auto' }}>
        <h1 style={{ fontFamily: T.serif, fontWeight: 400, fontSize: 32, letterSpacing: '-0.3px', margin: '0 0 6px' }}>Import students</h1>
        <p style={{ color: T.grey60, fontSize: 16, margin: '0 0 24px', maxWidth: '64ch' }}>Add the students you already have to your school.</p>

        <div style={{ background: T.white, border: `1px solid ${T.grey12}`, borderRadius: 12, padding: 24, maxWidth: 660 }}>
          <div
            onDragOver={e => { e.preventDefault(); setDragOver(true) }}
            onDragLeave={() => setDragOver(false)}
            onDrop={e => { e.preventDefault(); setDragOver(false); setFilePicked(true) }}
            style={{ border: `2px dashed ${dragOver ? T.obsidian : T.grey20}`, background: dragOver ? T.brand : T.grey3, borderRadius: 10, padding: '36px 24px', textAlign: 'center', transition: 'all .15s' }}
          >
            {filePicked ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                <Icon name="description" size={30} color={T.grey90} />
                <div style={{ fontSize: 15, fontWeight: 600 }}>students.csv &middot; 128 students found</div>
                <div style={{ fontSize: 13, color: T.grey60 }}>All 128 are within your free allowance.</div>
                <button onClick={() => alert('Map columns → import (prototype)')} style={btnPrimary}>Review &amp; import</button>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 48, height: 48, borderRadius: 999, background: T.white, border: `1px solid ${T.grey12}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="upload_file" size={24} color={T.grey90} /></div>
                <div style={{ fontFamily: T.serif, fontSize: 22 }}>Drag in a CSV of your students</div>
                <div style={{ fontSize: 13.5, color: T.grey60 }}>or export from your current platform and upload it here</div>
                <button onClick={() => setFilePicked(true)} style={btnPrimary}><Icon name="folder_open" size={18} /> Choose file</button>
              </div>
            )}
          </div>

          <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginTop: 16, fontSize: 13.5, color: T.grey70, lineHeight: 1.5 }}>
            <Icon name="check_circle" size={18} color={T.success} />
            <div>Your <b style={{ color: T.obsidian }}>Builder plan includes 50 free imports</b>, and you earn 2 more with every sale you make on Teachable.
              <button onClick={() => setPricingOpen(o => !o)} style={linkBtn}>How import pricing works {pricingOpen ? '▲' : '▾'}</button>
            </div>
          </div>

          {pricingOpen && (
            <div style={{ marginTop: 12, background: T.grey3, border: `1px solid ${T.grey12}`, borderRadius: 8, padding: '14px 16px', fontSize: 13.5, color: T.grey90, lineHeight: 1.6 }}>
              <div><b>50 free</b> with your plan, today.</div>
              <div><b>+2 free</b> every time you make a paid sale on Teachable.</div>
              <div>Beyond that, extra imports are <b>$0.50 per student / month</b> — and each new sale brings one back to free.</div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
