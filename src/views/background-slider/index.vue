<script lang="ts" setup>
import {reactive, ref} from "vue";

interface dataListType {
  imgUrl: string
}

const dataList = reactive<dataListType[]>([
  {imgUrl: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80'},
  {imgUrl: 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80'},
  {imgUrl: 'https://images.unsplash.com/photo-1495467033336-2effd8753d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80'},
  {imgUrl: 'https://images.unsplash.com/photo-1522735338363-cc7313be0ae0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80'},
  {imgUrl: 'https://images.unsplash.com/photo-1559087867-ce4c91325525?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80'}
])
const curAcitveIndex = ref<number>(0)
const leftClick = () => {
  curAcitveIndex.value--
  if (curAcitveIndex.value < 0) {
    curAcitveIndex.value = dataList.length - 1
  }
  console.log(curAcitveIndex.value)
}
const rightClick = () => {
  curAcitveIndex.value++
  if (curAcitveIndex.value > dataList.length - 1) {
    curAcitveIndex.value = 0
  }
  console.log(curAcitveIndex.value)
}
</script>
<template>
  <div id="page" :style="
          {backgroundImage: `url(${dataList[curAcitveIndex].imgUrl})`}" class="page">
    <div class="slider-container">
      <div v-for="(item,index) in dataList" :key="index"
           :class="{active:index === curAcitveIndex}"
           :style="
          {backgroundImage: `url(${item.imgUrl})`}
        " class="slide "
      ></div>
      <button id="left" class="arrow left-arrow" @click="leftClick()">
        <i class="fas fa-arrow-left"></i>
      </button>

      <button id="right" class="arrow right-arrow" @click="rightClick()">
        <i class="fas fa-arrow-right"></i>
      </button>
    </div>
  </div>
</template>


<style scoped>

* {
  box-sizing: border-box;
}

#page {
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
  background-position: center center;
  background-size: cover;
  transition: 0.4s;
}

#page::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 0;
  transition: all 0.8s ease-in-out;
}

.slider-container {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  height: 70vh;
  width: 70vw;
  position: relative;
  overflow: hidden;
}

.slide {
  opacity: 0;
  height: 100vh;
  width: 100vw;
  background-position: center center;
  background-size: cover;
  position: absolute;
  top: -15vh;
  left: -15vw;
  transition: 0.4s ease;
  z-index: 1;
}

.slide.active {
  opacity: 1;
  transition: all 0.8s ease-in-out;
}

.arrow {
  position: fixed;
  background-color: transparent;
  color: #fff;
  padding: 20px;
  font-size: 30px;
  border: 2px solid orange;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}

.arrow:focus {
  outline: 0;
}

.left-arrow {
  left: calc(15vw - 65px);
}

.right-arrow {
  right: calc(15vw - 65px);
}

</style>