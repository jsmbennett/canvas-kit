import {accessibleHide} from '@workday/canvas-kit-react/common';
import {brand, system} from '@workday/canvas-tokens-web';
import {px2rem} from '@workday/canvas-kit-styling';
import {textStencil} from '../text/textStencil';

export const formFieldLabelStencil = {
  extends: textStencil,
  base: {
    fontWeight: system.fontWeight.medium,
    color: system.color.text.default,
    paddingInlineStart: system.space.zero,
    display: 'flex',
    alignItems: 'center',
    minWidth: px2rem(180),
  },
  modifiers: {
    isRequired: {
      true: {
        '&::after': {
          content: '"*"',
          fontSize: system.fontSize.body.large,
          fontWeight: system.fontWeight.normal,
          color: brand.error.base,
          textDecoration: 'unset',
          marginInlineStart: system.space.x1,
        },
      },
    },
    orientation: {
      horizontalStart: {
        justifyContent: 'flex-start',
        float: 'left',
        maxHeight: system.space.x10,
      },
      horizontalEnd: {
        maxHeight: system.space.x10,
        float: 'left',
        justifyContent: 'flex-end',
      },
      vertical: {
        width: '100%',
      },
    },
    isHidden: {
      true: {
        ...accessibleHide,
      },
    },
  },
  defaultModifiers: {
    typeLevel: 'subtext.large',
  },
};
