import type { BranchState } from './definition'

const T = {
  lemon: '#E6FF32', obsidian: '#222222', ink: '#2a2a2a', grey80: '#4e4e4e', grey: '#6b6b6b',
  greySoft: '#9a9a9a', line: '#e7e4dd', lineSoft: '#efece6', canvas: '#faf9f5', card: '#ffffff',
  cardSoft: '#f4f2ec', lemonWash: '#f7ffd6', green: '#465F01', greenWash: '#eef4d9',
  serif: "'Reckless-Light', 'Reckless', 'Fraunces', Palatino, Garamond, Georgia, serif",
  sans: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  radSm: 4, radMd: 6, radLg: 8,
}

const OUTCOMES: Record<string, { course: string; tint: string; ink: string }> = {
  Beginner: { course: 'French 101', tint: '#FFE3BE', ink: '#6b4415' },
  Intermediate: { course: 'Intermediate French', tint: '#B6F2E8', ink: '#173d37' },
  Advanced: { course: 'Advanced French', tint: '#E5CCFF', ink: '#3c2a5e' },
}

const STEPS = [
  { id: 'questions', label: 'Questions', sub: '2 questions' },
  { id: 'logic', label: 'Logic', sub: 'Answer routing' },
  { id: 'capture', label: 'Lead capture', sub: 'Email gate' },
  { id: 'offer', label: 'Offers', sub: 'Per outcome' },
  { id: 'publish', label: 'Publish', sub: 'Go live' },
] as const

function PrimaryBtn({ children, full }: { children: React.ReactNode; full?: boolean }) {
  return <button style={{ height: 40, padding: '0 18px', width: full ? '100%' : undefined, background: T.lemon, color: T.obsidian, border: `1px solid ${T.obsidian}`, borderRadius: T.radMd, fontFamily: T.sans, fontSize: 14, fontWeight: 600, cursor: 'pointer' }}>{children}</button>
}
function GhostBtn({ children }: { children: React.ReactNode }) {
  return <button style={{ height: 40, padding: '0 16px', background: T.card, color: T.obsidian, border: `1px solid ${T.obsidian}`, borderRadius: T.radMd, fontFamily: T.sans, fontSize: 14, fontWeight: 600, cursor: 'pointer' }}>{children}</button>
}

// A routing target: either a next-question hop (neutral) or a result outcome (level tint).
function Target({ to }: { to: string }) {
  const out = OUTCOMES[to]
  if (out) {
    return <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12.5, fontWeight: 600, color: out.ink, background: out.tint, borderRadius: T.radSm, padding: '5px 10px', flexShrink: 0 }}>Result: {to}<span style={{ opacity: 0.55, fontSize: 11 }}>▾</span></span>
  }
  return <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12.5, fontWeight: 600, color: T.grey80, background: T.cardSoft, border: `1px solid ${T.line}`, borderRadius: T.radSm, padding: '5px 10px', flexShrink: 0 }}>{to}<span style={{ color: T.greySoft, fontSize: 11 }}>▾</span></span>
}

function FlowNode({ tag, q, rows, dim }: { tag: string; q: string; rows: { a: string; to: string }[]; dim?: boolean }) {
  return (
    <div style={{ background: T.card, border: `1px solid ${T.line}`, borderRadius: T.radLg, padding: '15px 17px', opacity: dim ? 0.92 : 1 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 12 }}>
        <span style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: '0.07em', color: T.obsidian, background: T.lemon, border: `1px solid ${T.obsidian}`, borderRadius: T.radSm, padding: '2px 7px' }}>{tag}</span>
        <span style={{ fontFamily: T.serif, fontSize: 16, fontWeight: 500 }}>{q}</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {rows.map((r, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 10px', background: T.canvas, border: `1px solid ${T.line}`, borderRadius: T.radSm }}>
            <span style={{ width: 13, height: 13, borderRadius: 999, border: `1.5px solid ${T.greySoft}`, flexShrink: 0 }} />
            <span style={{ flex: 1, fontSize: 13.5, color: T.grey80 }}>{r.a}</span>
            <span style={{ color: T.greySoft, fontSize: 15 }}>→</span>
            <Target to={r.to} />
          </div>
        ))}
      </div>
    </div>
  )
}

function Connector({ label }: { label: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '4px 0 4px 16px' }}>
      <span style={{ color: T.greySoft, fontSize: 16, lineHeight: 1 }}>↓</span>
      <span style={{ fontSize: 12, color: T.greySoft, fontStyle: 'italic' }}>{label}</span>
    </div>
  )
}

