import {defineStencil} from '../../defineStencil';
import {baseTableBodyStencil} from './baseTableBodyStencil';

export const tableBodyStencil = defineStencil({
  extends: baseTableBodyStencil,
  base: {
    display: 'grid',
  },
});
