<script lang="ts" setup>

</script>
<template>
  <div id="page" class="page">
    <div class="card">
      <div id="header" class="card-header animated-bg">&nbsp;</div>

      <div class="card-content">
        <h3 id="title" class="card-title animated-bg animated-bg-text">
          &nbsp;
        </h3>
        <p id="excerpt" class="card-excerpt">
          &nbsp;
          <span class="animated-bg animated-bg-text">&nbsp;</span>
          <span class="animated-bg animated-bg-text">&nbsp;</span>
          <span class="animated-bg animated-bg-text">&nbsp;</span>
        </p>
        <div class="author">
          <div id="profile_img" class="profile-img animated-bg">&nbsp;</div>
          <div class="author-info">
            <strong id="name" class="animated-bg animated-bg-text"
            >&nbsp;</strong
            >
            <small id="date" class="animated-bg animated-bg-text">&nbsp;</small>
          </div>
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
  background-color: #ecf0f1;
  font-family: 'Roboto', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
}

img {
  max-width: 100%;
}

.card {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  overflow: hidden;
  width: 350px;
}

.card-header {
  height: 200px;
}

.card-header img {
  object-fit: cover;
  height: 100%;
  width: 100%;
}

.card-content {
  background-color: #fff;
  padding: 30px;
}

.card-title {
  height: 20px;
  margin: 0;
}

.card-excerpt {
  color: #777;
  margin: 10px 0 20px;
}

.author {
  display: flex;
}

.profile-img {
  border-radius: 50%;
  overflow: hidden;
  height: 40px;
  width: 40px;
}

.author-info {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 10px;
  width: 100px;
}

.author-info small {
  color: #aaa;
  margin-top: 5px;
}

.animated-bg {
  background-image: linear-gradient(
      to right,
      #f6f7f8 0%,
      #edeef1 10%,
      #f6f7f8 20%,
      #f6f7f8 100%
  );
  background-size: 200% 100%;
  animation: bgPos 1s linear infinite;
}

.animated-bg-text {
  border-radius: 50px;
  display: inline-block;
  margin: 0;
  height: 10px;
  width: 100%;
}

@keyframes bgPos {
  0% {
    background-position: 50% 0;
  }

  100% {
    background-position: -150% 0;
  }
}

</style>