import {brand, system} from '@workday/canvas-tokens-web';
import {buttonColorPropVars} from '../../../button/lib/BaseButton';
import {buttonStencil} from './buttonStencil';
import {cssVar} from '@workday/canvas-kit-styling';
import {systemIconStencil} from '../icon/systemIconStencil';

export const deleteButtonStencil = {
  extends: buttonStencil,
  base: {
    // Base Styles
    [buttonStencil.vars.background]: brand.error.base,
    [buttonStencil.vars.borderRadius]: system.shape.round,
    [buttonStencil.vars.label]: brand.error.accent,
    [systemIconStencil.vars.color]: cssVar(buttonColorPropVars.default.icon, brand.error.accent),
    // Focus Styles
    '&:focus-visible, &.focus': {
      [buttonStencil.vars.background]: brand.error.base,
      [buttonStencil.vars.label]: brand.error.accent,
      [systemIconStencil.vars.color]: cssVar(buttonColorPropVars.focus.icon, brand.error.accent),
      [buttonStencil.vars.boxShadowInner]: system.color.border.inverse,
      [buttonStencil.vars.boxShadowOuter]: brand.common.focusOutline,
    },
    // Hover Styles
    '&:hover, &.hover': {
      [buttonStencil.vars.background]: brand.error.dark,
      [buttonStencil.vars.label]: brand.error.accent,
      [systemIconStencil.vars.color]: cssVar(buttonColorPropVars.hover.icon, brand.error.accent),
    },
    // Active Styles
    '&:active, &.active': {
      [buttonStencil.vars.background]: brand.error.darkest,
      [buttonStencil.vars.label]: brand.error.accent,
      [systemIconStencil.vars.color]: cssVar(buttonColorPropVars.active.icon, brand.error.accent),
    },
    // Disabled Styles
    '&:disabled, &.disabled': {
      [buttonStencil.vars.background]: brand.error.base,
      [buttonStencil.vars.label]: brand.error.accent,
      [systemIconStencil.vars.color]: cssVar(buttonColorPropVars.disabled.icon, brand.error.accent),
      [buttonStencil.vars.opacity]: system.opacity.disabled,
    },
  },
};
