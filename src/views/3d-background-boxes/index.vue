<script lang="ts" setup>
import {ref} from "vue";
import {getAssets} from "../../utils/getAssets";


const big = ref<boolean>(true)
const handleClick = () => {
  big.value = !big.value
}
const count = ref<number>(4)
</script>


<template>
  <div id="page" class="page">
    <button id="btn" class="magic" @click="handleClick">Magic 🎩</button>
    <div id="boxes" :class="{big}" class="boxes">
      <template v-for="i in count " :key="i">
        <div v-for="j in count " :key="j" :style="{backgroundPosition : ` ${-(j-1) * 125}px ${-(i-1) * 125}px`,
        backgroundImage: `url(${getAssets('img/tab4.jpg')})`}"
             class="box"></div>
      </template>
    </div>
  </div>
</template>


<style scoped>

* {
  box-sizing: border-box;
}

#page {
  background-color: #fafafa;
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
}

.magic {
  background-color: #f9ca24;
  color: #fff;
  font-family: 'Poppins', sans-serif;
  border: 0;
  border-radius: 3px;
  font-size: 16px;
  padding: 12px 20px;
  cursor: pointer;
  position: fixed;
  top: 20px;
  letter-spacing: 1px;
  box-shadow: 0 3px rgba(249, 202, 36, 0.5);
  z-index: 100;
}

.magic:focus {
  outline: none;
}

.magic:active {
  box-shadow: none;
  transform: translateY(2px);
}

.boxes {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  height: 500px;
  width: 500px;
  position: relative;
  transition: 0.4s ease;
}

.boxes.big {
  width: 600px;
  height: 600px;
}

.boxes.big .box {
  transform: rotateZ(360deg);
}


.box {

  background-repeat: no-repeat;
  background-size: 500px 500px;
  position: relative;
  height: 125px;
  width: 125px;
  transition: 0.4s ease;
}

.box::after {
  content: '';
  background-color: #f6e58d;
  position: absolute;
  top: 8px;
  right: -15px;
  height: 100%;
  width: 15px;
  transform: skewY(45deg);
}

.box::before {
  content: '';
  background-color: #f9ca24;
  position: absolute;
  bottom: -15px;
  left: 8px;
  height: 15px;
  width: 100%;
  transform: skewX(45deg);
}

</style>