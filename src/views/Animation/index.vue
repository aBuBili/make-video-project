<template>
  <div class="animationItem">
    <div class="pink">
      <TwoBoxJump></TwoBoxJump>
    </div>
    <div class="green">
      <GreenPoint></GreenPoint>
    </div>
    <div class="gray">
      <Arrow></Arrow>
    </div>
    <div>
      <ImgToGif></ImgToGif>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue"
import TwoBoxJump from "./two-box-jump.vue"
import GreenPoint from "./green-radial-point.vue"
import Arrow from "./arrow.vue"
import ImgToGif from "./img-to-gif.vue"
</script>

<style lang="scss" scoped>
.animationItem {
  width: 100%;
  display: flex;
}

@mixin item() {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pink {
  @include item();
  background-color: #db48651a;
}

.green {
  @include item();
  background-color: #39b54a1a;
}

.gray {
  @include item();
  background-color: #9999991a;
}
</style>
