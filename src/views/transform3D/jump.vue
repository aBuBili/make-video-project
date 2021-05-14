<template>
  <div class="container">
    <div class="content">
      <div class="front"></div>
      <div class="back"></div>
      <div class="left"></div>
      <div class="right"></div>
      <div class="top"></div>
      <div class="bottom"></div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.container {
  background-image: linear-gradient(#d8dae5, #bcbec6);
  width: 600px;
  min-height: 100%;
}
.content {
  /* perspective: 300px; */
  position: fixed;
  top: 300px;
  left: 80px;
  position: relative;
  transform-style: preserve-3d;
  transform: rotateX(-30deg) rotateY(-45deg);
  transition: all 1s;
  /* animation: run 10s infinite; */
}

.content div {
  position: absolute;
}

.front {
  width: 100px;
  height: 70px;
  transform: translateZ(50px);
  background-image: url("../../assets/transform3D/orangeLeft.png");
  background-size: cover;
  filter: contrast(60%);
  -webkit-filter: contrast(60%); /* Chrome, Safari, Opera */
}
.right {
  width: 100px;
  height: 70px;
  left: 50px;
  transform: rotateY(90deg);
  background-image: url("../../assets/transform3D/orangeLeft.png");
  background-size: cover;
  filter: contrast(88%);
  -webkit-filter: contrast(88%); /* Chrome, Safari, Opera */
}
.top {
  width: 100px;
  height: 100px;
  top: -50px;
  transform: rotateX(90deg);
  background-image: url("../../assets/transform3D/orangeTop.png");
  background-size: cover;
}

/* .back {
  width: 100px;
  height: 70px;
  transform: translateZ(-60px) rotateY(180deg);
  background-color: rgba(36, 255, 1, 0.5);
}
.left {
  width: 100px;
  height: 70px;
  left: -60px;
  transform: rotateY(-90deg);
  background-color: rgba(25, 62, 75, 0.5);
}

.bottom {
  width: 100px;
  height: 120px;
  top: 10px;
  transform: rotateX(-90deg);
  background-color: rgba(255, 62, 26, 0.5);
} */
@keyframes run {
  0% {
    transform: rotateY(0);
  }
  50% {
    transform: rotateY(180deg);
  }
  100% {
    transform: rotateY(360deg);
  }
  /* 20% {
    transform: rotateX(180deg);
    transform: rotateY(180deg);
  } */
}
</style>
