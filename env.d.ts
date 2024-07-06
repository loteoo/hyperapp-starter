/// <reference types="vite/client" />

import { VNode, ElementVNode, Props } from "hyperapp";
import { State } from '/src/lib/state'

declare global {
  namespace JSX {
    type S = State;
    type Element = ElementVNode<S>;
    interface IntrinsicElements {
      [elemName: string]: Props<S>;
    }
  }
}

export { };
