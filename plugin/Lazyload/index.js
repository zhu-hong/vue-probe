import Lazyload from './Lazyload'

export const VueLazyload = {
  install: (Vue, options) => {
    const lazyload = new Lazyload(options)

    Vue.directive('lazy', lazyload.bindLazy.bind(lazyload))
  }
}
