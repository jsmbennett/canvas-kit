import {defineStencil} from '../../defineStencil';

export const inputGroupStencil = defineStencil({
  base: {
    display: 'flex',
    position: 'relative',
    alignItems: 'center',

    // Clear Button
    '& :has([data-part="input-group-clear-button"])': {
      transition: 'opacity 300ms ease',
    },

    // Clear Button when a placeholder is being shown (no value)
    '&:where(:has(input:placeholder-shown)) :has([data-part="input-group-clear-button"])': {
      opacity: 0,
      pointerEvents: 'none',
    },
  },
});
