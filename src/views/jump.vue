<template>
  <div class="container">
    <div class="box">
      <div class="content">
        <div class="front"></div>
        <div class="back"></div>
        <div class="left"></div>
        <div class="right"></div>
        <div class="top"></div>
        <div class="bottom"></div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
}
.container {
  width: 300px;
  height: 300px;
  margin: 200px auto;
}
.box {
  perspective: 500px;
  position: relative;
}
.content {
  width: 300px;
  height: 300px;
  transform-style: preserve-3d;
    transform: rotateY(45deg);
  /* animation: run 10s infinite; */
}
.content div {
  width: 300px;
  height: 300px;
  position: absolute;
  text-align: center;
  line-height: 300px;
  font-size: 32px;
}
.front {
  transform: translateZ(100px);
  background-color: rgba(36, 85, 75, 0.5);
}
.back {
  transform: translateZ(-100px) rotateY(180deg);
  background-color: rgba(36, 255, 1, 0.5);
}
.left {
  left: -100px;
  transform: rotateY(-90deg);
  background-color: rgba(25, 62, 75, 0.5);
}
.right {
  left: 100px;
  transform: rotateY(90deg);
  background-color: rgba(25, 62, 75, 0.5);
}
.top {
  top: -100px;
  transform: rotateX(90deg);
  background-color: rgba(255, 62, 26, 0.5);
}
.bottom {
  top: 100px;
  transform: rotateX(-90deg);
  background-color: rgba(255, 62, 26, 0.5);
}
@keyframes run {
  0% {
    transform: rotateY(0);
  }
  10% {
    transform: rotateY(90deg);
  }
  /* 20% {
    transform: rotateX(180deg);
    transform: rotateY(180deg);
  } */
}
</style>
