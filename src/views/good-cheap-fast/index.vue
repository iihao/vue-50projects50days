<script lang="ts" setup>
import {ref} from "vue";

const dataList = ref<any>([{name: 'Good', checked: false}, {name: 'Cheap', checked: false}, {
  name: 'Fast',
  checked: false
}])
const dataIndex = ref(0)
const handleChange = (idx: number, e: any) => {
  dataIndex.value = idx
  if (dataList.value[0].checked && dataList.value[1].checked && dataList.value[2].checked) {
    if (dataIndex.value < dataList.value.length - 1) {
      dataList.value[idx + 1].checked = false
    } else {
      dataList.value[0].checked = false
    }
  }
  console.log(idx, e.target, dataList.value)
}

</script>

<template>
  <div id="page" class="page">
    <h2>How do you want your project to be?</h2>
    <div v-for="(item,index) in dataList" :key="index" class="toggle-container">
      <input :id="item.name" v-model="dataList[index].checked" class="toggle" type="checkbox"
             @change="handleChange(index,$event)"
      >
      <label :for="item.name" class="label">
        <i class="ball"></i>
      </label>
      <span>{{ item.name }}</span>
    </div>

  </div>
</template>


<style scoped>

* {
  box-sizing: border-box;
}

#page {
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
}

.toggle-container {
  display: flex;
  align-items: center;
  margin: 10px 0;
  width: 200px;
}

.toggle {
  visibility: hidden;
}

.label {
  position: relative;
  background-color: #d0d0d0;
  border-radius: 50px;
  cursor: pointer;
  display: inline-block;
  margin: 0 15px 0;
  width: 80px;
  height: 40px;
}

.toggle:checked + .label {
  background-color: #8e44ad;
}

.ball {
  background: #fff;
  height: 34px;
  width: 34px;
  border-radius: 50%;
  position: absolute;
  top: 3px;
  left: 3px;
  align-items: center;
  justify-content: center;
  animation: slideOff 0.3s linear forwards;
}

.toggle:checked + .label .ball {
  animation: slideOn 0.3s linear forwards;
}

@keyframes slideOn {
  0% {
    transform: translateX(0) scale(1);
  }
  50% {
    transform: translateX(20px) scale(1.2);
  }
  100% {
    transform: translateX(40px) scale(1);
  }
}

@keyframes slideOff {
  0% {
    transform: translateX(40px) scale(1);
  }
  50% {
    transform: translateX(20px) scale(1.2);
  }
  100% {
    transform: translateX(0) scale(1);
  }
}

</style>