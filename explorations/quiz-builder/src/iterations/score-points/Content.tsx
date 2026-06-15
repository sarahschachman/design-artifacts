import type { ScoreState } from './definition'

const T = {
  lemon: '#E6FF32', obsidian: '#222222', ink: '#2a2a2a', grey80: '#4e4e4e', grey: '#6b6b6b',
  greySoft: '#9a9a9a', line: '#e7e4dd', lineSoft: '#efece6', canvas: '#faf9f5', card: '#ffffff',
  cardSoft: '#f4f2ec', lemonWash: '#f7ffd6', green: '#465F01', greenWash: '#eef4d9',
  serif: "'Fraunces', 'Tiempos Headline', Palatino, Georgia, serif",
  sans: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  radSm: 4, radMd: 6, radLg: 8,
}

// Brand tertiary tints (DESIGN.md) for the three levels / bands.
const BANDS = [
  { range: '0 – 4', lo: 0, hi: 4, course: 'French 101', tint: '#FFE3BE', ink: '#6b4415' },
  { range: '5 – 9', lo: 5, hi: 9, course: 'Intermediate French', tint: '#B6F2E8', ink: '#173d37' },
  { range: '10 +', lo: 10, hi: 15, course: 'Advanced French', tint: '#E5CCFF', ink: '#3c2a5e' },
]
const MAX = 15

const STEPS = [
  { id: 'questions', label: 'Questions', sub: '2 questions' },
  { id: 'scoring', label: 'Scoring', sub: 'Points + bands' },
  { id: 'capture', label: 'Lead capture', sub: 'Email gate' },
  { id: 'offer', label: 'Offers', sub: 'Per level' },
  { id: 'publish', label: 'Publish', sub: 'Go live' },
] as const

function PrimaryBtn({ children, full }: { children: React.ReactNode; full?: boolean }) {
  return <button style={{ height: 40, padding: '0 18px', width: full ? '100%' : undefined, background: T.lemon, color: T.obsidian, border: `1px solid ${T.obsidian}`, borderRadius: T.radMd, fontFamily: T.sans, fontSize: 14, fontWeight: 600, cursor: 'pointer' }}>{children}</button>
}
function GhostBtn({ children }: { children: React.ReactNode }) {
  return <button style={{ height: 40, padding: '0 16px', background: T.card, color: T.obsidian, border: `1px solid ${T.obsidian}`, borderRadius: T.radMd, fontFamily: T.sans, fontSize: 14, fontWeight: 600, cursor: 'pointer' }}>{children}</button>
}

function PointStepper({ value }: { value: number }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 0, border: `1px solid ${T.line}`, borderRadius: T.radSm, background: T.card, flexShrink: 0 }}>
      <span style={{ width: 22, textAlign: 'center', color: T.greySoft, fontSize: 14, lineHeight: '28px', cursor: 'pointer' }}>−</span>
      <span style={{ minWidth: 42, textAlign: 'center', fontSize: 13, fontWeight: 700, color: T.obsidian, borderLeft: `1px solid ${T.line}`, borderRight: `1px solid ${T.line}`, lineHeight: '28px' }}>{value} pt</span>
      <span style={{ width: 22, textAlign: 'center', color: T.greySoft, fontSize: 14, lineHeight: '28px', cursor: 'pointer' }}>+</span>
    </span>
  )
}

