<script lang="ts" setup>
import {ref} from "vue";
import {getAssets} from "../../utils/getAssets";

const dataList = ref<any>([
  {imgAlt: 'home', imgUrl: getAssets('img/tab1.jpg'), icon: 'icon-7', isActive: true},
  {imgAlt: 'work', imgUrl: getAssets('img/tab2.jpg'), icon: 'icon-love', isActive: false},
  {imgAlt: 'blog', imgUrl: getAssets('img/tab3.jpg'), icon: 'icon-5', isActive: false},
  {imgAlt: 'about', imgUrl: getAssets('img/tab4.jpg'), icon: 'icon-tuite', isActive: false},
])
const idxRef = ref<number>(0)
const handleClick = (idx: any) => {
  dataList.value[idx].isActive = true
  idxRef.value = idx
}
</script>

<template>
  <div id="page" class="page">
    <div class="phone">
      <img
          :alt="dataList[idxRef].imgAlt"
          :class="{show:dataList[idxRef].isActive}"
          :src="dataList[idxRef].imgUrl" class="content"/>
      <nav>
        <ul>
          <li v-for="(item,index) in dataList" :key="index" :class="{active:idxRef===index}"
              @click="handleClick(index)">
            <i :class="item.icon" class="iconfont"></i>
            <p>{{ item.imgAlt }}</p>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>


<style scoped>

* {
  box-sizing: border-box;
}

#page {
  background-color: rgba(155, 89, 182, 0.7);
  font-family: 'Open Sans', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
}

.phone {
  position: relative;
  overflow: hidden;
  border: 3px solid #eee;
  border-radius: 15px;
  height: 600px;
  width: 340px;
}

.phone .content {
  opacity: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  height: calc(100% - 60px);
  width: 100%;
  transition: opacity 0.4s ease;
}

.phone .content.show {
  opacity: 1;
}

nav {
  position: absolute;
  bottom: 0;
  left: 0;
  margin-top: -5px;
  width: 100%;
}

nav ul {
  background-color: #fff;
  display: flex;
  list-style-type: none;
  padding: 0;
  margin: 0;
  height: 60px;
}

nav li {
  color: #777;
  cursor: pointer;
  flex: 1;
  padding: 10px;
  text-align: center;
}

nav ul li p {
  font-size: 12px;
  margin: 2px 0;
}

nav ul li:hover,
nav ul li.active {
  color: #8e44ad;
}

</style>