export const h = (type: string, props: any, ...children: any) => {
  children = [...children];
  return {
    type,
    props,
    children: children.map((child: object | string) =>
      typeof child === "string"
        ? {
          type: "TEXT",
          props: {
            value: child,
          },
          children: [],
        }
        : child
    ),
  };
};
