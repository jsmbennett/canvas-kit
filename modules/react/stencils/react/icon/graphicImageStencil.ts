


export const graphicImageStencil = {
  vars: {
    width: '',
    height: '',
  },
  base: ({width, height}) => ({
    width,
    height,
    display: 'inline-block',
    '& [data-part="graphic-img"]': {
      width,
      height,
      maxWidth: '100%',
      maxHeight: '100%',
    },
  }),
  modifiers: {
    grow: {
      true: {
        width: '100%',
        '& [data-part="graphic-img"]': {
          width: '100%',
        },
      },
    },
  },
};
