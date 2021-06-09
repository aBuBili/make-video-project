<template>
  <div class="container">
    <div class="turnBox" :style="{ '--rotate': rotate }">
      <div class="A" @click="rotate = 180 + 'deg'">(σ｀・д･)σ 点我翻面！</div>
      <div class="B" @click="rotate = 0 + 'deg'">(〃・ｏ・〃)</div>
    </div>

    <div class="openBox">
      <div class="C">(σ｀・д･)σ 点我开门！</div>
      <div class="D">(〃・ｏ・〃)</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity"

const rotate = ref(0)
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #efefef1a;
}

.turnBox {
  width: 160px;
  height: 50px;
  position: relative;
  cursor: pointer;

  transform-style: preserve-3d;
  transform: rotateY(var(--rotate));
  transition: all 0.4s ease-out;
}

@mixin base {
  width: 160px;
  height: 50px;
  position: absolute;
  border-radius: 6px;
  font-size: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 4px rgba(238, 238, 238, 0.6), -2px -2px 4px #fff;
}

.A {
  @include base();
  transform: translateZ(1px);
  background-color: #fbbd08;
}

.B {
  @include base();
  transform: rotateY(180deg);
  background-color: #f37b1d;
}

.openBox {
  width: 160px;
  height: 160px;
  position: relative;
}

@mixin openBase {
  top: 0;
  left: 0;
  width: 160px;
  height: 160px;
  position: absolute;
  border-radius: 6px;
  font-size: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.C {
  @include openBase();
  background-color: #fbbd08;
  box-shadow: 2px 2px 4px rgba(238, 238, 238, 0.6), -2px -2px 4px #fff;
}

.D {
  @include openBase();
  cursor: pointer;
  background-color: #f37b1d;
  transition: all 1s ease-in-out;

  &:hover {
    transform-origin: 0px 0px;
    transform: rotateY(-120deg);
  }
}
</style>
