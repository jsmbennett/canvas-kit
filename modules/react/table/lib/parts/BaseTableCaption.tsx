import {createComponent, useResolvedStencil} from '@workday/canvas-kit-react/common';
import {BoxProps, mergeStyles} from '@workday/canvas-kit-react/layout';
import {createStencil} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export const baseTableCaptionStencil = createStencil({
  base: {
    padding: `${system.space.x2} ${system.space.x4}`,
  },
});

export const BaseTableCaption = createComponent('caption')({
  displayName: 'Table.Caption',
  Component: ({children, ...elemProps}: BoxProps, ref, Element) => {
    const resolved = useResolvedStencil('Table.Caption', baseTableCaptionStencil, undefined);
    return (
      <Element ref={ref} {...mergeStyles(elemProps, resolved)}>
        {children}
      </Element>
    );
  },
});
