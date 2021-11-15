<script setup>
import urls from './data'
</script>

<template>
  <div :class="$style.container">
    <carousel>
      <template v-for="(url, i) of urls">
        <carousel-item :index="i">
          <img :src="url" alt="carousel-images" :class="$style.caruselImg" />
        </carousel-item>
      </template>
    </carousel>
  </div>
</template>

<style module>
.container {
  width: 600px;
  height: 350px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.caruselImg {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>