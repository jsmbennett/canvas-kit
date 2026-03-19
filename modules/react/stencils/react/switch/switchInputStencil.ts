import {focusRing} from '@workday/canvas-kit-react/common';
import {px2rem} from '@workday/canvas-kit-styling';
import {brand, system} from '@workday/canvas-tokens-web';

import {defineStencil} from '../../defineStencil';

export const switchInputStencil = defineStencil({
  base: {
    display: 'flex',
    position: 'absolute',
    height: system.space.x6,
    width: system.space.x8,
    margin: system.space.zero,
    marginLeft: system.space.x1,
    borderRadius: system.shape.round,
    opacity: '0',
    cursor: 'pointer',
    '&:checked, &.checked': {
      '& ~ div:first-of-type': {
        backgroundColor: brand.primary.base,
      },
      '&:disabled, &.disabled': {
        '& ~ div:first-of-type': {
          opacity: system.opacity.disabled,
        },
      },
    },
    '&:disabled, &.disabled': {
      cursor: 'not-allowed',
      '& ~ div:first-of-type': {
        opacity: system.opacity.disabled,
      },
    },
    '&:focus-visible, &:focus, &.focus': {
      outline: 'none',
      '& ~ div:first-of-type': {
        ...focusRing({separation: 2, animate: false}),
      },
    },
  },
  modifiers: {
    error: {
      error: {
        '& ~ div:first-of-type': {
          boxShadow: `
              0 0 0 ${px2rem(2)} ${system.color.border.inverse.default},
              0 0 0 ${system.space.x1} ${brand.error.base},
              0 0 0 ${px2rem(5)} transparent`,
        },
      },
      alert: {
        '& ~ div:first-of-type': {
          boxShadow: `
          0 0 0 ${px2rem(2)} ${system.color.border.inverse.default},
          0 0 0 ${system.space.x1} ${brand.alert.base},
          0 0 0 ${px2rem(5)} ${brand.alert.darkest}`,
        },
      },
    },
  },
});
