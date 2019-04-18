export class LinkNode {
  constructor(public value?: any, public next?: LinkNode) {}
}

export default class LinkList {
  static from(list: any[]): LinkNode {
    if (!list.length) {
      return new LinkNode();
    }

    const start = new LinkNode(list[0]);

    list.slice(1).reduce((acc, cur) => {
      acc.next = new LinkNode(cur);
      return acc.next;
    }, start);

    return start;
  }

  static push(head: LinkNode, el: any): LinkNode {
    const ele = Array.isArray(el) ? el : Array.of(el);
    const start = LinkList.from(ele);
    start.next = head;

    return start;
  }
}
