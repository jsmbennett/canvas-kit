import {cssVar} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export const skeletonShapeStencil = {
  vars: {
    width: '',
    height: '',
    borderRadius: '',
    backgroundColor: '',
  },
  base: ({width, height, borderRadius, backgroundColor}) => ({
    backgroundColor: cssVar(backgroundColor, system.color.bg.alt.strong),
    borderRadius: cssVar(borderRadius, system.space.zero),
    height: cssVar(height, '100%'),
    width: width,
    marginBottom: system.space.x4,
  }),
};
