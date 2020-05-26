/**
 * NodeList objects are collections of nodes, usually returned
 * by properties such as Node.childNodes and methods such as
 * document.querySelectorAll().
 * See {@link https://developer.mozilla.org/en-US/docs/Web/API/NodeList|NodeList}
 */
export class NodeList extends Array {
  constructor() {
    super();
  }

  item(index: number) {
    return this[index];
  }

  filter(callback: Function): NodeList {
    return this.filter(callback);
  }
}
