<script lang="ts" setup>

</script>

<template>
  <div id="page" class="page">
    <div class="counter-container">
      <i class="fab fa-twitter fa-3x"></i>
      <div class="counter" data-target="12000"></div>
      <span>Twitter Followers</span>
    </div>

    <div class="counter-container">
      <i class="fab fa-youtube fa-3x"></i>
      <div class="counter" data-target="5000"></div>
      <span>YouTube Subscribers</span>
    </div>

    <div class="counter-container">
      <i class="fab fa-facebook fa-3x"></i>
      <div class="counter" data-target="7500"></div>
      <span>Facebook Fans</span>
    </div>
  </div>
</template>


<style scoped>
* {
  box-sizing: border-box;
}

#page {
  background-color: #8e44ad;
  color: #fff;
  font-family: 'Roboto Mono', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
}

.counter-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 30px 50px;
}

.counter {
  font-size: 60px;
  margin-top: 10px;
}

@media (max-width: 580px) {
  #page {
    flex-direction: column;
  }
}

</style>