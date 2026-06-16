import type { QuizState } from './definition'

// ─── DESIGN.md tokens, inlined (this is the test: the contract → UI) ───
const T = {
  lemon: '#E6FF32',
  obsidian: '#222222',
  ink: '#2a2a2a',
  grey80: '#4e4e4e',
  grey: '#6b6b6b',
  greySoft: '#9a9a9a',
  line: '#e7e4dd',
  lineSoft: '#efece6',
  canvas: '#faf9f5',
  card: '#ffffff',
  cardSoft: '#f4f2ec',
  lemonWash: '#f7ffd6',
  green: '#465F01',
  greenWash: '#eef4d9',
  serif: "'Reckless-Light', 'Reckless', 'Fraunces', Palatino, Garamond, Georgia, serif",
  sans: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  radSm: 4,
  radMd: 6,
  radLg: 8,
}

const STEPS = [
  { id: 'questions', label: 'Questions', sub: '3 questions' },
  { id: 'capture', label: 'Lead capture', sub: 'Email gate' },
  { id: 'offer', label: 'Offer', sub: 'Course + price' },
  { id: 'publish', label: 'Publish', sub: 'Go live' },
] as const

function Pill({ children, tone = 'neutral' }: { children: React.ReactNode; tone?: 'neutral' | 'lemon' | 'green' }) {
  const map = {
    neutral: { bg: T.cardSoft, fg: T.grey80, bd: T.line },
    lemon: { bg: T.lemonWash, fg: T.obsidian, bd: '#d9ec7e' },
    green: { bg: T.greenWash, fg: T.green, bd: '#d3e0a8' },
  }[tone]
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 11, fontWeight: 600,
      letterSpacing: '0.02em', padding: '3px 9px', borderRadius: 999,
      background: map.bg, color: map.fg, border: `1px solid ${map.bd}`,
    }}>{children}</span>
  )
}

function PrimaryBtn({ children, full }: { children: React.ReactNode; full?: boolean }) {
  return (
    <button style={{
      height: 40, padding: '0 18px', width: full ? '100%' : undefined,
      background: T.lemon, color: T.obsidian, border: `1px solid ${T.obsidian}`,
      borderRadius: T.radMd, fontFamily: T.sans, fontSize: 14, fontWeight: 600,
      cursor: 'pointer', boxShadow: '0 1px 0 rgba(0,0,0,0.04)',
    }}>{children}</button>
  )
}

function GhostBtn({ children }: { children: React.ReactNode }) {
  return (
    <button style={{
      height: 40, padding: '0 16px', background: T.card, color: T.obsidian,
      border: `1px solid ${T.obsidian}`, borderRadius: T.radMd, fontFamily: T.sans,
      fontSize: 14, fontWeight: 600, cursor: 'pointer',
    }}>{children}</button>
  )
}

function QuestionCard({ n, q, options }: { n: number; q: string; options: string[] }) {
  return (
    <div style={{
      background: T.card, border: `1px solid ${T.line}`, borderRadius: T.radLg,
      padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: 12,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{
          width: 22, height: 22, borderRadius: 999, background: T.obsidian, color: T.lemon,
          display: 'grid', placeItems: 'center', fontSize: 12, fontWeight: 700, flexShrink: 0,
        }}>{n}</span>
        <div style={{ flex: 1, fontSize: 15, fontWeight: 600, color: T.ink }}>{q}</div>
        <span style={{ color: T.greySoft, fontSize: 18, cursor: 'grab' }}>⋮⋮</span>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, paddingLeft: 32 }}>
        {options.map((o, i) => (
          <span key={i} style={{
            fontSize: 13, color: T.grey80, background: T.canvas, border: `1px solid ${T.line}`,
            borderRadius: T.radSm, padding: '6px 11px',
          }}>{o}</span>
        ))}
        <span style={{
          fontSize: 13, color: T.grey, border: `1px dashed ${T.greySoft}`, borderRadius: T.radSm,
          padding: '6px 11px', cursor: 'pointer',
        }}>+ Option</span>
      </div>
    </div>
  )
}

