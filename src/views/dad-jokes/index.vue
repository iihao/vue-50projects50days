<script lang="ts" setup>
import {onMounted, ref} from "vue";

const jokeInfo = ref<string>('')

onMounted(() => {
  generateJoke()
})
const generateJoke = async () => {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }
  const res = await fetch('https://icanhazdadjoke.com', config)
  const data = await res.json()
  jokeInfo.value = data.joke || 'Wait Wait Wait !'
}
</script>

<template>
  <div id="page" class="page">
    <div class="container">
      <h3>Don't Laugh Challenge</h3>
      <div id="joke" class="joke">{{ jokeInfo }}</div>
      <button id="jokeBtn" class="btn" @click="generateJoke">Get Another Joke</button>
    </div>
  </div>
</template>


<style scoped>
* {
  box-sizing: border-box;
}

#page {
  background-color: #686de0;
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
  padding: 20px;
}

.container {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
  padding: 50px 20px;
  text-align: center;
  max-width: 100%;
  width: 800px;
}

h3 {
  margin: 0;
  opacity: 0.5;
  letter-spacing: 2px;
}

.joke {
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 1px;
  line-height: 40px;
  margin: 50px auto;
  max-width: 600px;
  min-height: 30vh;
}

.btn {
  background-color: #9f68e0;
  color: #fff;
  border: 0;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
  padding: 14px 40px;
  font-size: 16px;
  cursor: pointer;
}

.btn:active {
  transform: scale(0.98);
}

.btn:focus {
  outline: 0;
}

</style>