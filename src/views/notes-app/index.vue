<script lang="ts" setup>
import {ref} from "vue";

//const toolNum = ref<number>(0)

const notes: any = localStorage.getItem('notes')
const textContent = ref<any>(JSON.parse(notes))
const isSave = ref<boolean[]>([])
const saveStorage = () => {
  localStorage.setItem('notes', JSON.stringify(textContent.value))
}
const addTool = () => {
  textContent.value.push('')
  isSave.value[textContent.value.length - 1] = true
  saveStorage()
}

const saveTool = (v: number) => {
  isSave.value[v] = !isSave.value[v]
  saveStorage()
}

const deleteTool = (v: number) => {
  textContent.value.splice(v, 1)
  saveStorage()
}
</script>

<template>
  <div id="page" class="page">
    <button id="add" class="add" @click="addTool">
      <i class="iconfont icon-jia1"></i> Add note
    </button>
    <div v-for="(item,index) in textContent" :key="index" class="note">
      <div class="tools">
        <button class="edit" @click="saveTool(index)"><i
            :class="isSave[index]?'icon-biaoge-baocun':'icon-biaoge-xiugai'" class="iconfont "></i>
        </button>
        <button class="delete" @click="deleteTool(index)"><i class="iconfont icon-biaoge-shanchu"></i></button>
      </div>
      <textarea v-if="isSave[index]" v-model="textContent[index]"></textarea>
      <div v-else class="main ">{{ item }}</div>

    </div>
  </div>
</template>


<style scoped>
* {
  box-sizing: border-box;
  outline: none;
}

#page {
  background-color: #7bdaf3;
  font-family: 'Poppins', sans-serif;
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
  margin: 0;
  padding-top: 1rem;
  padding-bottom: 1rem;
  overflow: auto;
}

.add {
  position: fixed;
  top: 1rem;
  right: 1rem;
  background-color: #9ec862;
  color: #fff;
  border: none;
  border-radius: 3px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  text-align: left;
}

.add:active {
  transform: scale(0.98);
}

.note {
  background-color: #fff;
  box-shadow: 0 0 10px 4px rgba(0, 0, 0, 0.1);
  margin: 30px 20px;
  height: 400px;
  width: 400px;
}

.note .tools {
  background-color: #9ec862;
  display: flex;
  justify-content: flex-end;
  padding: 0.5rem;
}

button {
  padding: 0.1em 0.6em;
  outline: none;
}

.note .tools button {
  background-color: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  margin-left: 0.5rem;
  outline: none;
}

.note textarea {
  font-weight: bold;
  outline: none;
  font-family: inherit;
  font-size: 1.2rem;
  border: none;
  height: 400px;
  width: 100%;
  padding: 20px;
  color: #03487a;
}

.note .main {
  font-weight: bold;
  outline: none;
  font-family: inherit;
  font-size: 1.2rem;
  border: none;
  height: 400px;
  width: 100%;
  padding: 20px;
  white-space: pre;
  text-align: left;
}

.main {
  padding: 20px;
}

.hidden {
  display: none;
}
</style>