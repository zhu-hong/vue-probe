import { nextTick } from '@vue/runtime-core'
import { getScrollParent } from './util'
import { throttle } from '../../shared'
import Lazyimg from './Lazyimg'

export default class Lazy {
  constructor(options) {
    this.options = options
    this.scrollParentPool = []
    this.lazyImgPool = []
  }

  bindLazy(el, binding) {
    nextTick(() => {
      const scrollParent = getScrollParent(el)

      if (!this.scrollParentPool.includes(scrollParent)) {
        this.scrollParentPool.push(scrollParent)
        scrollParent.addEventListener('scroll', throttle(this.handleScroll.bind(this), 300), false)
      }

      const lazyImg = new Lazyimg({
        el,
        parent: scrollParent,
        src: binding.value,
        options: this.options,
        imgRender: this.imgRender,
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