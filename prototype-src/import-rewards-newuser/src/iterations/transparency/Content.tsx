// Exploration 4 — COST-TRANSPARENCY. Lead with reassurance about money (defuses the
// bypasser's "is this a trap?" anxiety) and put the overage in plain view, not hidden.
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

export interface TransparencyState { overageOpen: boolean }

export function Content({ state }: { state: TransparencyState }) {
  const [overageOpen, setOverageOpen] = useState(state.overageOpen)

  return (
    <div style={{ background: '#fbfbfb', minHeight: 560, padding: '40px 32px', fontFamily: T.sans, color: T.obsidian }}>
      <div style={{ maxWidth: 1040, margin: '0 auto' }}>
        <h1 style={{ fontFamily: T.serif, fontWeight: 400, fontSize: 32, letterSpacing: '-0.3px', margin: '0 0 6px' }}>Import students</h1>
        <p style={{ color: T.grey60, fontSize: 16, margin: '0 0 24px', maxWidth: '64ch' }}>Bring your existing students into Teachable.</p>

        <div style={{ background: T.white, border: `1px solid ${T.grey12}`, borderRadius: 12, overflow: 'hidden', maxWidth: 660 }}>
          {/* Reassurance hero */}
          <div style={{ background: T.brand, borderBottom: `1px solid ${T.obsidian}`, padding: '26px 24px', display: 'flex', alignItems: 'center', gap: 18 }}>
            <div style={{ flexShrink: 0, textAlign: 'center' }}>
              <div style={{ fontFamily: T.serif, fontSize: 44, lineHeight: 1 }}>50</div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: T.grey70 }}>free imports</div>
            </div>
            <div>
              <h2 style={{ fontFamily: T.serif, fontWeight: 400, fontSize: 24, margin: '0 0 4px' }}>Most creators import for free</h2>
              <p style={{ fontSize: 14, color: T.grey90, margin: 0, lineHeight: 1.5 }}>Your Builder plan covers 50 students, and every sale you make adds 2 more. You only pay if you go past what you&rsquo;ve earned.</p>
            </div>
          </div>

          <div style={{ padding: 24 }}>
            {/* Transparent line items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              <Row icon="redeem" label="Included with Builder" value="50 imports" note="free, available now" />
              <Row icon="sell" label="Earned as you sell" value="+2 each sale" note="added automatically" />
            </div>

            {/* Honest, expandable overage */}
            <button onClick={() => setOverageOpen(o => !o)} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: T.grey3, border: `1px solid ${T.grey12}`, borderRadius: 8, padding: '12px 14px', marginTop: 14, cursor: 'pointer', fontFamily: T.sans, fontSize: 14, fontWeight: 600, color: T.obsidian }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}><Icon name="help" size={18} color={T.grey90} /> What if I need more than that?</span>
              <Icon name={overageOpen ? 'expand_less' : 'expand_more'} size={20} color={T.grey60} />
            </button>
            {overageOpen && (
              <div style={{ border: `1px solid ${T.grey12}`, borderTop: 'none', borderRadius: '0 0 8px 8px', padding: '14px 16px', fontSize: 13.5, color: T.grey90, lineHeight: 1.6 }}>
                Extra imports beyond your allowance are <b>$0.50 per student, per month</b>. There&rsquo;s no big bill and no commitment — and the moment you make another sale, one of those paid imports becomes free again. So a paid balance shrinks every time you sell.
              </div>
            )}

            <button onClick={() => alert('Import students (prototype)')} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: T.sans, fontSize: 14, fontWeight: 600, height: 40, padding: '0 18px', borderRadius: 6, background: T.lemon, color: T.obsidian, border: `1px solid ${T.obsidian}`, cursor: 'pointer', marginTop: 20 }}><Icon name="upload" size={18} /> Import students</button>
          </div>
        </div>
      </div>
    </div>
  )
}

function Row({ icon, label, value, note }: { icon: string; label: string; value: string; note: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 0', borderBottom: `1px solid ${T.grey12}` }}>
      <Icon name={icon} size={20} color={T.grey90} />
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 14, fontWeight: 600 }}>{label}</div>
        <div style={{ fontSize: 12.5, color: T.grey60 }}>{note}</div>
      </div>
      <div style={{ fontFamily: T.serif, fontSize: 18 }}>{value}</div>
    </div>
  )
}
