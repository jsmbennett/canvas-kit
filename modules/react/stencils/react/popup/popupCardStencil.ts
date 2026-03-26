import {createVars, cssVar, keyframes} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

import {defineStencil} from '../../defineStencil';

const translateVars = createVars('positionX', 'positionY');

const fadeIn = keyframes({
  '0%': {
    opacity: 1,
    transform: `translate(${cssVar(translateVars.positionX)}, ${cssVar(translateVars.positionY)})`,
  },
  '100%': {
    opacity: 1,
    transform: `translate(0)`,
  },
});

export const popupCardStencil = defineStencil({
  vars: {
    maxHeight: '',
    transformOriginHorizontal: '',
    transformOriginVertical: '',
  },
  base: ({maxHeight, transformOriginHorizontal, transformOriginVertical}: any) => ({
    ...system.type.subtext.large,
    display: 'flex',
    position: 'relative',
    maxWidth: `calc(100vw - ${system.space.x8})`,
    flexDirection: 'column',
    boxShadow: system.depth[5],
    borderRadius: system.shape.md,
    minHeight: system.space.zero,
    padding: system.space.x6,
    maxHeight: maxHeight,
    overflowY: 'auto',
    animationName: fadeIn,
    animationDuration: '150ms',
    animationTimingFunction: 'ease-out',
    transformOrigin: `${transformOriginVertical} ${transformOriginHorizontal}`,
    // Allow overriding of animation in special cases
    '.wd-no-animation &': {
      animation: 'none',
    },
    '@media screen and (max-width: 768px)': {
      transformOrigin: 'bottom center',
    },
  }),
});
