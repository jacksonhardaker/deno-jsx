interface VirtualDom {
  nodeName: string;
  attributes?: object;
  children?: Array<object | string>;
}

const DOC_TYPE: string = '<!doctype html>';
const SELF_CLOSING_ELEMENTS = [
  'area',
  'base',
  'br',
  'col',
  'embed',
  'hr',
  'img',
  'input',
  'link',
  'meta',
  'param',
  'source',
  'track',
  'wbr',
];

function generateAttributes(attributes?: object): string {
  const attr: any = attributes || {};
  return Object.keys(attr).map((key) => {
    const value: string = attr[key] || '';
    return `${key}="${value}"`;
  }).join('');
}

function createVoidElement(
  { nodeName, attributes }: { nodeName: string; attributes?: object },
): string {
  const attr: string = generateAttributes(attributes);
  return `<${nodeName} ${attr}/>`;
}

function createElement(
  { nodeName, attributes, children = [] }: {
    nodeName: string;
    attributes?: object;
    children?: Array<object | string>;
  },
): string {
  const attr: string = generateAttributes(attributes);
  const includedDocType: string = nodeName === 'html' ? DOC_TYPE : '';
  const openingTag: string = `${includedDocType}<${nodeName} ${attr}>`;
  const closingTag: string = `</${nodeName}>`;

  const childNodes = children.map((child: any) => {
    return typeof child === 'string' ? child : render(child);
  });

  const node = [openingTag, ...childNodes, closingTag];

  return node.join('');
}

export function render(vdom: VirtualDom) {
  const isSelfClosing: boolean = SELF_CLOSING_ELEMENTS.includes(vdom.nodeName);

  return isSelfClosing ? createVoidElement(vdom) : createElement(vdom);
}
