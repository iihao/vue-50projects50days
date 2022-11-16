<script lang="ts" setup>
// const open = document.getElementById('open')
// const close = document.getElementById('close')
// const container = document.querySelector('.container')
// open.addEventListener('click', () => container.classList.add('show-nav'))
// close.addEventListener('click', () => container.classList.remove('show-nav'))
import {ref} from "vue";

const isShowNav = ref(false)
const handleClick = () => {
  isShowNav.value = !isShowNav.value
}
</script>
<template>
  <div id="page" class="page">
    <div :class="isShowNav?'show-nav':''" class="container">
      <div class="circle-container">
        <div class="circle">
          <button id="close" @click="handleClick">
            <i class="iconfont icon-guanbi"></i>
          </button>
          <button id="open" @click="handleClick">
            <i class="iconfont icon-caidan"></i>
          </button>
        </div>
      </div>

      <div class="content">
        <h1>Amazing Article</h1>
        <small>Florin Pop</small>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quia in ratione dolores cupiditate,
          maxime
          aliquid impedit dolorem nam dolor omnis atque fuga labore modi veritatis porro laborum minus, illo, maiores
          recusandae cumque ipsa quos. Tenetur, consequuntur mollitia labore pariatur sunt quia harum aut. Eum maxime
          dolorem provident natus veritatis molestiae cumque quod voluptates ab non, tempore cupiditate? Voluptatem,
          molestias culpa. Corrupti, laudantium iure aliquam rerum sint nam quas dolor dignissimos in error placeat quae
          temporibus minus optio eum soluta cupiditate! Cupiditate saepe voluptates laudantium. Ducimus consequuntur
          perferendis consequatur nobis exercitationem molestias fugiat commodi omnis. Asperiores quia tenetur nemo
          ipsa.</p>

        <h3>My Dog</h3>
        <img
            alt="doggy"
            src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"/>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit libero deleniti rerum quo, incidunt vel
          consequatur culpa ullam. Magnam facere earum unde harum. Ea culpa veritatis magnam at aliquid. Perferendis
          totam
          placeat molestias illo laudantium? Minus id minima doloribus dolorum fugit deserunt qui vero voluptas, ut quia
          cum amet temporibus veniam ad ea ab perspiciatis, enim accusamus asperiores explicabo provident. Voluptates
          sint, neque fuga cum illum, tempore autem maxime similique laborum odio, magnam esse. Aperiam?</p>
      </div>
    </div>

    <nav>
      <ul>
        <li><i class="iconfont icon-cangku"></i><a href="#"> Home</a></li>
        <li><i class="iconfont icon-gerentouxiang"></i><a href="#"> About</a></li>
        <li><i class="iconfont icon-youjian"></i><a href="#"> Contact</a></li>
      </ul>
    </nav>
  </div>
</template>


<style scoped>


* {
  box-sizing: border-box;
}

#page {
  font-family: 'Lato', sans-serif;
  background-color: #333;
  color: #222;
  overflow-x: hidden;
  margin: 0;
}

.container {
  background-color: #fafafa;
  transform-origin: top left;
  transition: transform 0.5s linear;
  width: 100vw;
  min-height: 100vh;
  padding: 50px;
}

.container.show-nav {
  transform: rotate(-20deg);
}

.circle-container {
  position: fixed;
  top: -100px;
  left: -100px;
}

.circle {
  background-color: #ff7979;
  height: 200px;
  width: 200px;
  border-radius: 50%;
  position: relative;
  transition: transform 0.5s linear;
}

.container.show-nav .circle {
  transform: rotate(-70deg);
}

.circle button {
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 50%;
  height: 100px;
  background: transparent;
  border: 0;
  font-size: 26px;
  color: #fff;
}

.circle button:focus {
  outline: none;
}

.circle button#open {
  left: 60%;
}

.circle button#close {
  top: 60%;
  transform: rotate(90deg);
  transform-origin: top left;
}

.container.show-nav + nav li {
  transform: translateX(0);
  transition-delay: 0.3s;
}

nav {
  position: fixed;
  bottom: 40px;
  left: 0;
  z-index: 100;
}

nav ul {
  list-style-type: none;
  padding-left: 30px;
}

nav ul li {
  text-transform: uppercase;
  color: #fff;
  margin: 40px 0;
  transform: translateX(-100%);
  transition: transform 0.4s ease-in;
}

nav ul li i {
  font-size: 20px;
  margin-right: 10px;
}

nav ul li + li {
  margin-left: 15px;
  transform: translateX(-150%);
}

nav ul li + li + li {
  margin-left: 30px;
  transform: translateX(-200%);
}

nav a {
  color: #fafafa;
  text-decoration: none;
  transition: all 0.5s;
}

nav a:hover {
  color: #FF7979;
  font-weight: bold;
}

.content img {
  max-width: 100%;
}

.content {
  max-width: 1000px;
  margin: 50px auto;
}

.content h1 {
  margin: 0;
}

.content small {
  color: #555;
  font-style: italic;
}

.content p {
  color: #333;
  line-height: 1.5;
}
</style>