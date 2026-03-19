import {defineStencil} from '../../defineStencil';
import {baseTableStencil} from './baseTableStencil';

export const tableStencil = defineStencil({
  extends: baseTableStencil,
  base: {
    display: 'grid',
  },
});
