<script lang="ts" setup>
import {onBeforeUnmount, onMounted, ref} from "vue";

const contentCount = ref(14)
const triggerBottom = ref<number>(window.innerHeight / 5 * 4)
const scrollTop = ref<number>(0)// 记录当前的滚动距离
const items = ref(3)
const checkBoxes = () => {
  items.value = scrollTop.value < triggerBottom.value ? 3 : 3 + Math.round((scrollTop.value - triggerBottom.value) / (triggerBottom.value / 3))
  console.log(scrollTop.value, triggerBottom.value, items.value)
}


function handleScroll() {
  window.addEventListener('scroll', () => {
    scrollTop.value = window.scrollY;
    checkBoxes()
  });
}

onMounted(() => {
  handleScroll();
});
onBeforeUnmount(() => {
  window.removeEventListener('scroll', () => {
  }); // 离开当前组件移除事件监听
})


</script>
<template>
  <div id="page" class="page">
    <h1>Scroll to see the animation</h1>
    <div v-for="item in contentCount" :key="item" :class="{show:item<=(items)}" class="box"><h2>{{
        `Content${item}`
      }}</h2></div>
  </div>
</template>
<style scoped>
* {
  box-sizing: border-box;
}

#page {
  background: antiquewhite;
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  overflow-x: hidden;
}

h1 {
  margin: 10px;
}

.box {
  background-color: deepskyblue;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 200px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.3);
  transform: translateX(400%);
  transition: transform 0.4s ease;
}

.box:nth-of-type(even) {
  transform: translateX(-400%);
}

.box.show {
  transform: translateX(0);
}

.box h2 {
  font-size: 45px;
}
</style>