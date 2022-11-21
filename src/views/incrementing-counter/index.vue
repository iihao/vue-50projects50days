<script lang="ts" setup>
import {onMounted, reactive} from "vue";

interface counterListType {
  icon: string,
  counter: number,
  text: string,
  target: number
}

let counterList = reactive<counterListType[]>([
  {icon: 'icon-tuite', counter: 0, text: 'Twitter Followers', target: 12000},
  {icon: 'icon-youtube', counter: 0, text: 'YouTube Subscribers', target: 5000},
  {icon: 'icon-facebook', counter: 0, text: 'Facebook Fans', target: 9800},
])
const update = () => {
  counterList.map((val: counterListType) => {
    updateCounter(val)
  })
}
const updateCounter = (a: counterListType) => {
  if (a.counter < a.target) {
    a.counter += a.target / 200
    setTimeout(() => updateCounter(a), 1)
  } else {
    a.counter = a.target
  }
}

onMounted(() => {
  update()
})
</script>

<template>
  <div id="page" class="page">
    <div v-for="(item,index) in counterList" :key="index" class="counter-container">
      <i :class="item.icon" class="iconfont"></i>
      <div class="counter">{{ item.counter }}</div>
      <span>{{ item.text }}</span>
    </div>
  </div>
</template>


<style scoped>
* {
  box-sizing: border-box;
}

#page {
  background-image: linear-gradient(-225deg, #69EACB 0%, #EACCF8 48%, #6654F1 100%);
  color: #fff;
  /*font-family: '思源黑体 ExtraLight', serif;*/
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
}

.counter-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 30px 50px;
}

.counter {
  font-size: 55px;
  font-weight: bold;
}

.iconfont {
  font-size: 3em;
}

@media (max-width: 580px) {
  #page {
    flex-direction: column;
  }
}

</style>