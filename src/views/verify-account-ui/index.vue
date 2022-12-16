<script lang="ts" setup>
import {onMounted, ref} from "vue";


// const codes = document.querySelectorAll('.code')
//
// codes[0].focus()
//
// codes.forEach((code, idx) => {
//   code.addEventListener('keydown', (e) => {
//     if(e.key >= 0 && e.key <=9) {
//       codes[idx].value = ''
//       setTimeout(() => codes[idx + 1].focus(), 10)
//     } else if(e.key === 'Backspace') {
//       setTimeout(() => codes[idx - 1].focus(), 10)
//     }
//   })
// })
const codes = ref<any[]>(['', '', '', '', '', ''])
const handleKeydown = (idx: number, e: any) => {
  if (e.key >= 0 && e.key <= 9) {
    codes.value[idx] = ''
    console.log(e.key, idx, codes.value.length)
    setTimeout(() => codeRef.value[idx === codes.value.length - 1 ? idx : idx + 1].focus(), 10)
  } else if (e.key === 'Backspace') {
    setTimeout(() => codeRef.value[idx > 0 ? idx - 1 : 0].focus(), 10)
  }
}
const codeRef = ref<any[]>([])
onMounted(() => {
  codeRef.value[0].focus()
})
</script>

<template>
  <div id="page" class="page">
    <div class="container">
      <h2>Verify Your Account</h2>
      <p>We emailed you the six digit code to cool_guy@email.com <br/> Enter the code below to confirm your email
        address.</p>
      <div class="code-container">
        <template v-for="(i,index) in codes" :key="index">
          <input ref="codeRef" v-model="codes[index]" class="code" max="9" min="0" placeholder="0"
                 required type="number" @keydown="handleKeydown(index,$event)"/>
        </template>
      </div>
      <small class="info">
        This is design only. We didn't actually send you an email as we don't have your email, right?
      </small>
    </div>
  </div>
</template>


<style scoped>

* {
  box-sizing: border-box;
}

#page {
  background-color: #fbfcfe;
  font-family: 'Muli', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
}

.container {
  background-color: #fff;
  border: 3px #000 solid;
  border-radius: 10px;
  padding: 30px;
  max-width: 1000px;
  text-align: center;
}

.code-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px 0;
}

.code {
  caret-color: transparent;
  border-radius: 5px;
  font-size: 75px;
  height: 120px;
  width: 100px;
  border: 1px solid #eee;
  margin: 1%;
  text-align: center;
  font-weight: 300;
  -moz-appearance: textfield;
}

.code::-webkit-outer-spin-button,
.code::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.code:valid {
  border-color: #3498db;
  box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.25);
}

.info {
  background-color: #eaeaea;
  display: inline-block;
  padding: 10px;
  line-height: 20px;
  max-width: 400px;
  color: #777;
  border-radius: 5px;
}

@media (max-width: 600px) {
  .code-container {
    flex-wrap: wrap;
  }

  .code {
    font-size: 60px;
    height: 80px;
    max-width: 70px;
  }
}

</style>