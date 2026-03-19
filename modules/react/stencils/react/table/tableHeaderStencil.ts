import {defineStencil} from '../../defineStencil';
import {baseTableHeaderStencil} from './baseTableHeaderStencil';

export const tableHeaderStencil = defineStencil({
  extends: baseTableHeaderStencil,
  base: {
    display: 'grid',
    alignItems: 'center',
  },
});
