<script lang="ts" setup>
import {ref} from "vue";
import {getAssets} from "../utils/getAssets";

const img = ref<any>(getAssets('img/tab1.jpg'))
const demoList = ref([
  {id: 1, name: 'expanding-cards', bgImage: 'img/expanding-cards.png'},
  {id: 2, name: 'progress-steps', bgImage: 'img/progress-steps.png'},
  {id: 3, name: 'rotating-nav-animation', bgImage: 'img/rotating-nav-animation.png'},
  {id: 4, name: 'hidden-search', bgImage: ''},
  {id: 5, name: 'blurry-loading', bgImage: ''},
  {id: 6, name: 'scroll-animation', bgImage: ''},
  {id: 7, name: 'split-landing-page', bgImage: ''},
  {id: 8, name: 'form-input-wave', bgImage: ''},
  {id: 9, name: 'sound-board', bgImage: ''},
  {id: 10, name: 'dad-jokes', bgImage: ''},
  {id: 11, name: 'event-keycodes', bgImage: ''},
  {id: 12, name: 'faq-collapse', bgImage: ''},
  {id: 13, name: 'random-choice-picker', bgImage: ''},
  {id: 14, name: 'animated-navigation', bgImage: ''},
  {id: 15, name: 'incrementing-counter', bgImage: ''},
  {id: 16, name: 'drink-water', bgImage: ''},
  {id: 17, name: 'movie-app', bgImage: ''},
  {id: 18, name: 'background-slider', bgImage: ''},
  {id: 19, name: 'theme-clock', bgImage: ''},
  {id: 20, name: 'button-ripple-effect', bgImage: ''},
  {id: 21, name: 'drag-n-drop', bgImage: ''},
  {id: 22, name: 'drawing-app', bgImage: ''},
  {id: 23, name: 'kinetic-loader', bgImage: ''},
  {id: 24, name: 'content-placeholder', bgImage: ''},
  {id: 25, name: 'sticky-navigation', bgImage: ''},
  {id: 26, name: 'double-vertical-slider', bgImage: ''},
  {id: 27, name: 'toast-notification', bgImage: ''},
  {id: 28, name: 'github-profiles', bgImage: ''},
  {id: 29, name: 'double-click-heart', bgImage: ''},
  {id: 30, name: 'auto-text-effect', bgImage: ''},
  {id: 31, name: 'password-generator', bgImage: ''},
  {id: 32, name: 'good-cheap-fast', bgImage: ''},
  {id: 33, name: 'notes-app', bgImage: ''},
  {id: 34, name: 'animated-countdown', bgImage: ''},
  {id: 35, name: 'image-carousel', bgImage: ''},
  {id: 36, name: 'hoverboard', bgImage: ''},
  {id: 37, name: 'pokedex', bgImage: ''},
  {id: 38, name: 'mobile-tab-navigation', bgImage: ''},
  {id: 39, name: 'password-strength-background', bgImage: ''},
  {id: 40, name: '3d-background-boxes', bgImage: ''},
  {id: 41, name: 'verify-account-ui', bgImage: ''},

])
console.log(getAssets('img/expanding-cards.png'))
</script>
<template>
  <div id="page" class="page">
    <div class="main">
      <ul>
        <li v-for="item in demoList" :key="item.id">
          <router-link :to="{name:item.name}" tag="a" target="_blank">
            <div class="bgImage">
              <img :src="getAssets(item.bgImage) || img" alt=""/>

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
  min-height: 100vh;
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