export function Content({ state }: { state: BranchState }) {
  const { scenario, step } = state
  const stepIndex = STEPS.findIndex(s => s.id === step)

  return (
    <div style={{ fontFamily: T.sans, background: T.canvas, color: T.ink, height: 760, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <header style={{ height: 58, flexShrink: 0, background: T.card, borderBottom: `1px solid ${T.line}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 22px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ width: 13, height: 13, borderRadius: 4, background: T.lemon, border: `1px solid ${T.obsidian}` }} />
          <span style={{ fontFamily: T.serif, fontSize: 19, fontWeight: 500, letterSpacing: '-0.2px' }}>What's Your French Level?</span>
          <span style={{ fontSize: 11, fontWeight: 600, padding: '3px 9px', borderRadius: 999, background: scenario === 'published' ? T.greenWash : T.cardSoft, color: scenario === 'published' ? T.green : T.grey80, border: `1px solid ${scenario === 'published' ? '#d3e0a8' : T.line}` }}>{scenario === 'published' ? '● Live' : 'Draft'}</span>
        </div>
        <div style={{ display: 'flex', gap: 10 }}><GhostBtn>Preview</GhostBtn><PrimaryBtn>{scenario === 'published' ? 'Update' : 'Publish quiz'}</PrimaryBtn></div>
      </header>

      <div style={{ flex: 1, display: 'flex', minHeight: 0 }}>
        <nav style={{ width: 244, flexShrink: 0, background: T.card, borderRight: `1px solid ${T.line}`, padding: '20px 14px', display: 'flex', flexDirection: 'column', gap: 4 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: T.greySoft, padding: '0 10px 10px' }}>Setup steps</div>
          {STEPS.map((s, i) => {
            const active = s.id === step
            const done = i < stepIndex || scenario === 'published'
            return (
              <div key={s.id} style={{ display: 'flex', alignItems: 'center', gap: 11, padding: '11px 10px', borderRadius: T.radMd, cursor: 'pointer', background: active ? T.lemonWash : 'transparent', border: active ? `1px solid #e4f29a` : '1px solid transparent' }}>
                <span style={{ width: 24, height: 24, borderRadius: 999, flexShrink: 0, display: 'grid', placeItems: 'center', fontSize: 12, fontWeight: 700, background: done ? T.obsidian : active ? T.lemon : T.cardSoft, color: done ? T.lemon : active ? T.obsidian : T.greySoft, border: active && !done ? `1px solid ${T.obsidian}` : 'none' }}>{done ? '✓' : i + 1}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: active ? 600 : 500, color: T.ink }}>{s.label}</div>
                  <div style={{ fontSize: 11.5, color: T.greySoft }}>{s.sub}</div>
                </div>
              </div>
            )
          })}
          <div style={{ flex: 1 }} />
          <div style={{ margin: '0 6px', padding: 13, background: T.canvas, border: `1px solid ${T.line}`, borderRadius: T.radLg, fontSize: 12, color: T.grey, lineHeight: 1.5 }}>
            <strong style={{ color: T.ink }}>Tip</strong> — branching adapts the quiz to each learner, but takes the most setup. Start small.
          </div>
        </nav>

        <main style={{ flex: 1, overflowY: 'auto', padding: '30px 40px' }}>
          <div style={{ maxWidth: 640 }}>
            {step === 'logic' && <LogicEditor empty={scenario === 'empty'} />}
            {step === 'questions' && <QuestionsStep />}
            {step === 'offer' && <OfferStep />}
            {step === 'publish' && <PublishStep published={scenario === 'published'} />}
            {step === 'capture' && <QuestionsStep />}
          </div>
        </main>
      </div>
    </div>
  )
}

function StepHead({ n, total, kicker, title, blurb }: { n: number; total: number; kicker: string; title: string; blurb: string }) {
  return (
    <>
      <div style={{ marginBottom: 4, fontSize: 13, fontWeight: 600, color: T.green, letterSpacing: '0.02em' }}>STEP {n} OF {total} · {kicker}</div>
      <h1 style={{ fontFamily: T.serif, fontSize: 30, fontWeight: 500, letterSpacing: '-0.4px', margin: '0 0 6px' }}>{title}</h1>
      <p style={{ fontSize: 14.5, color: T.grey, lineHeight: 1.55, margin: '0 0 24px', maxWidth: 520 }}>{blurb}</p>
    </>
  )
}

