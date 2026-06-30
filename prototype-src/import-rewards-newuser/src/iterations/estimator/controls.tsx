import type { EstimatorState } from './Content'

function Range({ label, value, max, onChange }: { label: string; value: number; max: number; onChange: (v: number) => void }) {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginBottom: 4 }}><span>{label}</span><span style={{ fontWeight: 600 }}>{value}</span></div>
      <input type="range" min={0} max={max} value={value} onChange={e => onChange(Number(e.target.value))} style={{ width: '100%' }} />
    </div>
  )
}

export function FineTuning({ state, onChange }: { state: EstimatorState; onChange: (patch: Partial<EstimatorState>) => void }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Range label="Students to import" value={state.imports} max={500} onChange={v => onChange({ imports: v })} />
      <Range label="Sales per month" value={state.sales} max={100} onChange={v => onChange({ sales: v })} />
    </div>
  )
}
