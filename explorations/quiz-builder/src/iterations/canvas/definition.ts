import type { IterationDefinition } from '../../types'
import { Content } from './Content'
import { FineTuning } from './controls'

export type CanvasState = {
  scenario: 'building' | 'empty' | 'full' | 'published'
  addMenu: boolean
}

export const canvas: IterationDefinition<CanvasState> = {
  config: {
    label: 'B · Canvas blocks',
    summary: 'Flexible Notion-ish builder — quiz is a stack of rearrangeable blocks',
    changes: ['+ block canvas', '+ inline "add block" menu', '− fixed step order'],
  },
  defaultState: { scenario: 'building', addMenu: false },
  presets: [
    { id: 'building', label: 'Mid-build', hint: 'Intro + questions + capture blocks placed' },
    { id: 'empty', label: 'Blank canvas', hint: 'Just the intro block + add prompt' },
    { id: 'addmenu', label: 'Add-block menu', hint: 'Inline block picker open' },
    { id: 'full', label: 'Full quiz', hint: 'All blocks incl. offer block' },
    { id: 'published', label: 'Published', hint: 'Live banner on canvas' },
  ],
  resolvePreset(id) {
    switch (id) {
      case 'empty': return { scenario: 'empty', addMenu: false }
      case 'addmenu': return { scenario: 'building', addMenu: true }
      case 'full': return { scenario: 'full', addMenu: false }
      case 'published': return { scenario: 'published', addMenu: false }
      default: return { scenario: 'building', addMenu: false }
    }
  },
  Content,
  FineTuning,
}
