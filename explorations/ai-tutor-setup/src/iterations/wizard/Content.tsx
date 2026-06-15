import type { WizardState } from './definition'
import { AdminShell } from '../../AdminShell'

const T = {
  lemon: '#E6FF32', obsidian: '#222222', ink: '#2a2a2a', grey80: '#4e4e4e', grey: '#6b6b6b',
  greySoft: '#9a9a9a', line: '#e7e4dd', lineSoft: '#efece6', canvas: '#faf9f5', card: '#ffffff',
  cardSoft: '#f4f2ec', lemonWash: '#f7ffd6', green: '#465F01', greenWash: '#eef4d9',
  serif: "'Reckless-Light', 'Reckless', 'Fraunces', Palatino, Garamond, Georgia, serif",
  sans: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  radSm: 4, radMd: 6, radLg: 8,
}

const STEPS = [
  { id: 'sources', label: 'Content sources', sub: '2 courses · trained' },
  { id: 'personality', label: 'Personality', sub: 'Name, tone, rules' },
  { id: 'placement', label: 'Placement', sub: 'Where learners chat' },
  { id: 'publish', label: 'Publish', sub: 'Go live' },
] as const

const COURSES = [
  { name: 'French 101', lessons: 12, on: true },
  { name: 'Conversational French', lessons: 18, on: true },
  { name: 'Advanced French', lessons: 9, on: false },
]

const PLACEMENTS = [
  { id: 'sidebar', title: 'In-lesson sidebar', blurb: 'A dock beside every lesson — help is one click away while learning.', rec: true },
  { id: 'home', title: 'Course home page', blurb: 'A chat card on the course overview, for questions between lessons.' },
  { id: 'floating', title: 'Floating button', blurb: 'A button on every page of the course — always within reach.' },
]

function PrimaryBtn({ children, full }: { children: React.ReactNode; full?: boolean }) {
  return <button style={{ height: 40, padding: '0 18px', width: full ? '100%' : undefined, background: T.lemon, color: T.obsidian, border: `1px solid ${T.obsidian}`, borderRadius: T.radMd, fontFamily: T.sans, fontSize: 14, fontWeight: 600, cursor: 'pointer' }}>{children}</button>
}
function GhostBtn({ children }: { children: React.ReactNode }) {
  return <button style={{ height: 38, padding: '0 14px', background: T.card, color: T.obsidian, border: `1px solid ${T.obsidian}`, borderRadius: T.radMd, fontFamily: T.sans, fontSize: 13.5, fontWeight: 600, cursor: 'pointer' }}>{children}</button>
}

