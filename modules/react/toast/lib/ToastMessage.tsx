import {
  createSubcomponent,
  ExtractProps,
  useResolvedStencil,
} from '@workday/canvas-kit-react/common';
import {useToastModel} from './hooks/useToastModel';
import {Subtext} from '@workday/canvas-kit-react/text';
import {createStencil} from '@workday/canvas-kit-styling';
import {mergeStyles} from '@workday/canvas-kit-react/layout';
import {system} from '@workday/canvas-tokens-web';

export interface ToastMessageProps extends Omit<ExtractProps<typeof Subtext>, 'size'> {}

export const toastMessageStencil = createStencil({
  base: {
    wordBreak: 'break-word',
    marginBlockStart: system.space.zero,
    marginBlockEnd: system.space.zero,
  },
});

const displayName = 'Toast.Message';

export const ToastMessage = createSubcomponent('p')({
  displayName,
  modelHook: useToastModel,
})<ToastMessageProps>(({children, ...elemProps}, Element, model) => {
  const resolved = useResolvedStencil(displayName, toastMessageStencil, undefined);
  return (
    <Subtext size="large" id={model.state.id} as={Element} {...mergeStyles(elemProps, resolved)}>
      {children}
    </Subtext>
  );
});
