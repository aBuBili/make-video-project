<template>
  <div class="container">
    <MouseRotate class="mouse"></MouseRotate>
    <TurnMe></TurnMe>
  </div>
</template>

<script setup>
import MouseRotate from "./mouse-rotate.vue"
import TurnMe from "./turn-me.vue"
</script>

<style scoped>
.container {
  width: 100%;
  height: calc(100vh -120px);
  display: flex;
}
</style>
