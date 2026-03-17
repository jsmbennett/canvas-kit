import {buttonStencil} from '../../react/button/buttonStencil';

import {pillStencil} from './pillStencil';
import {systemIconStencil} from '../../react/icon/systemIconStencil';
import {system} from '@workday/canvas-tokens-web';

export const removeablePillStencil = {
  extends: pillStencil,
  base: {
    '&:focus-visible, &.focus': {
      [buttonStencil.vars.background]: system.color.bg.alt.soft,
      [buttonStencil.vars.border]: system.color.border.input.default,
      [buttonStencil.vars.label]: system.color.text.strong,
      boxShadow: 'none',
    },
    '&:hover, &.hover': {
      [buttonStencil.vars.background]: system.color.bg.alt.soft,
    },
    '&:active, &.active': {
      [buttonStencil.vars.background]: system.color.bg.alt.stronger,
    },
    '&:disabled, &.disabled': {
      [buttonStencil.vars.background]: system.color.bg.alt.softer,
      [systemIconStencil.vars.color]: system.color.icon.soft,
    },
    cursor: 'default',
    overflow: 'revert', // override BaseButton overflow styles so the click target exists outside the pill for removable
    position: 'relative',
  },
};
