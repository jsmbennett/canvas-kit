import {makeDecorator} from '@storybook/preview-api';
import * as React from 'react';

import {
  CanvasProvider,
  PartialEmotionCanvasTheme,
  defaultCanvasTheme,
} from '@workday/canvas-kit-react/common';
import {ck13StencilProviderMap} from '@workday/canvas-kit-react/stencils';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const storyStyles = createStyles({
  padding: system.padding.md,
});

export default makeDecorator({
  name: 'canvasProviderDecorator',
  parameterName: 'canvasProviderDecorator',
  wrapper: (storyFn, context, {parameters = {}}) => {
    const theme: PartialEmotionCanvasTheme = {
      canvas: parameters.theme || defaultCanvasTheme,
    };
    const stencilOverrides =
      context.globals?.stencilLibrary === 'ck13' ? ck13StencilProviderMap : undefined;

    return (
      <CanvasProvider
        key={stencilOverrides ? 'ck13' : 'ck15'}
        theme={theme}
        className={storyStyles}
        stencilOverrides={stencilOverrides}
      >
        {storyFn(context) as React.ReactNode}
      </CanvasProvider>
    );
  },
});
