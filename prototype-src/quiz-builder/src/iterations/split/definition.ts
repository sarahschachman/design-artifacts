import type { IterationDefinition } from '../../types'
import { Content } from './Content'
import { FineTuning } from './controls'

export type SplitState = {
  scenario: 'building' | 'empty' | 'full' | 'published'
  previewStage: 'quiz' | 'capture' | 'result'
}

export const split: IterationDefinition<SplitState> = {
  config: {
    label: 'C · Builder + live preview',
    summary: 'Config left, live learner-facing preview right — see the lead/offer payoff in real time',
    changes: ['+ live learner preview pane', '+ stage scrubber (quiz→capture→result)', '+ conversion in view'],
  },
  defaultState: { scenario: 'building', previewStage: 'quiz' },
  presets: [
    { id: 'building', label: 'Editing question', hint: 'Preview shows the live quiz question' },
    { id: 'capture', label: 'Email gate', hint: 'Preview shows the lead-capture step' },
    { id: 'result', label: 'Result + offer', hint: 'Preview shows the conversion payoff' },
    { id: 'empty', label: 'New quiz', hint: 'Empty config, placeholder preview' },
    { id: 'published', label: 'Published', hint: 'Live — preview is the public quiz' },
  ],
  resolvePreset(id) {
    switch (id) {
      case 'capture': return { scenario: 'building', previewStage: 'capture' }
      case 'result': return { scenario: 'full', previewStage: 'result' }
      case 'empty': return { scenario: 'empty', previewStage: 'quiz' }
      case 'published': return { scenario: 'published', previewStage: 'result' }
      default: return { scenario: 'building', previewStage: 'quiz' }
    }
  },
  Content,
  FineTuning,
}
