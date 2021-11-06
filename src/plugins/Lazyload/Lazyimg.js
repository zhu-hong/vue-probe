import { imgLoad } from './util'

export default class Lazyimg {
  constructor({ el, parent, src, options, imgRender }) {
    this.el = el
    this.parent = parent
    this.src = src
    this.options = options
    this.imgRender = imgRender
    this.loaded = false

    this.state = {
      loading: false,
      error: false,
    }
  }

  checkIsVisible() {
    const { top } = this.el.getBoundingClientRect()
    const boundary = this.getBoundary()

    return top < boundary * (this.options.preload || 1.3)
  }

  getBoundary() {
    return this.parent.getBoundingClientRect().top + this.parent.offsetHeight
  }

  loadImg() {
    this.imgRender(this, 'loading')

    imgLoad(this.src)
      .then(() => {
        this.imgRender(this, 'ok')
        this.loaded = true
      })
      .catch(() => {
        this.imgRender(this, 'error')
        this.loaded = true
      })
  }
}