<script lang="ts" setup>
import {onMounted, reactive, ref} from "vue";

interface slideProps {
  title: string
  content: string
  color: string
}

const sliderRef = ref()
const activeSlideIndex = ref<number>(0)
const sliderHeight = ref<number>()
const sliderTop = ref<string>()
const item: Array<slideProps> = [{title: 'Nature flower', content: 'all in pink', color: '#FD3555'},
  {title: 'Blue Sky', content: 'with it\'s mountains', color: '#2A86BA'},
  {title: 'Lonely castle', content: 'in the wilderness', color: '#252E33'},
  {title: 'Flying eagle', content: 'in the sunset', color: '#FFB866'}]
const leftSlideList = reactive(item)

const upClick = () => {
  sliderHeight.value = sliderRef.value.clientHeight
  activeSlideIndex.value++
  if (activeSlideIndex.value > leftSlideList.length - 1) {
    activeSlideIndex.value = 0
  }
}
const downClick = () => {
  sliderHeight.value = sliderRef.value.clientHeight
  activeSlideIndex.value--
  if (activeSlideIndex.value < 0) {
    activeSlideIndex.value = leftSlideList.length - 1
  }
}
onMounted(() => {
  sliderTop.value = `-${(leftSlideList.length - 1) * 100}vh`
})
</script>
<template>
  <div id="page" class="page">
    <div ref="sliderRef" class="slider-container">
      <div :style="{transform:`translateY(${activeSlideIndex * sliderHeight}px)`,top:sliderTop}" class="left-slide">
        <div v-for="(item,index) in leftSlideList" :key="index" :style="{backgroundColor:item.color} ">
          <h1>{{ item.title }}</h1>
          <p>{{ item.content }}</p>
        </div>
      </div>

      <div :style="{transform:`translateY(-${activeSlideIndex * sliderHeight}px)`}" class="right-slide">
        <div
            style="background-image: url('https://images.unsplash.com/photo-1508768787810-6adc1f613514?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e27f6661df21ed17ab5355b28af8df4e&auto=format&fit=crop&w=1350&q=80')"></div>
        <div
            style="background-image: url('https://images.unsplash.com/photo-1519981593452-666cf05569a9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=90ed8055f06493290dad8da9584a13f7&auto=format&fit=crop&w=715&q=80')"></div>
        <div
            style="background-image: url('https://images.unsplash.com/photo-1486899430790-61dbf6f6d98b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8ecdee5d1b3ed78ff16053b0227874a2&auto=format&fit=crop&w=1002&q=80')"></div>
        <div
            style="background-image: url('https://images.unsplash.com/photo-1510942201312-84e7962f6dbb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=da4ca7a78004349f1b63f257e50e4360&auto=format&fit=crop&w=1050&q=80')"></div>
      </div>

      <div class="action-buttons">
        <button class="down-button" @click="upClick()">
          <i class="iconfont icon-arrow-down"></i>
        </button>
        <button class="up-button" @click="downClick()">
          <i class="iconfont icon-arrowup"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#page {
  font-family: 'Open Sans', sans-serif;
  height: 100vh;
}

.slider-container {
  position: relative;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
}

.left-slide {
  height: 100%;
  width: 35%;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.5s ease-in-out;
}

.left-slide > div {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
}

.left-slide h1 {
  font-size: 40px;
  margin-bottom: 10px;
  margin-top: -30px;
}

.right-slide {
  height: 100%;
  position: absolute;
  top: 0;
  left: 35%;
  width: 65%;
  transition: transform 0.5s ease-in-out;
}

.right-slide > div {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 100%;
  width: 100%;
}

button {
  background-color: #fff;
  border: none;
  color: #aaa;
  cursor: pointer;
  font-size: 16px;
  padding: 15px;
}

button:hover {
  color: #222;
}

button:focus {
  outline: none;
}

.slider-container .action-buttons button {
  position: absolute;
  left: 35%;
  top: 50%;
  z-index: 100;
}

.slider-container .action-buttons .down-button {
  transform: translateX(-100%);
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

.slider-container .action-buttons .up-button {
  transform: translateY(-100%);
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}

</style>