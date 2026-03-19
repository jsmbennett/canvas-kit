import {cssVar} from '@workday/canvas-kit-styling';
import {brand, system} from '@workday/canvas-tokens-web';

import {systemIconStencil} from '../../../icon/lib/SystemIcon';
import {defineStencil} from '../../defineStencil';
import {buttonStencil} from './buttonStencil';

export const primaryButtonStencil = defineStencil({
  extends: buttonStencil,
  base: {
    // Base Styles
    [buttonStencil.vars.background]: cssVar(brand.action.base, brand.primary.base),
    [buttonStencil.vars.borderRadius]: system.shape.round,
    [buttonStencil.vars.label]: cssVar(brand.action.accent, brand.primary.accent),
    [systemIconStencil.vars.color]: 'currentColor',
    // Focus Styles
    '&:focus-visible, &.focus': {
      [buttonStencil.vars.background]: cssVar(brand.action.base, brand.primary.base),
      [buttonStencil.vars.label]: cssVar(brand.action.accent, brand.primary.accent),
      [buttonStencil.vars.boxShadowInner]: system.color.border.inverse.default,
      [buttonStencil.vars.boxShadowOuter]: brand.common.focusOutline,
      [systemIconStencil.vars.color]: 'currentColor',
    },
    // Hover Styles
    '&:hover, &.hover': {
      [buttonStencil.vars.background]: cssVar(brand.action.dark, brand.primary.dark),
      [buttonStencil.vars.label]: cssVar(brand.action.accent, brand.primary.accent),
      [systemIconStencil.vars.color]: 'currentColor',
    },
    // Active Styles
    '&:active, &.active': {
      [buttonStencil.vars.background]: cssVar(brand.action.darkest, brand.primary.darkest),
      [buttonStencil.vars.label]: cssVar(brand.action.accent, brand.primary.accent),
      [systemIconStencil.vars.color]: 'currentColor',
    },
    // Disabled Styles
    '&:disabled, &.disabled': {
      [buttonStencil.vars.background]: cssVar(brand.action.base, brand.primary.base),
      [buttonStencil.vars.label]: cssVar(brand.action.accent, brand.primary.accent),
      [buttonStencil.vars.opacity]: system.opacity.disabled,
      [systemIconStencil.vars.color]: 'currentColor',
    },
  },
  modifiers: {
    variant: {
      // Inverse Styles
      inverse: {
        [buttonStencil.vars.background]: system.color.bg.default,
        [buttonStencil.vars.borderRadius]: system.shape.round,
        [buttonStencil.vars.label]: system.color.fg.strong,
        [systemIconStencil.vars.color]: 'currentColor',
        // Focus Styles
        '&:focus-visible, &.focus': {
          [buttonStencil.vars.background]: system.color.bg.default,
          [buttonStencil.vars.label]: system.color.fg.strong,
          [buttonStencil.vars.boxShadowInner]: system.color.border.contrast.default,
          [buttonStencil.vars.boxShadowOuter]: system.color.border.inverse.default,
          [systemIconStencil.vars.color]: 'currentColor',
        },
        // Hover Styles
        '&:hover, &.hover': {
          [buttonStencil.vars.background]: system.color.bg.alt.default,
          [buttonStencil.vars.label]: system.color.fg.stronger,
          [systemIconStencil.vars.color]: 'currentColor',
        },
        // Active Styles
        '&:active, &.active': {
          [buttonStencil.vars.background]: system.color.bg.alt.strong,
          [buttonStencil.vars.label]: system.color.fg.stronger,
          [systemIconStencil.vars.color]: 'currentColor',
        },
        // Disabled Styles
        '&:disabled, &.disabled': {
          [buttonStencil.vars.background]: system.color.bg.default,
          [buttonStencil.vars.label]: system.color.fg.strong,
          [systemIconStencil.vars.color]: 'currentColor',
        },
      },
    },
  },
});
