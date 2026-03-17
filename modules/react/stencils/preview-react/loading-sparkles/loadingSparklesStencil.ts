import {base} from '@workday/canvas-tokens-web';
import {keyframes, px2rem} from '@workday/canvas-kit-styling';
import {systemIconStencil} from '../../react/icon/systemIconStencil';

const ANIMATION_DURATION_MS = 1230;

const LOADING_ANIMATION = keyframes({
  '0%, 79%, 100%': {
    opacity: 0.2,
    transform: 'scale(0.55)',
  },
  '27%': {
    opacity: 1,
    transform: 'scale(1)',
  },
  '53%': {
    opacity: 0.6,
    transform: 'scale(0.7)',
  },
});

export const loadingSparklesStencil = {
  base: {
    display: 'inline-flex',
    gap: px2rem(1),
    '& [data-part="sparkle"]': {
      animationDuration: `${ANIMATION_DURATION_MS}ms`,
      animationFillMode: 'both',
      animationIterationCount: 'infinite',
      animationName: LOADING_ANIMATION,
      animationTimingFunction: 'ease-in-out',
      [systemIconStencil.vars.color]: base.extendedDragonFruit400,
      '&:nth-child(1)': {
        animationDelay: '0ms',
      },
      '&:nth-child(2)': {
        animationDelay: `calc(${ANIMATION_DURATION_MS}ms * (1/3))`,
      },
      '&:nth-child(3)': {
        animationDelay: `calc(${ANIMATION_DURATION_MS}ms * (2/3))`,
      },
    },
  },
};
