import { Element } from './Element.ts';

const DOC_TYPE: string = "<!doctype html>";
const SELF_CLOSING_ELEMENTS = [
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr",
];

/**
 * The HTMLElement interface represents any {@link https://developer.mozilla.org/en-US/docs/Web/HTML|HTML} element.
 * Some elements directly implement this interface, while others
 * implement it via an interface that inherits it.
 * See {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement|HTMLElement}
 */
export class HTMLElement extends Element {
  tagName!: string;

  constructor(tagName: string) {
    super();
    Object.assign(this, {
      tagName,
    });
  }

  toString() {
    const attr = Object.entries(this.attributes).map(([key, value]) => {
      return key !== 'length' ? `${key}="${value}"` : '';
    }).join("");

    const isSelfClosing = SELF_CLOSING_ELEMENTS.includes(this.tagName);
    const includedDocType: string = this.tagName === "html" ? DOC_TYPE : "";
    const classes: string = this.classList.length > 0 ? `class="${this.classList.value}"` : "";
    const openingTag: string = `${includedDocType}<${this.tagName} ${attr} ${classes}>`;
    const closingTag: string = `</${this.tagName}>`;

    return isSelfClosing
      ? `<${this.tagName} ${attr} ${classes}/>`
      : [openingTag, ...this.childNodes, closingTag].join("");
  }
}
