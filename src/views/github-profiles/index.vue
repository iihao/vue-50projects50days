<script lang="ts" setup>
import {ref, watch} from "vue";
import axios from "axios";

const APIURL = 'https://api.github.com/users/'
const inputText = ref<string>()
const dataList = ref<any>([])
const repoList = ref<any>([])
const isShow = ref<boolean>(false)
const errorInfo = ref<string>('')
const handleSubmit = async () => {
  await getRepos()
  await getUsers()
}
const getRepos = async () => {
  try {
    const {data} = await axios.get(APIURL + inputText.value + '/repos?sort=created')
    repoList.value = data.slice(0, 10)
    isShow.value = true
    console.log('Repos:', repoList.value)
  } catch (err) {
    errorInfo.value = ` Error!!! ${err}\n `
    isShow.value = false
    console.log(err)
  }
}

const getUsers = async () => {
  try {
    const {data} = await axios.get(APIURL + inputText.value)
    dataList.value = data
  } catch (err) {
    errorInfo.value += `Error!!! ${err}`
    isShow.value = false
    console.log(err)
  }
}

console.log(inputText.value)
watch(inputText, (val) => {
  console.log(val)
})
</script>

<template>
  <div id="page" class="page">
    <form id="form" class="user-form" @submit="handleSubmit">
      <input id="search" v-model="inputText" placeholder="Search a Github User" type="text">
    </form>
    <main id="main">
      <div v-if="isShow" class="card">
        <div>
          <img :alt="dataList.name" :src="dataList.avatar_url" class="avatar">
        </div>
        <div class="user-info">
          <h2>{{ dataList.name || dataList.login }}</h2>
          <p>{{ dataList.bio || 'null' }}</p>
          <ul>
            <li>{{ dataList.followers }} <strong>Followers</strong></li>
            <li>{{ dataList.following }} <strong>Following</strong></li>
            <li>{{ dataList.public_repos }} <strong>Repos</strong></li>
          </ul>

          <div id="repos">
            <a v-for="(item,index) in repoList" :key="index" :href="item.html_url" class="repo"
               target="_blank">
              {{ item.name }}
            </a>
          </div>
        </div>
      </div>
      <div v-else class="card">{{ errorInfo || 'Please enter github userID' }}</div>
    </main>
  </div>
</template>


<style scoped>

* {
  box-sizing: border-box;
}

#page {
  background-color: #2a2a72;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
  text-align: left;
  font-weight: bold;
}

.user-form {
  width: 100%;
  max-width: 700px;
}

.user-form input {
  width: 100%;
  display: block;
  background-color: #4c2885;
  border: none;
  border-radius: 10px;
  color: #fff;
  padding: 1rem;
  margin-bottom: 2rem;
  font-family: inherit;
  font-size: 1rem;
  box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
  0 15px 40px rgba(0, 0, 0, 0.1);
}

.user-form input::placeholder {
  color: #bbb;
}

.user-form input:focus {
  outline: none;
}

.card {
  white-space: pre-wrap;
  font-size: 22px;
  max-width: 800px;
  background-color: #4c2885;
  border-radius: 20px;
  box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
  0 15px 40px rgba(0, 0, 0, 0.1);
  display: flex;
  padding: 3rem;
  margin: 0 1.5rem;
}

.avatar {
  border-radius: 50%;
  border: 10px solid #2a2a72;
  height: 150px;
  width: 150px;
}

.user-info {
  color: #eee;
  margin-left: 2rem;
}

.user-info h2 {
  margin-top: 0;
}

.user-info ul {
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  padding: 0;
  max-width: 400px;
}

.user-info ul li {
  display: flex;
  align-items: center;
  margin-right: 25px;
}

.user-info ul li strong {
  font-size: 0.9rem;
  margin-left: 0.5rem;
}

.repo {
  text-decoration: none;
  color: #fff;
  background-color: #212a72;
  font-size: 0.7rem;
  padding: 0.25rem 0.5rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  display: inline-block;
}

@media (max-width: 500px) {
  .card {
    flex-direction: column;
    align-items: center;
  }

  .user-form {
    max-width: 400px;
  }
}

</style>