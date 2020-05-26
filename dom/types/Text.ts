import { CharacterData } from "./CharacterData.ts";
import { DOMString } from "./DOMString.ts";

/**
 * The Text interface represents the textual content of Element or Attr.
 * 
 * If an element has no markup within its content, it has a single child
 * implementing Text that contains the element's text. However, if the
 * element contains markup, it is parsed into information items and Text
 * nodes that form its children.
 * See {@link https://developer.mozilla.org/en-US/docs/Web/API/Text|Text}
 */
export class Text extends CharacterData {
  wholeText: DOMString = ""; // todo
  assignedSlot: any = null; // todo

  constructor(data: DOMString) {
    super(data);

    this.updateProperties();
  }

  private updateProperties() {
    this.wholeText = ""; // todo
    this.assignedSlot = null; // todo
  }

  toString() {
    return this.data;
  }

  /**
   * The Text.splitText() method breaks the Text node into two nodes at the specified offset, keeping both nodes in the tree as siblings.
   * @param offset The index immediately before which to break the text node.
   * @returns Returns a newly created Text node that contains the text after the specified offset point.
   */
  splitText(offset: number) {
    throw new Error("Not implemented.");
  }
}
