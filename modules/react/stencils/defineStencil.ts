import {createStencil} from '@workday/canvas-kit-styling';

type LooseStencilConfig = {
  extends?: any;
  vars?: Record<string, any>;
  parts?: Record<string, string>;
  base?: any;
  modifiers?: Record<string, any>;
  compound?: any[];
  defaultModifiers?: Record<string, any>;
};

export function defineStencil(config: LooseStencilConfig): any {
  return createStencil(config as Parameters<typeof createStencil>[0]);
}
