<script lang="ts" setup>
import {ref} from "vue";

const toastList = ref<string[]>(['Message1', 'Message2', 'Message3', 'Message4'])
const typeList = ref<string[]>(['info', 'success', 'error'])
const innerText = ref<any>([])

const show = ref<boolean>(false)
const randomType = () => {
  return typeList.value[Math.floor(Math.random() * typeList.value.length)]
}
const randomToast = () => {
  return toastList.value[Math.floor(Math.random() * toastList.value.length)]
}
const handleClick = () => {
  show.value = true
  let type = randomType()
  let toast = randomToast()
  innerText.value.push({type, toast})
  console.log(innerText.value)

  setTimeout(() => {
    innerText.value.splice(0, 1)
  }, 2200)
}
</script>

<template>
  <div id="page" class="page">
    <div id="toasts">
      <div v-for="item in innerText" v-show="show" :key="item.id" :class="item.type"
           class="toast">{{ item.toast }}
      </div>
    </div>
    <button id="button" class="btn" @click="handleClick">Show Notification</button>
  </div>
</template>


<style scoped>

* {
  box-sizing: border-box;
}

#page {
  background-image: linear-gradient(-225deg, #AC32E4 0%, #7918F2 48%, #4801FF 100%);
  font-family: 'Poppins', sans-serif;
  display: flex;
  font-size: 16px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
}

.btn {
  background-color: #ffffff;
  color: rebeccapurple;
  font-family: inherit;
  font-weight: bold;
  padding: 1rem;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}

.btn:focus {
  outline: none;
}

.btn:active {
  transform: scale(0.98);
}

#toasts {
  position: fixed;
  bottom: 10px;
  right: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 16px;
  font-weight: bold;
}

.toast {
  background-color: #fff;
  border-radius: 5px;
  padding: 1rem 2rem;
  margin: 0.5rem;
}

.toast.info {
  color: rebeccapurple;
}

.toast.success {
  color: green;
}

.toast.error {
  color: red;
}

</style>