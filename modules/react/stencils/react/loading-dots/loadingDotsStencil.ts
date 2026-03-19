import {calc, keyframes, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

import {defineStencil} from '../../defineStencil';

const keyframesLoading = keyframes({
  '0%, 80%, 100%': {
    transform: 'scale(0)',
  },
  '40%': {
    transform: 'scale(1)',
  },
});

export const loadingDotsStencil = defineStencil({
  vars: {
    animationDurationMs: '40ms',
    loadingDotColor: system.color.bg.alt.strong,
  },
  base: ({loadingDotColor, animationDurationMs}: any) => ({
    display: 'inline-flex',
    gap: system.space.x2,
    '& [data-part="loading-animation-dot"]': {
      backgroundColor: loadingDotColor,
      width: system.space.x4,
      height: system.space.x4,
      fontSize: system.space.zero,
      borderRadius: system.shape.round,
      outline: `${px2rem(2)} solid transparent`,
      transform: 'scale(0)',
      display: 'inline-block',
      animationName: keyframesLoading,
      animationDuration: calc.multiply(animationDurationMs, 35),
      animationIterationCount: 'infinite',
      animationTimingFunction: 'ease-in-out',
      animationFillMode: 'both',
      '&:nth-child(1)': {
        animationDelay: '0ms',
      },
      '&:nth-child(2)': {
        animationDelay: calc.multiply(animationDurationMs, 4),
      },
      '&:nth-child(3)': {
        animationDelay: calc.multiply(animationDurationMs, 8),
      },
    },
  }),
});
