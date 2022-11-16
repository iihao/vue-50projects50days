<script lang="ts" setup>
import {ref} from "vue";

const isActive = ref(false)
const handleClick = () => {
  isActive.value = !isActive.value
  getInput.value.focus()
}
const getInput = ref()

</script>

<template>
  <div id="page" class="page">
    <div :class="{'active':isActive}" class="search">
      <input ref="getInput" class="input" placeholder="Search..." type="text">
      <button class="btn" @click="handleClick">
        <i class="iconfont icon-icserch"></i>
      </button>
    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

#page {
  background-image: linear-gradient(90deg, #7d5fff, #7158e2);
  font-family: 'Roboto', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
}

.search {
  position: relative;
  height: 50px;
}

.search .input {
  background-color: #fff;
  border: 0;
  font-size: 18px;
  padding: 15px;
  height: 50px;
  width: 50px;
  transition: width 0.3s ease;
}

.btn {
  background-color: #fff;
  border: 0;
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  height: 50px;
  width: 50px;
  transition: transform 0.3s ease;
}

.btn:focus,
.input:focus {
  outline: none;
}

.search.active .input {
  width: 200px;
}

.search.active .btn {
  transform: translateX(198px);
}

</style>