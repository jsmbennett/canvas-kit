import {calc, createVars, keyframes, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const tooltipAnimation = keyframes({
  '0%': {
    opacity: 0,
    transform: `translate(${tooltipTranslateVars.positionX}, ${tooltipTranslateVars.positionY})`,
  },
  '100%': {
    opacity: 1,
    transform: 'translate(0)',
  },
});

const tooltipTranslateVars = createVars('positionX', 'positionY');

export const tooltipContainerStencil = {
  vars: {
    tooltipTransformOriginHorizontal: '',
    tooltipTransformOriginVertical: '',
  },
  base: ({tooltipTransformOriginHorizontal, tooltipTransformOriginVertical}) => ({
    ...system.type.subtext.medium,
    display: 'inline-flex',
    position: 'relative',
    padding: system.space.x3,
    color: system.color.text.inverse,
    animationName: tooltipAnimation,
    animationDuration: '150ms',
    animationTimingFunction: 'ease-out',
    transformOrigin: `${tooltipTransformOriginVertical} ${tooltipTransformOriginHorizontal}`,
    a: {
      color: system.color.text.inverse,
      textDecoration: 'underline',
    },
    // use :before vs margin to increase the tooltip hit-box
    '&:before': {
      content: '""',
      borderRadius: system.shape.x1,
      outline: `${px2rem(1)} solid transparent`,
      outlineOffset: `-${px2rem(1)}`,
      zIndex: -1,
      margin: system.space.x1,
      backgroundColor: system.color.bg.translucent,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    // Hide tooltip when the reference element is either clipped or fully hidden
    '[data-popper-reference-hidden] &': {
      visibility: 'hidden',
      pointerEvents: 'none',
    },

    // Fix offsets based on placement
    '[data-popper-placement="top-start"] &, [data-popper-placement="bottom-start"] &': {
      left: calc.negate(system.space.x1),
    },
    '[data-popper-placement="top-end"] &, [data-popper-placement="bottom-end"] &': {
      right: calc.negate(system.space.x1),
    },
    '[data-popper-placement="left-start"] &, [data-popper-placement="right-start"] &': {
      top: calc.negate(system.space.x1),
    },
    '[data-popper-placement="left-end"] &, [data-popper-placement="right-end"] &': {
      bottom: calc.negate(system.space.x1),
    },
  }),
  modifiers: {
    elementHasFocus: {
      true: {
        padding: calc.subtract(system.space.x4, calc.divide(system.space.x1, 2)),
        '&:before': {
          margin: calc.add(system.space.x1, calc.divide(system.space.x1, 2)),
        },
      },
    },
  },
};
