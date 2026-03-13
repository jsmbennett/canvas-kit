import React from 'react';

import {
  ExtractProps,
  createSubcomponent,
  useResolvedStencil,
} from '@workday/canvas-kit-react/common';
import {mergeStyles} from '@workday/canvas-kit-react/layout';
import {Text, textStencil} from '@workday/canvas-kit-react/text';
import {createStencil} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

import {RadioLabelContext} from './RadioLabel';
import {useRadioModel} from './hooks/useRadioModel';

const radioTextStencil = createStencil({
  extends: textStencil,
  base: {
    cursor: 'pointer',
  },
  modifiers: {
    variant: {
      inverse: {
        color: system.color.text.inverse,
      },
    },
    disabled: {
      true: {
        cursor: 'default',
        color: system.color.text.disabled,
      },
    },
  },
  compound: [
    {
      modifiers: {variant: 'inverse', disabled: true},
      styles: {
        color: system.color.text.inverse,
        opacity: system.opacity.disabled,
      },
    },
  ],
  defaultModifiers: {
    typeLevel: 'subtext.large',
  },
});

const displayName = 'RadioButton.Text';

export const RadioText = createSubcomponent('span')({
  displayName,
  modelHook: useRadioModel,
})(({children, ...elemProps}: ExtractProps<typeof Text>, Element) => {
  const {variant, disabled} = React.useContext(RadioLabelContext);
  const resolved = useResolvedStencil(displayName, radioTextStencil, {variant, disabled});
  return <Element {...mergeStyles(elemProps, resolved)}>{children}</Element>;
});
