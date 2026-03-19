import {brand, system} from '@workday/canvas-tokens-web';

import {systemIconStencil} from '../../../icon/lib/SystemIcon';
import {defineStencil} from '../../defineStencil';
import {buttonStencil} from './buttonStencil';

export const secondaryButtonStencil = defineStencil({
  extends: buttonStencil,
  base: {
    // Base Styles
    [buttonStencil.vars.background]: 'transparent',
    [buttonStencil.vars.border]: system.color.border.contrast.default,
    [buttonStencil.vars.borderRadius]: system.shape.round,
    [buttonStencil.vars.label]: system.color.fg.strong,
    [systemIconStencil.vars.color]: system.color.fg.strong,
    '& .wd-icon-fill, & .wd-icon-accent, & .wd-icon-accent2': {
      transition: 'fill 120ms linear',
    },
    // Focus Styles
    '&:focus-visible, &.focus': {
      [buttonStencil.vars.background]: 'transparent',
      [buttonStencil.vars.border]: system.color.border.contrast.default,
      [buttonStencil.vars.label]: system.color.fg.strong,
      [buttonStencil.vars.boxShadowInner]: system.color.border.inverse.default,
      [buttonStencil.vars.boxShadowOuter]: brand.common.focusOutline,
      [systemIconStencil.vars.color]: system.color.fg.strong,
    },
    // Hover Styles
    '&:hover, &.hover': {
      [buttonStencil.vars.background]: system.color.bg.contrast.default,
      [buttonStencil.vars.border]: system.color.border.contrast.default,
      [buttonStencil.vars.label]: brand.primary.accent,
      [systemIconStencil.vars.color]: brand.primary.accent,
    },
    // Active Styles
    '&:active, &.active': {
      [buttonStencil.vars.background]: system.color.bg.contrast.strong,
      [buttonStencil.vars.border]: system.color.border.contrast.strong,
      [buttonStencil.vars.label]: brand.primary.accent,
      [systemIconStencil.vars.color]: brand.primary.accent,
    },
    // Disabled Styles
    '&:disabled, &.disabled': {
      [buttonStencil.vars.background]: 'transparent',
      [buttonStencil.vars.border]: system.color.border.contrast.default,
      [buttonStencil.vars.label]: system.color.fg.strong,
      [buttonStencil.vars.opacity]: system.opacity.disabled,
      [systemIconStencil.vars.color]: system.color.fg.strong,
    },
  },
  modifiers: {
    variant: {
      inverse: {
        // Default Styles
        [buttonStencil.vars.background]: 'transparent',
        [buttonStencil.vars.border]: system.color.border.inverse.default,
        [buttonStencil.vars.label]: system.color.fg.inverse,
        [systemIconStencil.vars.color]: system.color.fg.inverse,
        // Focus Styles
        '&:focus-visible, &.focus': {
          [buttonStencil.vars.background]: system.color.bg.default,
          [buttonStencil.vars.border]: 'transparent',
          [buttonStencil.vars.label]: system.color.fg.strong,
          [buttonStencil.vars.boxShadowInner]: system.color.border.contrast.default,
          [buttonStencil.vars.boxShadowOuter]: system.color.border.inverse.default,
          [systemIconStencil.vars.color]: system.color.fg.strong,
        },
        // Hover Styles
        '&:hover, &.hover': {
          [buttonStencil.vars.background]: system.color.bg.alt.default,
          [buttonStencil.vars.border]: 'transparent',
          [buttonStencil.vars.label]: system.color.fg.stronger,
          [systemIconStencil.vars.color]: system.color.fg.stronger,
        },
        // Active Styles
        '&:active, &.active': {
          [buttonStencil.vars.background]: system.color.bg.alt.strong,
          [buttonStencil.vars.border]: 'transparent',
          [buttonStencil.vars.label]: system.color.fg.stronger,
          [systemIconStencil.vars.color]: system.color.fg.stronger,
        },
        // Disabled Styles
        '&:disabled, &.disabled': {
          [buttonStencil.vars.background]: 'transparent',
          [buttonStencil.vars.border]: system.color.border.inverse.default,
          [buttonStencil.vars.label]: system.color.fg.inverse,
          [systemIconStencil.vars.color]: system.color.fg.inverse,
        },
      },
    },
  },
});
