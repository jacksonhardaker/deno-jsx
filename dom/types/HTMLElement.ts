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
    const openingTag: string = `${includedDocType}<${this.tagName} ${attr}>`;
    const closingTag: string = `</${this.tagName}>`;


    return isSelfClosing
      ? `<${this.tagName} ${attr}/>`
      : [openingTag, ...this.childNodes, closingTag].join("");
  }
}
