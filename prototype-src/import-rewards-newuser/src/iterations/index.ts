import type { IterationDefinitionEntry } from '../types'
import { baseline } from './baseline/definition'
import { taskFirst } from './task-first/definition'
import { estimator } from './estimator/definition'
import { story } from './story/definition'
import { transparency } from './transparency/definition'
import { growth } from './growth/definition'

export const PROJECT = {
  title: 'Import allowance — new-user state',
  description: [
    'Divergent directions for the brand-new (0 sales, 0 imports) state of the usage-based import allowance.',
    'Model: Builder includes 50 free imports; every paid sale on Teachable adds 2 more; extra imports are $0.50/student/month.',
    'Baseline is the shipped empty state that tested as "not user-friendly". A–E explore five different strategies.',
  ],
}

export const ITERATIONS: IterationDefinitionEntry[] = [
  baseline,
  {
    group: [taskFirst, estimator, story, transparency, growth],
  },
]
