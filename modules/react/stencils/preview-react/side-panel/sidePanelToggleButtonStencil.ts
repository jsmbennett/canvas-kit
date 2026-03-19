import {system} from '@workday/canvas-tokens-web';

import {defineStencil} from '../../defineStencil';

export const sidePanelToggleButtonStencil = defineStencil({
  base: {
    position: 'absolute',
    top: system.space.x6,
    width: system.space.x8,
    insetInlineEnd: system.space.x4,
  },
  modifiers: {
    state: {
      collapsing: {
        margin: 0,
        transform: `scaleX(1)`,
        ':dir(rtl)': {
          transform: `scaleX(-1)`,
        },
      },
      collapsed: {
        margin: 'auto',
        insetInlineStart: 0,
        insetInlineEnd: 0,
        transform: `scaleX(1)`,
        ':dir(rtl)': {
          transform: `scaleX(-1)`,
        },
      },
      expanded: {
        margin: 0,
        transform: `scaleX(-1)`,
        ':dir(rtl)': {
          transform: `scaleX(1)`,
        },
      },
      expanding: {
        margin: 0,
        transform: `scaleX(-1)`,
        ':dir(rtl)': {
          transform: `scaleX(1)`,
        },
      },
    },
    origin: {
      left: {},
      right: {},
    },
  },

  compound: [
    {
      modifiers: {state: 'collapsed', origin: 'right'},
      styles: {
        transform: `scaleX(-1)`,
      },
    },
    {
      modifiers: {state: 'collapsing', origin: 'right'},
      styles: {
        transform: `scaleX(-1)`,
        insetInlineStart: system.space.x4,
      },
    },
    {
      modifiers: {state: 'expanded', origin: 'right'},
      styles: {
        transform: `scaleX(1)`,
        insetInlineStart: system.space.x4,
      },
    },
    {
      modifiers: {state: 'expanding', origin: 'right'},
      styles: {
        transform: `scaleX(1)`,
        insetInlineStart: system.space.x4,
      },
    },
  ],
});
