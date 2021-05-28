<template>
  <div class="playing"></div>
</template>

<script setup>
import { reactive, ref } from "vue";
</script>

<style lang="scss" scoped>
.playing {
  width: 8px;
  height: 8px;
  background-color: #39b54a;
  border-radius: 10px;
  position: relative;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 10px;
    background-color: rgba(#39b54a, 1);
    animation: change 1s infinite;
  }

  @keyframes change {
    100% {
      transform: scale(2.4);
      background-color: rgba(#39b54a, 0);
    }
  }
}
</style>