export function Content({ state }: { state: ScoreState }) {
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
            <strong style={{ color: T.ink }}>Tip</strong> — points are the simplest scoring most learners already expect from a quiz.
          </div>
        </nav>

        <main style={{ flex: 1, overflowY: 'auto', padding: '30px 40px' }}>
          <div style={{ maxWidth: 640 }}>
            {step === 'scoring' && <ScoringEditor empty={scenario === 'empty'} />}
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

function ScoringEditor({ empty }: { empty: boolean }) {
  return (
    <>
      <StepHead n={2} total={5} kicker="SCORING" title="Score the answers" blurb="Give each answer a point value, then map score ranges to the right course. A learner's total decides where they land." />

      {/* Points recap */}
      <div style={{ background: T.card, border: `1px solid ${T.line}`, borderRadius: T.radLg, padding: 18, marginBottom: 16 }}>
        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: T.greySoft, marginBottom: 12 }}>Points per answer · Q1</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {[{ a: "Je m'appelle Marie.", p: 1 }, { a: 'Il faut que je parte.', p: 3 }, { a: "J'aurais dû le savoir.", p: 5 }].map((o, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ width: 14, height: 14, borderRadius: 999, border: `1.5px solid ${T.greySoft}`, flexShrink: 0 }} />
              <span style={{ flex: 1, fontSize: 14, color: T.grey80 }}>{o.a}</span>
              <PointStepper value={o.p} />
            </div>
          ))}
        </div>
        <div style={{ marginTop: 12, paddingTop: 12, borderTop: `1px solid ${T.lineSoft}`, fontSize: 12.5, color: T.greySoft }}>
          Max possible across all questions: <strong style={{ color: T.ink }}>{MAX} points</strong>
        </div>
      </div>

      {/* Score bands — the hero */}
      <div style={{ background: T.card, border: `1px solid ${T.line}`, borderRadius: T.radLg, padding: 18 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: T.greySoft }}>Score bands → course</div>
          {!empty && <span style={{ fontSize: 12, color: T.grey }}>{BANDS.length} bands</span>}
        </div>

        {empty ? (
          <div style={{ border: `1.5px dashed ${T.greySoft}`, borderRadius: T.radMd, padding: '32px 20px', textAlign: 'center' }}>
            <div style={{ fontFamily: T.serif, fontSize: 18, marginBottom: 4 }}>No score bands yet</div>
            <div style={{ fontSize: 13.5, color: T.grey, marginBottom: 16 }}>Add a range and point it at the course that fits.</div>
            <PrimaryBtn>+ Add your first band</PrimaryBtn>
          </div>
        ) : (
          <>
            {/* Segmented scale */}
            <div style={{ marginBottom: 18 }}>
              <div style={{ display: 'flex', height: 14, borderRadius: 999, overflow: 'hidden', border: `1px solid ${T.line}` }}>
                {BANDS.map((b, i) => (
                  <div key={i} style={{ flex: b.hi - b.lo + 1, background: b.tint }} />
                ))}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6, fontSize: 11, color: T.greySoft }}>
                <span>0</span><span>5</span><span>10</span><span>{MAX}</span>
              </div>
            </div>

            {/* Band rows */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {BANDS.map((b, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px', background: T.canvas, border: `1px solid ${T.line}`, borderRadius: T.radMd }}>
                  <span style={{ minWidth: 56, textAlign: 'center', fontSize: 13, fontWeight: 700, color: b.ink, background: b.tint, borderRadius: T.radSm, padding: '5px 8px' }}>{b.range}</span>
                  <span style={{ color: T.greySoft, fontSize: 16 }}>→</span>
                  <div style={{ flex: 1, height: 38, border: `1px solid ${T.greySoft}`, borderRadius: T.radSm, background: T.card, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 12px', fontSize: 14, fontWeight: 600 }}>
                    {b.course}<span style={{ color: T.greySoft, fontSize: 12 }}>▾</span>
                  </div>
                </div>
              ))}
              <button style={{ height: 42, background: T.card, color: T.obsidian, border: `1.5px dashed ${T.greySoft}`, borderRadius: T.radMd, fontFamily: T.sans, fontSize: 13.5, fontWeight: 600, cursor: 'pointer' }}>+ Add band</button>
            </div>

            {/* Live example */}
            <div style={{ marginTop: 16, display: 'flex', alignItems: 'center', gap: 10, background: T.lemonWash, border: '1px solid #e4f29a', borderRadius: T.radMd, padding: '11px 14px', fontSize: 13.5, color: T.ink }}>
              <span style={{ fontWeight: 700 }}>Preview</span>
              A learner who scores <strong>8</strong> → <strong>Intermediate French</strong>
            </div>
          </>
        )}
      </div>
    </>
  )
}

function QuestionsStep() {
  const qs = [
    { q: 'Pick the sentence that sounds right to you.', opts: [{ a: "Je m'appelle Marie.", p: 1 }, { a: 'Il faut que je parte.', p: 3 }, { a: "J'aurais dû le savoir.", p: 5 }] },
    { q: 'Watching a French film with no subtitles, you…', opts: [{ a: 'Feel completely lost', p: 1 }, { a: 'Catch the main idea', p: 3 }, { a: 'Follow most of it', p: 5 }] },
  ]
  return (
    <>
      <StepHead n={1} total={5} kicker="QUESTIONS" title="Write your quiz questions" blurb="Each answer carries the points you set in Scoring — harder, more advanced answers are worth more." />
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
                  <PointStepper value={o.p} />
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
      <StepHead n={4} total={5} kicker="OFFERS" title="One offer per level" blurb="Because scoring sorts learners into three bands, each band gets its own course offer and result page." />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {BANDS.map((b, i) => (
          <div key={i} style={{ background: T.card, border: `1px solid ${T.line}`, borderRadius: T.radLg, padding: 16, display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ width: 52, height: 52, borderRadius: T.radMd, background: b.tint, flexShrink: 0 }} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: b.ink, marginBottom: 2 }}>SCORE {b.range}</div>
              <div style={{ fontFamily: T.serif, fontSize: 18, fontWeight: 500 }}>{b.course}</div>
            </div>
            <span style={{ fontFamily: T.serif, fontSize: 18, fontWeight: 500 }}>{['$0', '$89', '$129'][i]}</span>
            <span style={{ color: T.greySoft, fontSize: 18 }}>›</span>
          </div>
        ))}
      </div>
    </>
  )
}

function PublishStep({ published }: { published: boolean }) {
  const checks = ['2 questions with points', 'Score bands set (3)', 'Email capture turned on', 'Per-level offers ready']
  return (
    <>
      <StepHead n={5} total={5} kicker="PUBLISH" title={published ? 'Your quiz is live 🎉' : 'Ready to go live'} blurb={published ? 'Every learner now gets scored into the right course automatically.' : 'Scoring checks out. Publish to start placing learners.'} />
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
