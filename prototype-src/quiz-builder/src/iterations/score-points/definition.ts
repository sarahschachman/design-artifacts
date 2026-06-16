import type { IterationDefinition } from '../../types'
import { Content } from './Content'
import { FineTuning } from './controls'

export type ScoreState = {
  scenario: 'building' | 'empty' | 'offer' | 'published'
  step: 'questions' | 'scoring' | 'capture' | 'offer' | 'publish'
}

export const scorePoints: IterationDefinition<ScoreState> = {
  config: {
    label: '2a · Points + bands',
    summary: 'Each answer is worth points; score bands map ranges → course (French 101 / Intermediate / Advanced)',
    changes: ['+ Scoring step in rail', '+ per-answer point values', '+ score-band → course editor'],
  },
  defaultState: { scenario: 'building', step: 'scoring' },
  presets: [
    { id: 'scoring', label: 'Scoring step', hint: 'The new bit — point bands map to courses' },
    { id: 'questions', label: 'Questions + points', hint: 'Each answer carries a point value' },
    { id: 'empty', label: 'No bands yet', hint: 'Scoring step before any band is added' },
    { id: 'offer', label: 'Offer step', hint: 'Per-band course offers' },
    { id: 'published', label: 'Published', hint: 'Live — scoring locked in' },
  ],
  resolvePreset(id) {
    switch (id) {
      case 'questions': return { scenario: 'building', step: 'questions' }
      case 'empty': return { scenario: 'empty', step: 'scoring' }
      case 'offer': return { scenario: 'offer', step: 'offer' }
      case 'published': return { scenario: 'published', step: 'publish' }
      default: return { scenario: 'building', step: 'scoring' }
    }
  },
  Content,
  FineTuning,
}
