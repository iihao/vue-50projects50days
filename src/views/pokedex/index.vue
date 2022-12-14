<script lang="ts" setup>
import {onMounted, ref, watch} from "vue";
import axios from "axios";

const pokemon_count = ref<number>(120)
const colors = ref<any>({
  fire: '#FDDFDF',
  grass: '#DEFDE0',
  electric: '#FCF7DE',
  water: '#DEF3FD',
  ground: '#f4e7da',
  rock: '#d5d5d4',
  fairy: '#fceaff',
  poison: '#98d7a5',
  bug: '#f8d5a3',
  dragon: '#97b3e6',
  psychic: '#eaeda1',
  flying: '#F5F5F5',
  fighting: '#E6E0D4',
  normal: '#F5F5F5'
})
const dataList = ref<any>([])
const fetchPokemons = async () => {
  for (let i = 1; i <= pokemon_count.value; i++) {
    const {data} = await getPokemonData(i)
    console.log(data)
    await dataList.value.push(data)
  }
}
const getPokemonData = async (id: number) => {
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)

}
onMounted(() => {
  fetchPokemons()

})
watch(dataList.value, (val) => {
  console.log(val)
})
</script>

<template>
  <div id="page" class="page">
    <h1>Pokedex</h1>
    <div id="poke-container" class="poke-container">
      <div v-for="(item,index) in dataList" :key="index" :style="{backgroundColor:colors[item.types[0].type.name ]}"
           class="pokemon">
        <div class="img-container">
          <img :alt="item.name" :src="item['sprites']['front_default']">
        </div>
        <div class="info">
          <span class="number" style="font-weight: bold;">#{{ item.id.toString().padStart(3, '0') }}</span>
          <h3 class="name">{{ item.name[0].toUpperCase() + item.name.slice(1) }}</h3>
          <small class="type">Type: <span>{{ item.types[0].type.name }}</span> </small>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>

* {
  box-sizing: border-box;
}

#page {
  /*background: #efefbb;*/
  background-image: linear-gradient(0deg, #fddb92 0%, #d1fdff 100%);
  font-family: 'Lato', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
}

h1 {
  letter-spacing: 3px;
}

.poke-container {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: center;
  margin: 0 auto;
  max-width: 1200px;
}

.pokemon {
  background-color: #eee;
  border-radius: 10px;
  box-shadow: 0 3px 15px rgba(100, 100, 100, 0.5);
  margin: 10px;
  padding: 20px;
  text-align: center;
}

.pokemon .img-container {
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  width: 120px;
  height: 120px;
  text-align: center;
}

.pokemon .img-container img {
  max-width: 90%;
  margin-top: 20px;
}

.pokemon .info {
  margin-top: 20px;
}

.pokemon .info .number {
  background-color: rgba(0, 0, 0, 0.1);
  padding: 5px 10px;
  border-radius: 10px;
  font-size: 0.8em;
}

.pokemon .info .name {
  margin: 15px 0 7px;
  letter-spacing: 1px;
}

</style>