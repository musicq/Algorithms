import LinkList from './LinkList';

test('test empty array', () => {
  const list = LinkList.from([]);

  expect(list).toEqual({ value: undefined, next: undefined });
});

test('test array', () => {
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
