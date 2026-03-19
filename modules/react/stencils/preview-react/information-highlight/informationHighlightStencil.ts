import {cssVar, px2rem} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

import {defineStencil} from '../../defineStencil';
import {systemIconStencil} from '../../react/icon/systemIconStencil';

export const informationHighlightStencil = defineStencil({
  base: {
    display: 'grid',
    gridTemplateColumns: 'min-content',
    columnGap: system.space.x4,
    rowGap: system.space.x2,
    padding: system.space.x4,
    borderRadius: system.shape.x1,
    outline: `${px2rem(1)} solid transparent`,
  },
  modifiers: {
    informational: {
      low: {
        borderInlineStart: `solid ${cssVar(system.space.x1)} ${cssVar(
          system.color.bg.primary.default
        )}`,
        backgroundColor: system.color.bg.alt.soft,
        '& [data-part="information-highlight-icon"]': {
          [systemIconStencil.vars.accentColor]: system.color.bg.primary.default,
          [systemIconStencil.vars.color]: system.color.bg.primary.default,
          [systemIconStencil.vars.backgroundColor]: 'none',
        },
      },
      high: {
        borderInlineStart: `solid ${cssVar(system.space.x1)} ${cssVar(
          system.color.bg.primary.default
        )}`,
        backgroundColor: base.blueberry100,
        '& [data-part="information-highlight-icon"]': {
          [systemIconStencil.vars.accentColor]: system.color.icon.inverse,
          [systemIconStencil.vars.color]: system.color.bg.primary.default,
          [systemIconStencil.vars.backgroundColor]: system.color.bg.primary.default,
        },
      },
    },
    caution: {
      low: {
        borderInlineStart: `solid ${cssVar(system.space.x1)} ${cssVar(
          system.color.border.caution.default
        )}`,
        backgroundColor: system.color.bg.alt.soft,
        '& [data-part="information-highlight-icon"]': {
          [systemIconStencil.vars.accentColor]: system.color.fg.contrast.default,
          [systemIconStencil.vars.color]: system.color.fg.contrast.default,
          [systemIconStencil.vars.backgroundColor]: 'none',
        },
      },
      high: {
        borderInlineStart: `solid ${cssVar(system.space.x1)} ${cssVar(
          system.color.border.caution.default
        )}`,
        backgroundColor: base.sourLemon100,
        '& [data-part="information-highlight-icon"]': {
          [systemIconStencil.vars.accentColor]: system.color.icon.inverse,
          [systemIconStencil.vars.color]: system.color.fg.contrast.default,
          [systemIconStencil.vars.backgroundColor]: system.color.fg.contrast.default,
        },
      },
    },
    critical: {
      low: {
        borderInlineStart: `solid ${cssVar(system.space.x1)} ${cssVar(
          system.color.border.critical.default
        )}`,
        backgroundColor: system.color.bg.alt.soft,
        '& [data-part="information-highlight-icon"]': {
          [systemIconStencil.vars.accentColor]: system.color.bg.critical.default,
          [systemIconStencil.vars.color]: system.color.bg.critical.default,
          [systemIconStencil.vars.backgroundColor]: 'none',
        },
      },
      high: {
        borderInlineStart: `solid ${cssVar(system.space.x1)} ${cssVar(
          system.color.border.critical.default
        )}`,
        backgroundColor: base.peach100,
        '& [data-part="information-highlight-icon"]': {
          [systemIconStencil.vars.accentColor]: system.color.icon.inverse,
          [systemIconStencil.vars.color]: system.color.bg.critical.default,
          [systemIconStencil.vars.backgroundColor]: system.color.bg.critical.default,
        },
      },
    },
  },
});
