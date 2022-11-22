<script lang="ts" setup>
import {onMounted, reactive, ref} from "vue";

const smallCups = ref<number>(8)
const currentCup = ref(0)
const percentStyle = reactive({visibility: 'none', height: '0px'})
const remainedStyle = reactive({visibility: 'none', height: '0px'})
const smallCupClick = (val: number) => {
  console.log('clickNum', val)
  console.log('currentCup', currentCup.value)
  if ((val === smallCups.value && val <= currentCup.value) || val === currentCup.value) {
    currentCup.value--
  } else {
    currentCup.value = val
  }
  updateBigCup()
}

const updateBigCup = () => {
  if (currentCup.value === 0) {
    percentStyle.visibility = 'hidden'
    percentStyle.height = '0px'
  } else {
    percentStyle.visibility = 'visible'
    percentStyle.height = `${currentCup.value / smallCups.value * 330}px`
  }
  if (currentCup.value === smallCups.value) {
    remainedStyle.visibility = 'hidden'
    remainedStyle.height = '0px'
  } else {
    remainedStyle.visibility = 'visible'
  }
}
onMounted(() => updateBigCup())
</script>
<template>
  <div id="page" class="page">
    <h1>Drink Water</h1>
    <h3>Goal: 2 Liters</h3>

    <div class="cup">
      <div id="remained" :style="remainedStyle" class="remained">
        <span id="liters"> {{ `${2 - (250 * currentCup / 1000)}L` }}</span>
        <small>Remained</small>
      </div>
      <div id="percentage" :style="percentStyle" class="percentage">{{ `${currentCup / smallCups * 100} %` }}</div>
    </div>

    <p class="text">Select how many glasses of water that you have drank</p>

    <div class="cups">
      <div v-for="item in smallCups" :key="item" :class="{full:currentCup>=item}"
           class="cup cup-small" @click="smallCupClick(item)">250 ml
      </div>
    </div>
  </div>
</template>


<style scoped>


* {
  box-sizing: border-box;
}

#page {
  --border-color: #144fc6;
  --fill-color: #6ab3f8;
  background-color: #3494e4;
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 10px;
  min-height: 100vh;
}

h1 {
  margin: 10px 0 0;
}

h3 {
  font-weight: 400;
  margin: 10px 0;
}

.cup {
  background-color: #fff;
  border: 4px solid var(--border-color);
  color: var(--border-color);
  border-radius: 0 0 40px 40px;
  height: 330px;
  width: 180px;
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.cup.cup-small {
  height: 95px;
  width: 50px;
  border-radius: 0 0 15px 15px;
  background-color: rgba(255, 255, 255, 0.9);
  cursor: pointer;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 5px;
  transition: 0.5s ease;
}

.cup.cup-small.full {
  background-color: var(--fill-color);
  color: #fff;
}

.cups {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 580px;
}

.remained {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex: 1;
  transition: 0.5s ease;
}

.remained span {
  font-size: 20px;
  font-weight: bold;
}

.remained small {
  font-size: 12px;
}

.percentage {
  background-color: var(--fill-color);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 30px;
  height: 0;
  transition: 0.5s ease;
}

.text {
  text-align: center;
  margin: 0 0 5px;
}

</style>