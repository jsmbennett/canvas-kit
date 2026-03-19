import {system} from '@workday/canvas-tokens-web';

import {defineStencil} from '../../defineStencil';
import {systemIconStencil} from '../icon/systemIconStencil';

export const expandableIconStencil = defineStencil({
  extends: systemIconStencil,
  base: {
    padding: system.space.x1,
  },
  modifiers: {
    isExpanded: {
      true: {},
      false: {},
    },
    position: {
      start: {},
      end: {},
      only: {},
    },
  },
  compound: [
    {
      modifiers: {position: 'end', isExpanded: false},
      styles: {
        marginInlineStart: 'auto',
        transform: 'rotate(180deg)',
        paddingInlineEnd: system.space.x3,
      },
    },
    {
      modifiers: {position: 'end', isExpanded: true},
      styles: {
        marginInlineStart: 'auto',
        paddingInlineStart: system.space.x3,
      },
    },
    {
      modifiers: {position: 'start', isExpanded: false},
      styles: {
        marginInlineEnd: system.space.x2,
        transform: 'rotate(90deg)',
        ':dir(rtl)': {
          transform: 'rotate(-90deg)',
        },
      },
    },
    {
      modifiers: {position: 'start', isExpanded: true},
      styles: {
        marginInlineEnd: system.space.x2,
        transform: 'rotate(180deg)',
      },
    },
  ],
});
