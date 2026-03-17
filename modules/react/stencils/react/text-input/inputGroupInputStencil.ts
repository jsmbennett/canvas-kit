


export const inputGroupInputStencil = {
  vars: {
    paddingInlineStart: '',
    paddingInlineEnd: '',
  },
  base: {
    display: 'flex',
    width: '100%',
  },
  modifiers: {
    paddingInlineStart: {
      _: ({paddingInlineStart}) => ({paddingInlineStart}),
    },
    paddingInlineEnd: {
      _: ({paddingInlineEnd}) => ({paddingInlineEnd}),
    },
  },
};
