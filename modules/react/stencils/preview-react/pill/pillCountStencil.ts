import {calc, cssVar, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export const pillCountStencil = {
  vars: {
    backgroundColor: '',
    borderColor: '',
  },
  base: ({backgroundColor, borderColor}) => ({
    borderStartStartRadius: system.shape.zero,
    borderStartEndRadius: system.shape.x1,
    borderEndStartRadius: system.shape.zero,
    borderEndEndRadius: system.shape.x1,
    borderWidth: px2rem(1),
    borderInlineStartWidth: system.space.zero,
    borderStyle: 'solid',
    borderColor: cssVar(borderColor, system.color.border.transparent),
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: px2rem(22),
    width: system.space.x6,
    padding: `${system.space.zero} ${system.space.x1}`,
    marginInlineEnd: calc.negate(system.space.x2),
    marginInlineStart: system.space.x1,
    backgroundColor: cssVar(backgroundColor, system.color.bg.alt.stronger),
    flex: '0 0 auto',
  }),
};
