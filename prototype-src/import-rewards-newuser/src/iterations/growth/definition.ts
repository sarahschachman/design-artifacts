import type { IterationDefinition } from '../../types'
import { Content, type GrowthState } from './Content'
import { FineTuning } from './controls'

export const growth: IterationDefinition<GrowthState> = {
  config: {
    label: 'E · Growth-momentum',
    summary: 'Importing as the start of growth; allowance you can watch expand',
    changes: ['+ aspirational framing', '+ "make 5 sales" demo grows the bar', '+ allowance = upside, not a cap'],
  },
  defaultState: { sales: 0 },
  presets: [
    { id: 'default', label: 'Brand new', hint: '0 sales — just the 50 baseline' },
    { id: 'some', label: 'A few sales', hint: '10 sales → 70 allowance' },
    { id: 'growing', label: 'Growing', hint: '25 sales → 100 allowance' },
    { id: 'thriving', label: 'Thriving', hint: '50 sales → 150 allowance' },
  ],
  resolvePreset(id) {
    switch (id) {
      case 'some': return { sales: 10 }
      case 'growing': return { sales: 25 }
      case 'thriving': return { sales: 50 }
      default: return { sales: 0 }
    }
  },
  Content,
  FineTuning,
}
