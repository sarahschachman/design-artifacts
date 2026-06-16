import type { IterationDefinition } from '../../types'
import { Content } from './Content'
import { FineTuning } from './controls'

export type LearnerState = {
  scenario: 'answered' | 'fresh' | 'collapsed' | 'published'
}

export const learnerView: IterationDefinition<LearnerState> = {
  config: {
    label: 'C · Setup → learner view',
    summary: 'Compact admin config + a live learner lesson with the tutor embedded — see the deployed experience',
    changes: ['+ learner lesson preview', '+ tutor docked in the lesson', '+ admin↔learner in one view'],
  },
  defaultState: { scenario: 'answered' },
  presets: [
    { id: 'answered', label: 'Tutor answering', hint: 'Learner asked; tutor replies with a citation' },
    { id: 'fresh', label: 'Fresh / greeting', hint: 'Tutor greets, suggests questions' },
    { id: 'collapsed', label: 'Collapsed', hint: 'Tutor minimized to a floating button' },
    { id: 'published', label: 'Published', hint: 'Live for learners' },
  ],
  resolvePreset(id) {
    switch (id) {
      case 'fresh': return { scenario: 'fresh' }
      case 'collapsed': return { scenario: 'collapsed' }
      case 'published': return { scenario: 'published' }
      default: return { scenario: 'answered' }
    }
  },
  Content,
  FineTuning,
}