function LogicEditor({ empty }: { empty: boolean }) {
  return (
    <>
      <StepHead n={2} total={5} kicker="LOGIC" title="Map the branches" blurb="Send each answer to the next question — or jump straight to a result. The path a learner takes places them, so they only answer what's relevant." />

      {empty ? (
        <div style={{ border: `1.5px dashed ${T.greySoft}`, borderRadius: T.radLg, padding: '40px 24px', textAlign: 'center', background: T.card }}>
          <div style={{ fontFamily: T.serif, fontSize: 19, marginBottom: 4 }}>No routes yet</div>
          <div style={{ fontSize: 13.5, color: T.grey, marginBottom: 18 }}>Wire your first answer to a next question or a result.</div>
          <PrimaryBtn>+ Add a branch</PrimaryBtn>
        </div>
      ) : (
        <>
          <FlowNode
            tag="START · Q1"
            q="Pick the sentence that sounds right to you."
            rows={[
              { a: "Je m'appelle Marie.", to: 'Beginner' },
              { a: 'Il faut que je parte.', to: 'Go to Q2 · harder' },
              { a: "J'aurais dû le savoir.", to: 'Advanced' },
            ]}
          />
          <Connector label="if they pick a harder answer →" />
          <FlowNode
            tag="Q2 · harder"
            q="« Je n'en ai aucune idée » means…"
            rows={[
              { a: 'I have no idea', to: 'Advanced' },
              { a: 'I have one idea', to: 'Intermediate' },
            ]}
            dim
          />

          {/* Outcomes legend */}
          <div style={{ marginTop: 20, background: T.card, border: `1px solid ${T.line}`, borderRadius: T.radLg, padding: 16 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: T.greySoft, marginBottom: 12 }}>Possible results</div>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {Object.entries(OUTCOMES).map(([lvl, o]) => (
                <span key={lvl} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 600, color: o.ink, background: o.tint, borderRadius: T.radMd, padding: '8px 12px' }}>
                  {lvl}<span style={{ opacity: 0.7, fontWeight: 500 }}>· {o.course}</span>
                </span>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  )
}

function QuestionsStep() {
  const qs = [
    { tag: 'Q1', q: 'Pick the sentence that sounds right to you.', opts: [{ a: "Je m'appelle Marie.", to: 'Beginner' }, { a: 'Il faut que je parte.', to: 'Go to Q2 · harder' }, { a: "J'aurais dû le savoir.", to: 'Advanced' }] },
    { tag: 'Q2', q: '« Je n’en ai aucune idée » means…', opts: [{ a: 'I have no idea', to: 'Advanced' }, { a: 'I have one idea', to: 'Intermediate' }] },
  ]
  return (
    <>
      <StepHead n={1} total={5} kicker="QUESTIONS" title="Write your quiz questions" blurb="Each answer points somewhere — the next question, or a result. You wire the paths in the Logic step." />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {qs.map((q, qi) => (
          <div key={qi} style={{ background: T.card, border: `1px solid ${T.line}`, borderRadius: T.radLg, padding: '16px 18px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <span style={{ width: 22, height: 22, borderRadius: 999, background: T.obsidian, color: T.lemon, display: 'grid', placeItems: 'center', fontSize: 12, fontWeight: 700, flexShrink: 0 }}>{qi + 1}</span>
              <div style={{ flex: 1, fontSize: 15, fontWeight: 600 }}>{q.q}</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, paddingLeft: 32 }}>
              {q.opts.map((o, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ width: 14, height: 14, borderRadius: 999, border: `1.5px solid ${T.greySoft}`, flexShrink: 0 }} />
                  <span style={{ flex: 1, fontSize: 14, color: T.grey80 }}>{o.a}</span>
                  <span style={{ color: T.greySoft, fontSize: 14 }}>→</span>
                  <Target to={o.to} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

function OfferStep() {
  return (
    <>
      <StepHead n={4} total={5} kicker="OFFERS" title="One offer per outcome" blurb="Every leaf of the flow ends on a result — give each its own course offer and page." />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {Object.entries(OUTCOMES).map(([lvl, o], i) => (
          <div key={lvl} style={{ background: T.card, border: `1px solid ${T.line}`, borderRadius: T.radLg, padding: 16, display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ width: 52, height: 52, borderRadius: T.radMd, background: o.tint, flexShrink: 0 }} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: o.ink, marginBottom: 2 }}>RESULT · {lvl.toUpperCase()}</div>
              <div style={{ fontFamily: T.serif, fontSize: 18, fontWeight: 500 }}>{o.course}</div>
            </div>
            <span style={{ fontFamily: T.serif, fontSize: 18, fontWeight: 500 }}>{['Free', '$89', '$129'][i]}</span>
            <span style={{ color: T.greySoft, fontSize: 18 }}>›</span>
          </div>
        ))}
      </div>
    </>
  )
}

function PublishStep({ published }: { published: boolean }) {
  const checks = ['2 questions wired into a flow', 'Every answer routes somewhere', 'Email capture turned on', 'Per-outcome offers ready']
  return (
    <>
      <StepHead n={5} total={5} kicker="PUBLISH" title={published ? 'Your quiz is live 🎉' : 'Ready to go live'} blurb={published ? 'Each learner now takes their own path to the right course.' : 'No dead ends — every answer leads somewhere. Publish to go live.'} />
      <div style={{ background: T.card, border: `1px solid ${T.line}`, borderRadius: T.radLg, padding: 18, display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 22 }}>
        {checks.map((c, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
            <span style={{ width: 22, height: 22, borderRadius: 999, background: T.obsidian, color: T.lemon, display: 'grid', placeItems: 'center', fontSize: 12, fontWeight: 700 }}>✓</span>
            <span style={{ fontSize: 14.5 }}>{c}</span>
          </div>
        ))}
      </div>
      {!published && <PrimaryBtn full>Publish quiz</PrimaryBtn>}
    </>
  )
}
