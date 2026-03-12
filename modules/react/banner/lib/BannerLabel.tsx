import * as React from 'react';

import {
  ExtractProps,
  createSubcomponent,
  useResolvedStencil,
} from '@workday/canvas-kit-react/common';
import {Flex, mergeStyles} from '@workday/canvas-kit-react/layout';
import {createStencil} from '@workday/canvas-kit-styling';

import {useBannerLabel, useBannerModel} from './hooks';

export interface BannerLabelProps extends ExtractProps<typeof Flex, never> {
  /**
   * The text of the Banner.
   */
  children: React.ReactNode;
}

export const bannerLabelStencil = createStencil({
  base: {
    display: 'flex',
    flex: '1 1 0%',
  },
});

const displayName = 'Banner.Label';

export const BannerLabel = createSubcomponent('div')({
  displayName,
  modelHook: useBannerModel,
  elemPropsHook: useBannerLabel,
})<BannerLabelProps>(({children, ...elemProps}, Element) => {
  const resolved = useResolvedStencil(displayName, bannerLabelStencil, undefined);
  return <Element {...mergeStyles(elemProps, resolved)}>{children}</Element>;
});
