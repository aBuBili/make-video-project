<template>
  <div class="container">
    <div class="tabbar" :style="{ '--left': lef, '--width': wid }">
      <p
        class="item"
        v-for="(e, k) of listArr"
        :key="k"
        @click="onHandleClick($event, k)"
        :class="{ active: activeIndex == k }"
      >
        {{ e }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";

const listArr = ["Vue", "React", "Home"];
const activeIndex = ref(0);
const lef = ref(0);
const wid = ref("70px");

function onHandleClick({ target }, index) {
  const { width, left } = target.getBoundingClientRect();
  const { left: parentLeft } = target.parentNode.getBoundingClientRect();

  lef.value = left - 4 - parentLeft + "px";
  wid.value = width + "px";
  activeIndex.value = index;
}
</script>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
  background-color: #e0eaf7;
  display: flex;
  justify-content: center;
  align-items: center;
}

.tabbar {
  display: flex;
  background-color: #fff;
  border-radius: 24px;
  position: relative;
  border: 4px solid #fff;
}

.item {
  color: #598bf0;
  margin: 0px;
  padding: 10px 20px;
  z-index: 10;
  cursor: pointer;
}

.active {
  color: #fff;
}

.tabbar::before {
  position: absolute;
  content: "";
  width: var(--width);
  height: 100%;
  background-color: #598bf0;
  border-radius: 24px;
  left: var(--left);
  transition: all 0.4s;
  transition-timing-function: ease-in-out;
}
</style>
