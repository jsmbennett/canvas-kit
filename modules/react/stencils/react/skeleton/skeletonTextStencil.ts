import {cssVar, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export const skeletonTextStencil = {
  vars: {
    backgroundColor: '',
  },
  base: ({backgroundColor}) => ({
    marginBottom: system.space.x6,
    '& [data-part="skeleton-text-lines"]': {
      backgroundColor: cssVar(backgroundColor, system.color.bg.alt.strong),
      height: px2rem(21),
      marginBlockEnd: system.space.x3,
      borderRadius: system.shape.half,
      width: '100%',
    },
    '& [data-part="skeleton-text-lines"]:last-child': {
      width: '60%',
    },
  }),
};
