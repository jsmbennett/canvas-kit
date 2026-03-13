import {createComponent, useResolvedStencil} from '@workday/canvas-kit-react/common';
import {mergeStyles} from '@workday/canvas-kit-react/layout';
import {TextProps, textStencil} from '@workday/canvas-kit-react/text';
import {createStencil} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export interface StatusIndicatorLabelProps extends TextProps {}

const statusIndicatorLabelStencil = createStencil({
  extends: textStencil,
  base: {
    fontWeight: system.fontWeight.bold,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textTransform: 'capitalize',
    color: 'inherit',
  },
  defaultModifiers: {typeLevel: 'subtext.large'},
});

const displayName = 'StatusIndicator.Label';

export const StatusIndicatorLabel = createComponent('span')({
  displayName,
  Component: ({children, typeLevel, ...elemProps}: StatusIndicatorLabelProps, ref, Element) => {
    const resolved = useResolvedStencil(displayName, statusIndicatorLabelStencil, {
      typeLevel,
    });
    return (
      <Element ref={ref} {...mergeStyles(elemProps, resolved)}>
        {children}
      </Element>
    );
  },
});
