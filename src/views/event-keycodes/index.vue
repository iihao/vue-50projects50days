<script lang="ts" setup>
import {onMounted, ref} from "vue";

const dataList = ref([{type: 'key', key: ''}, {type: 'keycode', key: ''}, {type: 'code', key: ''}])
const isShow = ref<boolean>(true)
const handleKeydown = (ev: any) => {
  dataList.value[0].key = ev.key
  dataList.value[1].key = ev.keyCode
  dataList.value[2].key = ev.code
  isShow.value = false
}
onMounted(() => {
  window.addEventListener('keydown', (event) => {
    handleKeydown(event)
  })
})
</script>

<template>
  <div id="page" class="page">
    <div id="insert">
      <div v-if="isShow" class="key">
        Press any key to get the keyCode
      </div>
      <div v-for="(item,index) in dataList" v-else :key="index" class="key">
        {{ item.key }}
        <small>{{ item.type }}</small>
      </div>
    </div>
  </div>
</template>


<style scoped>
* {
  box-sizing: border-box;

}

#page {
  background-color: #383838;
  font-family: 'Muli', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
}

.key {
  border: 1px solid #999999;
  background-color: #2B2B2B;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
  display: inline-flex;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  padding: 20px;
  flex-direction: column;
  margin: 10px;
  min-width: 150px;
  color: white;
  position: relative;
}

.key small {
  position: absolute;
  top: -24px;
  left: 0;
  text-align: center;
  width: 100%;
  color: #c4c4c4;
  font-size: 14px;
}

</style>