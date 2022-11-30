<script lang="ts" setup>
import {ref} from "vue";

const passwordLength = ref<number>(16)
const uppercase = ref<boolean>(true)
const lowercase = ref<boolean>(true)
const numbers = ref<boolean>(true)
const symbols = ref<boolean>(true)
const randomArr = ref<Array<string | boolean>>([])
const resultPw = ref<string>('')

const randomNumber = () => {
  return numbers.value ? String.fromCharCode(Math.floor(Math.random() * 10) + 48) : false
}
const randomLower = () => {
  return lowercase.value ? String.fromCharCode(Math.floor(Math.random() * 26) + 97) : false
}
const randomUpper = () => {
  return uppercase.value ? String.fromCharCode(Math.floor(Math.random() * 26) + 65) : false
}
const randomSymbol = () => {
  const s = '!@#$%^&*(){}[]=<>/,.'
  return symbols.value ? s[Math.floor(Math.random() * s.length)] : false
}
const getRandomArr = () => {
  const arr = [randomNumber(), randomLower(), randomUpper(), randomSymbol()]
  return arr.filter(item => {
    if (item) {
      return item
    }
  })
}
const copyClick = () => {
  if (!resultPw.value) {
    return
  }
  navigator.clipboard.writeText(resultPw.value);
  console.log('复制成功')
}
const handleClick = () => {
  resultPw.value = ''
  const count = (+numbers.value) + (+symbols.value) + (+uppercase.value) + (+lowercase.value)
  for (let i = 0; i < passwordLength.value; i++) {
    randomArr.value = getRandomArr()
    const rd = Math.floor(Math.random() * count)
    resultPw.value += randomArr.value[rd]
  }
  // console.log(uppercase.value, lowercase.value, numbers.value, symbols.value, count, resultPw.value)
}
</script>

<template>
  <div id="page" class="page">
    <div class="container">
      <h2>Password Generator</h2>
      <div class="result-container">
        <span id="result">{{ resultPw }}</span>
        <button id="clipboard" class="btn" @click="copyClick">
          <i class="iconfont icon-copy"></i>
        </button>
      </div>
      <div class="settings">
        <div class="setting">
          <label>Password Length</label>
          <input id="length" v-model="passwordLength" max="20" min="6" type="number">
        </div>
        <div class="setting">
          <label>Include uppercase letters</label>
          <input id="uppercase" v-model="uppercase" type="checkbox">
        </div>
        <div class="setting">
          <label>Include lowercase letters</label>
          <input id="lowercase" v-model="lowercase" type="checkbox">
        </div>
        <div class="setting">
          <label>Include numbers</label>
          <input id="numbers" v-model="numbers" type="checkbox">
        </div>
        <div class="setting">
          <label>Include symbols</label>
          <input id="symbols" v-model="symbols" type="checkbox">
        </div>
      </div>
      <button id="generate" class="btn btn-large" @click="handleClick()">
        Generate Password
      </button>
    </div>
  </div>
</template>


<style scoped>

* {
  box-sizing: border-box;
}

#page {
  background-color: #3b3b98;
  color: #fff;
  font-family: 'Muli', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  padding: 10px;
  margin: 0;
}

.iconfont {
  font-size: 22px;
}

h2 {
  margin: 10px 0 20px;
  text-align: center;
}

.container {
  background-color: #23235b;
  box-shadow: 0px 2px 10px rgba(255, 255, 255, 0.2);
  padding: 20px;
  width: 350px;
  max-width: 100%;
}

.result-container {
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  font-size: 18px;
  letter-spacing: 1px;
  padding: 12px 10px;
  height: 50px;
  width: 100%;
}

.result-container #result {
  word-wrap: break-word;
  max-width: calc(100% - 40px);
  overflow-y: scroll;
  height: 100%;
}

#result::-webkit-scrollbar {
  width: 1rem;
}

.result-container .btn {
  position: absolute;
  top: 5px;
  right: 5px;
  width: 40px;
  height: 40px;
  font-size: 20px;
}

.btn {
  border: none;
  background-color: #3b3b98;
  color: #fff;
  font-size: 16px;
  padding: 8px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn-large {
  display: block;
  width: 100%;
}

.setting {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0;
}

</style>