import {createVars} from '@workday/canvas-kit-styling';

const tableRowChildrenVars = createVars('cellNumber');

export const tableRowStencil = {
  base: {
    display: 'grid',
    gridAutoFlow: 'column',
    gridTemplateColumns: `repeat(${tableRowChildrenVars.cellNumber}, minmax(10rem, 1fr))`,
  },
};
