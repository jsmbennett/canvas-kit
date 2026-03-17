import {brand, system} from '@workday/canvas-tokens-web';
import {buttonColorPropVars} from '../../../button/lib/BaseButton';
import {buttonStencil} from './buttonStencil';
import {calc, cssVar} from '@workday/canvas-kit-styling';
import {focusRing} from '@workday/canvas-kit-react/common';
import {systemIconStencil} from '../icon/systemIconStencil';

export const tertiaryButtonStencil = {
  extends: buttonStencil,
  // Base Styles
  base: {
    paddingInline: system.space.x2,
    minWidth: 'auto',
    textDecoration: 'underline',
    border: system.space.zero,
    [buttonStencil.vars.background]: 'transparent',
    [buttonStencil.vars.borderRadius]: system.shape.x1,
    [buttonStencil.vars.label]: brand.primary.base,
    [systemIconStencil.vars.color]: cssVar(buttonColorPropVars.default.icon, brand.primary.base),
    // Focus Styles
    '&:focus-visible, &.focus': {
      [buttonStencil.vars.background]: 'transparent',
      [buttonStencil.vars.label]: brand.primary.base,
      [buttonStencil.vars.boxShadowInner]: brand.common.focusOutline,
      [buttonStencil.vars.boxShadowOuter]: brand.common.focusOutline,
      [systemIconStencil.vars.color]: cssVar(buttonColorPropVars.focus.icon, brand.primary.base),
      ...focusRing({
        width: 2,
        separation: 0,
        innerColor: system.color.border.inverse,
        outerColor: brand.common.focusOutline,
      }),
    },
    // Hover Styles
    '&:hover, &.hover': {
      [buttonStencil.vars.background]: system.color.bg.alt.default,
      [buttonStencil.vars.label]: brand.primary.dark,
      [systemIconStencil.vars.color]: cssVar(buttonColorPropVars.hover.icon, brand.primary.dark),
    },
    // Active Styles
    '&:active, &.active': {
      [buttonStencil.vars.background]: system.color.bg.alt.strong,
      [buttonStencil.vars.label]: brand.primary.darkest,
      [systemIconStencil.vars.color]: cssVar(
        buttonColorPropVars.active.icon,
        brand.primary.darkest
      ),
    },
    // Disabled Styles
    '&:disabled, &.disabled': {
      [buttonStencil.vars.background]: 'transparent',
      [buttonStencil.vars.label]: brand.primary.base,
      [buttonStencil.vars.opacity]: system.opacity.disabled,
      [systemIconStencil.vars.color]: cssVar(buttonColorPropVars.active.icon, brand.primary.base),
    },
  },
  modifiers: {
    // IconPosition Styles
    iconPosition: {
      only: {
        padding: 0,
        borderRadius: system.shape.round,
        [systemIconStencil.vars.color]: cssVar(
          buttonColorPropVars.default.icon,
          system.color.fg.strong
        ),
        '&:focus-visible, &.focus': {
          [systemIconStencil.vars.color]: cssVar(
            buttonColorPropVars.focus.icon,
            system.color.fg.strong
          ),
        },
        '&:hover, &.hover': {
          [systemIconStencil.vars.color]: cssVar(
            buttonColorPropVars.hover.icon,
            system.color.fg.strong
          ),
        },
        '&:active, &.active': {
          [systemIconStencil.vars.color]: cssVar(
            buttonColorPropVars.active.icon,
            system.color.fg.strong
          ),
        },
        '&:disabled, &.disabled': {
          [systemIconStencil.vars.color]: cssVar(
            buttonColorPropVars.disabled.icon,
            system.color.fg.strong
          ),
        },
      },
      start: {},
      end: {},
    },
    isThemeable: {
      true: {
        [systemIconStencil.vars.color]: cssVar(
          buttonColorPropVars.default.icon,
          brand.primary.base
        ),

        '&:focus-visible, &.focus': {
          [systemIconStencil.vars.color]: cssVar(
            buttonColorPropVars.focus.icon,
            brand.primary.base
          ),
        },
        '&:hover, &.hover': {
          [systemIconStencil.vars.color]: cssVar(
            buttonColorPropVars.hover.icon,
            brand.primary.dark
          ),
        },
        '&:active, &.active': {
          [systemIconStencil.vars.color]: cssVar(
            buttonColorPropVars.active.icon,
            brand.primary.darkest
          ),
        },
        '&:disabled, &.disabled': {
          [systemIconStencil.vars.color]: cssVar(
            buttonColorPropVars.disabled.icon,
            brand.primary.base
          ),
        },
      },
    },
    variant: {
      // Inverse Styles
      inverse: {
        [buttonStencil.vars.background]: 'transparent',
        [buttonStencil.vars.label]: system.color.fg.inverse,
        [systemIconStencil.vars.color]: cssVar(
          buttonColorPropVars.default.icon,
          system.color.fg.inverse
        ),
        // Focus Styles
        '&:focus-visible, &.focus': {
          [buttonStencil.vars.background]: system.color.bg.default,
          [buttonStencil.vars.label]: system.color.fg.strong,
          [systemIconStencil.vars.color]: cssVar(
            buttonColorPropVars.focus.icon,
            system.color.fg.strong
          ),
          ...focusRing({
            inset: 'inner',
            width: 2,
            separation: 2,
            innerColor: system.color.border.contrast.default,
            outerColor: system.color.border.inverse,
          }),
        },
        // Hover Styles
        '&:hover, &.hover': {
          [buttonStencil.vars.background]: system.color.bg.default,
          [buttonStencil.vars.label]: system.color.fg.strong,
          [systemIconStencil.vars.color]: cssVar(
            buttonColorPropVars.hover.icon,
            system.color.fg.strong
          ),
        },
        // Active Styles
        '&:active, &.active': {
          [buttonStencil.vars.background]: system.color.bg.alt.soft,
          [buttonStencil.vars.label]: system.color.fg.strong,
          [systemIconStencil.vars.color]: cssVar(
            buttonColorPropVars.active.icon,
            system.color.fg.strong
          ),
        },
        // Disabled Styles
        '&:disabled, &.disabled': {
          [buttonStencil.vars.background]: 'transparent',
          [buttonStencil.vars.label]: system.color.fg.inverse,
          [systemIconStencil.vars.color]: cssVar(
            buttonColorPropVars.disabled.icon,
            system.color.fg.inverse
          ),
        },
      },
    },
  },
  // Compound Modifier Styles
  compound: [
    {
      modifiers: {size: 'large', iconPosition: 'only'},
      styles: {
        minWidth: calc.multiply(system.space.x4, 3),
      },
    },
    {
      modifiers: {size: 'large', iconPosition: 'start'},
      styles: {
        paddingInlineStart: system.space.x2,
        paddingInlineEnd: system.space.x3,
      },
    },
    {
      modifiers: {size: 'large', iconPosition: 'end'},
      styles: {
        paddingInlineStart: system.space.x3,
        paddingInlineEnd: system.space.x2,
      },
    },
    {
      modifiers: {size: 'medium', iconPosition: 'only'},
      styles: {
        minWidth: system.space.x10,
      },
    },
    {
      modifiers: {size: 'medium', iconPosition: 'start'},
      styles: {
        paddingInlineStart: system.space.x2,
        paddingInlineEnd: system.space.x3,
      },
    },
    {
      modifiers: {size: 'medium', iconPosition: 'end'},
      styles: {
        paddingInlineStart: system.space.x3,
        paddingInlineEnd: system.space.x2,
      },
    },
    {
      modifiers: {size: 'small', iconPosition: 'only'},
      styles: {
        minWidth: system.space.x8,
      },
    },
    {
      modifiers: {size: 'small', iconPosition: 'start'},
      styles: {
        paddingInlineStart: system.space.x2,
        paddingInlineEnd: system.space.x3,
      },
    },
    {
      modifiers: {size: 'small', iconPosition: 'end'},
      styles: {
        paddingInlineStart: system.space.x3,
        paddingInlineEnd: system.space.x2,
      },
    },
    {
      modifiers: {size: 'extraSmall', iconPosition: 'only'},
      styles: {
        minWidth: system.space.x6,
      },
    },
    {
      modifiers: {size: 'extraSmall', iconPosition: 'start'},
      styles: {
        paddingInlineStart: system.space.x1,
        paddingInlineEnd: system.space.x2,
      },
    },
    {
      modifiers: {size: 'extraSmall', iconPosition: 'end'},
      styles: {
        paddingInlineStart: system.space.x2,
        paddingInlineEnd: system.space.x1,
      },
    },
  ],
};
