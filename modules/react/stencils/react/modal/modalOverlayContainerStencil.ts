import {cssVar, keyframes} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const fadeIn = keyframes({
  '0%': {
    background: 'none',
  },
  '100%': {
    background: cssVar(system.color.bg.overlay),
  },
});

export const modalOverlayContainerStencil = {
  vars: {
    containerCenter: '',
  },
  base: ({containerCenter}) => ({
    position: 'fixed',
    top: system.space.zero,
    left: system.space.zero,
    width: '100vw',
    height: '100vh',
    background: system.color.bg.overlay,
    animationDuration: '0.3s',
    animationName: fadeIn,
    // Allow overriding of animation in special cases
    '.wd-no-animation &': {
      animation: 'none',
    },
    // Responsive Container
    '& > div': {
      maxHeight: '100%',
      display: 'flex',
      position: 'absolute',
      left: system.space.zero,
      top: system.space.zero,
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      width: containerCenter,
    },
    '@media screen and (max-width: 768px)': {
      height: '100%',
      '& > div': {
        alignItems: 'end',
      },
    },
  }),
};
