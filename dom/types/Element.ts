import { Node } from './Node.ts';

export class Element extends Node {
  attributes: any = {
    length: 0,
  };

  constructor() {
    super();
  }

  setAttribute(name: string, value: string) {
    this.attributes[name] = value;
    this.attributes.length = Object.keys(this.attributes).length - 1;
  }

  getAttribute(name: string) {
    return this.attributes[name] || "";
  }

  removeAttribute(name: string) {
    delete this.attributes[name];
    this.attributes.length = Object.keys(this.attributes).length - 1;
  }
}
