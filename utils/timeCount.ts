// print time cost
// e.g time(fn)(...args);
// print:
// Time cost is <time>ms
export function time(fn: Function) {
  if (!fn) {
    throw new Error('Need to specify a function');
  }

  return (...args: any[]) => {
    const start = Date.now();
    const r = fn(...args);
    const end = Date.now();
    console.log(`Time cost is ${end - start}ms`);

    return r;
  };
}
