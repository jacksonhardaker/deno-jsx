export const TEXT_NODE = "TEXT_NODE";

export interface VirtualNode {
  type: string;
  props: object;
  children: Array<VirtualNode>;
}
