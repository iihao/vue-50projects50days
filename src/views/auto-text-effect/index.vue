<script lang="ts" setup>
import {onMounted, ref} from "vue";

const text = 'We Love Programming!'
const textRef = ref()
const speed = ref(1)
let idx = 1
const writeText = () => {
  textRef.value = text.slice(0, idx)
  idx++
  if (idx > text.length) {
    idx = 1
  }
  setTimeout(() => {
    writeText()
  }, 300 / speed.value)
}
onMounted(() => {
  writeText()
})
</script>
<template>
  <div id="page" class="page">
    <h1 id="text">{{ textRef }}</h1>
    <div class="speed">
      <label for="speed">Speed:</label>
      <input id="speed" v-model="speed" max="10" min="1" name="speed" step="1" type="number">
    </div>
  </div>
</template>
<style scoped>

* {
  box-sizing: border-box;
}

#page {
  background-color: darksalmon;
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  margin: 0;
}

div .speed {
  position: absolute;
  bottom: 20px;
  background: rgba(0, 0, 0, 0.1);
  padding: 10px 20px;
  font-size: 18px;
}

input {
  width: 50px;
  padding: 5px;
  font-size: 18px;
  background-color: darksalmon;
  border: none;
  text-align: center;
}

input:focus {
  outline: none;
}

</style>