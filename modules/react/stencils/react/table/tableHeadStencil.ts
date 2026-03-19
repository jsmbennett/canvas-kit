import {defineStencil} from '../../defineStencil';
import {baseTableHeadStencil} from './baseTableHeadStencil';

export const tableHeadStencil = defineStencil({
  extends: baseTableHeadStencil,
  base: {
    display: 'grid',
  },
});
