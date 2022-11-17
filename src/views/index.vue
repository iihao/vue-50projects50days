<script lang="ts" setup>
import {ref} from "vue";

const img = ref('https://s1.ax1x.com/2022/11/17/zeOwZ9.jpg')
const demoList = ref([
  {id: 1, name: 'expanding-cards', bgImage: 'https://s1.ax1x.com/2022/11/17/zecS8x.jpg'},
  {id: 2, name: 'progress-steps', bgImage: 'https://s1.ax1x.com/2022/11/17/zeXdl8.png'},
  {id: 3, name: 'rotating-nav-animation', bgImage: 'rotating-nav-animation.png'},
  {id: 4, name: 'hidden-search', bgImage: ''},
  {id: 5, name: 'blurry-loading', bgImage: ''},
  {id: 6, name: 'scroll-animation', bgImage: ''},
  // {id: 7, name: 'split-landing-page', bgImage: ''},
  // {id: 8, name: 'form-input-wave', bgImage: ''},
  // {id: 9, name: 'sound-board', bgImage: ''},
  // {id: 10, name: 'dad-jokes', bgImage: ''},
])

</script>
<template>
  <div id="page" class="page">
    <div class="main">
      <ul>
        <li v-for="item in demoList" :key="item.id">
          <router-link :to="{name:item.name}" tag="a" target="_blank">
            <div class="bgImage">
              <img :src="item.bgImage || img" alt=""/>
              <span class="day">{{ `Day ${item.id}` }}</span>
            </div>
            <div class="title">
              {{ item.name }}
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

#page {
  display: flex;
  height: 100%;
  width: 100%;
  color: #222222;
  background-image: linear-gradient(191deg,
  rgba(97, 211, 255, .32), rgba(97, 206, 236, .43));
}

.main {
  margin-bottom: 40px;
  margin-left: 40px;
}

ul {

}

ul li {
  float: left;
  width: 236px;
  height: 210px;
  box-shadow: 14px 14px 15px 0 rgb(166 180 211 / 10%);
  margin-right: 40px;
  margin-top: 40px;
  position: relative;
  text-align: center;
}

menu, ol, ul {
  list-style: none;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;;

}

ul li .bgImage {
  border-radius: 10px 10px 0 0;
  height: 150px;
  line-height: 130px;
  padding: 10px 20px;
  overflow: hidden;
  position: relative;
  background: linear-gradient(-45deg, #fff, #e9f0ff);
  background-size: cover;
  box-shadow: 14px 14px 15px 0 rgb(166 180 211 / 20%);
  transition: all .3s;
}

ul li .bgImage .day {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 50px;
  height: 25px;
  line-height: 25px;
  background: #00bfff;
  border-radius: 5px;
  color: #fff;
  font-size: 12px;
}

ul li:hover .bgImage {
  transition: all .2s;
  background: #313030;
  box-shadow: 14px 14px 15px 0 rgb(166 180 211 / 20%);
}

ul li:hover .bgImage img {
  opacity: 0.8;
  filter: blur(-1px);
}


ul li .title {
  display: block;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 60px;
  line-height: 60px;
  background-color: #fff;
  font-size: 18px;
  padding: 0 10px;
  border-radius: 0 0 10px 10px;
}

</style>