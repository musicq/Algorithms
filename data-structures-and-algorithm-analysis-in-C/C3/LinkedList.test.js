const {LinkedList, Node} = require('./LinkedList.js')

function isEqual(head, arr) {
  let p = head.next
  let i = 0

  while (p !== null) {
    expect(p.val).toEqual(arr[i])

    i++
    p = p.next
  }
}

describe('Test LinkedList', () => {
  test('Generate an empty list', () => {
    const list = LinkedList.makeEmpty()

    isEqual(list, [])
  })

  test('IsLast element of the list', () => {
    const list = LinkedList.makeEmpty()
    expect(LinkedList.isLast(list)).toBeTruthy()

    list.next = new Node(1)
    expect(LinkedList.isLast(list)).toBeFalsy()
  })

  test('Is the list empty', () => {
    const list = new LinkedList()
    expect(list.isEmpty()).toBeTruthy()

    list.insert(1)
    expect(list.isEmpty()).toBeFalsy()
  })

  test('Generate LinkedList', () => {
    const elements = [1, 2, 3]
    const list = new LinkedList(elements)

    isEqual(list.head, elements)
  })

  test('Insert a head to a list', () => {
    const elements = [1, 2, 3]
    const list = new LinkedList(elements)

    list.insert(4)

    isEqual(list.head, [4, 1, 2, 3])
  })

  test('Insert a element to a list', () => {
    const elements = [1, 2, 3]
    const list = new LinkedList(elements)

    list.insert(4, 2)

    isEqual(list.head, [1, 4, 2, 3])
  })

  test('Insert a element next to a non-exist element in the list', () => {
    const elements = [1, 2, 3]
    const list = new LinkedList(elements)

    list.insert(4, 5)

    isEqual(list.head, [1, 2, 3, 4])
  })

  test('Delete a element in a list', () => {
    const elements = [1, 2, 3]
    const list = new LinkedList(elements)

    list.delete(2)

    isEqual(list.head, [1, 3])
  })

  test('Delete a non-exist element in a list', () => {
    const elements = [1, 2, 3]
    const list = new LinkedList(elements)

    list.delete(4)

    isEqual(list.head, [1, 2, 3])
  })
})
