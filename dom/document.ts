import { Text, HTMLElement } from './types/index.ts';

const createTextNode = (content: string) => {
  return new Text(content);
}

const createElement = (tagName: string) => {
  return new HTMLElement(tagName);
};

const document = {
  createElement,
  createTextNode,
};

export { document, HTMLElement };
