import {brand, system} from '@workday/canvas-tokens-web';

import {systemIconStencil} from '../../../icon/lib/SystemIcon';
import {defineStencil} from '../../defineStencil';
import {buttonStencil} from './buttonStencil';

export const deleteButtonStencil = defineStencil({
  extends: buttonStencil,
  base: {
    // Base Styles
    [buttonStencil.vars.background]: brand.error.base,
    [buttonStencil.vars.borderRadius]: system.shape.round,
    [buttonStencil.vars.label]: brand.error.accent,
    [systemIconStencil.vars.color]: 'currentColor',
    // Focus Styles
    '&:focus-visible, &.focus': {
      [buttonStencil.vars.background]: brand.error.base,
      [buttonStencil.vars.label]: brand.error.accent,
      [systemIconStencil.vars.color]: 'currentColor',
      [buttonStencil.vars.boxShadowInner]: system.color.border.inverse.default,
      [buttonStencil.vars.boxShadowOuter]: brand.common.focusOutline,
    },
    // Hover Styles
    '&:hover, &.hover': {
      [buttonStencil.vars.background]: brand.error.dark,
      [buttonStencil.vars.label]: brand.error.accent,
      [systemIconStencil.vars.color]: 'currentColor',
    },
    // Active Styles
    '&:active, &.active': {
      [buttonStencil.vars.background]: brand.error.darkest,
      [buttonStencil.vars.label]: brand.error.accent,
      [systemIconStencil.vars.color]: 'currentColor',
    },
    // Disabled Styles
    '&:disabled, &.disabled': {
      [buttonStencil.vars.background]: brand.error.base,
      [buttonStencil.vars.label]: brand.error.accent,
      [systemIconStencil.vars.color]: 'currentColor',
      [buttonStencil.vars.opacity]: system.opacity.disabled,
    },
  },
});
