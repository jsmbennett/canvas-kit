import * as React from 'react';
import {screen, render} from '@testing-library/react';
import {createStencilProviderContext, useResolvedStencil, CanvasProvider} from '../index';
import {Text} from '@workday/canvas-kit-react/text';
import {createStencil} from '@workday/canvas-kit-styling';

describe('createStencilProviderContext', () => {
  it('should use resolved stencil from context when provider map is passed', () => {
    const overrideStencil = createStencil({
      base: {
        color: 'rgb(255, 0, 0)',
        fontSize: '99px',
      },
    });

    const stencilOverrides = createStencilProviderContext({
      Text: args => overrideStencil(args),
    });

    render(
      <CanvasProvider stencilProviderContext={stencilOverrides}>
        <Text data-testid="text-with-override">Hello</Text>
      </CanvasProvider>
    );

    const el = screen.getByTestId('text-with-override');
    expect(el).toHaveStyle({color: 'rgb(255, 0, 0)'});
    expect(el).toHaveStyle({fontSize: '99px'});
  });

  it('should use default stencil when no override is provided for component', () => {
    const overrideStencil = createStencil({
      base: {
        color: 'rgb(0, 0, 255)',
      },
    });

    const stencilOverrides = createStencilProviderContext({
      PrimaryButton: args => overrideStencil(args),
    });

    render(
      <CanvasProvider stencilProviderContext={stencilOverrides}>
        <Text data-testid="text-no-override" typeLevel="body.large">
          Default Text
        </Text>
      </CanvasProvider>
    );

    const el = screen.getByTestId('text-no-override');
    expect(el).not.toHaveStyle({color: 'rgb(0, 0, 255)'});
    expect(el).toHaveStyle({fontSize: expect.any(String)});
  });

  it('should use default stencil when no stencilProviderContext is passed to CanvasProvider', () => {
    render(
      <CanvasProvider>
        <Text data-testid="text-default" typeLevel="body.large">
          Default
        </Text>
      </CanvasProvider>
    );

    const el = screen.getByTestId('text-default');
    expect(el).toBeInTheDocument();
    expect(el.tagName).toBe('SPAN');
  });
});

describe('useResolvedStencil', () => {
  it('should return default stencil result when no provider', () => {
    const testStencil = createStencil({
      base: {padding: '10px'},
    });

    const TestComponent = () => {
      const resolved = useResolvedStencil('TestComponent', testStencil, undefined);
      return <div data-testid="resolved" {...resolved} />;
    };

    render(
      <CanvasProvider>
        <TestComponent />
      </CanvasProvider>
    );

    const el = screen.getByTestId('resolved');
    expect(el).toHaveStyle({padding: '10px'});
  });

  it('should return override result when provider has override for component', () => {
    const defaultStencil = createStencil({
      base: {padding: '10px'},
    });
    const overrideStencil = createStencil({
      base: {padding: '20px', margin: '5px'},
    });

    const stencilOverrides = createStencilProviderContext({
      TestComponent: () => overrideStencil(),
    });

    const TestComponent = () => {
      const resolved = useResolvedStencil('TestComponent', defaultStencil, undefined);
      return <div data-testid="resolved" {...resolved} />;
    };

    render(
      <CanvasProvider stencilProviderContext={stencilOverrides}>
        <TestComponent />
      </CanvasProvider>
    );

    const el = screen.getByTestId('resolved');
    expect(el).toHaveStyle({padding: '20px'});
    expect(el).toHaveStyle({margin: '5px'});
  });
});
