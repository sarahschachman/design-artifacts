import type { IterationDefinition } from '../../types'
import { Content, type EstimatorState } from './Content'
import { FineTuning } from './controls'

export const estimator: IterationDefinition<EstimatorState> = {
  config: {
    label: 'B · Cost estimator',
    summary: 'Interactive calculator — the model in the creator’s own numbers',
    changes: ['+ live free-vs-paid math', '+ sliders for imports & sales', '+ "cost drops as you grow"'],
  },
  defaultState: { imports: 120, sales: 10 },
  presets: [
    { id: 'default', label: 'Typical', hint: '120 imports, 10 sales/mo → some paid' },
    { id: 'all-free', label: 'All free', hint: '40 imports — under the 50 baseline' },
    { id: 'bypasser', label: 'Heavy importer', hint: '300 imports, 0 sales → mostly paid' },
    { id: 'big-seller', label: 'Active seller', hint: '200 imports, 80 sales → grown allowance' },
  ],
  resolvePreset(id) {
    switch (id) {
      case 'all-free': return { imports: 40, sales: 0 }
      case 'bypasser': return { imports: 300, sales: 0 }
      case 'big-seller': return { imports: 200, sales: 80 }
      default: return { imports: 120, sales: 10 }
    }
  },
  Content,
  FineTuning,
}
