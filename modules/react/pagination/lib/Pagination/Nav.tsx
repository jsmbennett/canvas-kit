import {createComponent, useResolvedStencil} from '@workday/canvas-kit-react/common';
import {createStencil} from '@workday/canvas-kit-styling';
import {FlexProps, mergeStyles} from '@workday/canvas-kit-react/layout';

export interface PaginationNavProps extends Omit<FlexProps, 'as'> {
  'aria-label': string;
}

export const paginationNavStencil = createStencil({
  base: {
    display: 'inline-flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

const displayName = 'Pagination.Nav';

export const PaginationNav = createComponent('nav')({
  displayName,
  Component: ({children, ...elemProps}: PaginationNavProps, ref, Element) => {
    const resolved = useResolvedStencil(displayName, paginationNavStencil, undefined);
    return (
      <Element ref={ref} {...mergeStyles(elemProps, resolved)}>
        {children}
      </Element>
    );
  },
});
