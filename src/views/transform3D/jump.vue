<template>
  <div class="container">
    <template v-for="e of boxList" :key="e">
      <div
        class="content"
        :style="{
          top: e.x,
          left: e.y,
        }"
      >
        <div
          class="left"
          :style="{
            'background-image': 'url(' + e.left + ')',
          }"
        ></div>
        <div
          class="right"
          :style="{
            'background-image': 'url(' + e.left + ')',
          }"
        ></div>
        <div
          class="top"
          :style="{
            'background-image': 'url(' + e.left + ')',
          }"
        ></div>
      </div>
    </template>
  </div>
</template>

<script setup>
const boxList = [
  {
    x: "300px",
    y: "180px",
    top: "../../../src/assets/transform3D/green-top.png",
    left: "../../../src/assets/transform3D/green-top.png",
    right: "../../../src/assets/transform3D/green-top.png",
  },
  {
    x: "300px",
    y: "400px",
    top: "../../../src/assets/transform3D/green-top.png",
    left: "../../../src/assets/transform3D/green-top.png",
    right: "../../../src/assets/transform3D/green-top.png",
  },
];
</script>

<style scoped>
.container {
  background-image: linear-gradient(#d8dae5, #bcbec6);
  width: 600px;
  min-height: 100%;
}

.content {
  position: fixed;
  /* top: var(--x);
  left: var(--y); */
  position: relative;
  transform-style: preserve-3d;
  transform: rotateX(-35deg) rotateY(-45deg);
  transition: all 1s;
}

.content div {
  position: absolute;
}

.left {
  width: 100px;
  height: 70px;
  transform: translateZ(50px);
  background-size: cover;
  filter: contrast(60%);
  -webkit-filter: contrast(60%); /* Chrome, Safari, Opera */
}
.right {
  width: 100px;
  height: 70px;
  left: 50px;
  transform: rotateY(90deg);
  background-image: url("../../../src/assets/transform3D/green-top.png");
  background-size: cover;
  filter: contrast(88%);
  -webkit-filter: contrast(88%); /* Chrome, Safari, Opera */
}
.top {
  width: 100px;
  height: 100px;
  top: -50px;
  transform: rotateX(90deg);
  background-image: url("../../../src/assets/transform3D/green-top.png");
  background-size: cover;
}
</style>
