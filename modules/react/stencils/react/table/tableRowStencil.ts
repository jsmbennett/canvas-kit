import {createVars} from '@workday/canvas-kit-styling';

import {defineStencil} from '../../defineStencil';

const tableRowChildrenVars = createVars('cellNumber');

export const tableRowStencil = defineStencil({
  base: {
    display: 'grid',
    gridAutoFlow: 'column',
    gridTemplateColumns: `repeat(${tableRowChildrenVars.cellNumber}, minmax(10rem, 1fr))`,
  },
});
