<script lang="ts" setup>
import {onMounted, ref} from "vue";

interface contentProps {
  title: string
  content: string
}

const navRef = ref()
const active = ref<boolean>(false)
const contentList = ref<contentProps[]>([{
  title: '《客中行》',
  content: '兰陵美酒郁金香，玉碗盛来琥珀光。但使主人能醉客，不知何处是他乡。'
}, {
  title: '《赠孟浩然》',
  content: '吾爱孟夫子，风流天下闻。红颜弃轩冕，白首卧松云。\n' +
      '醉月频中圣，迷花不事君。高山安可仰，徒此揖清芬。'
}, {
  title: '《菩萨蛮》',
  content: '平林漠漠烟如织，寒山一带伤心碧。暝色入高楼，有人楼上愁。' +
      '玉阶空伫立，宿鸟归飞急，何处是归程？长亭更短亭。'
}])

onMounted(() => {
  addEventListener('scroll', () => {
    active.value = window.scrollY > navRef.value.offsetHeight
    console.log(navRef.value.offsetHeight, window.scrollY, active.value)
  })
})
</script>

<template>
  <div id="page" class="page">
    <nav ref="navRef" :class="{active}" class="nav">
      <div class="container">
        <h1 class="logo"><a href="/index.html">My Website</a></h1>
        <ul>
          <li><a class="current" href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </nav>

    <div class="hero">
      <div class="container">
        <h1>Welcome To My Website</h1>
        <p>唐诗三首</p>
      </div>
    </div>

    <section v-for="(item,index) in contentList" :key="index" class="container content">
      <h2>{{ item.title }}</h2>
      <p>{{ item.content }}</p>

    </section>
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
  text-align: left;
  color: #222;
  padding-bottom: 50px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.nav {
  position: fixed;
  background-color: #222;
  top: 0;
  left: 0;
  right: 0;
  transition: all 0.3s ease-in-out;
}

.nav .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  transition: all 0.3s ease-in-out;
}

.nav ul {
  display: flex;
  list-style-type: none;
  align-items: center;
  justify-content: center;
}

.nav a {
  color: #fff;
  text-decoration: none;
  padding: 7px 15px;
  transition: all 0.3s ease-in-out;
}

.nav.active {
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.nav.active a {
  color: #000;
}

.nav.active .container {
  padding: 10px 0;
}

.nav a.current,
.nav a:hover {
  color: #c0392b;
  font-weight: bold;
}

.hero {
  background-image: url('https://images.pexels.com/photos/450035/pexels-photo-450035.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom center;
  height: 100vh;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  margin-bottom: 20px;
  z-index: -2;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: -1;
}

.hero h1 {
  font-size: 46px;
  margin: -20px 0 20px;
}

.hero p {
  font-size: 20px;
  letter-spacing: 1px;
}

.content h2,
.content h3 {
  font-size: 150%;
  margin: 20px 0;
}

.content p {
  color: #555;
  line-height: 30px;
  letter-spacing: 1.2px;
}

</style>