import {borderRadius} from '@workday/canvas-kit-react/tokens';
import {calc} from '@workday/canvas-kit-styling';
import {focusRing} from '@workday/canvas-kit-react/common';
import {systemIconStencil} from '../icon/systemIconStencil';
import {system} from '@workday/canvas-tokens-web';

export const avatarStencil = {
  vars: {
    size: '',
  },
  parts: {
    icon: 'avatar-icon',
    image: 'avatar-image',
  },
  base: ({size, iconPart, imagePart}) => ({
    background: system.color.bg.caution.default,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    border: 0,
    overflow: 'hidden',
    cursor: 'default',
    pointerEvents: 'none',
    borderRadius: system.shape.round,
    width: size,
    height: size,
    '&:focus-visible, &.focus': {
      outline: 'none',
      ...focusRing({separation: 2}),
    },
    ':is(button)': {
      cursor: 'pointer',
      pointerEvents: 'auto',
    },
    '&:disabled, &.disabled': {
      opacity: system.opacity.disabled,
    },
    [iconPart]: {
      transition: 'opacity 150ms linear',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      [systemIconStencil.vars.size]: calc.multiply(size, 0.625),
      opacity: 1,
    },
    [imagePart]: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      borderRadius: borderRadius.circle,
      transition: 'opacity 150ms linear',
      opacity: 0,
    },
  }),
  modifiers: {
    variant: {
      light: ({iconPart}) => ({
        backgroundColor: system.color.bg.alt.default,
        [iconPart]: {
          [systemIconStencil.vars.color]: system.color.fg.default,
        },
      }),
      dark: ({iconPart}) => ({
        backgroundColor: system.color.bg.primary.default,
        [iconPart]: {
          [systemIconStencil.vars.color]: system.color.fg.inverse,
        },
      }),
    },
    size: {
      extraSmall: ({iconPart}) => ({
        width: system.space.x4,
        height: system.space.x4,
        [iconPart]: {
          [systemIconStencil.vars.size]: calc.multiply(system.space.x4, 0.625),
        },
      }),
      small: ({iconPart}) => ({
        width: system.space.x6,
        height: system.space.x6,
        [iconPart]: {
          [systemIconStencil.vars.size]: calc.multiply(system.space.x6, 0.625),
        },
      }),
      medium: ({iconPart}) => ({
        width: system.space.x8,
        height: system.space.x8,
        [iconPart]: {
          [systemIconStencil.vars.size]: calc.multiply(system.space.x8, 0.625),
        },
      }),
      large: ({iconPart}) => ({
        width: system.space.x10,
        height: system.space.x10,
        [iconPart]: {
          [systemIconStencil.vars.size]: calc.multiply(system.space.x10, 0.625),
        },
      }),
      extraLarge: ({iconPart}) => ({
        width: system.space.x16,
        height: system.space.x16,
        [iconPart]: {
          [systemIconStencil.vars.size]: calc.multiply(system.space.x16, 0.625),
        },
      }),
      extraExtraLarge: ({iconPart}) => ({
        width: calc.multiply(system.space.x10, 3),
        height: calc.multiply(system.space.x10, 3),
        [iconPart]: {
          [systemIconStencil.vars.size]: calc.multiply(calc.multiply(system.space.x10, 3), 0.625),
        },
      }),
    },
    objectFit: {
      contain: ({imagePart}) => ({
        [imagePart]: {
          objectFit: 'contain',
        },
      }),
      fill: ({imagePart}) => ({
        [imagePart]: {
          objectFit: 'fill',
        },
      }),
      cover: ({imagePart}) => ({
        [imagePart]: {
          objectFit: 'cover',
        },
      }),
      ['scale-down']: ({imagePart}) => ({
        [imagePart]: {
          objectFit: 'scale-down',
        },
      }),
      none: ({imagePart}) => ({
        [imagePart]: {
          objectFit: 'none',
        },
      }),
      ['-moz-initial']: ({imagePart}) => ({
        [imagePart]: {
          objectFit: '-moz-initial',
        },
      }),
      ['initial']: ({imagePart}) => ({
        [imagePart]: {
          objectFit: 'initial',
        },
      }),
      ['inherit']: ({imagePart}) => ({
        [imagePart]: {
          objectFit: 'inherit',
        },
      }),
      ['revert']: ({imagePart}) => ({
        [imagePart]: {
          objectFit: 'revert',
        },
      }),
      ['unset']: ({imagePart}) => ({
        [imagePart]: {
          objectFit: 'unset',
        },
      }),
    },
    isImageLoaded: {
      true: ({iconPart, imagePart}) => ({
        [iconPart]: {
          opacity: 0,
        },
        [imagePart]: {
          opacity: 1,
        },
      }),
    },
  },
  defaultModifiers: {
    variant: 'light',
    objectFit: 'contain',
  },
};
