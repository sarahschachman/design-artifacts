import type { IterationDefinition } from '../../types'
import { Content, type TaskFirstState } from './Content'
import { FineTuning } from './controls'

export const taskFirst: IterationDefinition<TaskFirstState> = {
  config: {
    label: 'A · Task-first',
    summary: 'Lead with the job; allowance is a quiet one-liner',
    changes: ['+ CSV drop zone as hero', '+ pricing tucked behind a link', '− ratio diagram'],
  },
  defaultState: { dragOver: false, filePicked: false, pricingOpen: false },
  presets: [
    { id: 'default', label: 'Default', hint: 'Empty drop zone, reassurance line collapsed' },
    { id: 'drag-over', label: 'Dragging a file', hint: 'Drop zone is highlighted' },
    { id: 'file-picked', label: 'File chosen', hint: '128 students found, all within allowance' },
    { id: 'pricing-open', label: 'Pricing expanded', hint: 'User tapped "How import pricing works"' },
  ],
  resolvePreset(id) {
    switch (id) {
      case 'drag-over': return { dragOver: true, filePicked: false, pricingOpen: false }
      case 'file-picked': return { dragOver: false, filePicked: true, pricingOpen: false }
      case 'pricing-open': return { dragOver: false, filePicked: false, pricingOpen: true }
      default: return { dragOver: false, filePicked: false, pricingOpen: false }
    }
  },
  Content,
  FineTuning,
}
