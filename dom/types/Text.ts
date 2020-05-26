import { CharacterData } from './CharacterData.ts';

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
  constructor(data: string) {
    super(data);
  }

  toString() {
    return this.data;
  }
}
