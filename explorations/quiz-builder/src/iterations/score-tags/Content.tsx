import type { TagState } from './definition'

const T = {
  lemon: '#E6FF32', obsidian: '#222222', ink: '#2a2a2a', grey80: '#4e4e4e', grey: '#6b6b6b',
  greySoft: '#9a9a9a', line: '#e7e4dd', lineSoft: '#efece6', canvas: '#faf9f5', card: '#ffffff',
  cardSoft: '#f4f2ec', lemonWash: '#f7ffd6', green: '#465F01', greenWash: '#eef4d9',
  serif: "'Fraunces', 'Tiempos Headline', Palatino, Georgia, serif",
  sans: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  radSm: 4, radMd: 6, radLg: 8,
}

const LEVELS = [
  { lvl: 'Beginner', course: 'French 101', tint: '#FFE3BE', ink: '#6b4415', price: 'Free' },
  { lvl: 'Intermediate', course: 'Intermediate French', tint: '#B6F2E8', ink: '#173d37', price: '$89' },
  { lvl: 'Advanced', course: 'Advanced French', tint: '#E5CCFF', ink: '#3c2a5e', price: '$129' },
]

const RULES = [
  { id: 'highest', label: 'Highest level they reach', blurb: 'One advanced answer is enough to place them advanced. Generous.' },
  { id: 'common', label: 'Most-picked level', blurb: 'The level they chose most often wins. Balanced and forgiving.' },
  { id: 'last', label: 'Last answer wins', blurb: 'The final question decides. Good for a deliberate closing question.' },
]

const STEPS = [
  { id: 'questions', label: 'Questions', sub: '2 questions' },
  { id: 'rule', label: 'Result rule', sub: 'How level is chosen' },
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

function LevelTag({ lvl }: { lvl: string }) {
  const m = LEVELS.find(l => l.lvl === lvl)!
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12.5, fontWeight: 600, color: m.ink, background: m.tint, borderRadius: T.radSm, padding: '5px 9px', flexShrink: 0 }}>
      {lvl}<span style={{ color: m.ink, opacity: 0.6, fontSize: 11 }}>▾</span>
    </span>
  )
}

export function Content({ state }: { state: TagState }) {
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
            <strong style={{ color: T.ink }}>Tip</strong> — tagging is fastest to set up; no point math to balance.
          </div>
        </nav>

        <main style={{ flex: 1, overflowY: 'auto', padding: '30px 40px' }}>
          <div style={{ maxWidth: 640 }}>
            {step === 'rule' && <RuleEditor />}
            {step === 'questions' && <QuestionsStep empty={scenario === 'empty'} />}
            {step === 'offer' && <OfferStep />}
            {step === 'publish' && <PublishStep published={scenario === 'published'} />}
            {step === 'capture' && <QuestionsStep empty={false} />}
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

function RuleEditor() {
  const selected = 'highest'
  return (
    <>
      <StepHead n={2} total={5} kicker="RESULT RULE" title="How is the level decided?" blurb="Every answer is tagged to a level. When a learner's answers point to different levels, this rule breaks the tie." />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 22 }}>
        {RULES.map(r => {
          const on = r.id === selected
          return (
            <div key={r.id} style={{ display: 'flex', gap: 12, padding: '14px 16px', background: T.card, border: `1.5px solid ${on ? T.obsidian : T.line}`, borderRadius: T.radLg, cursor: 'pointer' }}>
              <span style={{ width: 18, height: 18, borderRadius: 999, border: `1.5px solid ${on ? T.obsidian : T.greySoft}`, flexShrink: 0, marginTop: 1, display: 'grid', placeItems: 'center' }}>
                {on && <span style={{ width: 9, height: 9, borderRadius: 999, background: T.obsidian }} />}
              </span>
              <div>
                <div style={{ fontSize: 14.5, fontWeight: 600, color: T.ink }}>{r.label}</div>
                <div style={{ fontSize: 13, color: T.grey, marginTop: 2, lineHeight: 1.45 }}>{r.blurb}</div>
              </div>
            </div>
          )
        })}
      </div>

      <div style={{ background: T.card, border: `1px solid ${T.line}`, borderRadius: T.radLg, padding: 18 }}>
        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: T.greySoft, marginBottom: 14 }}>Level → course</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {LEVELS.map((l, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ minWidth: 96, fontSize: 13, fontWeight: 600, color: l.ink, background: l.tint, borderRadius: T.radSm, padding: '6px 10px', textAlign: 'center' }}>{l.lvl}</span>
              <span style={{ color: T.greySoft, fontSize: 16 }}>→</span>
              <div style={{ flex: 1, height: 38, border: `1px solid ${T.greySoft}`, borderRadius: T.radSm, background: T.card, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 12px', fontSize: 14, fontWeight: 600 }}>{l.course}<span style={{ color: T.greySoft, fontSize: 12 }}>▾</span></div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 16, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', background: T.lemonWash, border: '1px solid #e4f29a', borderRadius: T.radMd, padding: '11px 14px', fontSize: 13.5, color: T.ink }}>
          <span style={{ fontWeight: 700 }}>Preview</span>
          Answers tag <LevelTag lvl="Beginner" /> <LevelTag lvl="Intermediate" /> <LevelTag lvl="Advanced" /> → highest wins → <strong>Advanced French</strong>
        </div>
      </div>
    </>
  )
}

