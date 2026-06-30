import type { GrowthState } from './Content'

export function FineTuning({ state, onChange }: { state: GrowthState; onChange: (patch: Partial<GrowthState>) => void }) {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginBottom: 4 }}><span>Sales made</span><span style={{ fontWeight: 600 }}>{state.sales} → {50 + state.sales * 2} allowance</span></div>
      <input type="range" min={0} max={50} value={state.sales} onChange={e => onChange({ sales: Number(e.target.value) })} style={{ width: '100%' }} />
    </div>
  )
}
