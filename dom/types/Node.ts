import { EventTarget } from './EventTarget.ts';

export class Node extends EventTarget {
  childNodes: Array<Node> = [];

  constructor() {
    super();
  }

  appendChild(node: Node) {
    this.childNodes.push(node);
  }
}
