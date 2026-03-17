
import {system} from '@workday/canvas-tokens-web';

export const textStencil = {
  base: {},
  modifiers: {
    typeLevel: {
      // Title level styles
      'title.large': {
        ...system.type.title.large,
        color: system.color.text.strong,
      },
      'title.medium': {
        ...system.type.title.medium,
        color: system.color.text.strong,
      },
      'title.small': {
        ...system.type.title.small,
        color: system.color.text.strong,
      },
      // Heading level styles
      'heading.large': {
        ...system.type.heading.large,
        color: system.color.text.strong,
      },
      'heading.medium': {
        ...system.type.heading.medium,
        color: system.color.text.strong,
      },
      'heading.small': {
        ...system.type.heading.small,
        color: system.color.text.strong,
      },
      // Body level styles
      'body.large': {
        ...system.type.body.large,
        color: system.color.text.default,
      },
      'body.medium': {
        ...system.type.body.medium,
        color: system.color.text.default,
      },
      'body.small': {
        ...system.type.body.small,
        color: system.color.text.default,
      },
      // Subtext level styles
      'subtext.large': {
        ...system.type.subtext.large,
        color: system.color.text.default,
      },
      'subtext.medium': {
        ...system.type.subtext.medium,
        color: system.color.text.default,
      },
      'subtext.small': {
        ...system.type.subtext.small,
        color: system.color.text.default,
      },
    },
    variant: {
      error: {color: system.color.text.critical.default},
      hint: {color: system.color.text.hint},
      inverse: {color: system.color.text.inverse},
    },
  },
};
