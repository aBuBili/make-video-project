<template>
  <div class="container">
    <div
      class="tabbar"
      :style="{ '--leftRef': leftRef, '--widthRef': widthRef }"
    >
      <p
        class="item"
        v-for="(e, k) of navList"
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
import { defineProps, reactive, ref } from "vue";
// props
defineProps({
  navList: Array,
});

//当前选中item
const activeIndex = ref(0);

// 根据评论区 “_月无情” 进行更改 lef 更改为leftRef 可以 见名知意 时刻知道它是一个ref
const leftRef = ref(0);
const widthRef = ref("70px");

function onHandleClick({ target }, index) {
  const { width, left } = target.getBoundingClientRect(); //当前元素获取width 和 left
  const { left: parentleftRef } = target.parentNode.getBoundingClientRect(); //父级元素获取left

  leftRef.value = left - 4 - parentleftRef + "px"; //计算滑块应该在的距离
  widthRef.value = width + "px"; //计算滑块宽度
  activeIndex.value = index; //设置 active item
}
</script>

<style scoped>
.container {
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
  /* 设置item 文字变化效果 以免闪 */
  transition: 0.1s;
}

.active {
  color: #fff;
}

/* 伪元素 滑块 */
.tabbar::before {
  position: absolute;
  content: "";
  width: var(--widthRef);
  height: 100%;
  background-color: #598bf0;
  border-radius: 24px;
  /* 根据评论区 “_月无情” 进行更改 lef 更改为translateX 更高效 */
  transform: translateX(var(--leftRef));
  transition: 0.2s;
  transition-timing-function: ease-in-out;
}
</style>
