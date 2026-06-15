import type { TutorState } from './definition'

const wrap: React.CSSProperties = { display: 'flex', flexDirection: 'column', gap: 14 }
const label: React.CSSProperties = { fontSize: 11, fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--nb-text-dim)', marginBottom: 6 }
const row: React.CSSProperties = { display: 'flex', flexWrap: 'wrap', gap: 6 }

function Seg<T extends string>({ value, options, onPick }: { value: T; options: { id: T; label: string }[]; onPick: (v: T) => void }) {
  return (
    <div style={row}>
      {options.map(o => {
        const on = o.id === value
        return (
          <button key={o.id} onClick={() => onPick(o.id)} style={{ fontSize: 12, fontWeight: 600, padding: '6px 11px', borderRadius: 6, cursor: 'pointer', border: `1px solid ${on ? 'var(--nb-accent)' : 'var(--nb-border)'}`, background: on ? 'var(--nb-accent)' : 'transparent', color: on ? '#222' : 'var(--nb-text)' }}>{o.label}</button>
        )
      })}
    </div>
  )
}

export function FineTuning({ state, onChange }: { state: TutorState; onChange: (patch: Partial<TutorState>) => void }) {
  return (
    <div style={wrap}>
      <div>
        <div style={label}>Scenario</div>
        <Seg value={state.scenario} onPick={scenario => onChange({ scenario })} options={[
          { id: 'ready', label: 'Tested' },
          { id: 'untrained', label: 'Untrained' },
          { id: 'training', label: 'Training' },
          { id: 'multiturn', label: 'Long chat' },
          { id: 'published', label: 'Live' },
        ]} />
      </div>
      <div>
        <div style={label}>Tone</div>
        <Seg value={state.tone} onPick={tone => onChange({ tone })} options={[
          { id: 'warm', label: 'Warm' },
          { id: 'formal', label: 'Formal' },
          { id: 'playful', label: 'Playful' },
        ]} />
      </div>
    </div>
  )
}
