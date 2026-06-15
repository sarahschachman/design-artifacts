import type { TutorState } from './definition'
import { AdminShell } from '../../AdminShell'

const T = {
  lemon: '#E6FF32', obsidian: '#222222', ink: '#2a2a2a', grey80: '#4e4e4e', grey: '#6b6b6b',
  greySoft: '#9a9a9a', line: '#e7e4dd', lineSoft: '#efece6', canvas: '#faf9f5', card: '#ffffff',
  cardSoft: '#f4f2ec', lemonWash: '#f7ffd6', green: '#465F01', greenWash: '#eef4d9',
  serif: "'Reckless-Light', 'Reckless', 'Fraunces', Palatino, Garamond, Georgia, serif",
  sans: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  radSm: 4, radMd: 6, radLg: 8,
}

const COURSES = [
  { name: 'French 101', lessons: 12, on: true },
  { name: 'Conversational French', lessons: 18, on: true },
  { name: 'Advanced French', lessons: 9, on: false },
]

const TONES = [
  { id: 'warm', label: 'Warm' },
  { id: 'formal', label: 'Formal' },
  { id: 'playful', label: 'Playful' },
] as const

const OPENER: Record<string, string> = { warm: 'Great question!', formal: 'Certainly.', playful: 'Ooh, a classic! 🇫🇷' }

function PrimaryBtn({ children }: { children: React.ReactNode }) {
  return <button style={{ height: 38, padding: '0 16px', background: T.lemon, color: T.obsidian, border: `1px solid ${T.obsidian}`, borderRadius: T.radMd, fontFamily: T.sans, fontSize: 13.5, fontWeight: 600, cursor: 'pointer' }}>{children}</button>
}
function GhostBtn({ children }: { children: React.ReactNode }) {
  return <button style={{ height: 38, padding: '0 14px', background: T.card, color: T.obsidian, border: `1px solid ${T.obsidian}`, borderRadius: T.radMd, fontFamily: T.sans, fontSize: 13.5, fontWeight: 600, cursor: 'pointer' }}>{children}</button>
}

function Avatar() {
  return <span style={{ width: 30, height: 30, borderRadius: 999, background: T.obsidian, color: T.lemon, display: 'grid', placeItems: 'center', fontSize: 12, fontWeight: 700, fontFamily: T.serif, flexShrink: 0 }}>MC</span>
}

function Citation({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, marginTop: 8, fontSize: 12, color: T.grey80, background: T.cardSoft, border: `1px solid ${T.line}`, borderRadius: T.radSm, padding: '5px 9px' }}>
      <span aria-hidden>📖</span><span>From {children}</span>
    </div>
  )
}

function TutorBubble({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', maxWidth: '88%' }}>
      <Avatar />
      <div style={{ background: T.card, border: `1px solid ${T.line}`, borderRadius: 12, borderTopLeftRadius: 3, padding: '11px 14px', fontSize: 13.5, lineHeight: 1.5, color: T.ink }}>{children}</div>
    </div>
  )
}

function LearnerBubble({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ alignSelf: 'flex-end', maxWidth: '82%', background: T.lemonWash, border: '1px solid #e4f29a', borderRadius: 12, borderTopRightRadius: 3, padding: '10px 14px', fontSize: 13.5, lineHeight: 1.5, color: T.ink }}>{children}</div>
  )
}

