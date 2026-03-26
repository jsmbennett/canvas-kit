import {px2rem} from '@workday/canvas-kit-styling';
import {brand, system} from '@workday/canvas-tokens-web';

import {defineStencil} from '../../defineStencil';
import {systemIconStencil} from '../icon/systemIconStencil';

export const menuItemStencil = defineStencil({
  parts: {
    text: 'menu-item-text',
    icon: 'menu-item-icon',
    selected: 'menu-item-selected',
  },
  base: ({textPart, iconPart, selectedPart}: any) => ({
    ...system.type.subtext.large,
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    gap: system.space.x4,
    padding: `${system.space.x2} ${system.space.x4}`,
    boxSizing: 'border-box',
    cursor: 'pointer',
    color: system.color.fg.default,
    borderWidth: 0,
    textAlign: 'start',
    transition: 'background-color 80ms, color 80ms',
    backgroundColor: 'inherit',
    minHeight: system.space.x10,
    overflowWrap: 'anywhere',
    // We want the icon colors to be the same as the text color
    [systemIconStencil.vars.color]: 'currentcolor',

    // selected checkmark
    [`& :where(${selectedPart})`]: {
      transition: 'opacity 80ms linear',
      opacity: system.opacity.zero,
    },

    // if the menu item has children we need it to be displayed in flex
    '&:where(:has(span))': {
      display: 'flex',
    },

    // Selected styles
    '&[aria-selected=true]': {
      color: brand.primary.dark,
      [systemIconStencil.vars.color]: brand.primary.dark,
      backgroundColor: brand.primary.lightest,

      [`& :where(${selectedPart})`]: {
        opacity: system.opacity.full,
      },
      '&:where(.focus, :focus-visible)': {
        [systemIconStencil.vars.color]: brand.primary.accent,
        outline: 'none',
        backgroundColor: brand.primary.base,
        color: systemIconStencil.vars.color,
      },
    },

    // Hover styles
    '&:is(.hover, :hover)': {
      color: system.color.fg.strong,
      backgroundColor: brand.neutral.lightest,
    },

    // Focus styles
    '&:is(.focus, :focus-visible)': {
      [systemIconStencil.vars.color]: brand.primary.accent,
      color: brand.primary.accent,
      backgroundColor: brand.primary.base,
      outline: `${px2rem(2)} solid transparent`,
      outlineOffset: `-${px2rem(2)}`,
    },

    // Disabled styles
    '&:is(:disabled, [aria-disabled=true])': {
      color: system.color.text.disabled,
      [systemIconStencil.vars.color]: system.color.icon.disabled,
      cursor: 'default',

      // Focus + Disabled
      '&:where(.focus, :focus-visible)': {
        backgroundColor: brand.primary.light,
      },
    },

    [`& :where(${textPart})`]: {
      flexGrow: 1,
      alignSelf: 'center',
    },

    [`& :where(${iconPart})`]: {
      alignSelf: 'start',
    },
  }),
});
