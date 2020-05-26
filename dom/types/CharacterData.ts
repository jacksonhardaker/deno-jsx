import { Node } from "./Node.ts";
import { Element } from "./Element.ts";
import { DOMString } from "./DOMString.ts";

/**
 * The CharacterData abstract interface represents a Node object
 * that contains characters. This is an abstract interface,
 * meaning there aren't any object of type CharacterData:
 * it is implemented by other interfaces, like Text, Comment,
 * or ProcessingInstruction which aren't abstract.
 * See {@link https://developer.mozilla.org/en-US/docs/Web/API/CharacterData|CharacterData}
 */
export class CharacterData extends Node {
  data: DOMString = "";
  length: number = 0;
  readonly nextElementSibling: Element | null = null; // todo
  readonly previousElementSibling: Element | null = null; // todo

  constructor(data: DOMString) {
    super();
    Object.assign(this, {
      data,
      length: data.length,
    });
  }

  /**
   * Appends the given DOMString to the CharacterData.data string; when this method returns, data contains the concatenated DOMString.
   * @param data
   */
  appendData(data: DOMString) {
    this.data = `${this.data}${data}`;
    this.length = this.data.length;
  }

  /**
   * Removes the specified amount of characters, starting at the specified offset, from the CharacterData.data string; when this method returns, data contains the shortened DOMString.
   * @param offset 
   * @param count 
   */
  deleteData(offset: number, count: number) {
    this.data = this.data.slice(0, offset) + this.data.slice(count + 1);
    this.length = this.data.length;
    return this.data;
  }

  /**
   * Inserts the specified characters, at the specified offset, in the CharacterData.data string; when this method returns, data contains the modified DOMString.
   * @param offset 
   * @param data 
   */
  insertData(offset: number, data: DOMString) {
    this.data = this.data.slice(0, offset) + data + this.data.slice(offset);
    this.length = this.data.length;
    return this.data;
  }

  /**
   * Removes the object from its parent children list.
   */
  remove() {
    if (this.parentNode) {
      this.parentNode.removeChild(this);
    }
  }

  /**
   * Replaces the specified amount of characters, starting at the specified offset, with the specified DOMString; when this method returns, data contains the modified DOMString.
   * @param offset 
   * @param count 
   * @param data 
   */
  replaceData(offset: number, count: number, data: DOMString) {
    this.data = this.data.slice(0, offset) + data + this.data.slice(count + 1);
    this.length = this.data.length;
    return this.data;
  }

  /**
   * Returns a DOMString containing the part of CharacterData.data of the specified length and starting at the specified offset.
   * @param offset 
   * @param count 
   */
  substringData(offset: number, count: number) {
    return this.data.slice(offset, offset + count);
  }
}
