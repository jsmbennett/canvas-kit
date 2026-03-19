import {calc, cssVar} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

import {defineStencil} from '../../defineStencil';

export const skeletonHeaderStencil = defineStencil({
  vars: {
    width: '',
    height: '',
    backgroundColor: '',
  },
  base: ({width, backgroundColor, height}: any) => ({
    backgroundColor: cssVar(backgroundColor, system.color.bg.alt.strong),
    borderRadius: 0,
    height: cssVar(height, calc.multiply(system.space.x1, 7)),
    width: width,
    marginBottom: system.space.x4,
  }),
});
