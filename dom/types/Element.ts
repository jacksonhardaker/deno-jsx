import { Node } from "./Node.ts";
import { DOMTokenList } from "./DOMTokenList.ts";

/**
 * Element is the most general base class from which all element
 * objects (i.e. objects that represent elements) in a Document inherit.
 * It only has methods and properties common to all kinds of elements.
 * More specific classes inherit from Element.
 * See {@link https://developer.mozilla.org/en-US/docs/Web/API/Element|Element}
 */
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
