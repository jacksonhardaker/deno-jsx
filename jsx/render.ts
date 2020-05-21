import { document, HTMLElement } from "../dom/document.ts";

interface VirtualNode {
  type: string;
  props: object;
  children: Array<VirtualNode>;
}

export function render(element: VirtualNode, container?: HTMLElement) {

  if (element.type === 'TEXT') {
    // @ts-ignore
    const textNode = document.createTextNode(element.props.value);
    container && container.appendChild(textNode);
  } else {
    const parentNode = document.createElement(element.type);

    const attr: any = element.props || {};
    Object.entries(attr).forEach(([key, value]) => {
      parentNode.setAttribute(key, `${value}`);
    });

    element.children.forEach((childNode) => render(childNode, parentNode));

    container && container.appendChild(parentNode);

    return parentNode.toString();
  }
}
