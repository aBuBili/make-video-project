<template>
  <div class="arrow" @click="direct"></div>
</template>

<script setup>
import { reactive, ref } from "vue"
</script>

<style lang="scss" scoped>
.arrow {
  width: 13px;
  height: 16px;
  position: relative;
  transform: rotate(90deg);
  cursor: pointer;

  @mixin line {
    position: absolute;
    top: 0;
    content: "";
    width: 4px;
    height: 16px;
    border-radius: 2px;
    background-color: #333;
    transition: all 0.2s;
  }

  &::before {
    @include line();
    left: 0;
    transform: rotate(-45deg);
  }

  &::after {
    @include line();
    right: 0;
    transform: rotate(45deg);
  }

  &:hover {
    &::before {
      transform: rotate(45deg);
    }

    &::after {
      transform: rotate(-45deg);
    }
  }
}
</style>
