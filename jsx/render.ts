const docType: string = '<!doctype html>';

export const render = (vdom: any) => {
  const attributes: string = Object.keys(vdom.attributes || {}).reduce((attrs, key) => {
    return `${attrs} ${key}="${vdom.attributes[key]}"`;
  }, '');

  const includedDocType: string = vdom.nodeName === 'html' ? docType : '';

  const openingTag: string = `${includedDocType}<${vdom.nodeName}${attributes}>`;
  const closingTag: string = `</${vdom.nodeName}>`;

  const children = vdom.children.map((child: any) => {
    if (typeof child === 'string') {
      return child;
    }
    else {
      return render(child);
    }
  });

  const node = [openingTag, ...children, closingTag];

  return node.join('');
};
