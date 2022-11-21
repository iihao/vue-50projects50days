<script lang="ts" setup>
import {onMounted, ref, watch} from "vue";

const focusTextarea = ref()
const textarea = ref()
const tag = ref()
const randomTag = ref(-1)
const pickTag = () => {
  if (tag.value.length)
    return randomTag.value = Math.floor(Math.random() * tag.value.length)
}
const handleEnter = () => {
  const times = 30
  const interval = setInterval(() => {
    pickTag()
  }, 100)
  setTimeout(() => {
    clearInterval(interval)
    pickTag()
  }, times * 100)
}

console.log()

watch(textarea, (val) => {
  tag.value = val.split(',').map((t: any) => t.trim()).filter((t: string) => t.trim() !== '')
  console.log(tag.value)
})
onMounted(() => {
  focusTextarea.value.focus()
})
</script>


<template>
  <div id="page" class="page">
    <div class="container">
      <h3>Enter all of the choices divided by a comma (','). <br>Press enter when you're done</h3>
      <h3>输入所有选项并用逗号 (',') 分隔。
        完成后按回车</h3>
      <textarea id="textarea" ref="focusTextarea" v-model="textarea" placeholder="Enter choices here..."
                @keyup.enter="handleEnter"></textarea>
      <div id="tags">
        <span v-for="(item,index) in tag" id="tags" :key="index"
              :class="{highlight:index === randomTag}"
              class="tag">{{ item }}</span>
      </div>
    </div>
  </div>
</template>


<style scoped>
* {
  box-sizing: border-box;
}

#page {
  background-color: #2b88f0;
  font-family: 'Muli', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  /*justify-content: center;*/
  padding-top: 20vh;
  height: 100vh;
  overflow: hidden;
  margin: 0;
}

#tags {
  text-align: left;
}

h3 {
  color: #fff;
  margin: 10px 0 20px;
  text-align: center;
}

.container {
  width: 500px;
}

textarea {
  background: #f0f8fc;
  border: none;
  display: block;
  width: 100%;
  height: 150px;
  font-family: inherit;
  padding: 10px;
  margin: 0 0 20px;
  font-size: 16px;
  border-radius: 12px;
}

textarea:focus {
  background: #ffffff;
  border: 1px solid #1a1a1a;
  outline: none;
}

.tag {
  background-color: #f0932b;
  color: #fff;
  border-radius: 50px;
  padding: 10px 20px;
  margin: 0 5px 10px 0;
  font-size: 14px;
  display: inline-block;
}

.tag.highlight {
  background-color: #273c75;
}

</style>