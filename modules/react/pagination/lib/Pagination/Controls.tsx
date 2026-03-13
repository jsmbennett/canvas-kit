import * as React from 'react';

import {TertiaryButton} from '@workday/canvas-kit-react/button';
import {ExtractProps, createComponent, useResolvedStencil} from '@workday/canvas-kit-react/common';
import {mergeStyles} from '@workday/canvas-kit-react/layout';
import {createStencil} from '@workday/canvas-kit-styling';
import {
  chevron2xLeftSmallIcon,
  chevron2xRightSmallIcon,
  chevronLeftSmallIcon,
  chevronRightSmallIcon,
} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

import {PaginationContext} from './usePaginationModel';

export interface ControlButtonProps extends ExtractProps<typeof TertiaryButton, never> {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface PaginationControlsProps {}

export const paginationControlsStencil = createStencil({
  base: {
    display: 'flex',
    gap: system.space.x1,
    alignItems: 'center',
  },
});

const controlButtonStencil = createStencil({
  base: {
    '&:dir(rtl)': {
      '& .wd-icon': {
        transform: 'scaleX(-1)',
      },
    },
  },
});

const paginationControlsDisplayName = 'Pagination.Controls';

export const PaginationControls = createComponent('div')({
  displayName: paginationControlsDisplayName,
  Component(elemProps: PaginationControlsProps, ref, Element) {
    const resolved = useResolvedStencil(
      paginationControlsDisplayName,
      paginationControlsStencil,
      undefined
    );
    return <Element ref={ref} {...mergeStyles(elemProps, resolved)} />;
  },
});

const jumpToFirstButtonDisplayName = 'Pagination.JumpToFirstButton';

export const JumpToFirstButton = createComponent('button')({
  displayName: jumpToFirstButtonDisplayName,
  Component({onClick, ...restProps}: ControlButtonProps, ref, Element) {
    const model = React.useContext(PaginationContext);
    const isDisabled = model.state.currentPage <= model.state.firstPage;
    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (isDisabled) {
        return;
      }
      onClick?.(e);
      model.events.setCurrentPage(model.state.firstPage);
    };
    const resolved = useResolvedStencil(
      jumpToFirstButtonDisplayName,
      controlButtonStencil,
      undefined
    );
    return (
      <TertiaryButton
        ref={ref}
        as={Element}
        aria-disabled={isDisabled || undefined}
        size="small"
        icon={chevron2xLeftSmallIcon}
        onClick={handleClick}
        {...mergeStyles(restProps, resolved)}
      />
    );
  },
});

const stepToPreviousButtonDisplayName = 'Pagination.StepToPreviousButton';

export const StepToPreviousButton = createComponent('button')({
  displayName: stepToPreviousButtonDisplayName,
  Component({onClick, ...restProps}: ControlButtonProps, ref, Element) {
    const model = React.useContext(PaginationContext);
    const isDisabled = model.state.currentPage <= model.state.firstPage;
    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (isDisabled) {
        return;
      }
      onClick?.(e);
      model.events.setCurrentPage(model.state.currentPage - 1);
    };
    const resolved = useResolvedStencil(
      stepToPreviousButtonDisplayName,
      controlButtonStencil,
      undefined
    );
    return (
      <TertiaryButton
        ref={ref}
        as={Element}
        aria-disabled={isDisabled || undefined}
        size="small"
        icon={chevronLeftSmallIcon}
        onClick={handleClick}
        {...mergeStyles(restProps, resolved)}
      />
    );
  },
});

const stepToNextButtonDisplayName = 'Pagination.StepToNextButton';

export const StepToNextButton = createComponent('button')({
  displayName: stepToNextButtonDisplayName,
  Component({onClick, ...restProps}: ControlButtonProps, ref, Element) {
    const model = React.useContext(PaginationContext);
    const isDisabled = model.state.currentPage >= model.state.lastPage;
    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (isDisabled) {
        return;
      }
      onClick?.(e);
      model.events.setCurrentPage(model.state.currentPage + 1);
    };
    const resolved = useResolvedStencil(
      stepToNextButtonDisplayName,
      controlButtonStencil,
      undefined
    );
    return (
      <TertiaryButton
        ref={ref}
        as={Element}
        aria-disabled={isDisabled || undefined}
        size="small"
        icon={chevronRightSmallIcon}
        onClick={handleClick}
        {...mergeStyles(restProps, resolved)}
      />
    );
  },
});

const jumpToLastButtonDisplayName = 'Paganation.JumpToLastButton';

export const JumpToLastButton = createComponent('button')({
  displayName: jumpToLastButtonDisplayName,
  Component({onClick, ...restProps}: ControlButtonProps, ref, Element) {
    const model = React.useContext(PaginationContext);
    const isDisabled = model.state.currentPage >= model.state.lastPage;
    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (isDisabled) {
        return;
      }
      onClick?.(e);
      model.events.setCurrentPage(model.state.lastPage);
    };
    const resolved = useResolvedStencil(
      jumpToLastButtonDisplayName,
      controlButtonStencil,
      undefined
    );
    return (
      <TertiaryButton
        ref={ref}
        as={Element}
        aria-disabled={isDisabled || undefined}
        size="small"
        icon={chevron2xRightSmallIcon}
        onClick={handleClick}
        {...mergeStyles(restProps, resolved)}
      />
    );
  },
});
