<script lang="ts" setup>
const sss = '2'
</script>

<template>
  <div id="page" class="page">
    <div class="carousel">
      <div id="imgs" class="image-container">
        <img
            alt="first-image"
            src="https://images.unsplash.com/photo-1599394022918-6c2776530abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1458&q=80"
        />
        <img
            alt="second-image"
            src="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
        />
        <img
            alt="third-image"
            src="https://images.unsplash.com/photo-1599423300746-b62533397364?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
        />
        <img
            alt="fourth-image"
            src="https://images.unsplash.com/photo-1599561046251-bfb9465b4c44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1492&q=80"
        />
      </div>
      <div class="buttons-container">
        <button id="left" class="btn">Prev</button>
        <button id="right" class="btn">Next</button>
      </div>
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
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
}

img {
  width: 500px;
  height: 500px;
  object-fit: cover;
}

.carousel {
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  height: 530px;
  width: 500px;
  overflow: hidden;
}

.image-container {
  display: flex;
  transform: translateX(0);
  transition: transform 0.5s ease-in-out;
}

.buttons-container {
  display: flex;
  justify-content: space-between;
}

.btn {
  background-color: rebeccapurple;
  color: #fff;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  width: 49.5%;
}

.btn:hover {
  opacity: 0.9;
}

.btn:focus {
  outline: none;
}

</style>