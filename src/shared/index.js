export function throttle(fn, delay) {
  let [timer, bigin] = [null, new Date().getTime()];

  return function () {
    let [__this, args, current] = [this, arguments, new Date().getTime()];

    if (timer) {
      clearTimeout(timer);
    }

    if (current - bigin >= delay) {
      fn.apply(__this, args);
      bigin = current;
    } else {
      timer = setTimeout(() => {
        fn.apply(__this, args);
      }, delay);
    }
  }
}