import {keyframes, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const grow = keyframes({
  from: {
    transform: 'scale(0.85)',
  },
  to: {
    transform: 'scale(1.0)',
  },
});

export const countBadgeStencil = {
  base: {
    alignItems: 'center',
    animation: `${grow} 0.2s ease`,
    background: system.color.static.red.default,
    borderRadius: system.shape.round,
    color: system.color.text.inverse,
    display: 'inline-flex',
    fontFamily: system.fontFamily.default,
    fontSize: system.fontSize.subtext.medium,
    fontWeight: system.fontWeight.bold,
    height: px2rem(20),
    justifyContent: 'center',
    lineHeight: px2rem(20),
    minWidth: px2rem(20),
    padding: `0 ${px2rem(6.5)}`,
    textShadow: `0 0 ${px2rem(1)} rgba(0,0,0, 0.35)`,
  },
  modifiers: {
    variant: {
      // .cnvs-count-badge--variant-inverse
      inverse: {
        background: system.color.bg.default,
        boxShadow: `0 ${px2rem(1)} ${px2rem(2)} rgba(0,0,0, 0.25)`,
        color: system.color.text.primary.default,
        textShadow: 'none',
      },
    },
  },
};
