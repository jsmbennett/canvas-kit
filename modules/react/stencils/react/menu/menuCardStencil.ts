import {calc, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

import {defineStencil} from '../../defineStencil';

export const menuCardStencil = defineStencil({
  vars: {
    minWidth: px2rem(1),
    transformOriginVertical: 'top',
    transformOriginHorizontal: 'left',
    maxHeight: '',
  },
  base: ({transformOriginVertical, transformOriginHorizontal, minWidth, maxHeight}: any) => ({
    ...system.type.subtext.large,
    color: system.color.text.default,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    transition: `transform ease-out 150ms`,
    padding: system.space.zero,
    maxWidth: calc.subtract('100vw', system.space.x8),
    boxShadow: system.depth[3],
    minWidth,
    maxHeight,
    transformOrigin: `${transformOriginVertical} ${transformOriginHorizontal}`,
    // Allow overriding of animation in special cases
    '.wd-no-animation &': {
      animation: 'none',
    },
  }),
});
