export function getScrollParent(el) {
  let __parent = el.parentNode

  while (__parent) {
    const styleOverflow = getComputedStyle(__parent).overflow

    if (/(scroll)|(auto)/.test(styleOverflow)) {
      return __parent
    }

    __parent = __parent.parentNode
  }
}

export function imgLoad(src) {
  return new Promise((resolve, reject) => {
    const oImg = new Image()

    oImg.src = src

    oImg.onload = resolve
    oImg.onerror = reject
  })
}