export function Content({ state }: { state: WizardState }) {
  const { step, scenario } = state
  const stepIndex = STEPS.findIndex(s => s.id === step)
  const published = scenario === 'published'

  return (
    <AdminShell active="apps" subHeader="Apps" subItems={[{ label: 'AI Tutor', active: true }, { label: 'Browse apps' }]}>
    <div style={{ fontFamily: T.sans, background: T.canvas, color: T.ink, height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <header style={{ height: 58, flexShrink: 0, background: T.card, borderBottom: `1px solid ${T.line}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 22px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontFamily: T.serif, fontSize: 19, fontWeight: 500, letterSpacing: '-0.2px' }}>AI Tutor</span>
          <span style={{ fontSize: 11, fontWeight: 600, padding: '3px 9px', borderRadius: 999, background: published ? T.greenWash : T.cardSoft, color: published ? T.green : T.grey80, border: `1px solid ${published ? '#d3e0a8' : T.line}` }}>{published ? '● Live' : 'Draft'}</span>
        </div>
        <div style={{ display: 'flex', gap: 10 }}><GhostBtn>Preview</GhostBtn><PrimaryBtn>{published ? 'Update' : 'Publish tutor'}</PrimaryBtn></div>
      </header>

      <div style={{ flex: 1, display: 'flex', minHeight: 0 }}>
        <nav style={{ width: 248, flexShrink: 0, background: T.card, borderRight: `1px solid ${T.line}`, padding: '20px 14px', display: 'flex', flexDirection: 'column', gap: 4 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: T.greySoft, padding: '0 10px 10px' }}>Set up your tutor</div>
          {STEPS.map((s, i) => {
            const active = s.id === step
            const done = i < stepIndex || published || scenario === 'complete'
            return (
              <div key={s.id} style={{ display: 'flex', alignItems: 'center', gap: 11, padding: '11px 10px', borderRadius: T.radMd, cursor: 'pointer', background: active ? T.lemonWash : 'transparent', border: active ? '1px solid #e4f29a' : '1px solid transparent' }}>
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
            <strong style={{ color: T.ink }}>Tip</strong> — your tutor only answers from the courses you train it on. No made-up answers.
          </div>
        </nav>

        <main style={{ flex: 1, overflowY: 'auto', padding: '30px 40px' }}>
          <div style={{ maxWidth: 620 }}>
            {step === 'sources' && <SourcesStep />}
            {step === 'personality' && <PersonalityStep />}
            {step === 'placement' && <PlacementStep />}
            {step === 'publish' && <PublishStep published={published} />}
          </div>
        </main>
      </div>
    </div>
    </AdminShell>
  )
}

function Head({ n, kicker, title, blurb }: { n: number; kicker: string; title: string; blurb: string }) {
  return (
    <>
      <div style={{ marginBottom: 4, fontSize: 13, fontWeight: 600, color: T.green, letterSpacing: '0.02em' }}>STEP {n} OF 4 · {kicker}</div>
      <h1 style={{ fontFamily: T.serif, fontSize: 30, fontWeight: 500, letterSpacing: '-0.4px', margin: '0 0 6px' }}>{title}</h1>
      <p style={{ fontSize: 14.5, color: T.grey, lineHeight: 1.55, margin: '0 0 24px', maxWidth: 520 }}>{blurb}</p>
    </>
  )
}

function SourcesStep() {
  return (
    <>
      <Head n={1} kicker="CONTENT SOURCES" title="What should it learn from?" blurb="Choose the courses your tutor can answer from. It only ever uses the content you select — nothing made up." />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {COURSES.map((c, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '13px 15px', border: `1px solid ${c.on ? '#e4f29a' : T.line}`, background: c.on ? T.lemonWash : T.card, borderRadius: T.radLg }}>
            <span style={{ width: 20, height: 20, borderRadius: T.radSm, flexShrink: 0, border: `1.5px solid ${c.on ? T.obsidian : T.greySoft}`, background: c.on ? T.obsidian : T.card, color: T.lemon, display: 'grid', placeItems: 'center', fontSize: 12, fontWeight: 700 }}>{c.on ? '✓' : ''}</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 15, fontWeight: 600 }}>{c.name}</div>
              <div style={{ fontSize: 12.5, color: T.greySoft }}>{c.lessons} lessons</div>
            </div>
            {c.on ? <span style={{ fontSize: 11.5, fontWeight: 600, color: T.green, background: T.greenWash, border: '1px solid #d3e0a8', borderRadius: 999, padding: '4px 10px' }}>Trained ✓</span> : <span style={{ fontSize: 11.5, fontWeight: 600, color: T.grey, border: `1px dashed ${T.greySoft}`, borderRadius: 999, padding: '4px 10px' }}>+ Add</span>}
          </div>
        ))}
      </div>
      <div style={{ marginTop: 14, fontSize: 13, color: T.grey }}>Trained on <strong style={{ color: T.ink }}>30 lessons</strong> across 2 courses.</div>
    </>
  )
}

function PersonalityStep() {
  return (
    <>
      <Head n={2} kicker="PERSONALITY" title="Give it a personality" blurb="Your tutor's name, voice, and the rules it follows when it answers a learner." />
      <div style={{ background: T.card, border: `1px solid ${T.line}`, borderRadius: T.radLg, padding: 20, display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div>
          <div style={{ fontSize: 12, fontWeight: 600, color: T.grey80, marginBottom: 6 }}>Name</div>
          <div style={{ height: 42, border: `1px solid ${T.greySoft}`, borderRadius: T.radSm, padding: '0 12px', display: 'flex', alignItems: 'center', fontSize: 15, fontWeight: 600 }}>Madame Claude</div>
        </div>
        <div>
          <div style={{ fontSize: 12, fontWeight: 600, color: T.grey80, marginBottom: 6 }}>Tone</div>
          <div style={{ display: 'flex', gap: 7 }}>
            {['Warm', 'Formal', 'Playful'].map((t, i) => <span key={t} style={{ fontSize: 13.5, fontWeight: 600, padding: '8px 14px', borderRadius: 999, border: `1px solid ${i === 0 ? T.obsidian : T.line}`, background: i === 0 ? T.lemon : T.card, color: T.obsidian }}>{t}</span>)}
          </div>
        </div>
        <div>
          <div style={{ fontSize: 12, fontWeight: 600, color: T.grey80, marginBottom: 8 }}>Rules</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
            {['Answer only from course content', "Encourage — don't give the full answer away", 'Reply in French, then English'].map((r, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: T.ink }}>
                <span style={{ width: 18, height: 18, borderRadius: T.radSm, background: T.obsidian, color: T.lemon, display: 'grid', placeItems: 'center', fontSize: 11, fontWeight: 700, flexShrink: 0 }}>✓</span>{r}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

function PlacementStep() {
  return (
    <>
      <Head n={3} kicker="PLACEMENT" title="Where can learners reach it?" blurb="Pick where the tutor shows up inside your course. You can change this anytime." />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {PLACEMENTS.map((p, i) => {
          const on = i === 0
          return (
            <div key={p.id} style={{ display: 'flex', gap: 14, padding: '15px 16px', background: T.card, border: `1.5px solid ${on ? T.obsidian : T.line}`, borderRadius: T.radLg, cursor: 'pointer' }}>
              <span style={{ width: 18, height: 18, borderRadius: 999, border: `1.5px solid ${on ? T.obsidian : T.greySoft}`, flexShrink: 0, marginTop: 2, display: 'grid', placeItems: 'center' }}>{on && <span style={{ width: 9, height: 9, borderRadius: 999, background: T.obsidian }} />}</span>
              {/* mini diagram */}
              <div style={{ width: 64, height: 46, flexShrink: 0, borderRadius: T.radSm, border: `1px solid ${T.line}`, background: T.canvas, display: 'flex', overflow: 'hidden' }}>
                {p.id === 'sidebar' && <><div style={{ flex: 2, borderRight: `1px solid ${T.line}` }} /><div style={{ flex: 1, background: T.lemonWash }} /></>}
                {p.id === 'home' && <div style={{ flex: 1, padding: 6 }}><div style={{ height: 8, background: T.lemonWash, borderRadius: 2, border: '1px solid #e4f29a' }} /></div>}
                {p.id === 'floating' && <div style={{ flex: 1, position: 'relative' }}><span style={{ position: 'absolute', right: 5, bottom: 5, width: 14, height: 14, borderRadius: 999, background: T.lemon, border: `1px solid ${T.obsidian}` }} /></div>}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ fontSize: 15, fontWeight: 600 }}>{p.title}</span>
                  {p.rec && <span style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: '0.04em', color: T.obsidian, background: T.lemon, borderRadius: 4, padding: '2px 6px' }}>RECOMMENDED</span>}
                </div>
                <div style={{ fontSize: 13, color: T.grey, marginTop: 3, lineHeight: 1.45 }}>{p.blurb}</div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

function PublishStep({ published }: { published: boolean }) {
  const checks = ['Trained on 2 courses (30 lessons)', 'Persona: Madame Claude · Warm', '3 answer rules on', 'Placement: in-lesson sidebar']
  return (
    <>
      <Head n={4} kicker="PUBLISH" title={published ? 'Your tutor is live 🎉' : 'Ready to go live'} blurb={published ? 'Learners can now chat with Madame Claude right inside their lessons.' : 'Everything checks out. Publish to give your learners a tutor.'} />
      {published && (
        <div style={{ background: T.greenWash, border: '1px solid #d3e0a8', borderRadius: T.radLg, padding: '13px 16px', marginBottom: 18, fontSize: 13.5, color: T.green, fontWeight: 500 }}>
          ● Live in <strong>French 101</strong>, <strong>Conversational French</strong> — in the lesson sidebar.
        </div>
      )}
      <div style={{ background: T.card, border: `1px solid ${T.line}`, borderRadius: T.radLg, padding: 18, display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 22 }}>
        {checks.map((c, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
            <span style={{ width: 22, height: 22, borderRadius: 999, background: T.obsidian, color: T.lemon, display: 'grid', placeItems: 'center', fontSize: 12, fontWeight: 700 }}>✓</span>
            <span style={{ fontSize: 14.5 }}>{c}</span>
          </div>
        ))}
      </div>
      {!published && <PrimaryBtn full>Publish tutor</PrimaryBtn>}
    </>
  )
}
