import { Node } from "./Node.ts";
import { Element } from "./Element.ts";

/**
 * The CharacterData abstract interface represents a Node object
 * that contains characters. This is an abstract interface,
 * meaning there aren't any object of type CharacterData:
 * it is implemented by other interfaces, like Text, Comment,
 * or ProcessingInstruction which aren't abstract.
 * See {@link https://developer.mozilla.org/en-US/docs/Web/API/CharacterData|CharacterData}
 */
export class CharacterData extends Node {
  data: string = "";
  length: number = 0;
  readonly nextElementSibling: Element | null = null; // todo
  readonly previousElementSibling: Element | null = null; // todo

  constructor(data: string) {
    super();
    Object.assign(this, {
      data,
      length: data.length,
    });
  }

  appendData(data: string) {
    this.data = this.data + data;
    this.length = this.data.length;
  }

  deleteData(offset: number, count: number) {
    this.data = this.data.slice(0, offset) + this.data.slice(count + 1);
    return this.data;
  }

  insertData(offset: number, data: string) {
    this.data = this.data.slice(0, offset) + data + this.data.slice(offset);
    return this.data;
  }

  remove() {
    if (this.parentNode) {
      this.parentNode.removeChild(this);
    }
  }

  replaceData(offset: number, count: number, data: string) {
    this.data = this.data.slice(0, offset) + data + this.data.slice(count + 1);
    return this.data;
  }

  substringData(offset: number, count: number) {
    return this.data.slice(offset, offset + count);
  }
}
