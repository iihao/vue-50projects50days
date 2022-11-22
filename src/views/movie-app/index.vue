<script lang="ts" setup>
import {onMounted, ref} from "vue";

interface MovieProps {
  id: string;
  title: string;
  vote_average: number;
  overview: string;
  poster_path: string;
}

const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=10'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'
const moviesData = ref<Array<MovieProps>>()
const searchInput = ref<string>('')
const getMovies = async (url: string) => {
  const res = await fetch(url)
  const data = await res.json()
  moviesData.value = data.results
  console.log(moviesData.value)
}

const getClassByRate = (vote: number) => {
  if (vote >= 8) {
    return 'green'
  } else if (vote >= 5) {
    return 'orange'
  } else {
    return 'red'
  }
}
const handleSubmit = () => {
  if (searchInput.value) {
    return getMovies(SEARCH_API + searchInput.value)
  } else {
    window.location.reload()
  }
}
onMounted(() => getMovies(API_URL))
</script>

<template>
  <div id="page" class="page">
    <header>
      <form id="form" @submit="handleSubmit">
        <input id="search" v-model="searchInput" class="search" placeholder="Search" type="text">
      </form>
    </header>

    <main id="main">
      <div v-for="(item,index) in moviesData" :key="item.id" class="movie">
        <img :alt='item.title' :src="IMG_PATH+item.poster_path"/>
        <div class="movie-info">
          <h3>{{ item.title }}</h3>
          <span :class="getClassByRate(item.vote_average)">{{ item.vote_average }}</span>
        </div>
        <div class="overview">
          <h3>Overview</h3>
          {{ item.overview }}
        </div>
      </div>
    </main>
  </div>
</template>


<style scoped>


* {
  box-sizing: border-box;
}

#page {
  --primary-color: #22254b;
  --secondary-color: #373b69;
  background-color: var(--primary-color);
  font-family: 'Poppins', sans-serif;
  margin: 0;
}

header {
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  background-color: var(--secondary-color);
}

.search {
  background-color: transparent;
  border: 2px solid var(--primary-color);
  border-radius: 50px;
  font-family: inherit;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  color: #fff;
}

.search::placeholder {
  color: #7378c5;
}

.search:focus {
  outline: none;
  background-color: var(--primary-color);
}

main {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.movie {
  width: 300px;
  margin: 1rem;
  background-color: var(--secondary-color);
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  border-radius: 3px;
}

.movie img {
  width: 100%;
}

.movie-info {
  color: #eee;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.2rem;
  padding: 0.5rem 1rem 1rem;
  letter-spacing: 0.5px;
}

.movie-info h3 {
  margin-top: 0;
}

.movie-info span {
  background-color: var(--primary-color);
  padding: 0.25rem 0.5rem;
  border-radius: 3px;
  font-weight: bold;
}

.movie-info span.green {
  color: lightgreen;
}

.movie-info span.orange {
  color: orange;
}

.movie-info span.red {
  color: red;
}

.overview {
  background-color: #fff;
  padding: 2rem;
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  max-height: 100%;
  transform: translateY(101%);
  overflow-y: auto;
  transition: transform 0.3s ease-in;
}

.movie:hover .overview {
  transform: translateY(0);
}


</style>