import LinkList from './LinkList';

test('test empty array', () => {
  const list = LinkList.from([]);

  expect(list).toEqual({ value: undefined, next: undefined });
});

test('test 1 length array', () => {
  const list = LinkList.from([1]);

  expect(list).toEqual({ value: 1, next: undefined });
});

test('test 10 length array', () => {
  const arr = Array.from({ length: 10 }).map((_, i) => i);
  const list = LinkList.from(arr);

  let a = list;
  let i = 0;

  while (a) {
    expect(a.value).toBe(arr[i]);
    i++;
    // @ts-ignore
    a = a.next;
  }
});

test('test push an element into a linklist', () => {
  const arr = Array.from({ length: 10 }).map((_, i) => i);
  const list = LinkList.from(arr);

  const pushElement = -1;
  const newList = LinkList.push(list, pushElement);

  expect(newList.value).toBe(pushElement);
});
