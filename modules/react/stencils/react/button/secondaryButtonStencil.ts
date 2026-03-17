import {brand, system} from '@workday/canvas-tokens-web';
import {buttonColorPropVars} from '../../../button/lib/BaseButton';
import {buttonStencil} from './buttonStencil';
import {cssVar} from '@workday/canvas-kit-styling';
import {systemIconStencil} from '../icon/systemIconStencil';

export const secondaryButtonStencil = {
  extends: buttonStencil,
  base: {
    // Base Styles
    [buttonStencil.vars.background]: 'transparent',
    [buttonStencil.vars.border]: system.color.border.contrast.default,
    [buttonStencil.vars.borderRadius]: system.shape.round,
    [buttonStencil.vars.label]: system.color.fg.strong,
    [systemIconStencil.vars.color]: cssVar(
      buttonColorPropVars.default.icon,
      system.color.fg.strong
    ),
    // Focus Styles
    '&:focus-visible, &.focus': {
      [buttonStencil.vars.background]: 'transparent',
      [buttonStencil.vars.border]: system.color.border.contrast.default,
      [buttonStencil.vars.label]: system.color.fg.strong,
      [buttonStencil.vars.boxShadowInner]: system.color.border.inverse,
      [buttonStencil.vars.boxShadowOuter]: brand.common.focusOutline,
      [systemIconStencil.vars.color]: cssVar(
        buttonColorPropVars.focus.icon,
        system.color.fg.strong
      ),
    },
    // Hover Styles
    '&:hover, &.hover': {
      [buttonStencil.vars.background]: system.color.bg.contrast.default,
      [buttonStencil.vars.border]: system.color.border.contrast.default,
      [buttonStencil.vars.label]: brand.primary.accent,
      [systemIconStencil.vars.color]: cssVar(buttonColorPropVars.hover.icon, brand.primary.accent),
    },
    // Active Styles
    '&:active, &.active': {
      [buttonStencil.vars.background]: system.color.bg.contrast.strong,
      [buttonStencil.vars.border]: system.color.border.contrast.strong,
      [buttonStencil.vars.label]: brand.primary.accent,
      [systemIconStencil.vars.color]: cssVar(buttonColorPropVars.active.icon, brand.primary.accent),
    },
    // Disabled Styles
    '&:disabled, &.disabled': {
      [buttonStencil.vars.background]: 'transparent',
      [buttonStencil.vars.border]: system.color.border.contrast.default,
      [buttonStencil.vars.label]: system.color.fg.strong,
      [buttonStencil.vars.opacity]: system.opacity.disabled,
      [systemIconStencil.vars.color]: cssVar(
        buttonColorPropVars.disabled.icon,
        system.color.fg.strong
      ),
    },
  },
  modifiers: {
    variant: {
      inverse: {
        // Default Styles
        [buttonStencil.vars.background]: 'transparent',
        [buttonStencil.vars.border]: system.color.border.inverse,
        [buttonStencil.vars.label]: system.color.fg.inverse,
        [systemIconStencil.vars.color]: cssVar(
          buttonColorPropVars.default.icon,
          system.color.fg.inverse
        ),
        // Focus Styles
        '&:focus-visible, &.focus': {
          [buttonStencil.vars.background]: system.color.bg.default,
          [buttonStencil.vars.border]: 'transparent',
          [buttonStencil.vars.label]: system.color.fg.strong,
          [buttonStencil.vars.boxShadowInner]: system.color.border.contrast.default,
          [buttonStencil.vars.boxShadowOuter]: system.color.border.inverse,
          [systemIconStencil.vars.color]: cssVar(
            buttonColorPropVars.focus.icon,
            system.color.fg.strong
          ),
        },
        // Hover Styles
        '&:hover, &.hover': {
          [buttonStencil.vars.background]: system.color.bg.alt.default,
          [buttonStencil.vars.border]: 'transparent',
          [buttonStencil.vars.label]: system.color.fg.stronger,
          [systemIconStencil.vars.color]: cssVar(
            buttonColorPropVars.hover.icon,
            system.color.fg.stronger
          ),
        },
        // Active Styles
        '&:active, &.active': {
          [buttonStencil.vars.background]: system.color.bg.alt.strong,
          [buttonStencil.vars.border]: 'transparent',
          [buttonStencil.vars.label]: system.color.fg.stronger,
          [systemIconStencil.vars.color]: cssVar(
            buttonColorPropVars.active.icon,
            system.color.fg.stronger
          ),
        },
        // Disabled Styles
        '&:disabled, &.disabled': {
          [buttonStencil.vars.background]: 'transparent',
          [buttonStencil.vars.border]: system.color.border.inverse,
          [buttonStencil.vars.label]: system.color.fg.inverse,
          [systemIconStencil.vars.color]: cssVar(
            buttonColorPropVars.disabled.icon,
            system.color.fg.inverse
          ),
        },
      },
    },
  },
};
