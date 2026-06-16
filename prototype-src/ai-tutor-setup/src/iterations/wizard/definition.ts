import type { IterationDefinition } from '../../types'
import { Content } from './Content'
import { FineTuning } from './controls'

export type WizardState = {
  step: 'sources' | 'personality' | 'placement' | 'publish'
  scenario: 'building' | 'complete' | 'published'
}

export const wizard: IterationDefinition<WizardState> = {
  config: {
    label: 'B · Guided wizard',
    summary: 'A step-rail walks a non-technical creator through it — sources, personality, placement, publish',
    changes: ['+ step rail', '+ placement step (where learners chat)', '+ one focused panel per step'],
  },
  defaultState: { step: 'placement', scenario: 'building' },
  presets: [
    { id: 'placement', label: 'Placement step', hint: 'Where learners reach the tutor — unique to the wizard' },
    { id: 'sources', label: 'Sources step', hint: 'Pick & train courses' },
    { id: 'personality', label: 'Personality step', hint: 'Name, tone, rules' },
    { id: 'complete', label: 'Ready to publish', hint: 'All steps done, green checks' },
    { id: 'published', label: 'Published', hint: 'Live for learners' },
  ],
  resolvePreset(id) {
    switch (id) {
      case 'sources': return { step: 'sources', scenario: 'building' }
      case 'personality': return { step: 'personality', scenario: 'building' }
      case 'complete': return { step: 'publish', scenario: 'complete' }
      case 'published': return { step: 'publish', scenario: 'published' }
      default: return { step: 'placement', scenario: 'building' }
    }
  },
  Content,
  FineTuning,
}
