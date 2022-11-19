<script lang="ts" setup>
import {reactive, ref} from "vue";

const faqList = reactive([
  {a: 'Why shouldn\'t we trust atoms?', q: 'They make up everything', active: true},
  {a: 'What do you call someone with no body and no nose?', q: ' Nobody knows.', active: false},
  {a: 'What\'s the object-oriented way to become wealthy?', q: ' Inheritance.', active: false},
  {a: 'How many tickles does it take to tickle an octopus?', q: 'Ten-tickles!', active: false},
  {a: 'What is: 1 + 1?', q: 'Depends on who are you asking.', active: false},
])
const idx = ref<number>()
const handleClick = (val: number) => {
  idx.value = val
  faqList[val].active = !faqList[val].active
}
</script>

<template>
  <div id="page" class="page">
    <h1>Frequently Asked Questions</h1>
    <div class="faq-container">
      <div v-for="(item,index) in faqList" :key="index" :class="{active:item.active}"
           class="faq"
           @click="handleClick(index)"
      >
        <h3 class="faq-title">
          {{ item.a }}
        </h3>
        <p class="faq-text">
          {{ item.q }}
        </p>
        <button class="faq-toggle">
          <i class="iconfont icon-guanbi1"></i>
          <i class="iconfont icon-arrow-down-bold"></i>
        </button>
      </div>
    </div>
  </div>
</template>


<style scoped>
* {
  box-sizing: border-box;
}

#page {
  font-family: 'Muli', sans-serif;
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(191deg,
  rgba(97, 211, 255, .32), rgba(97, 206, 236, .43));
  min-height: 100vh;
}

h1 {
  margin: 30px 0 0 0;
  text-align: center;
}

.faq-container {
  max-width: 600px;
  margin: 0 auto;
}

.faq {
  background-color: rgb(255 255 255 / 87%);
  box-shadow: 2px 2px 3px 1px rgb(97 206 236 / 43%);
  border: 1px solid rgb(167 167 167 / 43%);
  text-align: left;
  border-radius: 10px;
  margin: 20px 0;
  padding: 30px;
  position: relative;
  overflow: hidden;
  transition: 0.3s ease;
}

.faq.active {
  background: linear-gradient(-45deg, #fff, #e9f0ff);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.1);
}

.faq.active::before,
.faq.active::after {
  content: '\e675';
  font-family: 'iconfont', serif;
  color: #2ecc71;
  font-size: 6rem;
  position: absolute;
  opacity: 0.2;
  top: 20px;
  left: 20px;
  z-index: 0;
}

.faq.active::before {
  color: #3498db;
  top: -10px;
  left: -30px;
  transform: rotateY(180deg);
}

.faq-title {
  margin: 0 35px 0 0;
}

.faq-text {
  display: none;
  margin: 30px 0 0;
}

.faq.active .faq-text {
  display: block;
}

.faq-toggle {
  background-color: transparent;
  border: 0;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  padding: 0;
  position: absolute;
  top: 30px;
  right: 30px;
  height: 30px;
  width: 30px;
}

.faq-toggle:focus {
  outline: 0;
}

.faq-toggle .icon-guanbi1 {
  display: none;
}

.faq.active .faq-toggle .icon-guanbi1 {
  display: block;
}

.faq.active .faq-toggle .icon-arrow-down-bold {
  display: none;
}

.iconfont {
  color: #b6b6b6;
  font-size: 28px;
}

.icon-arrow-down-bold {
  font-size: 22px;
}

</style>