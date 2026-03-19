import {accessibleHide} from '@workday/canvas-kit-react/common';
import {keyframes} from '@workday/canvas-kit-styling';

import {defineStencil} from '../../defineStencil';

const fade = keyframes({
  from: {opacity: 0.4},
  to: {opacity: 1},
});

export const skeletonStencil = defineStencil({
  base: () => ({
    animation: `${fade} 0.8s linear infinite alternate`,
    position: 'relative',
    overflow: 'hidden',
    height: '100%',
    width: '100%',
    '& [data-part="skeleton-accessible-hide"]': {
      ...accessibleHide,
    },
  }),
});
