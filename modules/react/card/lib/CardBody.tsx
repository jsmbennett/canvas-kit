import {createComponent, useResolvedStencil} from '@workday/canvas-kit-react/common';
import {BoxProps, mergeStyles} from '@workday/canvas-kit-react/layout';
import {textStencil} from '@workday/canvas-kit-react/text';
import {createStencil} from '@workday/canvas-kit-styling';

export interface CardBodyProps extends BoxProps {}

// .cnvs-card-body
export const cardBodyStencil = createStencil({
  extends: textStencil,
  base: {},
  defaultModifiers: {typeLevel: 'subtext.large'},
});

const displayName = 'Card.Body';

export const CardBody = createComponent('div')({
  displayName,
  Component: ({children, ...elemProps}: CardBodyProps, ref, Element) => {
    const resolved = useResolvedStencil(displayName, cardBodyStencil, undefined);
    return (
      <Element ref={ref} {...mergeStyles(elemProps, resolved)}>
        {children}
      </Element>
    );
  },
});
