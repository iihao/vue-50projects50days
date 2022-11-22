<script lang="ts" setup>
import {onMounted, onUnmounted, reactive, ref} from "vue";

const days = reactive(["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"])
const months = reactive(["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"])
const isDark = ref<boolean>(false)
const bgValue = ref('Dark(黑)')


const hourStyle = ref()
const minuteStyle = ref()
const secondStyle = ref()

const timeVal = ref()
const dateVal = ref()
// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num: number, in_min: number, in_max: number, out_min: number, out_max: number) => {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
const changeBg = () => {
  isDark.value = !isDark.value
  bgValue.value = isDark.value ? 'Light(白)' : 'Dark(黑)'
}
const time = ref(new Date())
const setTime = () => {
  const times = time.value = new Date()
  const month = times.getMonth()
  const day = times.getDay()
  const date = times.getDate()
  const hours = times.getHours()
  const hoursForClock = hours >= 13 ? hours % 12 : hours;
  const minutes = times.getMinutes()
  const seconds = times.getSeconds()
  const ampm = hours >= 12 ? 'PM' : 'AM'

  hourStyle.value = {transform: `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)`}
  minuteStyle.value = {transform: `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`}
  secondStyle.value = {transform: `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`}

  timeVal.value = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`
  dateVal.value = `${days[day]}, ${months[month]} `
}
let interval: any = null
onMounted(() => {
  setTime()
  interval = setInterval(() => {
    setTime()
    console.log(secondStyle.value)
    console.log(time.value.getSeconds())
  }, 1000)
})
onUnmounted(() => {
  clearInterval(interval)
})
</script>
<template>
  <div id="page" :class="{dark:isDark}" class="page">
    <button class="toggle" @click="changeBg">{{ bgValue }}</button>
    <div class="clock-container">
      <div class="clock">
        <div :style="hourStyle" class="needle hour"></div>
        <div :style="minuteStyle" class="needle minute"></div>
        <div :style="secondStyle" class="needle second"></div>
        <div class="center-point"></div>
      </div>
      <div class="time">{{ timeVal }}</div>
      <div class="date">{{ dateVal }}<span class="circle">{{ time.getDate() }}</span></div>
    </div>
  </div>
</template>


<style scoped>

* {
  box-sizing: border-box;

}

#page {
  transition: all 0.5s ease-in;
  --primary-color: #000;
  --secondary-color: #fff;
}


#page.dark {
  --primary-color: #fff;
  --secondary-color: #333;
  background-color: #111;
  color: var(--primary-color);
}

#page {
  font-family: 'Heebo', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
}

.toggle {
  cursor: pointer;
  background-color: var(--primary-color);
  color: var(--secondary-color);
  border: 0;
  border-radius: 4px;
  padding: 8px 12px;
  position: absolute;
  top: 100px;
}

.toggle:focus {
  outline: none;
}

.clock-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.clock {
  position: relative;
  width: 200px;
  height: 200px;
}

.needle {
  background-color: var(--primary-color);
  position: absolute;
  top: 50%;
  left: 50%;
  height: 65px;
  width: 3px;
  transform-origin: bottom center;
  transition: all 0.5s ease-in;
}

.needle.hour {
  transform: translate(-50%, -100%) rotate(0deg);
}

.needle.minute {
  transform: translate(-50%, -100%) rotate(0deg);
  height: 100px;
}

.needle.second {
  transform: translate(-50%, -100%) rotate(0deg);
  height: 100px;
  background-color: #e74c3c;
}

.center-point {
  background-color: #e74c3c;
  width: 10px;
  height: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
}

.center-point::after {
  content: '';
  background-color: var(--primary-color);
  width: 5px;
  height: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
}

.time {
  font-size: 60px;
}

.date {
  color: #aaa;
  font-size: 14px;
  letter-spacing: 0.3px;
  text-transform: uppercase;
}

.date .circle {
  background-color: var(--primary-color);
  color: var(--secondary-color);
  border-radius: 50%;
  height: 18px;
  width: 18px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 18px;
  transition: all 0.5s ease-in;
  font-size: 12px;
}

</style>