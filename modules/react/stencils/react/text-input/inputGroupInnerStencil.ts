import {system} from '@workday/canvas-tokens-web';

import {defineStencil} from '../../defineStencil';

export const inputGroupInnerStencil = defineStencil({
  vars: {
    /**
     * Offset of the inner item. Set by the `InputGroup` and depends on siblings. Do not change this
     * on your own.
     */
    insetInlineStart: 'initial',
    /**
     * Offset of the inner item. Set by the `InputGroup` and depends on siblings. Do not change this
     * on your own.
     */
    insetInlineEnd: 'initial',
    width: system.space.x10,
    height: system.space.x10,
    /**
     * Some inner input group elements are decoration only and should not have pointer events
     */
    pointerEvents: '',
  },
  base: ({width, height, insetInlineStart, insetInlineEnd}: any) => ({
    display: 'flex',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width,
    height,
    insetInlineStart,
    insetInlineEnd,
  }),
  modifiers: {
    pointerEvents: {
      _: ({pointerEvents}: any) => ({pointerEvents}),
    },
  },
});
