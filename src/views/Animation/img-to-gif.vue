<template>
  <div class="ai"></div>
</template>
<script setup></script>

<style scoped>
.ai {
  background-image: url(https://img.alicdn.com/imgextra/i4/19999999999999/O1CN019FqNuv2NjaswQicY2_!!19999999999999-2-tps.png);

  width: 80px;
  height: 80px;
  background-repeat: no-repeat;
  background-size: 100%;
  cursor: pointer;
  animation: back 0.6s steps(20);
}

.ai:hover {
  animation: play 0.6s steps(20) forwards;
}

@keyframes play {
  from {
    background-position-y: 0;
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
    background-position-y: 0;
  }
}
</style>
