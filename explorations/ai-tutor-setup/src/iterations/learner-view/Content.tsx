import type { LearnerState } from './definition'

const T = {
  lemon: '#E6FF32', obsidian: '#222222', ink: '#2a2a2a', grey80: '#4e4e4e', grey: '#6b6b6b',
  greySoft: '#9a9a9a', line: '#e7e4dd', lineSoft: '#efece6', canvas: '#faf9f5', card: '#ffffff',
  cardSoft: '#f4f2ec', lemonWash: '#f7ffd6', green: '#465F01', greenWash: '#eef4d9',
  serif: "'Reckless-Light', 'Reckless', 'Fraunces', Palatino, Garamond, Georgia, serif",
  sans: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  radSm: 4, radMd: 6, radLg: 8,
}

function PrimaryBtn({ children }: { children: React.ReactNode }) {
  return <button style={{ height: 38, padding: '0 16px', background: T.lemon, color: T.obsidian, border: `1px solid ${T.obsidian}`, borderRadius: T.radMd, fontFamily: T.sans, fontSize: 13.5, fontWeight: 600, cursor: 'pointer' }}>{children}</button>
}
function GhostBtn({ children }: { children: React.ReactNode }) {
  return <button style={{ height: 38, padding: '0 14px', background: T.card, color: T.obsidian, border: `1px solid ${T.obsidian}`, borderRadius: T.radMd, fontFamily: T.sans, fontSize: 13.5, fontWeight: 600, cursor: 'pointer' }}>{children}</button>
}

function SummaryRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ padding: '12px 0', borderBottom: `1px solid ${T.lineSoft}` }}>
      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: T.greySoft, marginBottom: 7 }}>{label}</div>
      {children}
    </div>
  )
}

function Avatar({ size = 28 }: { size?: number }) {
  return <span style={{ width: size, height: size, borderRadius: 999, background: T.obsidian, color: T.lemon, display: 'grid', placeItems: 'center', fontSize: size * 0.4, fontWeight: 700, fontFamily: T.serif, flexShrink: 0 }}>MC</span>
}

