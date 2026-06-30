// Baseline — the CURRENTLY shipped empty state (from site/prototypes/import-rewards.html).
// Reproduced here as the reference that tested as "not user-friendly": abstract ratio
// math up front, doesn't center the job of importing, and uses the old 2:1 framing.
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

export function Content(_props: { state: Record<string, never> }) {
  return (
    <div style={{ background: '#fbfbfb', minHeight: 560, padding: '40px 32px', fontFamily: T.sans, color: T.obsidian }}>
      <div style={{ maxWidth: 1040, margin: '0 auto' }}>
        <h1 style={{ fontFamily: T.serif, fontWeight: 400, fontSize: 32, letterSpacing: '-0.3px', margin: '0 0 6px' }}>Import students</h1>
        <p style={{ color: T.grey60, fontSize: 16, margin: '0 0 24px', maxWidth: '64ch' }}>Bring your existing students into Teachable.</p>

        <div style={{ background: T.white, border: `1px solid ${T.grey12}`, borderRadius: 12, overflow: 'hidden', maxWidth: 660 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '22px 24px 0' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 600, color: T.grey70 }}><Icon name="redeem" size={18} color={T.grey90} /> Import rewards</span>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', padding: '4px 10px', borderRadius: 999, background: T.grey6, color: T.grey70 }}>Not started</span>
          </div>
          <div style={{ padding: '8px 24px 24px', textAlign: 'center' }}>
            <div style={{ width: 56, height: 56, borderRadius: 999, background: T.brand, border: `1px solid ${T.obsidian}`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '4px auto 16px' }}><Icon name="redeem" size={28} color={T.obsidian} /></div>
            <h2 style={{ fontFamily: T.serif, fontWeight: 400, fontSize: 26, margin: '0 0 8px' }}>Your sales earn you free imports</h2>
            <p style={{ color: T.grey60, fontSize: 15, maxWidth: '46ch', margin: '0 auto 22px' }}>Bring your audience over without the upfront cost. Every 2 paid sales you make through Teachable earns you 1 free student import.</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', gap: 8, maxWidth: 460, margin: '0 auto 22px' }}>
              <div style={{ border: `1px solid ${T.grey12}`, borderRadius: 10, padding: '16px 12px', background: T.grey3 }}>
                <Icon name="sell" size={26} color={T.grey90} />
                <div style={{ fontFamily: T.serif, fontSize: 24, lineHeight: 1 }}>2 sales</div>
                <div style={{ fontSize: 12.5, color: T.grey70, marginTop: 4 }}>paid through Teachable</div>
              </div>
              <div style={{ fontSize: 22, color: T.grey40 }}>=</div>
              <div style={{ border: `1px solid ${T.grey12}`, borderRadius: 10, padding: '16px 12px', background: T.grey3 }}>
                <Icon name="redeem" size={26} color={T.grey90} />
                <div style={{ fontFamily: T.serif, fontSize: 24, lineHeight: 1 }}>1 import</div>
                <div style={{ fontSize: 12.5, color: T.grey70, marginTop: 4 }}>free, yours to keep</div>
              </div>
            </div>
            <p style={{ fontSize: 13, color: T.grey70, marginBottom: 0 }}>Need to import more than you&rsquo;ve earned? Extra imports are just <b style={{ color: T.obsidian }}>$0.50 each</b>.</p>
            <div style={{ marginTop: 20 }}>
              <button style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: T.sans, fontSize: 14, fontWeight: 600, height: 40, padding: '0 18px', borderRadius: 6, background: T.lemon, color: T.obsidian, border: `1px solid ${T.obsidian}`, cursor: 'pointer' }} onClick={() => alert('Start an import (prototype)')}><Icon name="upload" size={18} /> Start an import</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
