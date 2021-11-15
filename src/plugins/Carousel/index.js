import Carousel from './index.vue'
import CarouselItem from './item.vue'

export const VueCarousel = {
  install: (Vue) => {
    Vue.component(Carousel.name, Carousel)
    Vue.component(CarouselItem.name, CarouselItem)
  }
}