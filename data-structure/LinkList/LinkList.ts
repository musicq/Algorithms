export class LinkNode<T> {
  constructor(public value?: T, public next?: LinkNode<T>) {}
}

export default class LinkList {
  static from<T>(list: T[]): LinkNode<T> {
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

  static push<T>(head: LinkNode<T>, el: any): LinkNode<T> {
    const ele = Array.isArray(el) ? el : Array.of(el);
    const start = LinkList.from(ele);
    start.next = head;

    return start;
  }
}
