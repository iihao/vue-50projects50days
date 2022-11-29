<script lang="ts" setup>
import {ref} from "vue";

const loveStyle = ref<any>()
const loveRef = ref<any>()
const isShow = ref<boolean>(false)
const times = ref<number>(0)
const handleDbclick = (e: any) => {
  times.value++
  const x = e.clientX
  const y = e.clientY

  const leftOffset = e.target.offsetLeft
  const topOffset = e.target.offsetTop

  const xInside = x - leftOffset
  const yInside = y - topOffset

  loveStyle.value = {top: `${yInside}px`, left: `${xInside}px`}
  console.log(loveStyle.value)
  isShow.value = true
  setTimeout(() => {
    isShow.value = false
  }, 500)
}
</script>

<template>
  <div id="page" class="page">
    <h3>Double click on the image to <i class="iconfont icon-love"></i> it</h3>
    <small>You liked it <span id="times">{{ times }}</span> times</small>
    <div ref=loveRef class="loveMe" @dblclick="handleDbclick($event)">
      <i v-show="isShow" :style="loveStyle" class="iconfont icon-love"></i>
    </div>
  </div>
</template>


<style scoped>

* {
  box-sizing: border-box;
}

#page {
  font-family: 'Oswald', sans-serif;
  text-align: center;
  overflow: hidden;
  margin: 0;
  font-size: 20px;
}

h3 {
  margin-bottom: 0;
  text-align: center;
}

small {
  display: block;
  margin-bottom: 20px;
  text-align: center;
}

.icon-love {
  color: red;
  font-size: 20px;
}

.loveMe {
  height: 440px;
  width: 300px;
  background: url('https://images.unsplash.com/photo-1504215680853-026ed2a45def?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80') no-repeat center center/cover;
  margin: auto;
  cursor: pointer;
  max-width: 100%;
  position: relative;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  overflow: hidden;
}

.loveMe .icon-love {
  position: absolute;
  animation: grow 0.6s linear;
  transform: translate(-50%, -50%) scale(0);
}

@keyframes grow {
  to {
    transform: translate(-50%, -50%) scale(10);
    opacity: 0;
  }
}

</style>