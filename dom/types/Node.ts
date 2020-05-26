import { EventTarget } from "./EventTarget.ts";
import { Element } from "./Element.ts";
import { NodeList } from "./Nodelist.ts";

/**
 * The {@link https://developer.mozilla.org/en-US/docs/Glossary/DOM|DOM} Node interface is a key base class upon which many other
 * DOM API objects are based, thus letting those object types to be
 * used similarly and often interchangeably.
 * See {@link https://developer.mozilla.org/en-US/docs/Web/API/Node|Node}
 */
export class Node extends EventTarget {
  childNodes: NodeList = new NodeList();
  parentNode: Node | null = null;
  parentElement: Element | null = null;

  constructor() {
    super();
  }
  
  appendChild(node: Node) {
    this.childNodes.push(node);
  }

  removeChild(node: Node) {
    this.childNodes = this.childNodes.filter((child: Node) => child !== node);
  }
}
