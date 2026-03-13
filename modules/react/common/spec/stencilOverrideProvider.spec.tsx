import {render, screen} from '@testing-library/react';
import * as React from 'react';

import {Text} from '@workday/canvas-kit-react/text';
import {createStencil} from '@workday/canvas-kit-styling';

import {CanvasProvider, type StencilProviderMap, useResolvedStencil} from '../index';

describe('stencilOverrides map', () => {
  it('should use resolved stencil from context when provider map is passed', () => {
    const stencilOverrides: StencilProviderMap = {
      Text: {
        stencil: {
          base: {
            color: 'rgb(255, 0, 0)',
            fontSize: '99px',
          },
        },
      },
    };

    render(
      <CanvasProvider stencilOverrides={stencilOverrides}>
        <Text data-testid="text-with-override">Hello</Text>
      </CanvasProvider>
    );

    const el = screen.getByTestId('text-with-override');
    expect(el).toHaveStyle({color: 'rgb(255, 0, 0)'});
    expect(el).toHaveStyle({fontSize: '99px'});
  });

  it('should use default stencil when no override is provided for component', () => {
    const stencilOverrides: StencilProviderMap = {
      PrimaryButton: {
        stencil: {
          base: {
            color: 'rgb(0, 0, 255)',
          },
        },
      },
    };

    render(
      <CanvasProvider stencilOverrides={stencilOverrides}>
        <Text data-testid="text-no-override" typeLevel="body.large">
          Default Text
        </Text>
      </CanvasProvider>
    );

    const el = screen.getByTestId('text-no-override');
    expect(el).not.toHaveStyle({color: 'rgb(0, 0, 255)'});
    expect(el).toHaveStyle({fontSize: expect.any(String)});
  });

  it('should use default stencil when no stencilOverrides is passed to CanvasProvider', () => {
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

  it('should create a unique stencil per component instance', () => {
    const stencilOverrides: StencilProviderMap = {
      Text: {
        stencil: {
          base: {
            color: 'rgb(255, 0, 0)',
          },
        },
      },
    };

    const TwoTexts = () => (
      <>
        <Text data-testid="text-1">One</Text>
        <Text data-testid="text-2">Two</Text>
      </>
    );

    render(
      <CanvasProvider stencilOverrides={stencilOverrides}>
        <TwoTexts />
      </CanvasProvider>
    );

    const className1 = screen.getByTestId('text-1').getAttribute('class') || '';
    const className2 = screen.getByTestId('text-2').getAttribute('class') || '';

    expect(className1).not.toEqual(className2);
  });

  it('should accept createStencil config objects in provider map', () => {
    const stencilOverrides: StencilProviderMap = {
      Text: {
        stencil: {
          base: {
            color: 'rgb(0, 128, 0)',
          },
        },
      },
    };

    render(
      <CanvasProvider stencilOverrides={stencilOverrides}>
        <Text data-testid="text-with-config-override">Config override</Text>
      </CanvasProvider>
    );

    expect(screen.getByTestId('text-with-config-override')).toHaveStyle({
      color: 'rgb(0, 128, 0)',
    });
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

    const stencilOverrides: StencilProviderMap = {
      TestComponent: {
        stencil: {base: {padding: '20px', margin: '5px'}},
      },
    };

    const TestComponent = () => {
      const resolved = useResolvedStencil('TestComponent', defaultStencil, undefined);
      return <div data-testid="resolved" {...resolved} />;
    };

    render(
      <CanvasProvider stencilOverrides={stencilOverrides}>
        <TestComponent />
      </CanvasProvider>
    );

    const el = screen.getByTestId('resolved');
    expect(el).toHaveStyle({padding: '20px'});
    expect(el).toHaveStyle({margin: '5px'});
  });

  it('should merge with default stencil when mergeWithDefault is true', () => {
    const defaultStencil = createStencil({
      base: {padding: '10px', margin: '5px'},
    });

    const stencilOverrides: StencilProviderMap = {
      TestComponent: {
        mergeWithDefault: true,
        stencil: {
          base: {padding: '20px'},
        },
      },
    };

    const TestComponent = () => {
      const resolved = useResolvedStencil('TestComponent', defaultStencil, undefined);
      return <div data-testid="resolved-merged" {...resolved} />;
    };

    render(
      <CanvasProvider stencilOverrides={stencilOverrides}>
        <TestComponent />
      </CanvasProvider>
    );

    const el = screen.getByTestId('resolved-merged');
    expect(el).toHaveStyle({padding: '20px'});
    expect(el).toHaveStyle({margin: '5px'});
  });

  it('should replace default stencil when mergeWithDefault is false', () => {
    const defaultStencil = createStencil({
      base: {padding: '10px', margin: '5px'},
    });

    const stencilOverrides: StencilProviderMap = {
      TestComponent: {
        mergeWithDefault: false,
        stencil: {
          base: {padding: '20px'},
        },
      },
    };

    const TestComponent = () => {
      const resolved = useResolvedStencil('TestComponent', defaultStencil, undefined);
      return <div data-testid="resolved-replaced" {...resolved} />;
    };

    render(
      <CanvasProvider stencilOverrides={stencilOverrides}>
        <TestComponent />
      </CanvasProvider>
    );

    const el = screen.getByTestId('resolved-replaced');
    expect(el).toHaveStyle({padding: '20px'});
    expect(el).not.toHaveStyle({margin: '5px'});
  });
});
