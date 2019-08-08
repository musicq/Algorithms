export function sequence(list, processor, done) {
  done = typeof done === 'function' ? done : () => {};

  if (!list) {
    console.warn('You may need a list to loop.');
    return done();
  }

  if (Object.prototype.toString.call(list) !== '[object Array]') {
    if (list == null) {
      console.warn('You may need a list to loop.');
      return done();
    }

    list = [list];
  }

  if (!list.length) {
    return done();
  }

  const target = list[0];
  const nextProcessor = function nextProcessor() {
    sequence(list.slice(1), processor, done);
  };

  processor(target, nextProcessor);
}
