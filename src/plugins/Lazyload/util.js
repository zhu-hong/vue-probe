export function getScrollParent(el) {
  if (el !== document.body) {
    let __parent = el.parentNode

    const styleOverflow = getComputedStyle(__parent).overflow || getComputedStyle(__parent).overflowY

    if (/(scroll)|(auto)/.test(styleOverflow)) {
      return __parent
    }

    return getScrollParent(__parent)
  }

  throw new Error('img wrapper is not found')
}

export function imgLoad(src) {
  return new Promise((resolve, reject) => {
    const oImg = new Image()

    oImg.src = src

    oImg.onload = resolve
    oImg.onerror = reject
  })
}