export function Content({ state }: { state: QuizState }) {
  const { scenario, step } = state
  const stepIndex = STEPS.findIndex(s => s.id === step)

  return (
    <div style={{
      fontFamily: T.sans, background: T.canvas, color: T.ink,
      height: 760, display: 'flex', flexDirection: 'column', overflow: 'hidden',
    }}>
      {/* Top bar */}
      <header style={{
        height: 58, flexShrink: 0, background: T.card, borderBottom: `1px solid ${T.line}`,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 22px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ width: 13, height: 13, borderRadius: 4, background: T.lemon, border: `1px solid ${T.obsidian}` }} />
          <span style={{ fontFamily: T.serif, fontSize: 19, fontWeight: 500, letterSpacing: '-0.2px' }}>
            What's Your French Level?
          </span>
          <Pill tone={scenario === 'published' ? 'green' : 'neutral'}>
            {scenario === 'published' ? '● Live' : 'Draft'}
          </Pill>
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <GhostBtn>Preview</GhostBtn>
          <PrimaryBtn>{scenario === 'published' ? 'Update' : 'Publish quiz'}</PrimaryBtn>
        </div>
      </header>

      <div style={{ flex: 1, display: 'flex', minHeight: 0 }}>
        {/* Step rail */}
        <nav style={{
          width: 244, flexShrink: 0, background: T.card, borderRight: `1px solid ${T.line}`,
          padding: '20px 14px', display: 'flex', flexDirection: 'column', gap: 4,
        }}>
          <div style={{
            fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
            color: T.greySoft, padding: '0 10px 10px',
          }}>Setup steps</div>
          {STEPS.map((s, i) => {
            const active = s.id === step
            const done = i < stepIndex || scenario === 'complete' || scenario === 'published'
            return (
              <div key={s.id} style={{
                display: 'flex', alignItems: 'center', gap: 11, padding: '11px 10px',
                borderRadius: T.radMd, cursor: 'pointer',
                background: active ? T.lemonWash : 'transparent',
                border: active ? `1px solid #e4f29a` : '1px solid transparent',
              }}>
                <span style={{
                  width: 24, height: 24, borderRadius: 999, flexShrink: 0,
                  display: 'grid', placeItems: 'center', fontSize: 12, fontWeight: 700,
                  background: done ? T.obsidian : active ? T.lemon : T.cardSoft,
                  color: done ? T.lemon : active ? T.obsidian : T.greySoft,
                  border: active && !done ? `1px solid ${T.obsidian}` : 'none',
                }}>{done ? '✓' : i + 1}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: active ? 600 : 500, color: T.ink }}>{s.label}</div>
                  <div style={{ fontSize: 11.5, color: T.greySoft }}>{s.sub}</div>
                </div>
              </div>
            )
          })}
          <div style={{ flex: 1 }} />
          <div style={{
            margin: '0 6px', padding: 13, background: T.canvas, border: `1px solid ${T.line}`,
            borderRadius: T.radLg, fontSize: 12, color: T.grey, lineHeight: 1.5,
          }}>
            <strong style={{ color: T.ink }}>Tip</strong> — quizzes with 3–5 questions convert best. Keep it light.
          </div>
        </nav>

        {/* Canvas */}
        <main style={{ flex: 1, overflowY: 'auto', padding: '30px 40px' }}>
          <div style={{ maxWidth: 620 }}>
            <CanvasBody scenario={scenario} step={step} />
          </div>
        </main>
      </div>
    </div>
  )
}

function CanvasBody({ scenario, step }: { scenario: QuizState['scenario']; step: QuizState['step'] }) {
  if (step === 'offer') return <OfferEditor />
  if (step === 'publish') return <PublishPanel published={scenario === 'published'} />

  // Questions step
  return (
    <>
      <div style={{ marginBottom: 4, fontSize: 13, fontWeight: 600, color: T.green, letterSpacing: '0.02em' }}>
        STEP 1 OF 4
      </div>
      <h1 style={{ fontFamily: T.serif, fontSize: 30, fontWeight: 500, letterSpacing: '-0.4px', margin: '0 0 6px' }}>
        Write your quiz questions
      </h1>
      <p style={{ fontSize: 14.5, color: T.grey, lineHeight: 1.55, margin: '0 0 24px', maxWidth: 520 }}>
        Each answer places the learner at a level. Mix a little real French in —
        it makes the quiz feel like a true assessment.
      </p>

      {scenario === 'empty' ? (
        <div style={{
          border: `1.5px dashed ${T.greySoft}`, borderRadius: T.radLg, padding: '44px 24px',
          textAlign: 'center', background: T.card,
        }}>
          <div style={{ fontFamily: T.serif, fontSize: 20, marginBottom: 6 }}>No questions yet</div>
          <div style={{ fontSize: 14, color: T.grey, marginBottom: 20 }}>
            Start with one. We'll suggest answer options as you type.
          </div>
          <PrimaryBtn>+ Add your first question</PrimaryBtn>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <QuestionCard n={1} q="Pick the sentence that sounds right to you." options={["Je m'appelle Marie.", 'Il faut que je parte.', "J'aurais dû le savoir."]} />
          <QuestionCard n={2} q="Watching a French film with no subtitles, you…" options={['Feel completely lost', 'Catch the main idea', 'Follow most of it']} />
          <button style={{
            height: 48, background: T.card, color: T.obsidian, border: `1.5px dashed ${T.greySoft}`,
            borderRadius: T.radLg, fontFamily: T.sans, fontSize: 14, fontWeight: 600, cursor: 'pointer',
          }}>+ Add question</button>
        </div>
      )}
    </>
  )
}

