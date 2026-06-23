import type { IterationDefinition } from '../../types'
import { Content } from './Content'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type BaselineState = Record<string, never>

export const baseline: IterationDefinition<BaselineState> = {
  config: {
    label: 'Current (baseline)',
    summary: 'The shipped empty state — tested as "not user-friendly"',
    changes: ['ratio math up front', 'old 2:1 framing', 'job buried below the pitch'],
  },
  defaultState: {} as BaselineState,
  presets: [
    { id: 'default', label: 'Default', hint: 'As it ships today — 0 sales, 0 imports' },
  ],
  resolvePreset() {
    return {} as BaselineState
  },
  Content,
}
