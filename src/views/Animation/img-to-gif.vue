<template>
  <div class="ai"></div>
  <div class="ai2" @mouseenter="mouseEnter" @mouseleave="mouseLeave"></div>
</template>
<script setup>
import { reactive, ref } from "vue"
const posYRef = ref(0)
const flagRef = ref(true)

const mouseEnter = () => {
  flagRef.value = true
  setTimeout(() => {
    if (posYRef.value > -1600 && flagRef.value == true) {
      posYRef.value -= 80
      mouseEnter()
    }
  }, 40)
}

const mouseLeave = () => {
  flagRef.value = false
  setTimeout(() => {
    if (posYRef.value < 0) {
      posYRef.value += 80
      mouseLeave()
    }
  }, 40)
}
</script>

<style scoped>
.ai {
  background-image: url(https://img.alicdn.com/imgextra/i4/19999999999999/O1CN019FqNuv2NjaswQicY2_!!19999999999999-2-tps.png);

  width: 80px;
  height: 80px;
  background-repeat: no-repeat;
  background-size: 100%;
  cursor: pointer;
  animation: back 0.6s steps(20) forwards;
}

.ai:hover {
  animation: play 0.6s steps(20) forwards;
}

@keyframes play {
  from {
    background-position-y: 0px;
  }
  to {
    background-position-y: -1600px;
  }
}

@keyframes back {
  from {
    background-position-y: -1600px;
  }
  to {
    background-position-y: 0px;
  }
}

.ai2 {
  background-image: url(https://img.alicdn.com/imgextra/i4/19999999999999/O1CN019FqNuv2NjaswQicY2_!!19999999999999-2-tps.png);

  width: 80px;
  height: 80px;
  background-repeat: no-repeat;
  background-size: 100%;
  cursor: pointer;
  background-position-y: v-bind(posYRef + "px");
}
</style>
