import type { IterationDefinition } from '../../types'
import { Content } from './Content'
import { FineTuning } from './controls'

export type TutorState = {
  scenario: 'ready' | 'untrained' | 'training' | 'multiturn' | 'published'
  tone: 'warm' | 'formal' | 'playful'
}

export const setupChat: IterationDefinition<TutorState> = {
  config: {
    label: 'A · Setup + live test chat',
    summary: 'Config left, a live test chat right — the creator interrogates the tutor against their own content',
    changes: ['+ test-chat pane', '+ source citations in replies', '+ trained-on course picker'],
  },
  defaultState: { scenario: 'ready', tone: 'warm' },
  presets: [
    { id: 'ready', label: 'Configured + tested', hint: 'Sources trained; tutor answering with a citation' },
    { id: 'untrained', label: 'Untrained', hint: 'No course picked yet — empty test chat' },
    { id: 'training', label: 'Training', hint: 'A course is still being learned' },
    { id: 'multiturn', label: 'Long conversation', hint: 'Several back-and-forth turns' },
    { id: 'published', label: 'Published', hint: 'Live for learners' },
  ],
  resolvePreset(id) {
    switch (id) {
      case 'untrained': return { scenario: 'untrained', tone: 'warm' }
      case 'training': return { scenario: 'training', tone: 'warm' }
      case 'multiturn': return { scenario: 'multiturn', tone: 'warm' }
      case 'published': return { scenario: 'published', tone: 'warm' }
      default: return { scenario: 'ready', tone: 'warm' }
    }
  },
  Content,
  FineTuning,
}
