class Node {
  val
  next = null

  constructor(val) {
    this.val = val
  }
}

class LinkedList {
  static makeEmpty() {
    return new Node()
  }

  static isLast(p) {
    return p.next === null
  }

  head = LinkedList.makeEmpty()

  constructor(list) {
    if (!list || list.length === 0) {
      return
    }

    let pointer = this.head

    for (const item of list) {
      pointer.next = new Node(item)
      pointer = pointer.next
    }
  }

  isEmpty() {
    return this.head.next === null
  }

  findPrevious(el) {
    let p = this.head

    while (p.next !== null && p.next.val !== el) {
      p = p.next
    }

    return p
  }

  insert(el, position) {
    const newNode = new Node(el)
    const p = position === undefined ? this.head : this.findPrevious(position)

    newNode.next = p.next
    p.next = newNode
  }

  delete(el) {
    let p = this.findPrevious(el)

    if (LinkedList.isLast(p)) {
      return
    }

    p.next = p.next.next
  }
}

module.exports = {
  LinkedList,
  Node
}
