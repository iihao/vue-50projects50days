<script lang="ts" setup>
import {ref} from "vue";
import {getAssets} from "../../utils/getAssets";

const isShowLeft = ref<boolean>(false)
const isShowRight = ref<boolean>(false)
const handleLeft = () => {
  isShowLeft.value = !isShowLeft.value
  console.log(isShowLeft.value)
}
const handleRight = () => {
  isShowRight.value = !isShowRight.value
}

</script>

<template>
  <div id="page" class="page">
    <div :class="{'hover-left':isShowLeft,'hover-right':isShowRight}" class="container">
      <div :style="{backgroundImage:`url(${getAssets('img/ps5.png')})`}"
           class="split left"
           @mouseenter="handleLeft"
           @mouseleave="handleLeft">
        <h1>PS 5</h1>
        <a class="btn" href="#">Buy Now</a>
      </div>
      <div :style="{backgroundImage:`url(${getAssets('img/xbox.png')})`}"
           class="split right"
           @mouseenter="handleRight"
           @mouseleave="handleRight">
        <h1>XBox X</h1>
        <a class="btn" href="#">Buy Now</a>
      </div>
    </div>
  </div>

</template>


<style scoped>
* {
  box-sizing: border-box;
}

#page {
  --left-bg-color: rgba(87, 84, 236, 0.7);
  --right-bg-color: rgba(43, 43, 43, 0.8);
  --left-btn-hover-color: rgba(87, 84, 236, 1);
  --right-btn-hover-color: rgba(28, 122, 28, 1);
  --hover-width: 75%;
  --other-width: 25%;
  --speed: 1000ms;
  font-family: 'Roboto', sans-serif;
  height: 100vh;
  overflow: hidden;
  margin: 0;
}

h1 {
  font-size: 4rem;
  color: #fff;
  position: absolute;
  left: 50%;
  top: 20%;
  transform: translateX(-50%);
  white-space: nowrap;
}

.btn {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 50%;
  top: 40%;
  transform: translateX(-50%);
  text-decoration: none;
  color: #fff;
  border: #fff solid 0.2rem;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  width: 15rem;
  padding: 1.5rem;
}

.split.left .btn:hover {
  background-color: var(--left-btn-hover-color);
  border-color: var(--left-btn-hover-color);
}

.split.right .btn:hover {
  background-color: var(--right-btn-hover-color);
  border-color: var(--right-btn-hover-color);
}

.container {
  position: relative;
  width: 100%;
  height: 100%;
  background: #333;
}

.split {
  position: absolute;
  width: 50%;
  height: 100%;
  overflow: hidden;
}

.split.left {
  left: 0;

  background-repeat: no-repeat;
  background-size: cover;
}

.split.left::before {
  content: '';
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--left-bg-color);
}

.split.right {
  right: 0;

  background-repeat: no-repeat;
  background-size: cover;
}

.split.right::before {
  content: '';
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--right-bg-color);
}

.split.right,
.split.left,
.split.right::before,
.split.left::before {
  transition: all var(--speed) ease-in-out;
}

.hover-left .left {
  width: var(--hover-width);
}

.hover-left .right {
  width: var(--other-width);
}

.hover-right .right {
  width: var(--hover-width);
}

.hover-right .left {
  width: var(--other-width);
}

@media (max-width: 800px) {
  h1 {
    font-size: 2rem;
    top: 30%;
  }

  .btn {
    padding: 1.2rem;
    width: 12rem;
  }
}
</style>