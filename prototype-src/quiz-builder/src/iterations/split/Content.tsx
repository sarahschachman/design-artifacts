import type { SplitState } from './definition'

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

function PrimaryBtn({ children, full }: { children: React.ReactNode; full?: boolean }) {
  return (
    <button style={{
      height: 40, padding: '0 18px', width: full ? '100%' : undefined,
      background: T.lemon, color: T.obsidian, border: `1px solid ${T.obsidian}`,
      borderRadius: T.radMd, fontFamily: T.sans, fontSize: 14, fontWeight: 600, cursor: 'pointer',
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

// ─── Left: config panel ───
function ConfigSection({ title, badge, children, open = true }: { title: string; badge?: string; children?: React.ReactNode; open?: boolean }) {
  return (
    <div style={{ background: T.card, border: `1px solid ${T.line}`, borderRadius: T.radLg, overflow: 'hidden' }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 10, padding: '13px 16px',
        borderBottom: open && children ? `1px solid ${T.lineSoft}` : 'none',
      }}>
        <span style={{ color: T.greySoft, fontSize: 12 }}>{open ? '▾' : '▸'}</span>
        <span style={{ fontSize: 14, fontWeight: 600, color: T.ink, flex: 1 }}>{title}</span>
        {badge && (
          <span style={{
            fontSize: 11, fontWeight: 600, padding: '2px 8px', borderRadius: 999,
            background: T.lemonWash, color: T.obsidian, border: '1px solid #e4f29a',
          }}>{badge}</span>
        )}
      </div>
      {open && children && <div style={{ padding: 16 }}>{children}</div>}
    </div>
  )
}

function FieldRow({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ marginBottom: 12 }}>
      <div style={{ fontSize: 12, fontWeight: 600, color: T.grey80, marginBottom: 6 }}>{label}</div>
      <div style={{
        height: 40, border: `1px solid ${T.greySoft}`, borderRadius: T.radSm, padding: '0 12px',
        display: 'flex', alignItems: 'center', fontSize: 14, color: T.ink, background: T.card,
      }}>{value}</div>
    </div>
  )
}

function ConfigPanel({ scenario }: { scenario: SplitState['scenario'] }) {
  if (scenario === 'empty') {
    return (
      <div style={{
        border: `1.5px dashed ${T.greySoft}`, borderRadius: T.radLg, padding: '40px 20px',
        textAlign: 'center', background: T.card,
      }}>
        <div style={{ fontFamily: T.serif, fontSize: 19, marginBottom: 6 }}>Build your quiz</div>
        <div style={{ fontSize: 13.5, color: T.grey, marginBottom: 18 }}>
          Add a question to see it appear live on the right.
        </div>
        <PrimaryBtn>+ Add question</PrimaryBtn>
      </div>
    )
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <ConfigSection title="Question 1" badge="editing">
        <FieldRow label="Question" value="Pick the sentence that sounds right to you." />
        <div style={{ fontSize: 12, fontWeight: 600, color: T.grey80, marginBottom: 6 }}>Answers → level</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
          {[
            { a: "Je m'appelle Marie.", lvl: 'Beginner' },
            { a: 'Il faut que je parte.', lvl: 'Intermediate' },
            { a: "J'aurais dû le savoir.", lvl: 'Advanced' },
          ].map((o, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: 9, height: 38, padding: '0 11px',
              border: `1px solid ${T.line}`, borderRadius: T.radSm, background: T.canvas, fontSize: 13.5, color: T.grey80,
            }}>
              <span style={{ width: 14, height: 14, borderRadius: 999, border: `1.5px solid ${T.greySoft}`, flexShrink: 0 }} />
              {o.a}
              <span style={{ marginLeft: 'auto', color: T.greySoft, fontSize: 12 }}>→ {o.lvl}</span>
            </div>
          ))}
        </div>
      </ConfigSection>
      <ConfigSection title="Question 2" open={false} />
      <ConfigSection title="Lead capture" badge="on" open={false} />
      <ConfigSection title="Course offer" badge={scenario === 'full' || scenario === 'published' ? '$89' : 'set up'} open={false} />
    </div>
  )
}

