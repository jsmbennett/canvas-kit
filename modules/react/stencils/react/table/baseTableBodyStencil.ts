


export const baseTableBodyStencil = {
  base: {
    'tr ': {
      '&:last-of-type': {
        'td, th': {
          borderBottom: 'none',
        },
      },
      '&:first-of-type': {
        'td, th': {
          borderTop: 'none',
        },
      },
    },
    'td ': {
      '&:last-of-type': {
        borderInlineEnd: 'none',
      },
      '&:first-of-type': {
        borderInlineStart: 'none',
      },
    },
  },
};
