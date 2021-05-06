<template>
  <div style="display: flex">
    <div class="gray coverBox"></div>
    <div class="blue coverBox"></div>
    <div class="line coverBox"></div>
    <div class="line-rotate coverBox"></div>
    <div class="line-rotate-left coverBox"></div>
    <div class="line-rotate-left-right coverBox"></div>
    <div class="circle coverBox"></div>
  </div>
</template>

<script setup></script>

<style scoped>
.coverBox {
  width: 170px;
  height: 170px;
  margin: 10px;
}

/* 灰色网格 */
.gray {
  background-image: linear-gradient(90deg, #eee 1px, transparent 1px),
    linear-gradient(#efefef 1px, transparent 1px);
  background-position: left top;
  background-size: 20px 20px;
  background-attachment: fixed;
  background-repeat: repeat;
}

/* 蓝色床单 */
.blue {
  background: linear-gradient(
      90deg,
      rgba(78, 110, 242, 0.7) 50%,
      transparent 0%
    ),
    linear-gradient(rgba(78, 110, 242, 0.8) 50%, transparent 50%);
  background-size: 20px 20px;
  background-repeat: repeat;
}

/* 格子 */
/* .grid {
  background: linear-gradient(
      45deg,
      rgba(0, 0, 0, 0.25) 25%,
      transparent 0,
      transparent 75%,
      rgba(0, 0, 0, 0.25) 0
    ),
    linear-gradient(
      45deg,
      rgba(0, 0, 0, 0.25) 25%,
      transparent 0,
      transparent 75%,
      rgba(0, 0, 0, 0.25) 0
    );
  background-size: 15px 15px;
  background-repeat: repeat;
  background-position: 0 0, 15px 15px;
  background-size: 30px 30px;
} */

/* 横线条纹 */
.line {
  background: linear-gradient(#f37b1d 50%, transparent 0);
  background-repeat: repeat;
  background-size: 20px 20px;
}

/* 绿色右侧斜条纹 */
.line-rotate {
  background: linear-gradient(
    45deg,
    #39b54a 25%,
    #fff 25%,
    #fff 50%,
    #39b54a 50%,
    #39b54a 75%,
    #fff 75%,
    #fff 75%
  );
  background-repeat: repeat;
  background-size: 20px 20px;
}

/* 绿色左侧斜条纹 */
.line-rotate-left {
  background: linear-gradient(
    -45deg,
    #39b54a 25%,
    #fff 25%,
    #fff 50%,
    #39b54a 50%,
    #39b54a 75%,
    #fff 75%,
    #fff 75%
  );
  background-repeat: repeat;
  background-size: 20px 20px;
}

/* 绿色交叉斜条纹 */
.line-rotate-left-right {
  background: linear-gradient(135deg, #8dc63f 25%, transparent 0),
    linear-gradient(45deg, #8dc63f 25%, transparent 0),
    linear-gradient(-135deg, #8dc63f 25%, transparent 0),
    linear-gradient(-45deg, #8dc63f 25%, transparent 0);
  background-position: 0 0, 0px 14px, 14px 0px, 14px 14px;
  background-size: 14px 14px;
}

/* 圆 */
.circle {
  background: #fff;
  background-image: radial-gradient(#fbbd08 24%, transparent 0),
    radial-gradient(#fbbd08 24%, transparent 0);
  background-size: 30px 30px;
  background-position: 0 0, 15px 15px;
}
</style>
