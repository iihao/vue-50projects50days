<script lang="ts" setup>
import {ref} from "vue";

const colors = ref<string[]>(['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'])
const color = ref<string[]>([])
const boxShadow = ref<string[]>([])
const square = ref<number>(1000)

const getRandomColor = () => {
  return colors.value[Math.floor(Math.random() * colors.value.length)]
}
const mouseOver = (idx: number) => {
  color.value[idx] = getRandomColor()
  boxShadow.value[idx] = `0 0 2px ${color.value[idx]}, 0 0 10px ${color.value[idx]}`
}
const mouseOut = (idx: number) => {
  color.value[idx] = ''
  boxShadow.value[idx] = ''
}
</script>

<template>
  <div id="page" class="page">
    <div id="container" class="container">
      <div v-for="item in square" :key="item" :style="{backgroundColor:color[item],boxShadow:boxShadow[item]}"
           class="square"
           @mousemove="mouseOver(item)" @mouseout="mouseOut(item)"></div>
    </div>
  </div>
</template>


<style scoped>
* {
  box-sizing: border-box;
}

#page {
  background-color: #111;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 400px;
}

.square {
  background-color: #1d1d1d;
  box-shadow: 0 0 2px #000;
  height: 16px;
  width: 16px;
  margin: 2px;
  transition: 2s ease;
}

.square:hover {
  transition-duration: 0s;
}

</style>