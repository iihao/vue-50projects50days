<script lang="ts" setup>
import {onMounted, ref} from "vue";

const isLoading = ref<boolean>(true)
const dataList = ref({})
const getData = () => {
  dataList.value = {
    bgImage: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80',
    title: 'Lorem ipsum dolor sit amet',
    excerpt: ['Lorem ipsum dolor sit amet ', 'consecrate radicalising elite ', 'Dolores dispenser'],
    profile: 'https://randomuser.me/api/portraits/men/45.jpg',
    name: 'John Doe',
    date: '2022-11-01'
  }
  isLoading.value = false
}
onMounted(() => {
  setTimeout(() => getData(), 2000)
})
</script>
<template>
  <div id="page" class="page">
    <div class="card">
      <div id="header" :class="{'animated-bg':isLoading}" class="card-header ">
        <img v-show="!isLoading" :src="dataList.bgImage" alt="bg"/>
      </div>
      <div class="card-content">
        <h3 id="title" :class="{'animated-bg animated-bg-text':isLoading}" class="card-title">
          {{ dataList.title }}
        </h3>
        <p id="excerpt" class="card-excerpt">
          <span v-for="(item,index) in dataList.excerpt" :key="index"
                :class="{'animated-bg animated-bg-text':isLoading}">{{ item }}</span>

        </p>
        <div class="author">
          <div id="profile_img" class="profile-img animated-bg">
            <img v-show="!isLoading" :src="dataList.profile" alt="author"/>
          </div>
          <div class="author-info">
            <strong id="name" :class="{'animated-bg animated-bg-text':isLoading}"
            >{{ dataList.name }}</strong
            >
            <small id="date" :class="{'animated-bg animated-bg-text':isLoading}">{{ dataList.date }}</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

#page {
  background-color: #ecf0f1;
  font-family: 'Roboto', sans-serif;
  display: flex;
  align-items: center;
  text-align: left;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
}

img {
  max-width: 100%;
}

.card {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  overflow: hidden;
  width: 400px;
}

.card-header {
  height: 200px;
}

.card-header img {
  object-fit: cover;
  height: 100%;
  width: 100%;
}

.card-content {
  background-color: #fff;
  padding: 30px;
}

.card-title {
  height: 20px;
  margin: 0;
}

.card-excerpt {
  color: #777;
  margin: 10px 0 20px;
}

.author {
  display: flex;
}

.profile-img {
  border-radius: 50%;
  overflow: hidden;
  height: 40px;
  width: 40px;
}

.author-info {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 10px;
  width: 100px;
}

.author-info small {
  color: #aaa;
  margin-top: 1px;
}

.animated-bg {
  background-image: linear-gradient(
      to right,
      #f6f7f8 0%,
      #edeef1 10%,
      #f6f7f8 20%,
      #f6f7f8 100%
  );
  background-size: 200% 100%;
  animation: bgPos 1s linear infinite;
}

.animated-bg-text {
  border-radius: 50px;
  display: inline-block;
  margin: 0;
  height: 10px;
  width: 100%;
}

@keyframes bgPos {
  0% {
    background-position: 50% 0;
  }

  100% {
    background-position: -150% 0;
  }
}

</style>