<template>
  <div class="animationItem">
    <div class="pink">
      <TwoTableJump></TwoTableJump>
    </div>
    <div class="green">
      <GreenPoint></GreenPoint>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import TwoTableJump from "./two-table-jump.vue";
import GreenPoint from "./green-radial-point.vue";
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
</style>
