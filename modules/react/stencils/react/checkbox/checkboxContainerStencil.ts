import {calc, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export const checkboxContainerStencil = {
  base: {
    display: 'flex',
    alignItems: 'center',
    minHeight: system.space.x6,
    position: 'relative',
    /**
     * Using a wrapper prevents the browser default behavior of trigging
     * :hover on the checkbox when you hover on it's corresponding label.
     * This stops the ripple from showing when you hover on the label.
     */
    '&>div': {
      display: 'flex',
      height: calc.add(system.space.x4, px2rem(2)),
      minWidth: calc.add(system.space.x4, px2rem(2)),
      marginTop: px2rem(3),
      alignSelf: 'flex-start',
    },
    '& > label': {
      paddingInlineStart: system.space.x3,
    },
  },
};
