import type { IterationDefinition } from '../../types'
import { Content } from './Content'
import { FineTuning } from './controls'

export type BranchState = {
  scenario: 'building' | 'empty' | 'offer' | 'published'
  step: 'questions' | 'logic' | 'capture' | 'offer' | 'publish'
}

export const scoreBranch: IterationDefinition<BranchState> = {
  config: {
    label: '2c · Branching logic',
    summary: 'Each answer routes to the next question or jumps to a result — an adaptive decision tree',
    changes: ['+ Logic / flow step', '+ per-answer routing (next Q or result)', '+ adaptive path', '− fixed question order'],
  },
  defaultState: { scenario: 'building', step: 'logic' },
  presets: [
    { id: 'logic', label: 'Logic flow', hint: 'The new bit — the answer→path decision tree' },
    { id: 'questions', label: 'Questions + routes', hint: 'Each answer shows where it leads' },
    { id: 'empty', label: 'No routes yet', hint: 'Answers not yet wired to a path' },
    { id: 'offer', label: 'Offer step', hint: 'Per-outcome course offers' },
    { id: 'published', label: 'Published', hint: 'Live — flow locked in' },
  ],
  resolvePreset(id) {
    switch (id) {
      case 'questions': return { scenario: 'building', step: 'questions' }
      case 'empty': return { scenario: 'empty', step: 'logic' }
      case 'offer': return { scenario: 'offer', step: 'offer' }
      case 'published': return { scenario: 'published', step: 'publish' }
      default: return { scenario: 'building', step: 'logic' }
    }
  },
  Content,
  FineTuning,
}
