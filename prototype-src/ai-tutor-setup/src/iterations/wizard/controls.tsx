import type { WizardState } from './definition'

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

export function FineTuning({ state, onChange }: { state: WizardState; onChange: (patch: Partial<WizardState>) => void }) {
  return (
    <div style={wrap}>
      <div>
        <div style={label}>Active step</div>
        <Seg value={state.step} onPick={step => onChange({ step })} options={[
          { id: 'sources', label: 'Sources' },
          { id: 'personality', label: 'Personality' },
          { id: 'placement', label: 'Placement' },
          { id: 'publish', label: 'Publish' },
        ]} />
      </div>
      <div>
        <div style={label}>Scenario</div>
        <Seg value={state.scenario} onPick={scenario => onChange({ scenario })} options={[
          { id: 'building', label: 'Mid-build' },
          { id: 'complete', label: 'Ready' },
          { id: 'published', label: 'Live' },
        ]} />
      </div>
    </div>
  )
}
