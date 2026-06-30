import type { TaskFirstState } from './Content'

function Toggle({ label, checked, onChange }: { label: string; checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, fontSize: 13, cursor: 'pointer' }}>
      <span>{label}</span>
      <input type="checkbox" checked={checked} onChange={e => onChange(e.target.checked)} />
    </label>
  )
}

export function FineTuning({ state, onChange }: { state: TaskFirstState; onChange: (patch: Partial<TaskFirstState>) => void }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <Toggle label="File chosen" checked={state.filePicked} onChange={v => onChange({ filePicked: v })} />
      <Toggle label="Dragging over drop zone" checked={state.dragOver} onChange={v => onChange({ dragOver: v })} />
      <Toggle label="Pricing detail expanded" checked={state.pricingOpen} onChange={v => onChange({ pricingOpen: v })} />
    </div>
  )
}
