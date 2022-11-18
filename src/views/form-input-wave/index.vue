<script lang="ts" setup>

// onMounted(() => {
//   const labels = document.querySelectorAll('.form-control label')
//   labels.forEach(label => {
//     label.innerHTML = label.innerText
//         .split('')
//         .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
//         .join('')
//   })
// })
import {ref} from "vue";

const Email = ref<string>('Email')
const Password = ref<string>('Password')
</script>
<template>
  <div id="page" class="page">
    <div class="container">
      <h1>Please Login</h1>
      <form>
        <div class="form-control">
          <input required type="text">
          <!--          <label>Email</label>-->
          <label>
            <span v-for="(item,index) in Email" :key="index" :style="{transitionDelay: `${index*50}ms`}">{{
                item
              }}</span>
          </label>
        </div>

        <div class="form-control">
          <input required type="password">
          <label>
            <span v-for="(item,index) in Password" :key="index" :style="{transitionDelay: `${index*50}ms`}">{{
                item
              }}</span>
          </label>
        </div>

        <button class="btn">Login</button>

        <p class="text">Don't have an account? <a href="#">Register</a></p>
      </form>
    </div>
  </div>
</template>
<style scoped>
* {
  box-sizing: border-box;
}

#page {
  background-color: steelblue;
  color: #fff;
  font-family: 'Muli', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
}

.container {
  background-color: rgba(0, 0, 0, 0.4);
  padding: 20px 40px;
  border-radius: 5px;
}

.container h1 {
  text-align: center;
  margin-bottom: 30px;
}

.container a {
  text-decoration: none;
  color: lightblue;
}

.btn {
  cursor: pointer;
  display: inline-block;
  width: 100%;
  background: lightblue;
  padding: 15px;
  font-family: inherit;
  font-size: 16px;
  border: 0;
  border-radius: 5px;
}

.btn:focus {
  outline: 0;
}

.btn:active {
  transform: scale(0.98);
}

.text {
  margin-top: 30px;
}

.form-control {
  position: relative;
  margin: 20px 0 40px;
  width: 300px;
}

.form-control input {
  background-color: transparent;
  border: 0;
  border-bottom: 2px #fff solid;
  display: block;
  width: 100%;
  padding: 15px 0;
  font-size: 18px;
  color: #fff;
}

.form-control input:focus,
.form-control input:valid {
  outline: 0;
  border-bottom-color: lightblue;
}

.form-control label {
  position: absolute;
  top: 15px;
  left: 0;
  pointer-events: none;
}

.form-control label span {
  display: inline-block;
  font-size: 18px;
  min-width: 5px;
  transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.form-control input:focus + label span,
.form-control input:valid + label span {
  color: lightblue;
  transform: translateY(-30px);
}
</style>