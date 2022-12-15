<script lang="ts" setup>
import {ref} from "vue";
import {getAssets} from "../../utils/getAssets";

const imgUrl = ref(getAssets('img/bg.jpg'))
const password = ref<string>('')

</script>

<template>
  <div id="page" class="page">
    <div id="background"
         :style="{background:`url(${imgUrl}) no-repeat center center/cover`,
    filter:` blur(${20-password.length*2}px)`}" class="background"></div>
    <div class="bg-white rounded p-10 text-center shadow-md">
      <h1 class="text-3xl">Image Password Strength</h1>
      <p class="text-sm text-gray-700">Change the password to see the effect</p>
      <div class="my-4 text-left">
        <label class="text-gray-900" for="email">Email:</label>
        <input
            id="email"
            class="border block w-full p-2 mt-2 rounded"
            placeholder="Enter Email"
            type="text"
        />
      </div>

      <div class="my-4 text-left">
        <label class="text-gray-900" for="email">Password:</label>
        <input
            id="password"
            v-model="password"
            class="border block w-full p-2 mt-2 rounded"
            placeholder="Enter Password"
            type="password"
        />
      </div>

      <button
          class="bg-black text-white py-2 mt-4 inline-block w-full rounded"
          type="submit"
      >
        Submit
      </button>
    </div>
  </div>
</template>


<style scoped>
@import 'https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/1.8.11/tailwind.min.css';

* {
  box-sizing: border-box;
}

#page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
}

.background {
  /*background-image: v-bind(imgUrl) no-repeat center center/cover;*/
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: -1;

}

</style>