// ─── Right: live learner preview (phone frame) ───
function PreviewQuiz() {
  return (
    <div style={{ padding: '28px 22px', display: 'flex', flexDirection: 'column', minHeight: '100%' }}>
      <div style={{ fontSize: 12, fontWeight: 600, color: T.green, marginBottom: 10 }}>QUESTION 1 OF 3</div>
      <div style={{ height: 4, borderRadius: 999, background: T.cardSoft, marginBottom: 22, overflow: 'hidden' }}>
        <div style={{ width: '33%', height: '100%', background: T.lemon }} />
      </div>
      <div style={{ fontFamily: T.serif, fontSize: 25, fontWeight: 500, lineHeight: 1.18, marginBottom: 22 }}>
        Pick the sentence that sounds right to you.
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {["Je m'appelle Marie.", 'Il faut que je parte.', "J'aurais dû le savoir."].map((o, i) => (
          <div key={i} style={{
            padding: '14px 16px', borderRadius: T.radMd, fontSize: 15, fontWeight: 500,
            border: `1.5px solid ${i === 1 ? T.obsidian : T.line}`,
            background: i === 1 ? T.lemonWash : T.card, color: T.ink,
          }}>{o}</div>
        ))}
      </div>
    </div>
  )
}

function PreviewCapture() {
  return (
    <div style={{ padding: '28px 22px', display: 'flex', flexDirection: 'column', minHeight: '100%' }}>
      <div style={{ height: 4, borderRadius: 999, background: T.cardSoft, marginBottom: 28, overflow: 'hidden' }}>
        <div style={{ width: '100%', height: '100%', background: T.lemon }} />
      </div>
      <div style={{
        width: 56, height: 56, borderRadius: 999, margin: '8px 0 18px',
        background: 'linear-gradient(135deg, #E6FF32 0%, #B6F2E8 100%)', display: 'grid', placeItems: 'center',
        fontSize: 24, border: `1px solid ${T.line}`,
      }}>✉</div>
      <div style={{ fontFamily: T.serif, fontSize: 25, fontWeight: 500, lineHeight: 1.18, marginBottom: 8 }}>
        Your result is ready
      </div>
      <div style={{ fontSize: 14.5, color: T.grey, lineHeight: 1.5, marginBottom: 22 }}>
        Drop your email and we'll show your personalized course match right away.
      </div>
      <div style={{
        height: 46, border: `1.5px solid ${T.obsidian}`, borderRadius: T.radMd, padding: '0 14px',
        display: 'flex', alignItems: 'center', fontSize: 14.5, color: T.greySoft, marginBottom: 12, background: T.card,
      }}>you@example.com</div>
      <PrimaryBtn full>Show my result →</PrimaryBtn>
      <div style={{ fontSize: 11.5, color: T.greySoft, textAlign: 'center', marginTop: 10 }}>
        No spam. Unsubscribe anytime.
      </div>
    </div>
  )
}

