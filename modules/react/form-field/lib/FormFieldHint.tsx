import {
  createSubcomponent,
  ExtractProps,
  useResolvedStencil,
} from '@workday/canvas-kit-react/common';
import {system, brand} from '@workday/canvas-tokens-web';
import {createStencil} from '@workday/canvas-kit-styling';
import {Text, textStencil} from '@workday/canvas-kit-react/text';
import {mergeStyles} from '@workday/canvas-kit-react/layout';

import {useFormFieldHint, useFormFieldModel} from './hooks';

export const formFieldHintStencil = createStencil({
  extends: textStencil,
  base: {
    margin: system.space.zero,
  },
  modifiers: {
    error: {
      error: {
        color: brand.error.base,
      },
      caution: {
        color: system.color.text.caution.default,
      },
    },
  },
  defaultModifiers: {
    typeLevel: 'subtext.medium',
  },
});

const displayName = 'FormField.Hint';

export const FormFieldHint = createSubcomponent('p')({
  displayName,
  modelHook: useFormFieldModel,
  elemPropsHook: useFormFieldHint,
})<ExtractProps<typeof Text, never>>(
  ({children, typeLevel, variant, ...elemProps}, Element, model) => {
    const resolved = useResolvedStencil(displayName, formFieldHintStencil, {
      typeLevel,
      variant,
      error: model.state.error,
    });
    if (!children) {
      // If there is no hint text just skip rendering
      return null;
    }

    return <Element {...mergeStyles(elemProps, resolved)}>{children}</Element>;
  }
);
