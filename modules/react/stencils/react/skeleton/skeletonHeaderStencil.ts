import {calc, cssVar} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export const skeletonHeaderStencil = {
  vars: {
    width: '',
    height: '',
    backgroundColor: '',
  },
  base: ({width, backgroundColor, height}) => ({
    backgroundColor: cssVar(backgroundColor, system.color.bg.alt.strong),
    borderRadius: 0,
    height: cssVar(height, calc.multiply(system.space.x1, 7)),
    width: width,
    marginBottom: system.space.x4,
  }),
};
