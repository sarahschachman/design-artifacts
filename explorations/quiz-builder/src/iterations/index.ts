import type { IterationDefinitionEntry } from '../types'
import { guided } from './guided/definition'
import { canvas } from './canvas/definition'
import { split } from './split/definition'
import { scorePoints } from './score-points/definition'
import { scoreTags } from './score-tags/definition'
import { scoreBranch } from './score-branch/definition'

export const PROJECT = {
  title: 'Assessment Quiz Builder',
  description: [
    'A Teachable creator who sells French-learning courses builds a placement quiz — questions that assess the learner\'s level, an email-capture gate, and a course offer — to generate leads and convert sales.',
    'Styled entirely from DESIGN.md (the contract AI agents read for on-brand Teachable UI) to test how far that file alone carries the look.',
    'Three divergent directions for the same builder screen, side by side.',
  ],
}

// 1 — three directions for the builder shell, compared side-by-side.
// 2 — converged on A (guided step-rail); now exploring the SCORING model:
//     how answers actually produce a course recommendation.
export const ITERATIONS: IterationDefinitionEntry[] = [
  { group: [guided, canvas, split] },
  { group: [scorePoints, scoreTags, scoreBranch] },
]
