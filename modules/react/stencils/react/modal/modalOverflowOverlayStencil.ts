import {defineStencil} from '../../defineStencil';

export const modalOverflowOverlayStencil = defineStencil({
  base: {
    '& > div': {maxHeight: 'inherit'}, // reset maxHeight of centering div
    overflow: 'hidden auto',
  },
});
