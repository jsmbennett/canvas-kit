import {ExtractProps, createComponent, useResolvedStencil} from '@workday/canvas-kit-react/common';
import {Flex, mergeStyles} from '@workday/canvas-kit-react/layout';
import {Popup} from '@workday/canvas-kit-react/popup';
import {createStencil} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export interface ToastBodyProps extends ExtractProps<typeof Popup.Body> {}

export const toastBodyStencil = createStencil({
  base: {
    alignItems: 'flex-start',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingTop: system.space.x4,
    paddingBottom: system.space.x4,
    flexGrow: 1,
    gap: system.space.x1,
  },
});

const displayName = 'Toast.Body';

export const ToastBody = createComponent('div')({
  displayName,
  Component: ({children, ...elemProps}: ToastBodyProps, ref, Element) => {
    const resolved = useResolvedStencil(displayName, toastBodyStencil, undefined);
    return (
      <Flex ref={ref} as={Element} {...mergeStyles(elemProps, resolved)}>
        {children}
      </Flex>
    );
  },
});
