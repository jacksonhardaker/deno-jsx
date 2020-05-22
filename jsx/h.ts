import { TEXT_NODE } from "./types.ts";

const textNode = (value: string) => ({
  type: TEXT_NODE,
  props: {
    value,
  },
  children: [],
});

export const h = (type: string, props: any, ...children: any) => {
  children = [...children];
  return {
    type,
    props,
    children: children.map((child: object | string) =>
      typeof child === "string" ? textNode(child) : child
    ),
  };
};
