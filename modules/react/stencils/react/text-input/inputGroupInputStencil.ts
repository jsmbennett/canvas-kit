import {defineStencil} from '../../defineStencil';

export const inputGroupInputStencil = defineStencil({
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
      _: ({paddingInlineStart}: any) => ({paddingInlineStart}),
    },
    paddingInlineEnd: {
      _: ({paddingInlineEnd}: any) => ({paddingInlineEnd}),
    },
  },
});