function QuestionsStep({ empty }: { empty: boolean }) {
  const qs = [
    { q: 'Pick the sentence that sounds right to you.', opts: [{ a: "Je m'appelle Marie.", lvl: 'Beginner' }, { a: 'Il faut que je parte.', lvl: 'Intermediate' }, { a: "J'aurais dû le savoir.", lvl: 'Advanced' }] },
    { q: 'Watching a French film with no subtitles, you…', opts: [{ a: 'Feel completely lost', lvl: 'Beginner' }, { a: 'Catch the main idea', lvl: 'Intermediate' }, { a: 'Follow most of it', lvl: 'Advanced' }] },
  ]
  return (
    <>
      <StepHead n={1} total={5} kicker="QUESTIONS" title="Write your quiz questions" blurb="Tag each answer with the level it signals. No scores to balance — just say what each answer means." />
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
                  {empty
                    ? <span style={{ fontSize: 12.5, fontWeight: 600, color: T.grey, border: `1px dashed ${T.greySoft}`, borderRadius: T.radSm, padding: '5px 9px' }}>Set level ▾</span>
                    : <LevelTag lvl={o.lvl} />}
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
      <StepHead n={4} total={5} kicker="OFFERS" title="One offer per level" blurb="Each level gets its own course offer and result page — learners only ever see the one that fits them." />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {LEVELS.map((l, i) => (
          <div key={i} style={{ background: T.card, border: `1px solid ${T.line}`, borderRadius: T.radLg, padding: 16, display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ width: 52, height: 52, borderRadius: T.radMd, background: l.tint, flexShrink: 0 }} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: l.ink, marginBottom: 2 }}>{l.lvl.toUpperCase()}</div>
              <div style={{ fontFamily: T.serif, fontSize: 18, fontWeight: 500 }}>{l.course}</div>
            </div>
            <span style={{ fontFamily: T.serif, fontSize: 18, fontWeight: 500 }}>{l.price}</span>
            <span style={{ color: T.greySoft, fontSize: 18 }}>›</span>
          </div>
        ))}
      </div>
    </>
  )
}

function PublishStep({ published }: { published: boolean }) {
  const checks = ['2 questions, answers tagged', 'Result rule: highest level wins', 'Email capture turned on', 'Per-level offers ready']
  return (
    <>
      <StepHead n={5} total={5} kicker="PUBLISH" title={published ? 'Your quiz is live 🎉' : 'Ready to go live'} blurb={published ? 'Every learner is sorted to a level and shown the matching course.' : 'Your rule checks out. Publish to start placing learners.'} />
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
