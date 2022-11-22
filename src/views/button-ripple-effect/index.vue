<script lang="ts" setup>
import {reactive, ref} from "vue";

const circle = ref<boolean>()
const isShow = ref<boolean>(true)

interface StyleValue {
  top: string
  left: string
}

const item: StyleValue | undefined = {top: '', left: ''}
let circleStyle = reactive(item)
const handleClick = (e: any) => {
  circle.value = true
  const x = e.pageX
  const y = e.pageY
  const buttonTop = e.target.offsetTop
  const buttonLeft = e.target.offsetLeft
  const xInside = x - buttonLeft
  const yInside = y - buttonTop
  circleStyle = {top: yInside + 'px', left: xInside + 'px'}
  console.log(x,
      y,
      'bth(',
      buttonTop,
      buttonLeft,
      ')')
  isShow.value = true
  setTimeout(() => isShow.value = false, 300)
}
</script>
<template>
  <div id="page" class="page">
    <button class="ripple" @click="handleClick($event)">Click Me
      <span v-if="isShow" :class="{circle}"
            :style="circleStyle"></span></button>
  </div>
</template>


<style scoped>

* {
  box-sizing: border-box;
}

#page {
  background-image: linear-gradient(-20deg, #616161 0%, #9bc5c3 100%);
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
}

button {
  background-image: linear-gradient(-225deg, #2CD8D5 0%, #C5C1FF 56%, #FFBAC3 100%);
  color: #fff;
  box-shadow: 0px 0px 20px 1px #c5c1ff;;
  border-radius: 12px;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 20px 30px;
  overflow: hidden;
  margin: 10px 0;
  position: relative;
}

button:focus {
  outline: none;
}

button .circle {
  position: absolute;
  background-color: #fff;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  transform: translate(-50%, -50%) scale(0);
  animation: scale 0.5s ease-out;
}

@keyframes scale {
  to {
    transform: translate(-50%, -50%) scale(3);
    opacity: 0;
  }
}

</style>