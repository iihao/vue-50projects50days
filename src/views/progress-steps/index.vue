<script lang="ts" setup>
import {ref} from "vue";

const circles = ref(4)
const currentActive = ref(1)
const progressWidth = ref('0%')
const prevDisabled = ref(true)
const nextDisabled = ref(false)
const nextClick = () => {
  currentActive.value++
  if (currentActive.value > circles.value) {
    currentActive.value = circles.value
  }
  update()
}
const prevClick = () => {
  currentActive.value--
  if (currentActive.value < 1) {
    currentActive.value = 1
  }
  update()
}
const update = () => {
  progressWidth.value = (currentActive.value - 1) / (circles.value - 1) * 100 + '%'
  if (currentActive.value === 1) {
    prevDisabled.value = true
  } else if (currentActive.value === circles.value) {
    nextDisabled.value = true
  } else {
    prevDisabled.value = false
    nextDisabled.value = false
  }
}

</script>
<template>
  <div id="page" class="page">
    <div class="container">
      <div class="progress-container">
        <div id="progress" :style="{ width: progressWidth }" class="progress"></div>
        <div v-for="(item) in circles" :key="item" :class="currentActive>=item?'active':''" class="circle">
          {{
            item
          }}
        </div>
      </div>

      <button id="prev" :disabled="prevDisabled" class="btn" @click="prevClick">Prev</button>
      <button id="next" :disabled="nextDisabled" class="btn" @click="nextClick">Next</button>
    </div>
  </div>
</template>

<style scoped>


* {
  box-sizing: border-box;
  --line-border-fill: #3498db;
  --line-border-empty: #c1c1c1;
}

#page {
  font-family: 'Muli', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
}

.container {
  text-align: center;
}

.progress-container {
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-bottom: 30px;
  max-width: 100%;
  width: 350px;
}

.progress-container::before {
  content: '';
  background-color: var(--line-border-empty);
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  height: 4px;
  width: 100%;
  z-index: -1;
}

.progress {
  background-color: var(--line-border-fill);
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  height: 4px;
  z-index: -1;
  transition: 0.6s ease;
}

.circle {
  background-color: #ffffff;
  color: #b6b6b6;
  font-weight: bold;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid var(--line-border-empty);
  transition: 0.6s ease;
}

.circle.active {
  border-color: var(--line-border-fill);
}

.btn {
  background-color: var(--line-border-fill);
  color: #fff;
  border: 0;
  border-radius: 6px;
  cursor: pointer;
  font-family: inherit;
  padding: 8px 30px;
  margin: 5px;
  font-size: 14px;
}

.btn:active {
  transform: scale(0.98);
}

.btn:focus {
  outline: 0;
}

.btn:disabled {
  background-color: var(--line-border-empty);
  cursor: not-allowed;
}
</style>