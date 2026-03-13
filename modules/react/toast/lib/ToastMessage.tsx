import {
  ExtractProps,
  createSubcomponent,
  useResolvedStencil,
} from '@workday/canvas-kit-react/common';
import {mergeStyles} from '@workday/canvas-kit-react/layout';
import {Subtext} from '@workday/canvas-kit-react/text';
import {createStencil} from '@workday/canvas-kit-styling';

import {useToastModel} from './hooks/useToastModel';

export interface ToastMessageProps extends Omit<ExtractProps<typeof Subtext>, 'size'> {}

export const toastMessageStencil = createStencil({
  base: {
    wordBreak: 'break-word',
    marginBlock: 0,
  },
});

export const ToastMessage = createSubcomponent('p')({
  modelHook: useToastModel,
})<ToastMessageProps>(({children, ...elemProps}, Element, model) => {
  const resolved = useResolvedStencil('Toast.Message', toastMessageStencil, undefined);
  return (
    <Subtext size="large" id={model.state.id} as={Element} {...mergeStyles(elemProps, resolved)}>
      {children}
    </Subtext>
  );
});
