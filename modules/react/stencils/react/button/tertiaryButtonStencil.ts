import {focusRing} from '@workday/canvas-kit-react/common';
import {calc} from '@workday/canvas-kit-styling';
import {brand, system} from '@workday/canvas-tokens-web';

import {systemIconStencil} from '../../../icon/lib/SystemIcon';
import {defineStencil} from '../../defineStencil';
import {buttonStencil} from './buttonStencil';

export const tertiaryButtonStencil = defineStencil({
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
    [systemIconStencil.vars.color]: 'currentColor',
    // Focus Styles
    '&:focus-visible, &.focus': {
      [buttonStencil.vars.background]: 'transparent',
      [buttonStencil.vars.label]: brand.primary.base,
      [buttonStencil.vars.boxShadowInner]: brand.common.focusOutline,
      [buttonStencil.vars.boxShadowOuter]: brand.common.focusOutline,
      [systemIconStencil.vars.color]: 'currentColor',
      ...focusRing({
        width: 2,
        separation: 0,
        innerColor: system.color.border.inverse.default,
        outerColor: brand.common.focusOutline,
      }),
    },
    // Hover Styles
    '&:hover, &.hover': {
      [buttonStencil.vars.background]: system.color.bg.alt.default,
      [buttonStencil.vars.label]: brand.primary.dark,
      [systemIconStencil.vars.color]: 'currentColor',
    },
    // Active Styles
    '&:active, &.active': {
      [buttonStencil.vars.background]: system.color.bg.alt.strong,
      [buttonStencil.vars.label]: brand.primary.darkest,
      [systemIconStencil.vars.color]: 'currentColor',
    },
    // Disabled Styles
    '&:disabled, &.disabled': {
      [buttonStencil.vars.background]: 'transparent',
      [buttonStencil.vars.label]: brand.primary.base,
      [buttonStencil.vars.opacity]: system.opacity.disabled,
      [systemIconStencil.vars.color]: 'currentColor',
    },
  },
  modifiers: {
    // IconPosition Styles
    iconPosition: {
      only: {
        padding: 0,
        borderRadius: system.shape.round,
        [systemIconStencil.vars.color]: 'currentColor',
        '&:focus-visible, &.focus': {
          [systemIconStencil.vars.color]: 'currentColor',
        },
        '&:hover, &.hover': {
          [systemIconStencil.vars.color]: 'currentColor',
        },
        '&:active, &.active': {
          [systemIconStencil.vars.color]: 'currentColor',
        },
        '&:disabled, &.disabled': {
          [systemIconStencil.vars.color]: 'currentColor',
        },
      },
      start: {},
      end: {},
    },
    isThemeable: {
      true: {
        [systemIconStencil.vars.color]: 'currentColor',

        '&:focus-visible, &.focus': {
          [systemIconStencil.vars.color]: 'currentColor',
        },
        '&:hover, &.hover': {
          [systemIconStencil.vars.color]: 'currentColor',
        },
        '&:active, &.active': {
          [systemIconStencil.vars.color]: 'currentColor',
        },
        '&:disabled, &.disabled': {
          [systemIconStencil.vars.color]: 'currentColor',
        },
      },
    },
    variant: {
      // Inverse Styles
      inverse: {
        [buttonStencil.vars.background]: 'transparent',
        [buttonStencil.vars.label]: system.color.fg.inverse,
        [systemIconStencil.vars.color]: 'currentColor',
        // Focus Styles
        '&:focus-visible, &.focus': {
          [buttonStencil.vars.background]: system.color.bg.default,
          [buttonStencil.vars.label]: system.color.fg.strong,
          [systemIconStencil.vars.color]: 'currentColor',
          ...focusRing({
            inset: 'inner',
            width: 2,
            separation: 2,
            innerColor: system.color.border.contrast.default,
            outerColor: system.color.border.inverse.default,
          }),
        },
        // Hover Styles
        '&:hover, &.hover': {
          [buttonStencil.vars.background]: system.color.bg.default,
          [buttonStencil.vars.label]: system.color.fg.strong,
          [systemIconStencil.vars.color]: 'currentColor',
        },
        // Active Styles
        '&:active, &.active': {
          [buttonStencil.vars.background]: system.color.bg.alt.soft,
          [buttonStencil.vars.label]: system.color.fg.strong,
          [systemIconStencil.vars.color]: 'currentColor',
        },
        // Disabled Styles
        '&:disabled, &.disabled': {
          [buttonStencil.vars.background]: 'transparent',
          [buttonStencil.vars.label]: system.color.fg.inverse,
          [systemIconStencil.vars.color]: 'currentColor',
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
});
