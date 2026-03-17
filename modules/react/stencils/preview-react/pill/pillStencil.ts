import {base, system} from '@workday/canvas-tokens-web';
import {buttonStencil} from '../../react/button/buttonStencil';
import {cssVar, px2rem} from '@workday/canvas-kit-styling';
import {focusRing} from '@workday/canvas-kit-react/common';
import {pillCountStencil} from './pillCountStencil';
import {systemIconStencil} from '../../react/icon/systemIconStencil';

export const pillStencil = {
  extends: buttonStencil,
  vars: {
    maxWidth: '',
  },
  base: ({maxWidth}) => ({
    display: 'initial',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: system.shape.x1,
    ...system.type.subtext.large,
    lineHeight: system.lineHeight.subtext.small, // ensure correct line height when there's no elements and just text
    boxShadow: 'none',
    outline: 'none',
    fontWeight: system.fontWeight.medium,
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    width: 'fit-content',
    padding: `${px2rem(2)} ${cssVar(system.space.x2)}`,
    height: system.space.x6,
    position: 'relative',
    gap: system.space.x1,
    maxWidth: maxWidth,
    [buttonStencil.vars.background]: system.color.bg.alt.default,
    [buttonStencil.vars.border]: system.color.border.input.default,
    [buttonStencil.vars.label]: system.color.text.strong,
    [systemIconStencil.vars.color]: system.color.icon.default,
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    '&:has(span)': {
      display: 'flex',
      lineHeight: system.lineHeight.subtext.large, // ensure correct line height
    },
    '&:focus-visible, &.focus': {
      [buttonStencil.vars.background]: system.color.bg.alt.soft,
      [buttonStencil.vars.border]: system.color.border.primary.default,
      [buttonStencil.vars.label]: system.color.text.strong,
      [systemIconStencil.vars.color]: system.color.icon.strong,
      borderColor: system.color.border.primary.default,
      [pillCountStencil.vars.borderColor]: system.color.border.primary.default,

      ...focusRing({
        width: 0,
        inset: 'inner',
        innerColor: system.color.border.primary.default,
        outerColor: system.color.border.primary.default,
        separation: 1,
      }),
    },
    '&:hover, &.hover': {
      [buttonStencil.vars.background]: system.color.bg.alt.strong,
      [buttonStencil.vars.border]: system.color.border.input.strong,
      [buttonStencil.vars.label]: system.color.text.strong,
      [systemIconStencil.vars.color]: system.color.icon.strong,
    },
    '&:active, &.active': {
      [buttonStencil.vars.background]: system.color.bg.alt.stronger,
      [buttonStencil.vars.border]: system.color.border.input.strong,
      [buttonStencil.vars.label]: system.color.text.strong,
      [systemIconStencil.vars.color]: system.color.icon.strong,
      [pillCountStencil.vars.backgroundColor]: base.soap600,
      [pillCountStencil.vars.borderColor]: 'transparent',
    },
    '&:disabled, &.disabled': {
      [buttonStencil.vars.background]: system.color.bg.alt.softer,
      [buttonStencil.vars.border]: system.color.border.input.disabled,
      [buttonStencil.vars.label]: system.color.text.disabled,
      [buttonStencil.vars.opacity]: '1',
      [systemIconStencil.vars.color]: system.color.icon.soft,
      [pillCountStencil.vars.backgroundColor]: system.color.bg.alt.default,
      [pillCountStencil.vars.borderColor]: 'transparent',
    },
  }),
};
