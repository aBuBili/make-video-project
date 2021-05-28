<template>
  <div class="playing"></div>
</template>

<script setup>
import { reactive, ref } from "vue";
</script>

<style lang="scss" scoped>
@mixin baseCyl() {
  position: absolute;
  width: 4px;
  height: 16px;
  background-color: #db4865;
  border-radius: 4px;
  animation: change 0.2s infinite alternate;
}

.playing {
  width: 60px;
  display: flex;
  align-items: center;
  position: relative;
  @include baseCyl();

  &::before {
    @include baseCyl();
    content: "";
    left: 22px;
  }

  &::after {
    @include baseCyl();
    content: "";
    left: 11px;
    animation-delay: 0.2s;
  }

  @keyframes change {
    0% {
      height: 16px;
    }

    100% {
      height: 6px;
    }
  }
}
</style>
