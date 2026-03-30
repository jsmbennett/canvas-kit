import {ExtractProps, createComponent, useResolvedStencil} from '@workday/canvas-kit-react/common';
import {mergeStyles} from '@workday/canvas-kit-react/layout';
import {Popup} from '@workday/canvas-kit-react/popup';
import {createStencil} from '@workday/canvas-kit-styling';

export interface ToastCloseIconProps extends ExtractProps<typeof Popup.CloseIcon, never> {}

export const toastCloseIconStencil = createStencil({
  base: {
    position: 'relative',
  },
});

export const ToastCloseIcon = createComponent('button')({
  displayName: 'Toast.CloseIcon',
  Component: (elemProps: ToastCloseIconProps, ref, Element) => {
    const resolved = useResolvedStencil('Toast.CloseIcon', toastCloseIconStencil, undefined);
    return (
      <Popup.CloseIcon as={Element} ref={ref} size="small" {...mergeStyles(elemProps, resolved)} />
    );
  },
});
