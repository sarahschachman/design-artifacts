import type { TransparencyState } from './Content'

export function FineTuning({ state, onChange }: { state: TransparencyState; onChange: (patch: Partial<TransparencyState>) => void }) {
  return (
    <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, fontSize: 13, cursor: 'pointer' }}>
      <span>Overage detail expanded</span>
      <input type="checkbox" checked={state.overageOpen} onChange={e => onChange({ overageOpen: e.target.checked })} />
    </label>
  )
}
