import {createSubcomponent, useResolvedStencil} from '@workday/canvas-kit-react/common';
import {handleCsProp, CSProps, createStencil} from '@workday/canvas-kit-styling';

import {useFormFieldModel} from './hooks';
import {system} from '@workday/canvas-tokens-web';

export const formFieldFieldStencil = createStencil({
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: system.space.x2,
  },
});

const displayName = 'FormField.Field';

export const FormFieldField = createSubcomponent('div')({
  displayName,
  modelHook: useFormFieldModel,
})<CSProps>((elemProps, Element, model) => {
  const resolved = useResolvedStencil(displayName, formFieldFieldStencil, undefined);
  return <Element data-width="ck-formfield-width" {...handleCsProp(elemProps, resolved)} />;
});
