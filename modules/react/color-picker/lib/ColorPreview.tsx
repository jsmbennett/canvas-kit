import {createComponent, useResolvedStencil} from '@workday/canvas-kit-react/common';
import {TextInputProps} from '@workday/canvas-kit-react/text-input';
import {createStencil, cssVar, handleCsProp} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

import {ColorInput} from './ColorInput';

export interface ColorPreviewProps extends TextInputProps {
  /**
   * The value of the ColorPreview.
   */
  value: string;
  /**
   * The HTML `id` of the underlying text input element.
   */
  id?: string;
}

export const colorPreviewStencil = createStencil({
  base: {
    backgroundColor: system.color.bg.default,
    borderColor: cssVar(system.color.border.inverse.default, base.neutral0),
    pointerEvents: 'none',
  },
});

const displayName = 'ColorPreview';

export const ColorPreview = createComponent('input')({
  displayName,
  Component: ({id, value, ...elemProps}: ColorPreviewProps, ref, Element) => {
    const resolved = useResolvedStencil(displayName, colorPreviewStencil, undefined);
    return (
      <ColorInput
        ref={ref}
        as={Element}
        id={id}
        value={value}
        readOnly={true}
        placeholder=""
        {...handleCsProp(elemProps, resolved)}
      />
    );
  },
});