function PreviewResult() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100%' }}>
      <div style={{
        background: 'linear-gradient(150deg, #E6FF32 0%, #B6F2E8 70%, #E5CCFF 100%)',
        padding: '30px 22px 26px',
      }}>
        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.06em', color: T.obsidian, marginBottom: 8 }}>
          YOUR FRENCH LEVEL
        </div>
        <div style={{ fontFamily: T.serif, fontSize: 27, fontWeight: 500, lineHeight: 1.12, color: T.obsidian }}>
          You're at Intermediate · B1
        </div>
      </div>
      <div style={{ padding: '22px', display: 'flex', flexDirection: 'column', gap: 16, flex: 1 }}>
        <div style={{ fontSize: 14.5, color: T.grey80, lineHeight: 1.55 }}>
          You understand more than you can say yet. This course turns what you know into confident conversation.
        </div>
        <div style={{
          background: T.card, border: `1px solid ${T.line}`, borderRadius: T.radLg, padding: 16,
          display: 'flex', flexDirection: 'column', gap: 12,
        }}>
          <div style={{ display: 'flex', gap: 13 }}>
            <div style={{
              width: 60, height: 60, borderRadius: T.radMd, flexShrink: 0,
              background: 'linear-gradient(135deg, #480601 0%, #711014 100%)', border: `1px solid ${T.line}`,
            }} />
            <div>
              <div style={{ fontFamily: T.serif, fontSize: 17, fontWeight: 500, lineHeight: 1.2 }}>
                Conversational French
              </div>
              <div style={{ fontSize: 12.5, color: T.grey, marginTop: 3 }}>8 weeks · 32 lessons · live practice</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontFamily: T.serif, fontSize: 22, fontWeight: 500 }}>$89</span>
            <span style={{ fontSize: 12.5, color: T.greySoft, textDecoration: 'line-through' }}>$129</span>
          </div>
          <PrimaryBtn full>Enroll now →</PrimaryBtn>
        </div>
        <div style={{ fontSize: 12, color: T.greySoft, textAlign: 'center' }}>
          ★★★★★ Loved by 1,200+ learners
        </div>
      </div>
    </div>
  )
}

const STAGES = [
  { id: 'quiz', label: 'Quiz' },
  { id: 'capture', label: 'Lead capture' },
  { id: 'result', label: 'Result + offer' },
] as const

export function Content({ state }: { state: SplitState }) {
  const { scenario, previewStage } = state
  const published = scenario === 'published'

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
          <span style={{
            fontSize: 11, fontWeight: 600, padding: '3px 9px', borderRadius: 999,
            background: published ? T.greenWash : T.cardSoft, color: published ? T.green : T.grey80,
            border: `1px solid ${published ? '#d3e0a8' : T.line}`,
          }}>{published ? '● Live' : 'Draft'}</span>
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <GhostBtn>Share preview</GhostBtn>
          <PrimaryBtn>{published ? 'Update' : 'Publish'}</PrimaryBtn>
        </div>
      </header>

      <div style={{ flex: 1, display: 'flex', minHeight: 0 }}>
        {/* Left — config */}
        <section style={{ flex: '1 1 0', minWidth: 0, overflowY: 'auto', padding: '24px 26px', borderRight: `1px solid ${T.line}` }}>
          <div style={{
            fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
            color: T.greySoft, marginBottom: 14,
          }}>Build</div>
          <ConfigPanel scenario={scenario} />
        </section>

        {/* Right — live preview */}
        <section style={{
          flex: '1 1 0', minWidth: 0, background: T.cardSoft, display: 'flex', flexDirection: 'column',
          padding: '20px 26px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
            <div style={{
              fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: T.greySoft,
            }}>Live preview · what your lead sees</div>
            {/* Stage scrubber */}
            <div style={{ display: 'flex', gap: 4, background: T.card, border: `1px solid ${T.line}`, borderRadius: 999, padding: 3 }}>
              {STAGES.map(s => {
                const on = s.id === previewStage
                return (
                  <span key={s.id} style={{
                    fontSize: 11.5, fontWeight: 600, padding: '4px 10px', borderRadius: 999,
                    background: on ? T.obsidian : 'transparent', color: on ? T.lemon : T.grey,
                  }}>{s.label}</span>
                )
              })}
            </div>
          </div>

          {/* Phone frame */}
          <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'flex-start', overflow: 'hidden' }}>
            <div style={{
              width: 340, maxHeight: '100%', background: T.card, borderRadius: 26,
              border: `8px solid ${T.obsidian}`, overflow: 'hidden', boxShadow: '0 18px 50px rgba(0,0,0,0.16)',
              display: 'flex', flexDirection: 'column',
            }}>
              <div style={{ flex: 1, overflowY: 'auto' }}>
                {previewStage === 'quiz' && <PreviewQuiz />}
                {previewStage === 'capture' && <PreviewCapture />}
                {previewStage === 'result' && <PreviewResult />}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
