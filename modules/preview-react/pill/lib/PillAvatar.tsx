import {createSubcomponent, useResolvedStencil} from '@workday/canvas-kit-react/common';
import {Avatar, AvatarProps, avatarStencil} from '@workday/canvas-kit-preview-react/avatar';
import {usePillModel} from './usePillModel';
import {createStencil, px2rem} from '@workday/canvas-kit-styling';
import {mergeStyles} from '@workday/canvas-kit-react/layout';
import {system} from '@workday/canvas-tokens-web';

export interface PillAvatarProps extends AvatarProps {}

export const pillAvatarStencil = createStencil({
  extends: avatarStencil,
  base: {
    flex: '0 0 auto',
    ...system.type.subtext.small,
    '&:disabled, &.disabled': {
      opacity: system.opacity.disabled,
    },
  },
});

const displayName = 'Pill.Avatar';

export const PillAvatar = createSubcomponent('div')({
  displayName,
  modelHook: usePillModel,
})<PillAvatarProps>(({size, ...elemProps}: PillAvatarProps, Element, _model) => {
  const resolved = useResolvedStencil(displayName, pillAvatarStencil, undefined);
  return (
    <Avatar
      isDecorative
      as={Element}
      size={px2rem(18)}
      {...mergeStyles(elemProps, [resolved, _model.state.disabled ? 'disabled' : undefined])}
    />
  );
});