export function Content({ state }: { state: LearnerState }) {
  const { scenario } = state
  const published = scenario === 'published'

  return (
    <div style={{ fontFamily: T.sans, background: T.canvas, color: T.ink, height: 760, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <header style={{ height: 58, flexShrink: 0, background: T.card, borderBottom: `1px solid ${T.line}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 22px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ width: 13, height: 13, borderRadius: 4, background: T.lemon, border: `1px solid ${T.obsidian}` }} />
          <span style={{ fontSize: 12.5, color: T.greySoft }}>Apps</span><span style={{ color: T.greySoft }}>›</span>
          <span style={{ fontFamily: T.serif, fontSize: 19, fontWeight: 500, letterSpacing: '-0.2px' }}>AI Tutor</span>
          <span style={{ fontSize: 11, fontWeight: 600, padding: '3px 9px', borderRadius: 999, background: published ? T.greenWash : T.cardSoft, color: published ? T.green : T.grey80, border: `1px solid ${published ? '#d3e0a8' : T.line}` }}>{published ? '● Live' : 'Draft'}</span>
        </div>
        <div style={{ display: 'flex', gap: 10 }}><GhostBtn>Preview</GhostBtn><PrimaryBtn>{published ? 'Update' : 'Publish tutor'}</PrimaryBtn></div>
      </header>

      <div style={{ flex: 1, display: 'flex', minHeight: 0 }}>
        {/* LEFT — admin config summary */}
        <section style={{ flex: '0.8 1 0', minWidth: 0, overflowY: 'auto', padding: '24px 24px', borderRight: `1px solid ${T.line}` }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: T.greySoft, marginBottom: 6 }}>Admin · setup</div>
          <SummaryRow label="Trained on">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {['French 101', 'Conversational French'].map(c => (
                <div key={c} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13.5, color: T.ink }}>
                  <span style={{ width: 16, height: 16, borderRadius: T.radSm, background: T.obsidian, color: T.lemon, display: 'grid', placeItems: 'center', fontSize: 10, fontWeight: 700 }}>✓</span>{c}
                </div>
              ))}
              <div style={{ fontSize: 12, color: T.greySoft }}>30 lessons trained</div>
            </div>
          </SummaryRow>
          <SummaryRow label="Persona">
            <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
              <Avatar size={26} />
              <div><div style={{ fontSize: 14, fontWeight: 600 }}>Madame Claude</div><div style={{ fontSize: 12, color: T.greySoft }}>Warm · cites sources</div></div>
            </div>
          </SummaryRow>
          <SummaryRow label="Rules">
            <div style={{ fontSize: 12.5, color: T.grey80, lineHeight: 1.6 }}>Answers only from content · encourages · French + English</div>
          </SummaryRow>
          <SummaryRow label="Placement">
            <span style={{ fontSize: 12.5, fontWeight: 600, color: T.obsidian, background: T.lemonWash, border: '1px solid #e4f29a', borderRadius: 999, padding: '5px 11px' }}>In-lesson sidebar</span>
          </SummaryRow>
          <div style={{ marginTop: 16, fontSize: 12.5, color: T.grey, lineHeight: 1.5, display: 'flex', gap: 8, alignItems: 'flex-start' }}>
            <span aria-hidden style={{ fontSize: 15 }}>→</span>
            <span>This is exactly what a learner sees inside their lesson, on the right.</span>
          </div>
        </section>

        {/* RIGHT — learner lesson preview */}
        <section style={{ flex: '1.5 1 0', minWidth: 0, background: T.cardSoft, display: 'flex', flexDirection: 'column', padding: '18px 22px', position: 'relative' }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: T.greySoft, marginBottom: 12 }}>Learner preview · in the course</div>

          {/* browser frame */}
          <div style={{ flex: 1, minHeight: 0, background: T.card, borderRadius: 10, border: `1px solid ${T.line}`, boxShadow: '0 12px 36px rgba(0,0,0,0.10)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div style={{ height: 32, flexShrink: 0, background: T.canvas, borderBottom: `1px solid ${T.line}`, display: 'flex', alignItems: 'center', gap: 6, padding: '0 12px' }}>
              <span style={{ width: 9, height: 9, borderRadius: 999, background: '#e0ddd5' }} /><span style={{ width: 9, height: 9, borderRadius: 999, background: '#e0ddd5' }} /><span style={{ width: 9, height: 9, borderRadius: 999, background: '#e0ddd5' }} />
              <span style={{ marginLeft: 8, fontSize: 11, color: T.greySoft }}>yourschool.com/learn/conversational-french</span>
            </div>
            <div style={{ flex: 1, minHeight: 0, display: 'flex' }}>
              {/* lesson content */}
              <div style={{ flex: 1, minWidth: 0, padding: '22px 24px', overflowY: 'auto' }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: T.green, marginBottom: 6 }}>LESSON 5 · CONVERSATIONAL FRENCH</div>
                <h1 style={{ fontFamily: T.serif, fontSize: 26, fontWeight: 500, letterSpacing: '-0.3px', margin: '0 0 14px' }}>Le passé composé</h1>
                <div style={{ height: 150, borderRadius: T.radMd, background: 'linear-gradient(135deg, #480601 0%, #711014 100%)', display: 'grid', placeItems: 'center', marginBottom: 16 }}>
                  <span style={{ width: 44, height: 44, borderRadius: 999, background: 'rgba(255,255,255,0.92)', display: 'grid', placeItems: 'center', fontSize: 16, color: T.obsidian }}>▶</span>
                </div>
                <p style={{ fontSize: 13.5, color: T.grey80, lineHeight: 1.6, margin: 0 }}>The <em>passé composé</em> is the most common way to talk about the past in French. It pairs a helper verb with a past participle — and most verbs follow the same friendly pattern…</p>
                {scenario === 'collapsed' && (
                  <div style={{ marginTop: 18, display: 'flex', gap: 10 }}>
                    <span style={{ fontSize: 12.5, color: T.greySoft }}>Stuck? Your tutor is one click away →</span>
                  </div>
                )}
              </div>

              {/* tutor dock */}
              {scenario !== 'collapsed' && (
                <div style={{ width: 290, flexShrink: 0, borderLeft: `1px solid ${T.line}`, background: T.card, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ flexShrink: 0, padding: '12px 14px', borderBottom: `1px solid ${T.lineSoft}`, display: 'flex', alignItems: 'center', gap: 9 }}>
                    <Avatar size={28} />
                    <div style={{ flex: 1 }}><div style={{ fontSize: 13.5, fontWeight: 600 }}>Madame Claude</div><div style={{ fontSize: 11, color: T.green }}>● AI tutor · online</div></div>
                  </div>
                  <div style={{ flex: 1, minHeight: 0, overflowY: 'auto', padding: 13, display: 'flex', flexDirection: 'column', gap: 11 }}>
                    <LearnerLessonChat scenario={scenario} />
                  </div>
                  <div style={{ flexShrink: 0, borderTop: `1px solid ${T.lineSoft}`, padding: 10, display: 'flex', gap: 7 }}>
                    <div style={{ flex: 1, height: 34, border: `1px solid ${T.greySoft}`, borderRadius: T.radMd, padding: '0 10px', display: 'flex', alignItems: 'center', fontSize: 12.5, color: T.greySoft }}>Ask about this lesson…</div>
                    <button style={{ width: 34, height: 34, background: T.lemon, color: T.obsidian, border: `1px solid ${T.obsidian}`, borderRadius: T.radMd, fontSize: 13, cursor: 'pointer' }}>↑</button>
                  </div>
                </div>
              )}
            </div>

          </div>

          {/* collapsed: tutor minimized to a floating pill over the lesson */}
          {scenario === 'collapsed' && (
            <div style={{ position: 'absolute', right: 38, bottom: 34, zIndex: 2, display: 'inline-flex', alignItems: 'center', gap: 9, background: T.lemon, color: T.obsidian, border: `1px solid ${T.obsidian}`, borderRadius: 999, padding: '10px 16px', fontSize: 13.5, fontWeight: 600, boxShadow: '0 8px 20px rgba(0,0,0,0.16)' }}>
              <span style={{ width: 20, height: 20, borderRadius: 999, background: T.obsidian, color: T.lemon, display: 'grid', placeItems: 'center', fontSize: 9, fontWeight: 700, fontFamily: T.serif }}>MC</span>
              Ask Madame Claude
            </div>
          )}
        </section>
      </div>
    </div>
  )
}

function LearnerLessonChat({ scenario }: { scenario: LearnerState['scenario'] }) {
  const tutorBubble = (children: React.ReactNode) => (
    <div style={{ background: T.cardSoft, border: `1px solid ${T.line}`, borderRadius: 10, borderTopLeftRadius: 3, padding: '10px 12px', fontSize: 12.5, lineHeight: 1.5, color: T.ink }}>{children}</div>
  )
  const learnerBubble = (children: React.ReactNode) => (
    <div style={{ alignSelf: 'flex-end', maxWidth: '88%', background: T.lemonWash, border: '1px solid #e4f29a', borderRadius: 10, borderTopRightRadius: 3, padding: '8px 12px', fontSize: 12.5, lineHeight: 1.45, color: T.ink }}>{children}</div>
  )

  if (scenario === 'fresh') {
    return (
      <>
        {tutorBubble(<>Bonjour&nbsp;! I'm <strong>Madame Claude</strong>. I've studied this whole course — ask me anything about <em>le passé composé</em>.</>)}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {['How do I form it?', 'avoir or être?', 'Give me an example'].map(s => (
            <span key={s} style={{ fontSize: 12, color: T.obsidian, background: T.card, border: `1px solid ${T.obsidian}`, borderRadius: 999, padding: '5px 10px' }}>{s}</span>
          ))}
        </div>
      </>
    )
  }

  // answered / published
  return (
    <>
      {learnerBubble('How do I form the passé composé?')}
      {tutorBubble(
        <>
          Great question! You combine a <strong>helper verb</strong> (avoir or être) with the <strong>past participle</strong>:
          <br /><br /><em>j'ai mangé</em> = I ate · <em>elle est partie</em> = she left.
          <br /><br />Most verbs use <strong>avoir</strong>; a small group (aller, venir, naître…) use <strong>être</strong>. Want to try conjugating one?
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 8, fontSize: 11, color: T.grey80, background: T.card, border: `1px solid ${T.line}`, borderRadius: T.radSm, padding: '4px 8px' }}>
            <span aria-hidden>📖</span> Conversational French · Lesson 5
          </div>
        </>
      )}
    </>
  )
}
