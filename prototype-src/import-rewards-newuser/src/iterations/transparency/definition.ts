import type { IterationDefinition } from '../../types'
import { Content, type TransparencyState } from './Content'
import { FineTuning } from './controls'

export const transparency: IterationDefinition<TransparencyState> = {
  config: {
    label: 'D · Cost-transparency',
    summary: '"Most import for free" — money fears addressed head-on',
    changes: ['+ reassurance hero (50 free)', '+ itemized allowance', '+ honest expandable overage'],
  },
  defaultState: { overageOpen: false },
  presets: [
    { id: 'default', label: 'Default', hint: 'Overage detail collapsed' },
    { id: 'overage-open', label: 'Overage expanded', hint: '"What if I need more?" opened' },
  ],
  resolvePreset(id) {
    return { overageOpen: id === 'overage-open' }
  },
  Content,
  FineTuning,
}
