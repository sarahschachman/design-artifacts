// Exploration 5 — GROWTH-MOMENTUM. Frame importing as the start of growth on Teachable.
// Interactive "watch it grow" demo: each simulated sale visibly expands the free allowance.
import { useState } from 'react'

const T = {
  lemon: '#e7ff33', obsidian: '#222222', grey90: '#383838', grey70: '#646464',
  grey60: '#7a7a7a', grey40: '#a7a7a7', grey20: '#d3d3d3', grey12: '#e4e4e4',
  grey9: '#ebebeb', grey6: '#f2f2f2', grey3: '#f8f8f8', white: '#ffffff', brand: '#faffd6',
  serif: "'Fraunces', Palatino, Georgia, serif",
  sans: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
}
const BASELINE = 50, PER_SALE = 2

function Icon({ name, size = 20, color }: { name: string; size?: number; color?: string }) {
  return <span className="material-symbols-outlined" style={{ fontSize: size, width: size, height: size, color }}>{name}</span>
}

export interface GrowthState { sales: number }

export function Content({ state }: { state: GrowthState }) {
  const [sales, setSales] = useState(state.sales)
  const allowance = BASELINE + sales * PER_SALE
  const maxRef = BASELINE + 50 * PER_SALE // 50 sales fills the bar
  const pct = Math.min(100, (allowance / maxRef) * 100)

  return (
    <div style={{ background: '#fbfbfb', minHeight: 560, padding: '40px 32px', fontFamily: T.sans, color: T.obsidian }}>
      <div style={{ maxWidth: 1040, margin: '0 auto' }}>
        <h1 style={{ fontFamily: T.serif, fontWeight: 400, fontSize: 32, letterSpacing: '-0.3px', margin: '0 0 6px' }}>Import students</h1>
        <p style={{ color: T.grey60, fontSize: 16, margin: '0 0 24px', maxWidth: '64ch' }}>Bring the audience you already have — then grow it here.</p>

        <div style={{ background: T.white, border: `1px solid ${T.grey12}`, borderRadius: 12, overflow: 'hidden', maxWidth: 660 }}>
          <div style={{ background: `linear-gradient(150deg, ${T.lemon}, ${T.brand})`, padding: '28px 24px 24px' }}>
            <h2 style={{ fontFamily: T.serif, fontWeight: 400, fontSize: 28, margin: '0 0 6px', color: T.obsidian }}>Bring your audience. Grow it here.</h2>
            <p style={{ fontSize: 14.5, color: T.grey90, margin: 0, maxWidth: '52ch', lineHeight: 1.5 }}>Start with 50 free imports on Builder. Then every sale you make on Teachable earns 2 more — your space grows as you do.</p>
          </div>

          <div style={{ padding: 24 }}>
            {/* growth demo */}
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 10 }}>
              <span style={{ fontSize: 14, fontWeight: 600 }}>Your free import allowance</span>
              <span style={{ fontFamily: T.serif, fontSize: 26 }}>{allowance.toLocaleString()}</span>
            </div>
            <div style={{ position: 'relative', height: 12, borderRadius: 999, background: T.grey9, overflow: 'hidden' }}>
              <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: `${pct}%`, background: T.obsidian, transition: 'width .35s cubic-bezier(.2,.9,.3,1.1)' }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: T.grey60, marginTop: 6 }}>
              <span>50 to start</span>
              <span>{sales} {sales === 1 ? 'sale' : 'sales'} → +{sales * PER_SALE}</span>
            </div>

            <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginTop: 18, flexWrap: 'wrap' }}>
              <button onClick={() => setSales(s => s + 5)} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: T.sans, fontSize: 13.5, fontWeight: 600, height: 36, padding: '0 14px', borderRadius: 6, background: T.white, color: T.obsidian, border: `1px solid ${T.obsidian}`, cursor: 'pointer' }}><Icon name="add" size={16} /> Make 5 sales</button>
              <button onClick={() => setSales(0)} style={{ background: 'none', border: 'none', color: T.grey60, fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: T.sans }}>Reset</button>
              <span style={{ fontSize: 13, color: T.grey70 }}>See how selling expands your free space.</span>
            </div>

            <button onClick={() => alert('Import & start selling (prototype)')} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: T.sans, fontSize: 14, fontWeight: 600, height: 40, padding: '0 18px', borderRadius: 6, background: T.lemon, color: T.obsidian, border: `1px solid ${T.obsidian}`, cursor: 'pointer', marginTop: 22 }}><Icon name="rocket_launch" size={18} /> Import &amp; start selling</button>
            <div style={{ fontSize: 12.5, color: T.grey60, marginTop: 10 }}>Importing more than your allowance? Extra students are $0.50/month each — and shrink with every sale.</div>
          </div>
        </div>
      </div>
    </div>
  )
}