export function Content({ state }: { state: TutorState }) {
  const { scenario, tone } = state
  const published = scenario === 'published'
  const status = published ? '● Live' : scenario === 'training' ? 'Training…' : 'Draft'

  return (
    <AdminShell active="apps" subHeader="Apps" subItems={[{ label: 'AI Tutor', active: true }, { label: 'Browse apps' }]}>
    <div style={{ fontFamily: T.sans, background: T.canvas, color: T.ink, height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      {/* Page header */}
      <header style={{ height: 58, flexShrink: 0, background: T.card, borderBottom: `1px solid ${T.line}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 22px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontFamily: T.serif, fontSize: 19, fontWeight: 500, letterSpacing: '-0.2px' }}>AI Tutor</span>
          <span style={{ fontSize: 11, fontWeight: 600, padding: '3px 9px', borderRadius: 999, background: published ? T.greenWash : T.cardSoft, color: published ? T.green : T.grey80, border: `1px solid ${published ? '#d3e0a8' : T.line}` }}>{status}</span>
        </div>
        <div style={{ display: 'flex', gap: 10 }}><GhostBtn>Preview</GhostBtn><PrimaryBtn>{published ? 'Update' : 'Publish tutor'}</PrimaryBtn></div>
      </header>

      <div style={{ flex: 1, display: 'flex', minHeight: 0 }}>
        {/* LEFT — configure */}
        <section style={{ flex: '0.92 1 0', minWidth: 0, overflowY: 'auto', padding: '24px 26px', borderRight: `1px solid ${T.line}` }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: T.greySoft, marginBottom: 14 }}>Configure</div>

          {/* Trained on */}
          <div style={{ background: T.card, border: `1px solid ${T.line}`, borderRadius: T.radLg, padding: 18, marginBottom: 14 }}>
            <div style={{ fontFamily: T.serif, fontSize: 17, fontWeight: 500, marginBottom: 4 }}>Trained on your content</div>
            <div style={{ fontSize: 13, color: T.grey, marginBottom: 14 }}>Pick the courses your tutor can answer from. It only uses what you select.</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {COURSES.map((c, i) => {
                const isAdvanced = c.name === 'Advanced French'
                const on = scenario === 'untrained' ? false : c.on || (scenario === 'training' && isAdvanced)
                const stat = scenario === 'training' && isAdvanced ? 'training' : on ? 'trained' : 'off'
                return (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 11, padding: '10px 12px', border: `1px solid ${on ? '#e4f29a' : T.line}`, background: on ? T.lemonWash : T.card, borderRadius: T.radMd }}>
                    <span style={{ width: 18, height: 18, borderRadius: T.radSm, flexShrink: 0, border: `1.5px solid ${on ? T.obsidian : T.greySoft}`, background: on ? T.obsidian : T.card, color: T.lemon, display: 'grid', placeItems: 'center', fontSize: 11, fontWeight: 700 }}>{on ? '✓' : ''}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 14, fontWeight: 600, color: T.ink }}>{c.name}</div>
                      <div style={{ fontSize: 12, color: T.greySoft }}>{c.lessons} lessons</div>
                    </div>
                    {stat === 'trained' && <span style={{ fontSize: 11.5, fontWeight: 600, color: T.green, background: T.greenWash, border: '1px solid #d3e0a8', borderRadius: 999, padding: '3px 9px' }}>Trained ✓</span>}
                    {stat === 'training' && <span style={{ fontSize: 11.5, fontWeight: 600, color: T.grey80, background: T.cardSoft, border: `1px solid ${T.line}`, borderRadius: 999, padding: '3px 9px' }}>Training… 60%</span>}
                    {stat === 'off' && <span style={{ fontSize: 11.5, fontWeight: 600, color: T.grey, border: `1px dashed ${T.greySoft}`, borderRadius: 999, padding: '3px 9px' }}>+ Add</span>}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Persona */}
          <div style={{ background: T.card, border: `1px solid ${T.line}`, borderRadius: T.radLg, padding: 18 }}>
            <div style={{ fontFamily: T.serif, fontSize: 17, fontWeight: 500, marginBottom: 14 }}>Persona &amp; rules</div>
            <div style={{ fontSize: 12, fontWeight: 600, color: T.grey80, marginBottom: 6 }}>Name</div>
            <div style={{ height: 40, border: `1px solid ${T.greySoft}`, borderRadius: T.radSm, padding: '0 12px', display: 'flex', alignItems: 'center', fontSize: 14, fontWeight: 600, marginBottom: 14 }}>Madame Claude</div>
            <div style={{ fontSize: 12, fontWeight: 600, color: T.grey80, marginBottom: 6 }}>Tone</div>
            <div style={{ display: 'flex', gap: 6, marginBottom: 16 }}>
              {TONES.map(t => {
                const on = t.id === tone
                return <span key={t.id} style={{ fontSize: 13, fontWeight: 600, padding: '7px 13px', borderRadius: 999, cursor: 'pointer', border: `1px solid ${on ? T.obsidian : T.line}`, background: on ? T.lemon : T.card, color: T.obsidian }}>{t.label}</span>
              })}
            </div>
            <div style={{ fontSize: 12, fontWeight: 600, color: T.grey80, marginBottom: 8 }}>Rules</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
              {['Answer only from course content', "Encourage — don't give the full answer away", 'Reply in French, then English'].map((r, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13.5, color: T.ink }}>
                  <span style={{ width: 18, height: 18, borderRadius: T.radSm, background: T.obsidian, color: T.lemon, display: 'grid', placeItems: 'center', fontSize: 11, fontWeight: 700, flexShrink: 0 }}>✓</span>
                  {r}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RIGHT — live test chat */}
        <section style={{ flex: '1.08 1 0', minWidth: 0, background: T.cardSoft, display: 'flex', flexDirection: 'column', padding: '20px 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: T.greySoft }}>Test your tutor · what learners see</div>
            {published && <span style={{ fontSize: 11, fontWeight: 600, color: T.green, background: T.greenWash, border: '1px solid #d3e0a8', borderRadius: 999, padding: '3px 9px' }}>● Live</span>}
          </div>

          <div style={{ flex: 1, minHeight: 0, background: T.card, border: `1px solid ${T.line}`, borderRadius: T.radLg, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
            <div style={{ flex: 1, overflowY: 'auto', padding: 18, display: 'flex', flexDirection: 'column', gap: 14 }}>
              <ChatBody scenario={scenario} tone={tone} />
            </div>
            <div style={{ flexShrink: 0, borderTop: `1px solid ${T.lineSoft}`, padding: 12, display: 'flex', gap: 8 }}>
              <div style={{ flex: 1, height: 40, border: `1px solid ${T.greySoft}`, borderRadius: T.radMd, padding: '0 12px', display: 'flex', alignItems: 'center', fontSize: 13.5, color: T.greySoft }}>Ask your tutor a question…</div>
              <button style={{ width: 40, height: 40, background: T.lemon, color: T.obsidian, border: `1px solid ${T.obsidian}`, borderRadius: T.radMd, fontSize: 15, cursor: 'pointer' }}>↑</button>
            </div>
          </div>
        </section>
      </div>
    </div>
    </AdminShell>
  )
}

function ChatBody({ scenario, tone }: { scenario: TutorState['scenario']; tone: TutorState['tone'] }) {
  if (scenario === 'untrained') {
    return (
      <div style={{ margin: 'auto', textAlign: 'center', maxWidth: 320, color: T.grey }}>
        <div style={{ width: 44, height: 44, borderRadius: 999, background: T.cardSoft, border: `1px solid ${T.line}`, display: 'grid', placeItems: 'center', margin: '0 auto 14px', fontSize: 20 }}>📖</div>
        <div style={{ fontFamily: T.serif, fontSize: 19, color: T.ink, marginBottom: 6 }}>Train your tutor first</div>
        <div style={{ fontSize: 13.5, lineHeight: 1.5 }}>Pick at least one course on the left. Your tutor learns from those lessons — then you can test it here.</div>
      </div>
    )
  }

  return (
    <>
      <LearnerBubble>What's the difference between <em>tu</em> and <em>vous</em>?</LearnerBubble>
      {scenario === 'training' ? (
        <TutorBubble>
          I'm still reading through <strong>Advanced French</strong> — about 60% done. You can already ask me about <strong>French 101</strong> or <strong>Conversational French</strong>!
          <div style={{ height: 4, borderRadius: 999, background: T.cardSoft, marginTop: 10, overflow: 'hidden' }}><div style={{ width: '60%', height: '100%', background: T.lemon }} /></div>
        </TutorBubble>
      ) : (
        <TutorBubble>
          {OPENER[tone]} In French, «<strong>tu</strong>» is informal — for friends, family, and people your own age. «<strong>vous</strong>» is formal or plural — for strangers, elders, or to show respect.
          <br /><br />A good rule: start with «vous» until someone invites you to use «tu». Want to try a couple of examples together?
          <Citation>French&nbsp;101 · Lesson&nbsp;3 — Greetings &amp; politeness</Citation>
        </TutorBubble>
      )}

      {scenario === 'multiturn' && (
        <>
          <LearnerBubble>So with a new coworker?</LearnerBubble>
          <TutorBubble>
            With a new coworker, go with «<strong>vous</strong>» at first — it's the safe, respectful choice. Many offices switch to «tu» quickly, but let them lead. Try: «<em>Vous avez passé un bon week-end&nbsp;?</em>»
            <Citation>Conversational French · Lesson&nbsp;7 — At work</Citation>
          </TutorBubble>
        </>
      )}
    </>
  )
}
