import type { CanvasState } from './definition'

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
  serif: "'Fraunces', 'Tiempos Headline', Palatino, Georgia, serif",
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

// A block is a draggable surface with a hover handle on the left.
function Block({ kind, children }: { kind: string; children: React.ReactNode }) {
  return (
    <div style={{ position: 'relative', display: 'flex', gap: 10, alignItems: 'flex-start' }}>
      <div style={{
        width: 26, paddingTop: 16, display: 'flex', flexDirection: 'column', alignItems: 'center',
        gap: 4, color: T.greySoft, flexShrink: 0,
      }}>
        <span style={{ cursor: 'grab', fontSize: 15, lineHeight: 1 }}>⋮⋮</span>
      </div>
      <div style={{
        flex: 1, background: T.card, border: `1px solid ${T.line}`, borderRadius: T.radLg,
        padding: '16px 18px', position: 'relative',
      }}>
        <div style={{
          position: 'absolute', top: 12, right: 14, fontSize: 10.5, fontWeight: 700,
          letterSpacing: '0.08em', textTransform: 'uppercase', color: T.greySoft,
        }}>{kind}</div>
        {children}
      </div>
    </div>
  )
}

function AddBlockRow({ open }: { open: boolean }) {
  const blockTypes = [
    { icon: '◉', label: 'Multiple choice' },
    { icon: '✎', label: 'Short answer' },
    { icon: '✉', label: 'Lead capture' },
    { icon: '★', label: 'Course offer' },
  ]
  if (!open) {
    return (
      <div style={{ display: 'flex', gap: 10 }}>
        <div style={{ width: 26, flexShrink: 0 }} />
        <button style={{
          flex: 1, height: 40, background: 'transparent', color: T.grey,
          border: `1.5px dashed ${T.line}`, borderRadius: T.radLg, fontFamily: T.sans,
          fontSize: 13.5, fontWeight: 500, cursor: 'pointer', textAlign: 'left', paddingLeft: 16,
        }}>＋ Add a block</button>
      </div>
    )
  }
  return (
    <div style={{ display: 'flex', gap: 10 }}>
      <div style={{ width: 26, flexShrink: 0 }} />
      <div style={{
        flex: 1, background: T.card, border: `1px solid ${T.obsidian}`, borderRadius: T.radLg,
        padding: 8, boxShadow: '0 8px 24px rgba(0,0,0,0.10)',
      }}>
        <div style={{
          fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
          color: T.greySoft, padding: '4px 8px 8px',
        }}>Insert block</div>
        {blockTypes.map((b, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: 12, padding: '9px 8px', borderRadius: T.radMd,
            cursor: 'pointer', background: i === 0 ? T.lemonWash : 'transparent',
          }}>
            <span style={{
              width: 30, height: 30, borderRadius: T.radSm, background: T.canvas,
              border: `1px solid ${T.line}`, display: 'grid', placeItems: 'center', fontSize: 14,
            }}>{b.icon}</span>
            <span style={{ fontSize: 14, fontWeight: 500, color: T.ink }}>{b.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function QuestionBlock({ n, q, options }: { n: number; q: string; options: string[] }) {
  return (
    <Block kind={`Q${n} · Multiple choice`}>
      <div style={{ fontFamily: T.serif, fontSize: 18, fontWeight: 500, marginBottom: 12, paddingRight: 90 }}>{q}</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
        {options.map((o, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: 10, padding: '9px 12px',
            border: `1px solid ${T.line}`, borderRadius: T.radSm, background: T.canvas, fontSize: 14, color: T.grey80,
          }}>
            <span style={{ width: 16, height: 16, borderRadius: 999, border: `1.5px solid ${T.greySoft}`, flexShrink: 0 }} />
            {o}
          </div>
        ))}
      </div>
    </Block>
  )
}

export function Content({ state }: { state: CanvasState }) {
  const { scenario, addMenu } = state
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
            Untitled lead quiz
          </span>
          <span style={{
            fontSize: 11, fontWeight: 600, padding: '3px 9px', borderRadius: 999,
            background: published ? T.greenWash : T.cardSoft, color: published ? T.green : T.grey80,
            border: `1px solid ${published ? '#d3e0a8' : T.line}`,
          }}>{published ? '● Live' : 'Draft · autosaved'}</span>
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <GhostBtn>Preview</GhostBtn>
          <PrimaryBtn>{published ? 'Update' : 'Publish'}</PrimaryBtn>
        </div>
      </header>

      {/* Canvas */}
      <main style={{ flex: 1, overflowY: 'auto', padding: '34px 0 80px' }}>
        <div style={{ maxWidth: 660, margin: '0 auto', padding: '0 28px' }}>
          {published && (
            <div style={{
              background: T.greenWash, border: `1px solid #d3e0a8`, borderRadius: T.radLg,
              padding: '12px 16px', marginBottom: 22, display: 'flex', alignItems: 'center', gap: 10,
              fontSize: 13.5, color: T.green, fontWeight: 500,
            }}>
              <span style={{ fontWeight: 700 }}>● Live</span>
              This quiz is collecting leads at teachable.com/quiz/whats-your-french-level
            </div>
          )}

          {/* Title block — the quiz intro */}
          <div style={{ marginBottom: 22, paddingLeft: 36 }}>
            <input
              readOnly
              value="What's your French level?"
              style={{
                width: '100%', border: 'none', outline: 'none', background: 'transparent',
                fontFamily: T.serif, fontSize: 34, fontWeight: 500, letterSpacing: '-0.6px', color: T.ink, padding: 0,
              }}
            />
            <div style={{ fontSize: 15, color: T.grey, marginTop: 8, lineHeight: 1.55 }}>
              Answer 3 quick questions to find your level — and the course to keep going.
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {scenario === 'empty' ? (
              <>
                <Block kind="Empty">
                  <div style={{ textAlign: 'center', padding: '20px 0', color: T.grey }}>
                    <div style={{ fontFamily: T.serif, fontSize: 19, color: T.ink, marginBottom: 4 }}>
                      Add your first block
                    </div>
                    <div style={{ fontSize: 13.5 }}>Type ＋ or pick a block to start building.</div>
                  </div>
                </Block>
                <AddBlockRow open={false} />
              </>
            ) : (
              <>
                <QuestionBlock n={1} q="Pick the sentence that sounds right to you." options={["Je m'appelle Marie.", 'Il faut que je parte.', "J'aurais dû le savoir."]} />
                <QuestionBlock n={2} q="Watching a French film with no subtitles, you…" options={['Feel completely lost', 'Catch the main idea', 'Follow most of it']} />

                {/* Lead capture block */}
                <Block kind="Lead capture">
                  <div style={{ fontFamily: T.serif, fontSize: 18, fontWeight: 500, marginBottom: 4 }}>
                    See your result
                  </div>
                  <div style={{ fontSize: 13.5, color: T.grey, marginBottom: 12 }}>
                    Enter your email and we'll send your personalized course match.
                  </div>
                  <div style={{ display: 'flex', gap: 10 }}>
                    <div style={{
                      flex: 1, height: 42, border: `1px solid ${T.greySoft}`, borderRadius: T.radSm,
                      padding: '0 12px', display: 'flex', alignItems: 'center', fontSize: 14, color: T.greySoft,
                    }}>you@example.com</div>
                    <PrimaryBtn>Show my result</PrimaryBtn>
                  </div>
                </Block>

                {scenario === 'full' || published ? (
                  <Block kind="Course offer">
                    <div style={{ display: 'flex', gap: 16 }}>
                      <div style={{
                        width: 96, height: 96, borderRadius: T.radMd, flexShrink: 0,
                        background: 'linear-gradient(135deg, #E6FF32 0%, #B6F2E8 100%)',
                        border: `1px solid ${T.line}`,
                      }} />
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 12, fontWeight: 600, color: T.green, marginBottom: 4 }}>YOUR LEVEL · B1</div>
                        <div style={{ fontFamily: T.serif, fontSize: 20, fontWeight: 500, marginBottom: 4 }}>
                          Conversational French
                        </div>
                        <div style={{ fontSize: 13.5, color: T.grey, marginBottom: 12 }}>
                          Turn what you already understand into confident, real conversation.
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                          <span style={{ fontFamily: T.serif, fontSize: 22, fontWeight: 500 }}>$89</span>
                          <PrimaryBtn>Enroll now →</PrimaryBtn>
                        </div>
                      </div>
                    </div>
                  </Block>
                ) : (
                  <AddBlockRow open={addMenu} />
                )}
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
