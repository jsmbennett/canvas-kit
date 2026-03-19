import {cssVar, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

import {defineStencil} from '../../defineStencil';

export const skeletonTextStencil = defineStencil({
  vars: {
    backgroundColor: '',
  },
  base: ({backgroundColor}: any) => ({
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
});
