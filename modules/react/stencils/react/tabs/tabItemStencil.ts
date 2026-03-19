import {focusRing} from '@workday/canvas-kit-react/common';
import {calc, px2rem} from '@workday/canvas-kit-styling';
import {base, brand, system} from '@workday/canvas-tokens-web';

import {defineStencil} from '../../defineStencil';
import {buttonStencil} from '../button/buttonStencil';
import {systemIconStencil} from '../icon/systemIconStencil';

export const tabItemStencil = defineStencil({
  base: {
    ...system.type.subtext.large,
    fontFamily: `${system.fontFamily.default}, Helvetica Neue, Helvetica, Arial, sans-serif`,
    fontWeight: system.fontWeight.medium,
    border: 'none',
    backgroundColor: 'transparent',
    flex: '0 0 auto',
    minWidth: system.space.zero,
    alignItems: 'center',
    padding: `${system.space.x3} ${system.space.x4}`,
    height: px2rem(52),
    cursor: 'pointer',
    color: system.color.fg.muted.default,
    position: 'relative',
    borderRadius: `${system.space.x1} ${system.space.x1} ${system.space.zero} ${system.space.zero}`,
    transition: 'background 150ms ease, color 150ms ease',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    [systemIconStencil.vars.color]: system.color.fg.muted.soft,

    '&:has(span)': {
      display: 'flex',
      gap: system.space.x2,
    },

    '&:hover, &.hover, &:focus-visible, &.focus': {
      backgroundColor: base.soap200,
      color: base.blackPepper400,

      [systemIconStencil.vars.color]: system.color.icon.strong,
    },

    '&:focus-visible, &.focus': {
      // focus outline for Windows high contrast theme
      outline: `${px2rem(2)} solid transparent`,
      ...focusRing({inset: 'outer', width: 0, separation: 2}),
      [buttonStencil.vars.boxShadowInner]: system.color.border.inverse.default,
      [buttonStencil.vars.boxShadowOuter]: brand.common.focusOutline,
      [systemIconStencil.vars.color]: system.color.icon.strong,
    },

    '&:disabled, &.disabled, &[aria-disabled]': {
      color: system.color.text.disabled,
      [systemIconStencil.vars.color]: system.color.fg.disabled,
      '&:hover': {
        cursor: 'auto',
        backgroundColor: system.color.bg.transparent,
        [systemIconStencil.vars.color]: system.color.fg.disabled,
      },
    },

    '&[aria-selected=true]': {
      color: brand.primary.base,
      cursor: 'default',
      [systemIconStencil.vars.color]: brand.primary.base,
      '&:after': {
        position: 'absolute',
        // selected state for Windows high contrast theme
        borderBottom: `${system.space.x1} solid transparent`,
        borderRadius: `${system.shape.x1} ${system.shape.x1} ${system.shape.zero} ${system.shape.zero}`,
        backgroundColor: brand.primary.base,
        bottom: system.space.zero,
        content: `''`,
        left: system.space.zero,
        marginBlockStart: `${calc.negate(calc.divide(system.space.x2, system.space.x1))}`,
        width: '100%',
      },
      '&:hover, &.hover, &:focus-visible, &.focus': {
        backgroundColor: system.color.bg.transparent,
        color: brand.primary.base,
      },
    },
  },
});
