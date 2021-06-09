<template>
  <div class="container">
    <div class="animateItem">
      <TwoBoxJump />
    </div>
  </div>
</template>

<script setup>
import TwoBoxJump from "./two-box-jump.vue"
</script>

<style scoped>
.container {
  display: flex;
}

.animateItem {
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #db48651a;
}
</style>
