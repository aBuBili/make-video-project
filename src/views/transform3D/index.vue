<template>
  <div class="container">
    <!-- <jump></jump> -->
    <MouseRotate class="mouse" />
  </div>
</template>

<script setup>
// import jump from "./jump.vue"
import MouseRotate from "./mouse-rotate.vue"
</script>

<style scoped>
.container {
  width: 100%;
  height: calc(100vh - 56px);
  /* display: flex; */
}

.mouse {
  width: 50%;
  height: 80%;
}
</style>
