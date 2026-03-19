import {system} from '@workday/canvas-tokens-web';

import {defineStencil} from '../../defineStencil';

export const expandableTargetStencil = defineStencil({
  base: {
    background: system.color.bg.transparent,
    borderColor: system.color.bg.transparent,
    borderRadius: system.shape.x1,
    borderWidth: 0,
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'start',
    padding: system.space.x2,
    cursor: 'pointer',
    width: '100%',
    '&:hover, &.hover': {
      backgroundColor: system.color.bg.alt.default,
    },
  },
});
