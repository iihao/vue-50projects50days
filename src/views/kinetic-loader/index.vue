<script lang="ts" setup>

</script>
<template>
  <div id="page" class="page">
    <div class="kinetic"></div>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

#page {
  background-image: linear-gradient(0deg, #a7a6cb 0%, #8989ba 52%, #8989ba 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
}

.kinetic {
  position: relative;
  height: 10rem;
  width: 10rem;
}

.kinetic::after,
.kinetic::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  border: 5rem solid transparent;
  border-bottom-color: #fff;
  animation: rotateA 2s linear infinite 0.5s;
}

.kinetic::before {
  transform: rotate(90deg);
  animation: rotateB 2s linear infinite;
}

@keyframes rotateA {
  0%,
  25% {
    transform: rotate(0deg);
  }

  50%,
  75% {
    transform: rotate(180deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes rotateB {
  0%,
  25% {
    transform: rotate(90deg);
  }

  50%,
  75% {
    transform: rotate(270deg);
  }

  100% {
    transform: rotate(450deg);
  }
}

</style>