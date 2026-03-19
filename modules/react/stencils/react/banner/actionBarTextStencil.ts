import {defineStencil} from '../../defineStencil';

export const actionBarTextStencil = defineStencil({
  base: {
    textDecoration: 'underline',
    display: 'inline',
  },
  modifiers: {
    isSticky: {
      true: {
        display: 'none',
      },
    },
  },
});
