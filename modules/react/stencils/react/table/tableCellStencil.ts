import {defineStencil} from '../../defineStencil';
import {baseTableCellStencil} from './baseTableCellStencil';

export const tableCellStencil = defineStencil({
  extends: baseTableCellStencil,
  base: {
    display: 'grid',
  },
});
