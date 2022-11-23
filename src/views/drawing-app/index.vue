<script lang="ts" setup>
import {onMounted, ref} from "vue";

interface xyProps {
  x: number
  y: number
}

let ctx: any
const size = ref(5)
const color = ref('#e72222')
const painting = ref<boolean>()
const startXY = ref<xyProps>({x: 0, y: 0})
const moveXY = ref<xyProps>({x: 0, y: 0})
//初始化画布
const init = () => {
  canvasRef.value.height = document.documentElement.clientHeight || window.innerHeight
  canvasRef.value.width = document.documentElement.clientWidth || window.innerWidth
  ctx = canvasRef.value.getContext('2d')
}
const canvasRef = ref<any>()
const isEraser = ref<boolean>(false)
const handleMousedown = (e: any) => {
  painting.value = true
  startXY.value = {x: e.offsetX, y: e.offsetY}
  console.log('offsetXY:', startXY.value)
}

const handleMouseup = (e: any) => {
  painting.value = false
}

const handleMousemove = (e: any) => {
  moveXY.value = {x: e.offsetX, y: e.offsetY}
  console.log('offsetMoveXY:', moveXY.value)
  if (painting.value) {
    if (isEraser.value) {
      ctx.clearRect(startXY.value.x, startXY.value.y, size.value * 2, size.value * 2)
    } else {
      drawLine(startXY.value.x, startXY.value.y, moveXY.value.x, moveXY.value.y)
      drawCircle(moveXY.value.x, moveXY.value.y)
    }
    startXY.value = moveXY.value
  }
}


// 划线
const drawLine = (xStart: number, yStart: number, xEnd: number, yEnd: number) => {
  //开始绘制路径
  ctx.beginPath()
  //线宽
  ctx.lineWidth = size.value * 2
  //起始位置
  ctx.moveTo(xStart, yStart)
  //停止位置
  ctx.lineTo(xEnd, yEnd)
  //颜色
  ctx.strokeStyle = color.value
  //描绘线路
  ctx.stroke()
  //结束绘制
  ctx.closePath()
}

//填充圆点
const drawCircle = (xEnd: number, yEnd: number) => {
  ctx.beginPath()
  ctx.arc(xEnd, yEnd, size.value, 0, Math.PI * 2)
  ctx.fillStyle = color.value
  ctx.fill()
  ctx.closePath()
}

//清屏
const clear = () => {
  ctx.clearRect(0, 0, canvasRef.value.width, canvasRef.value.height)
}
//橡皮
const eraser = () => {
  isEraser.value = !isEraser.value
}
//保存
const save = () => {
  let url = canvasRef.value.toDataURL('image/jpg');
  let a = document.createElement('a');
  document.body.appendChild(a);
  a.href = url;
  a.download = 'drawing-app';
  a.target = '_blank';
  a.click()
}
onMounted(() => {
  init()
})
</script>
<template>
  <div id="page" class="page">
    <canvas id="canvas" ref="canvasRef" height="600" width="800"
            @mousedown="handleMousedown($event)"
            @mousemove="handleMousemove($event)"
            @mouseup="handleMouseup($event)"
    ></canvas>
    <input id="color" v-model="color" type="color">
    <div class="toolbox">
      <button id="decrease" :disabled="size<=1" @click="size--">
        <i class="iconfont icon-jian"/>
      </button>
      <span id="size">{{ size }}</span>
      <button id="increase" :disabled="size>14" @click="size++">
        <i class="iconfont icon-jia"/>
      </button>
      <button id="eraser" :class="{active:isEraser}" @click="eraser()">
        <i class="iconfont icon-xiangpica"/>
      </button>
      <button id="save" @click="save()">
        <i class="iconfont icon-save"/>
      </button>
      <button id="clear" @click="clear()">
        <i class="iconfont icon-guanbi1"/></button>

    </div>
  </div>
</template>
<style scoped>

* {
  box-sizing: border-box;
}

#page {
  background-color: #ffdbdb;
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
}

#color {
  position: fixed;
  left: 1rem;
  top: 1rem;
  height: 5rem;
  width: 5rem;
}

.iconfont {
  font-size: 30px;
}

canvas {
  /*border: 2px solid steelblue;*/
}

input[type=color] {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
}

input[type="color"]::-webkit-color-swatch-wrapper {
  padding: 0;
  margin: 0;
}

input[type="color"]::-webkit-color-swatch {
  border: none;
  border-radius: 2px;
}

.toolbox {
  position: fixed;
  right: 10px;
  bottom: 10px;
  /*background-color: steelblue;*/
  /*border: 1px solid slateblue;*/
  /*display: flex;*/
  /*width: 804px;*/
  /*padding: 1rem;*/
}

.active {
  background: #535353 !important;
  box-shadow: inset 1px 1px 5px 4px #323232;
  height: 52px !important;
  width: 52px !important;
}

.toolbox > * {
  background-color: #000;
  border: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  height: 50px;
  width: 50px;
  margin: 0.25rem;
  cursor: pointer;
  color: #fff;
  border-radius: 50%;
}

.toolbox > *:last-child {
  margin-left: 20px
}

</style>