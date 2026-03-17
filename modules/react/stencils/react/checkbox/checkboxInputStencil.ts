import {brand, system} from '@workday/canvas-tokens-web';
import {calc, px2rem} from '@workday/canvas-kit-styling';
import {checkboxBackgroundStencil} from './checkboxBackgroundStencil';
import {focusRing} from '@workday/canvas-kit-react/common';

export const checkboxInputStencil = {
  base: {
    borderRadius: system.shape.half,
    width: system.space.x6,
    height: system.space.x6,
    margin: system.space.zero,
    marginTop: calc.negate(px2rem(3)),
    marginInlineStart: calc.negate(px2rem(3)),
    position: 'absolute',
    opacity: system.opacity.zero,

    '&:not(:disabled)': {
      cursor: 'pointer',
    },

    '&:where(:hover,.hover) ~ span:first-of-type': {
      boxShadow: `0 0 0 ${px2rem(7)} ${system.color.bg.alt.soft}`,
    },

    // Disabled State
    '&:not(:where(:checked, :indeterminate, :disabled, :focus-visible, .focus)):where(:hover, .hover, :active, .active) ~ div:first-of-type':
      {
        borderColor: system.color.border.input.strong,
      },
    '&:where(:checked, :indeterminate) ~ div:first-of-type': {
      borderColor: brand.primary.base,
      backgroundColor: brand.primary.base,
    },
    '&:disabled ~ div:first-of-type': {
      borderColor: system.color.border.input.disabled,
      backgroundColor: system.color.bg.alt.softer,
      opacity: system.opacity.full,
    },
    '&:disabled:where(:checked, :indeterminate) ~ div:first-of-type': {
      borderColor: brand.primary.light,
      backgroundColor: brand.primary.light,
    },

    // Focus State
    '&:where(:focus-visible, :active, .focus, .active)': {
      outline: 'none',
    },
    '&:where(:focus-visible, .focus) ~ div:first-of-type': {
      borderColor: brand.primary.base,
      borderWidth: px2rem(2),
      ...focusRing({
        width: 0,
        separation: 0,
        animate: false,
      }),
    },
    '&:checked:focus-visible, &:indeterminate:focus-visible, &:checked.focus, &:indeterminate.focus':
      {
        '& ~ div:first-of-type': {
          ...focusRing({
            width: 2,
            separation: 2,
            animate: false,
            outerColor: brand.common.focusOutline,
          }),
          borderColor: brand.primary.base,
          borderWidth: px2rem(2),
          span: {
            marginInlineStart: calc.negate(px2rem(7)),
          },
        },
      },
  },
  modifiers: {
    variant: {
      inverse: {
        '& ~ span:first-of-type': {
          opacity: system.opacity.disabled,
        },

        '& ~ div:first-of-type': {
          borderColor: system.color.border.input.inverse,
        },

        // Disabled State for inverse variant
        '&:not(:where(:checked, :indeterminate, :disabled, :focus-visible, .focus)):where(:hover, .hover, :active, .active) ~ div:first-of-type':
          {
            borderColor: system.color.border.input.inverse,
          },
        '&:where(:checked, :indeterminate) ~ div:first-of-type': {
          borderColor: system.color.border.input.inverse,
          backgroundColor: system.color.bg.default,
        },
        '&:disabled ~ div:first-of-type': {
          backgroundColor: system.color.bg.alt.default,
          opacity: system.opacity.disabled,
        },
        '&:disabled:where(:checked, :indeterminate) ~ div:first-of-type': {
          borderColor: system.color.border.input.inverse,
          backgroundColor: system.color.bg.default,
        },

        // Focus state for inverse variant
        '&:where(:focus-visible, .focus) ~ div:first-of-type': {
          borderColor: system.color.border.contrast.default,
          ...focusRing({
            width: 2,
            separation: 0,
            animate: false,
            innerColor: system.color.border.contrast.default,
            outerColor: system.color.border.inverse,
          }),
        },
        '&:checked:focus-visible, &:checked.focus, &:indeterminate:focus-visible, &:indeterminate.focus':
          {
            '& ~ div:first-of-type': {
              ...focusRing({
                width: 2,
                separation: 2,
                animate: false,
                innerColor: system.color.border.contrast.default,
                outerColor: system.color.border.inverse,
              }),
              borderColor: system.color.border.inverse,
            },
          },
      },
    },
    disabled: {
      true: {
        '&:where(:hover, .hover) ~ span:first-of-type': {
          boxShadow: 'none',
        },
      },
    },
    error: {
      true: {
        '&:not(:where(:focus-visible, .focus)) ~ div:first-of-type': {
          borderColor: checkboxBackgroundStencil.vars.errorRingColorInner,
          boxShadow: `
            0 0 0 ${px2rem(1)} ${checkboxBackgroundStencil.vars.errorRingColorInner},
            0 0 0 ${px2rem(2)} ${checkboxBackgroundStencil.vars.errorRingColorOuter}`,
        },
        '&:where(:checked, :indeterminate) ~ div:first-of-type': {
          borderColor: 'transparent',
          boxShadow: `
            0 0 0 ${px2rem(2)} ${system.color.border.inverse},
            0 0 0 ${px2rem(4)} ${checkboxBackgroundStencil.vars.errorRingColorInner},
            0 0 0 ${px2rem(5)} ${checkboxBackgroundStencil.vars.errorRingColorOuter}`,
        },
        '&:not(:where(:checked, :indeterminate, :disabled, :focus-visible, .focus)):where(:hover, .hover, :active, .active) ~ div:first-of-type':
          {
            borderColor: checkboxBackgroundStencil.vars.errorRingColorInner,
          },
      },
    },
  },
  compound: [
    {
      modifiers: {variant: 'inverse', error: true},
      styles: {
        '&:not(:where(:focus-visible, .focus)) ~ div:first-of-type': {
          border: `${px2rem(1)} solid ${system.color.border.input.inverse}`,
        },
        '&:not(where(:checked, :indeterminate, :disabled, :focus-visible, .focus)):where(:hover, .hover, :active, .active) ~ div:first-of-type':
          {
            borderColor: system.color.border.input.inverse,
          },
        '&:where(:checked, :indeterminate) ~ div:first-of-type': {
          borderColor: system.color.border.input.inverse,
        },
      },
    },
  ],
};
