import type { IterationDefinition } from '../../types'
import { Content } from './Content'
import { FineTuning } from './controls'

export type TagState = {
  scenario: 'building' | 'empty' | 'offer' | 'published'
  step: 'questions' | 'rule' | 'capture' | 'offer' | 'publish'
}

export const scoreTags: IterationDefinition<TagState> = {
  config: {
    label: '2b · Tag to a level',
    summary: 'No math — each answer is tagged to a level; a result rule (highest / most-picked) decides the outcome',
    changes: ['+ Result-rule step', '+ per-answer level tags', '+ level → course map', '− point arithmetic'],
  },
  defaultState: { scenario: 'building', step: 'rule' },
  presets: [
    { id: 'rule', label: 'Result rule', hint: 'The new bit — how the final level is chosen' },
    { id: 'questions', label: 'Questions + tags', hint: 'Each answer tagged to a level' },
    { id: 'empty', label: 'No tags yet', hint: 'Answers not yet assigned a level' },
    { id: 'offer', label: 'Offer step', hint: 'Per-level course offers' },
    { id: 'published', label: 'Published', hint: 'Live — rule locked in' },
  ],
  resolvePreset(id) {
    switch (id) {
      case 'questions': return { scenario: 'building', step: 'questions' }
      case 'empty': return { scenario: 'empty', step: 'questions' }
      case 'offer': return { scenario: 'offer', step: 'offer' }
      case 'published': return { scenario: 'published', step: 'publish' }
      default: return { scenario: 'building', step: 'rule' }
    }
  },
  Content,
  FineTuning,
}
