<script lang="ts" setup>
import {computed, onMounted, ref} from "vue"

let load = ref(0)
const loading = () => {
  const blurring = () => {
    load.value++
    if (load.value > 99) {
      clearInterval(int)
    }
  }

  let int = setInterval(blurring, 40)


}
const opacity = computed(() => {
  return (100 - load.value) / 100
})
const filter = computed(() => {
  return (100 - load.value)
})


onMounted(
    () => loading()
)
</script>
<template>
  <div id="page" class="page">
    <section :style="{filter:`blur(${filter}px)`}" class="bg"></section>
    <div :style="{opacity:opacity}" class="loading-text">{{ `${load}%` }}</div>
  </div>
</template>
<style scoped>
* {
  box-sizing: border-box;
}

#page {
  font-family: 'Ubuntu', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
}

.bg {
  background: url('https://w.wallhaven.cc/full/kw/wallhaven-kwpprm.jpg') no-repeat center center/cover;
  position: absolute;
  height: 100%;
  width: 100%;
  /*top: -30px;*/
  /*left: -30px;*/
  /*width: calc(100vw + 60px);*/
  /*height: calc(100vh + 60px);*/
  z-index: -1;
  filter: blur(0px);
}

.loading-text {
  font-size: 50px;
  color: #fff;
}
</style>