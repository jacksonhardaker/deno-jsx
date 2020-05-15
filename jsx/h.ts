export const h = (nodeName: any, attributes: any, ...children: any) => {
  children = [...children];
  return { nodeName, attributes, children };
};
