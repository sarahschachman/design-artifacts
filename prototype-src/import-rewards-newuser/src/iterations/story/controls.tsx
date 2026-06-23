import type { StoryState } from './Content'

export function FineTuning({ state, onChange }: { state: StoryState; onChange: (patch: Partial<StoryState>) => void }) {
  return (
    <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, fontSize: 13, cursor: 'pointer' }}>
      <span>Show worked example</span>
      <input type="checkbox" checked={state.exampleOn} onChange={e => onChange({ exampleOn: e.target.checked })} />
    </label>
  )
}
