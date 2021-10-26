import { nextTick } from '@vue/runtime-core'
import { getScrollParent, throttle } from './util'
import Lazyimg from './Lazyimg'

export default class Lazy {
  constructor(options) {
    this.options = options
    this.isAddScrollListener = false
    this.lazyImgPool = []
  }

  bindLazy(el, bindings, vnode) {
    nextTick(() => {
      const scrollParent = getScrollParent(el)

      if (scrollParent && !this.isAddScrollListener) {
        scrollParent.addEventListener('scroll', throttle(this.handleScroll.bind(this), 200), false)
      }

      const lazyImg = new Lazyimg({
        el,
        src: bindings.value,
        options: this.options,
        imgRender: this.imgRender.bind(this),
      })

      this.lazyImgPool.push(lazyImg)
      this.handleScroll()
    })
  }

  handleScroll() {
    let isVisible = false

    this.lazyImgPool.forEach((lazyImg) => {
      if (!lazyImg.loaded) {
        isVisible = lazyImg.checkIsVisible()
        isVisible && lazyImg.loadImg()
      }
    })
  }

  imgRender(lazyImg, state) {
    const { el, options: { loading, error } } = lazyImg

    let src = ''

    switch (state) {
      case 'loading':
        src = loading || ''
        break
      case 'error':
        src = error || ''
        break
      default:
        src = lazyImg.src
        break
    }

    el.setAttribute('src', src)
  }
}