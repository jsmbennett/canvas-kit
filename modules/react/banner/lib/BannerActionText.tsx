import * as React from 'react';

import {
  ExtractProps,
  createSubcomponent,
  useResolvedStencil,
} from '@workday/canvas-kit-react/common';
import {Box, mergeStyles} from '@workday/canvas-kit-react/layout';
import {createStencil} from '@workday/canvas-kit-styling';

import {useBannerActionText, useBannerModel} from './hooks';

export interface BannerActionTextProps extends ExtractProps<typeof Box, never> {
  /**
   * The text of the Banner action.
   * @default 'View All'
   */
  children?: React.ReactNode;
}

export const actionBarTextStencil = createStencil({
  base: {
    textDecoration: 'underline',
    display: 'inline',
  },
  modifiers: {
    isSticky: {
      true: {
        display: 'none',
      },
    },
  },
});

const displayName = 'Banner.ActionText';

export const BannerActionText = createSubcomponent('span')({
  displayName,
  modelHook: useBannerModel,
  elemPropsHook: useBannerActionText,
})<BannerActionTextProps>(({children = 'View All', ...elemProps}, Element, model) => {
  const resolved = useResolvedStencil(displayName, actionBarTextStencil, {
    isSticky: model.state.isSticky,
  });
  return <Element {...mergeStyles(elemProps, resolved)}>{children}</Element>;
});
