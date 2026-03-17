import {brand, system} from '@workday/canvas-tokens-web';
import {calc, px2rem} from '@workday/canvas-kit-styling';
import {textInputStencil} from '../../react/text-input/textInputStencil';

export const multiSelectInputStencil = {
  //@ts-ignore Types don't like defining a variable in `base` and using a variable in a nested selector. One or the other is fine, but not both.
  base: {
    border: `1px solid ${system.color.border.input.default}`,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: system.color.bg.default,
    borderRadius: system.shape.x1,
    boxSizing: 'border-box',
    minHeight: system.space.x10,
    transition: '0.2s box-shadow, 0.2s border-color',
    margin: 0, // Fix Safari
    [textInputStencil.vars.width]: '100%',

    '&:hover, &.hover': {
      borderColor: system.color.border.input.strong,
    },

    '&:has(:focus-visible:not([disabled])), &.focus': {
      borderColor: system.color.border.primary.default,
      boxShadow: `inset 0 0 0 1px ${system.color.border.primary.default}`,
    },

    '& [data-part="user-input"]': {
      ...system.type.subtext.large,
      backgroundColor: system.color.bg.transparent,
      borderRadius: system.shape.x1,

      // collapse the height of the input by the border width so that an empty multi-select
      // is the same height as a `TextInput`
      '&:where([data-part="user-input"], [data-part="form-input"])': {
        height: calc.subtract(system.space.x10, px2rem(2)),
      },

      // Remove the focus ring - it is handled at the container level
      border: 'none !important',
      boxShadow: 'none !important',
      outlineWidth: '0px',

      '&:where(:not([aria-autocomplete]))': {
        caretColor: 'transparent',
        cursor: 'default',
        '&::selection': {
          backgroundColor: 'transparent',
        },
      },
    },

    '&:has(:disabled, .disabled)': {
      borderColor: system.color.border.input.disabled,
      color: system.color.text.disabled,
    },

    '& :where([data-part="form-input"])': {
      position: 'absolute',
      top: system.space.zero,
      bottom: system.space.zero,
      left: system.space.zero,
      right: system.space.zero,
      opacity: system.opacity.zero,
      cursor: 'default',
      pointerEvents: 'none',
    },

    '& :where([data-part="separator"])': {
      backgroundColor: system.color.border.divider,
      height: 1,
      margin: `${system.space.zero} ${system.space.x2}`,
    },

    '& :where([data-part="list"])': {
      display: 'flex',
      gap: system.space.x2,
      padding: system.space.x2,
      flexWrap: 'wrap',
    },
  },
  modifiers: {
    error: {
      error: {
        borderColor: brand.error.base,
        boxShadow: `inset 0 0 0 ${px2rem(1)} ${brand.error.base}`,
        '&:has(:hover, :disabled, :focus-visible), &:is(.hover, .disabled, .focus)': {
          borderColor: brand.error.base,
        },
        '&:has(:focus-visible:not([disabled])), &.focus': {
          boxShadow: `inset 0 0 0 ${px2rem(1)} ${brand.error.base}, 0 0 0 2px ${
            system.color.border.inverse
          }, 0 0 0 4px ${brand.common.focusOutline}`,
          outlineOffset: px2rem(2),
        },
      },
      alert: {
        borderColor: brand.alert.darkest,
        boxShadow: `inset 0 0 0 ${px2rem(2)} ${brand.alert.base}`,
        '&:has(:hover, .hover, :disabled, .disabled, :focus-visible:not([disabled])), .focus:not(:has([disabled]))':
          {
            borderColor: brand.alert.darkest,
          },

        '&:has(:focus-visible, .focus):not(:has([disabled]))': {
          boxShadow: `inset 0 0 0 ${px2rem(2)} ${brand.alert.base},
        0 0 0 2px ${system.color.border.inverse},
        0 0 0 4px ${brand.common.focusOutline}`,
        },
        outlineOffset: px2rem(2),
      },
    },
  },
};
