<template>
  <div class="container">
    <MouseRotate class="mouse"></MouseRotate>
  </div>
</template>

<script setup>
import MouseRotate from "./mouse-rotate.vue"
</script>

<style scoped>
.container {
  width: 100%;
  height: calc(100vh -120px);
  display: flex;
}
</style>
