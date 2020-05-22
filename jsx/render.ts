import { document, HTMLElement } from "../dom/document.ts";
import { TEXT_NODE, VirtualNode } from "./types.ts";

const protectedProps = ["className"];

export function render(element: VirtualNode, container?: HTMLElement) {
  if (element.type === TEXT_NODE) {
    // @ts-ignore
    const textNode = document.createTextNode(element.props.value);
    container && container.appendChild(textNode);
  } else {
    const parentNode = document.createElement(element.type);

    const attr: any = element.props || {};
    Object.entries(attr).forEach(([key, value]) => {
      if (!protectedProps.includes(key)) {
        parentNode.setAttribute(key, `${value}`);
      }
    });

    if (attr.className) {
      parentNode.classList.add(...attr.className.split(" "));
    }

    element.children.forEach((childNode) => render(childNode, parentNode));

    container && container.appendChild(parentNode);

    return parentNode.toString();
  }
}
