import type { IterationDefinition } from '../../types'
import { Content, type StoryState } from './Content'
import { FineTuning } from './controls'

export const story: IterationDefinition<StoryState> = {
  config: {
    label: 'C · Plain-language story',
    summary: 'Three human-readable steps, no ratio jargon',
    changes: ['+ numbered 1-2-3 steps', '+ optional worked example', '− ratio diagram & %s'],
  },
  defaultState: { exampleOn: false },
  presets: [
    { id: 'default', label: 'Default', hint: 'Three steps, example hidden' },
    { id: 'example', label: 'Example shown', hint: 'Each step shows a worked example' },
  ],
  resolvePreset(id) {
    return { exampleOn: id === 'example' }
  },
  Content,
  FineTuning,
}
