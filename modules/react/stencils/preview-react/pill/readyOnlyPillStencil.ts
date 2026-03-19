import {cssVar, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

import {defineStencil} from '../../defineStencil';
import {buttonStencil} from '../../react/button/buttonStencil';
import {pillStencil} from './pillStencil';

export const readyOnlyPillStencil = defineStencil({
  extends: pillStencil,
  base: {
    border: `${px2rem(1)} solid ${cssVar(system.color.border.input.default)}`,
    cursor: 'default',
    [buttonStencil.vars.background]: 'transparent',
    '&:hover, &.hover': {
      [buttonStencil.vars.background]: 'transparent',
    },
    '&:focus-visible, &.focus': {
      [buttonStencil.vars.background]: 'transparent',
    },
    '&:active, &.active': {
      [buttonStencil.vars.background]: 'transparent',
    },
    '&:disabled, &.disabled': {
      [buttonStencil.vars.background]: 'transparent',
    },
  },
});
