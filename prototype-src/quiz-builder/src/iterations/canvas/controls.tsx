import type { CanvasState } from './definition'

const wrap: React.CSSProperties = { display: 'flex', flexDirection: 'column', gap: 14 }
const label: React.CSSProperties = { fontSize: 11, fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--nb-text-dim)', marginBottom: 6 }
const row: React.CSSProperties = { display: 'flex', flexWrap: 'wrap', gap: 6 }

function Seg<T extends string>({ value, options, onPick }: { value: T; options: { id: T; label: string }[]; onPick: (v: T) => void }) {
  return (
    <div style={row}>
      {options.map(o => {
        const on = o.id === value
        return (
          <button key={o.id} onClick={() => onPick(o.id)} style={{
            fontSize: 12, fontWeight: 600, padding: '6px 11px', borderRadius: 6, cursor: 'pointer',
            border: `1px solid ${on ? 'var(--nb-accent)' : 'var(--nb-border)'}`,
            background: on ? 'var(--nb-accent)' : 'transparent',
            color: on ? '#222' : 'var(--nb-text)',
          }}>{o.label}</button>
        )
      })}
    </div>
  )
}

export function FineTuning({ state, onChange }: { state: CanvasState; onChange: (patch: Partial<CanvasState>) => void }) {
  return (
    <div style={wrap}>
      <div>
        <div style={label}>Scenario</div>
        <Seg
          value={state.scenario}
          onPick={scenario => onChange({ scenario })}
          options={[
            { id: 'building', label: 'Mid-build' },
            { id: 'empty', label: 'Blank' },
            { id: 'full', label: 'Full quiz' },
            { id: 'published', label: 'Live' },
          ]}
        />
      </div>
      <div>
        <div style={label}>Add-block menu</div>
        <Seg
          value={state.addMenu ? 'open' : 'closed'}
          onPick={v => onChange({ addMenu: v === 'open' })}
          options={[
            { id: 'closed', label: 'Closed' },
            { id: 'open', label: 'Open' },
          ]}
        />
      </div>
    </div>
  )
}
