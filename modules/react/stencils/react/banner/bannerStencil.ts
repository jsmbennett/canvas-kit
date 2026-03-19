import {focusRing} from '@workday/canvas-kit-react/common';
import {px2rem} from '@workday/canvas-kit-styling';
import {brand, system} from '@workday/canvas-tokens-web';

import {defineStencil} from '../../defineStencil';
import {systemIconStencil} from '../icon/systemIconStencil';

export const bannerStencil = defineStencil({
  base: {
    ...system.type.subtext.large,
    // TODO: Need to update fontFamily token [#3221](https://github.com/Workday/canvas-kit/issues/3221).
    fontFamily: `${system.fontFamily.default}, Helvetica Neue, Helvetica, Arial, sans-serif`,
    fontWeight: system.fontWeight.medium,
    padding: `${system.space.x2} ${system.space.x4}`,
    border: '0',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'left',
    borderStartStartRadius: system.shape.x1,
    borderStartEndRadius: system.shape.x1,
    borderEndStartRadius: system.shape.x1,
    borderEndEndRadius: system.shape.x1,
    cursor: 'pointer',
    transition: 'background-color 120ms',
    outline: `${system.space.x1} solid transparent`,
    '&:focus-visible, &.focus': {
      outline: `${system.shape.x1} double transparent`,
      ...focusRing({separation: 2}),
    },
  },
  modifiers: {
    hasErrors: {
      true: {
        backgroundColor: brand.error.base,
        color: brand.error.accent,
        '&:hover, &.hover': {
          background: brand.error.dark,
        },
        '& [data-part="exclamation-circle-icon"]': {
          [systemIconStencil.vars.accentColor]: brand.error.accent,
          [systemIconStencil.vars.color]: brand.error.accent,
          [systemIconStencil.vars.backgroundColor]: 'none',
        },
      },
      false: {
        backgroundColor: brand.alert.base,
        color: system.color.fg.contrast.default,
        '&:hover, &.hover': {
          background: brand.alert.dark,
        },
        '& [data-part="exclamation-triangle-icon"]': {
          [systemIconStencil.vars.accentColor]: system.color.fg.contrast.default,
          [systemIconStencil.vars.color]: system.color.fg.contrast.default,
          [systemIconStencil.vars.backgroundColor]: 'none',
        },
      },
    },
    isSticky: {
      true: {
        width: px2rem(222),
        borderStartEndRadius: 0,
        borderEndEndRadius: 0,
      },
      false: {
        width: px2rem(328),
      },
    },
  },
});
