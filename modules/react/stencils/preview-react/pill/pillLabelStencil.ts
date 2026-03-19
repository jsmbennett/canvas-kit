import {defineStencil} from '../../defineStencil';

export const pillLabelStencil = defineStencil({
  base: {
    flexShrink: 1,
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
});
