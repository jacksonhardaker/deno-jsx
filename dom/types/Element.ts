import { Node } from "./Node.ts";
import { DOMTokenList } from "./DOMTokenList.ts";

export class Element extends Node {
  attributes: any = {
    length: 0,
  };
  classList: DOMTokenList = new DOMTokenList();

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
