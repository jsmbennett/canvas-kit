import {buttonStencil} from '../../react/button/buttonStencil';
import {calc, px2rem} from '@workday/canvas-kit-styling';
import {focusRing} from '@workday/canvas-kit-react/common';
import {systemIconStencil} from '../../react/icon/systemIconStencil';
import {system} from '@workday/canvas-tokens-web';

export const pillIconButtonStencil = {
  extends: buttonStencil,
  base: {
    marginInlineEnd: calc.negate(px2rem(7)), // visually pull in the pill to the right size  by -7px
    marginInlineStart: calc.negate(px2rem(2)), // visually create space between label and the button by -2px
    borderRadius: system.shape.half,
    height: calc.add(system.space.x4, system.space.x1),
    width: calc.add(system.space.x4, system.space.x1),
    padding: system.space.zero,
    overflow: 'visible',
    flex: '0 0 auto',
    [buttonStencil.vars.border]: system.color.border.transparent,
    [buttonStencil.vars.background]: system.color.bg.alt.soft,
    [systemIconStencil.vars.color]: system.color.icon.default,
    [systemIconStencil.vars.size]: system.space.x6,
    '::after': {
      content: '""',
      height: system.space.x8,
      width: system.space.x8,
      position: 'absolute',
      left: calc.negate(px2rem(7)),
      bottom: calc.negate(px2rem(7)),
      margin: system.space.zero,
      pointerEvents: 'all',
    },

    '&:focus-visible, &.focus': {
      [buttonStencil.vars.border]: system.color.border.transparent,
      ...focusRing({
        innerColor: system.color.border.transparent,
      }),
    },
    '&:hover, &.hover': {
      [buttonStencil.vars.border]: system.color.border.transparent,
    },
    '&:disabled, &.disabled': {
      [buttonStencil.vars.border]: system.color.border.transparent,
    },
  },
};
