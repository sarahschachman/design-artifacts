import type { IterationDefinitionEntry } from '../types'
import { setupChat } from './setup-chat/definition'
import { wizard } from './wizard/definition'
import { learnerView } from './learner-view/definition'

export const PROJECT = {
  title: 'AI Tutor Setup',
  description: [
    'A Teachable creator who sells French courses sets up an AI tutor (chatbot) — trained on their own course content — from the Teachable admin.',
    'Styled entirely from DESIGN.md (the contract AI agents read for on-brand Teachable UI).',
    'Three divergent directions for the same setup experience, side by side.',
  ],
}

// Divergent exploration: three takes on setting up the AI tutor.
export const ITERATIONS: IterationDefinitionEntry[] = [
  { group: [setupChat, wizard, learnerView] },
]
