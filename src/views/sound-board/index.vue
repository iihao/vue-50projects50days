<script lang="ts" setup>
import {ref} from "vue";
import {getAssets} from "../../utils/getAssets";

let audio = new Audio()
const sounds = ref(['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'])
const playSound = (index: number) => {
  audio.pause()
  let sound = sounds.value[index]
  audio.src = getAssets(`audio/${sound}.mp3`) as string
  audio.play()
}
</script>
<template>
  <div id="page" class="page">
    <div v-for="(item,index) in sounds" :key="index" class="btn" @click="playSound(index)"> {{ item }}</div>
  </div>
</template>


<style scoped>
* {
  box-sizing: border-box;
}

#page {
  background-color: rgb(161, 100, 223);
  font-family: 'Poppins', sans-serif;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
}

.btn {
  background-color: rebeccapurple;
  border-radius: 5px;
  border: none;
  color: #fff;
  margin: 1rem;
  padding: 1.5rem 3rem;
  font-size: 1.2rem;
  font-weight: bold;
  font-family: inherit;
  cursor: pointer;
}

.btn:hover {
  opacity: 0.9;
}

.btn:focus {
  outline: none;
}

</style>