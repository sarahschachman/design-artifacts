// Exploration 2 — INTERACTIVE ESTIMATOR. Turn the abstract policy into the creator's own
// numbers. Two inputs (students to import, sales/month) → live free-vs-paid + monthly cost.
import { useState } from 'react'

const T = {
  lemon: '#e7ff33', obsidian: '#222222', grey90: '#383838', grey70: '#646464',
  grey60: '#7a7a7a', grey40: '#a7a7a7', grey20: '#d3d3d3', grey12: '#e4e4e4',
  grey9: '#ebebeb', grey6: '#f2f2f2', grey3: '#f8f8f8', white: '#ffffff',
  brand: '#faffd6', warn: '#f8c821', warnD: '#957814', success: '#38ba5f',
  serif: "'Fraunces', Palatino, Georgia, serif",
  sans: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
}
const BASELINE = 50, PER_SALE = 2, PRICE = 0.5

function Icon({ name, size = 20, color }: { name: string; size?: number; color?: string }) {
  return <span className="material-symbols-outlined" style={{ fontSize: size, width: size, height: size, color }}>{name}</span>
}

export interface EstimatorState { imports: number; sales: number }

function Slider({ label, value, max, onChange, suffix }: { label: string; value: number; max: number; onChange: (v: number) => void; suffix?: string }) {
  return (
    <div style={{ marginBottom: 18 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 6 }}>
        <span style={{ fontSize: 14, fontWeight: 600 }}>{label}</span>
        <span style={{ fontFamily: T.serif, fontSize: 22 }}>{value.toLocaleString()}{suffix}</span>
      </div>
      <input type="range" min={0} max={max} value={value} onChange={e => onChange(Number(e.target.value))} style={{ width: '100%', accentColor: T.obsidian }} />
    </div>
  )
}

export function Content({ state }: { state: EstimatorState }) {
  const [imports, setImports] = useState(state.imports)
  const [sales, setSales] = useState(state.sales)

  const allowance = BASELINE + sales * PER_SALE
  const free = Math.min(imports, allowance)
  const paid = Math.max(0, imports - allowance)
  const cost = paid * PRICE
  const freePct = imports > 0 ? (free / imports) * 100 : 0

  return (
    <div style={{ background: '#fbfbfb', minHeight: 560, padding: '40px 32px', fontFamily: T.sans, color: T.obsidian }}>
      <div style={{ maxWidth: 1040, margin: '0 auto' }}>
        <h1 style={{ fontFamily: T.serif, fontWeight: 400, fontSize: 32, letterSpacing: '-0.3px', margin: '0 0 6px' }}>Import students</h1>
        <p style={{ color: T.grey60, fontSize: 16, margin: '0 0 24px', maxWidth: '64ch' }}>See exactly what importing will cost — for your numbers.</p>

        <div style={{ background: T.white, border: `1px solid ${T.grey12}`, borderRadius: 12, padding: 24, maxWidth: 660 }}>
          <h2 style={{ fontFamily: T.serif, fontWeight: 400, fontSize: 24, margin: '0 0 18px' }}>Estimate your import cost</h2>

          <Slider label="Students you want to import" value={imports} max={500} onChange={setImports} />
          <Slider label="Sales you expect per month" value={sales} max={100} onChange={setSales} />

          {/* Live result */}
          <div style={{ marginTop: 8, padding: 18, borderRadius: 10, background: paid > 0 ? T.grey3 : T.brand, border: `1px solid ${paid > 0 ? T.grey12 : T.obsidian}` }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, flexWrap: 'wrap' }}>
              <span style={{ fontFamily: T.serif, fontSize: 30 }}>{paid > 0 ? `$${cost.toFixed(2)}/mo` : 'Free'}</span>
              <span style={{ fontSize: 14, color: T.grey70 }}>
                {paid > 0
                  ? <>{free.toLocaleString()} free, {paid.toLocaleString()} paid &times; ${PRICE.toFixed(2)}/mo</>
                  : <>all {imports.toLocaleString()} imports are covered</>}
              </span>
            </div>

            {/* free vs paid bar */}
            <div style={{ position: 'relative', height: 10, borderRadius: 999, background: T.grey9, overflow: 'hidden', marginTop: 14 }}>
              <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: `${freePct}%`, background: paid > 0 ? T.lemon : T.success }} />
              {paid > 0 && <div style={{ position: 'absolute', left: `${freePct}%`, right: 0, top: 0, bottom: 0, background: T.warn }} />}
            </div>
            <div style={{ display: 'flex', gap: 18, marginTop: 12, fontSize: 12.5, color: T.grey70 }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><span style={{ width: 11, height: 11, borderRadius: 3, background: paid > 0 ? T.lemon : T.success }} /> Free allowance ({allowance.toLocaleString()})</span>
              {paid > 0 && <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><span style={{ width: 11, height: 11, borderRadius: 3, background: T.warn }} /> Paid ({paid.toLocaleString()})</span>}
            </div>
          </div>

          <p style={{ display: 'flex', gap: 8, alignItems: 'flex-start', fontSize: 13.5, color: T.grey70, lineHeight: 1.5, margin: '16px 0 0' }}>
            <Icon name="trending_up" size={18} color={T.grey90} />
            <span><b style={{ color: T.obsidian }}>Your cost drops as you grow.</b> 50 imports come free with Builder, and every sale you make adds 2 more — so the more you sell here, the more you import for free.</span>
          </p>

          <button onClick={() => alert('Start importing (prototype)')} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: T.sans, fontSize: 14, fontWeight: 600, height: 40, padding: '0 18px', borderRadius: 6, background: T.lemon, color: T.obsidian, border: `1px solid ${T.obsidian}`, cursor: 'pointer', marginTop: 18 }}><Icon name="upload" size={18} /> Start importing</button>
        </div>
      </div>
    </div>
  )
}