function OfferEditor() {
  return (
    <>
      <div style={{ marginBottom: 4, fontSize: 13, fontWeight: 600, color: T.green, letterSpacing: '0.02em' }}>
        STEP 3 OF 4
      </div>
      <h1 style={{ fontFamily: T.serif, fontSize: 30, fontWeight: 500, letterSpacing: '-0.4px', margin: '0 0 6px' }}>
        Make the offer
      </h1>
      <p style={{ fontSize: 14.5, color: T.grey, lineHeight: 1.55, margin: '0 0 24px', maxWidth: 520 }}>
        This is what every lead sees with their result. Recommend the course that matches their answers.
      </p>

      <div style={{
        background: T.card, border: `1px solid ${T.line}`, borderRadius: T.radLg, overflow: 'hidden',
      }}>
        <div style={{
          height: 120, background: 'linear-gradient(120deg, #E6FF32 0%, #B6F2E8 100%)',
          display: 'flex', alignItems: 'flex-end', padding: 16,
        }}>
          <Pill tone="neutral">Recommended result</Pill>
        </div>
        <div style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div>
            <label style={{ fontSize: 12, fontWeight: 600, color: T.grey80 }}>Course</label>
            <div style={{
              marginTop: 6, height: 44, border: `1px solid ${T.greySoft}`, borderRadius: T.radSm,
              padding: '0 12px', display: 'flex', alignItems: 'center', fontSize: 15, fontWeight: 600,
              background: T.card,
            }}>Conversational French · B1→B2</div>
          </div>
          <div style={{ display: 'flex', gap: 14 }}>
            <div style={{ flex: 1 }}>
              <label style={{ fontSize: 12, fontWeight: 600, color: T.grey80 }}>Price</label>
              <div style={{
                marginTop: 6, height: 44, border: `1px solid ${T.greySoft}`, borderRadius: T.radSm,
                padding: '0 12px', display: 'flex', alignItems: 'center', fontSize: 15, background: T.card,
              }}>$89</div>
            </div>
            <div style={{ flex: 1 }}>
              <label style={{ fontSize: 12, fontWeight: 600, color: T.grey80 }}>Button label</label>
              <div style={{
                marginTop: 6, height: 44, border: `1px solid ${T.greySoft}`, borderRadius: T.radSm,
                padding: '0 12px', display: 'flex', alignItems: 'center', fontSize: 15, background: T.card,
              }}>Enroll now →</div>
            </div>
          </div>
          <div style={{
            marginTop: 4, paddingTop: 16, borderTop: `1px solid ${T.lineSoft}`,
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}>
            <div style={{ fontSize: 13, color: T.grey }}>Preview button</div>
            <PrimaryBtn>Enroll now →</PrimaryBtn>
          </div>
        </div>
      </div>
    </>
  )
}

function PublishPanel({ published }: { published: boolean }) {
  const checks = ['3 placement questions added', 'Email capture turned on', 'Course offer set ($89)', 'Level results page styled']
  return (
    <>
      <div style={{ marginBottom: 4, fontSize: 13, fontWeight: 600, color: T.green, letterSpacing: '0.02em' }}>
        STEP 4 OF 4
      </div>
      <h1 style={{ fontFamily: T.serif, fontSize: 30, fontWeight: 500, letterSpacing: '-0.4px', margin: '0 0 6px' }}>
        {published ? 'Your quiz is live 🎉' : 'Ready to go live'}
      </h1>
      <p style={{ fontSize: 14.5, color: T.grey, lineHeight: 1.55, margin: '0 0 24px', maxWidth: 520 }}>
        {published
          ? 'Share the link anywhere — every completion captures a lead and shows your offer.'
          : 'Everything checks out. Publish to start collecting leads.'}
      </p>

      {published && (
        <div style={{
          background: T.greenWash, border: `1px solid #d3e0a8`, borderRadius: T.radLg,
          padding: '14px 16px', marginBottom: 18, display: 'flex', alignItems: 'center', gap: 12,
        }}>
          <span style={{ fontSize: 13, color: T.green, fontWeight: 600, flexShrink: 0 }}>Public link</span>
          <code style={{
            flex: 1, fontSize: 13, color: T.ink, background: T.card, border: `1px solid ${T.line}`,
            borderRadius: T.radSm, padding: '7px 10px', overflow: 'hidden', textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}>teachable.com/quiz/whats-your-french-level</code>
          <GhostBtn>Copy</GhostBtn>
        </div>
      )}

      <div style={{
        background: T.card, border: `1px solid ${T.line}`, borderRadius: T.radLg, padding: 18,
        display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 22,
      }}>
        {checks.map((c, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
            <span style={{
              width: 22, height: 22, borderRadius: 999, background: T.obsidian, color: T.lemon,
              display: 'grid', placeItems: 'center', fontSize: 12, fontWeight: 700,
            }}>✓</span>
            <span style={{ fontSize: 14.5, color: T.ink }}>{c}</span>
          </div>
        ))}
      </div>

      {!published && <PrimaryBtn full>Publish quiz</PrimaryBtn>}
    </>
  )
}
