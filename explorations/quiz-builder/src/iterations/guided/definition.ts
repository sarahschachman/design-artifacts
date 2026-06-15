import type { IterationDefinition } from '../../types'
import { Content } from './Content'
import { FineTuning } from './controls'

export type QuizState = {
  scenario: 'building' | 'empty' | 'complete' | 'offer' | 'published'
  step: 'questions' | 'capture' | 'offer' | 'publish'
}

export const guided: IterationDefinition<QuizState> = {
  config: {
    label: 'A · Guided step-rail',
    tag: 'picked',
    summary: 'Friendly, opinionated builder — a left rail walks the creator step-by-step',
    changes: ['+ step rail (Questions→Capture→Offer→Publish)', '+ guided helper copy', '+ single focused canvas'],
  },
  defaultState: { scenario: 'building', step: 'questions' },
  presets: [
    { id: 'building', label: 'Mid-build', hint: 'Two questions in, working on the quiz' },
    { id: 'empty', label: 'New quiz', hint: 'Blank slate — first question prompt' },
    { id: 'offer', label: 'Offer step', hint: 'Configuring the course offer (conversion)' },
    { id: 'complete', label: 'Ready to publish', hint: 'All steps done, green checks' },
    { id: 'published', label: 'Published', hint: 'Live — success state' },
  ],
  resolvePreset(id) {
    switch (id) {
      case 'empty': return { scenario: 'empty', step: 'questions' }
      case 'offer': return { scenario: 'offer', step: 'offer' }
      case 'complete': return { scenario: 'complete', step: 'publish' }
      case 'published': return { scenario: 'published', step: 'publish' }
      default: return { scenario: 'building', step: 'questions' }
    }
  },
  Content,
  FineTuning,
}
