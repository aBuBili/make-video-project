<template>
  <div class="container">
    <div class="gray coverBox"></div>
    <div class="tianBox coverBox"></div>

    <!-- 蓝色 -->
    <div class="col-line coverBox"></div>
    <div class="row-line coverBox"></div>
    <div class="blue coverBox"></div>

    <!-- 灰色格子 -->
    <div class="grid coverBox"></div>
    <div class="grid-double coverBox"></div>

    <!-- 绿色 -->
    <div class="line-rotate coverBox"></div>
    <div class="line-rotate-left coverBox"></div>
    <div class="line-rotate-left-right coverBox"></div>
    <div class="xiaomai coverBox"></div>

    <!-- 圆 -->
    <div class="circle coverBox"></div>
    <div class="pointReact coverBox"></div>

    <!-- 砖墙 -->
    <div class="reactBox coverBox"></div>

    <!-- 奇奇怪怪的不知名形状 -->
    <div class="hahaha coverBox"></div>
    <div class="hahaha2 coverBox"></div>
    <div class="hahaha3 coverBox"></div>
    <div class="hahaha4 coverBox"></div>
  </div>
</template>

<script setup></script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  padding: 20px;
  flex-wrap: wrap;
}

.coverBox {
  width: 170px;
  height: 170px;
  margin: 10px;
}

/* 灰色网格 */
.gray {
  background-image: linear-gradient(90deg, #eee 1px, transparent 0),
    linear-gradient(#efefef 1px, transparent 0);
  background-size: 30px 30px;
  background-repeat: repeat;
}

/* 田字格 */
.tianBox {
  width: 122px;
  height: 122px;
  margin-right: 58px;
  background-image: linear-gradient(90deg, #aaa 2px, transparent 0),
    linear-gradient(#aaa 2px, transparent 0),
    linear-gradient(90deg, #efefef 1px, transparent 1px),
    linear-gradient(#efefef 1px, transparent 0);
  background-size: 60px 60px;
  background-position: 0 0, 0px 0px, 30px 0px, 0px 30px;
  background-repeat: repeat;
}

/* 横线条纹 */
.row-line {
  background: linear-gradient(#5f76eb 50%, transparent 0);
  background-repeat: repeat;
  background-size: 30px 30px;
}

/* 竖线条纹 */
.col-line {
  background: linear-gradient(90deg, #5f76eb 50%, transparent 0);
  background-repeat: repeat;
  background-size: 30px 30px;
}

/* 蓝色床单 */
.blue {
  background: linear-gradient(90deg, rgba(78, 110, 242, 0.7) 50%, transparent 0),
    linear-gradient(rgba(78, 110, 242, 0.8) 50%, transparent 0);
  background-size: 30px 30px;
  background-repeat: repeat;
}

/* 格子 */
.grid {
  background-image: linear-gradient(135deg, #515151 25%, transparent 0),
    linear-gradient(-45deg, #515151 25%, transparent 0),
    linear-gradient(135deg, #515151 25%, transparent 0),
    linear-gradient(-45deg, #515151 25%, transparent 0);
  background-size: 64px 64px;
  background-position: 0 0, -33px -32px, 32px 32px, -1px 0px;
  background-repeat: repeat;
}

/* 双色拼格子 */
.grid-double {
  background-image: linear-gradient(135deg, #515151 25%, transparent 0),
    linear-gradient(-45deg, #515151 25%, transparent 0),
    linear-gradient(135deg, #999 25%, transparent 0),
    linear-gradient(-45deg, #999 25%, transparent 0);
  background-size: 64px 64px;
  background-position: 0 0, -33px -32px, 32px 32px, -1px 0px;
  background-repeat: repeat;
}

/* 绿色右侧斜条纹 */
.line-rotate {
  background: linear-gradient(
    45deg,
    #39b54a 25%,
    transparent 25%,
    transparent 50%,
    #39b54a 50%,
    #39b54a 75%,
    transparent 75%
  );
  background-repeat: repeat;
  background-size: 40px 40px;
}

/* 绿色左侧斜条纹 */
.line-rotate-left {
  background: linear-gradient(
    -45deg,
    #39b54a 25%,
    transparent 25%,
    transparent 50%,
    #39b54a 50%,
    #39b54a 75%,
    transparent 75%,
    transparent 75%
  );
  background-repeat: repeat;
  background-size: 40px 40px;
}

/* 绿色交叉斜条纹 */
.line-rotate-left-right {
  background: linear-gradient(135deg, #fbbd08 25%, transparent 0),
    linear-gradient(45deg, #fbbd08 25%, transparent 0),
    linear-gradient(-135deg, #fbbd08 25%, transparent 0),
    linear-gradient(-45deg, #fbbd08 25%, transparent 0);
  background-position: 0 0, 0px 31px, 31px 0px, 31px 31px;
  background-size: 31px 31px;
  background-repeat: repeat;
}

/* 绿色交叉斜条纹 */
.line-rotate-left-right {
  background: linear-gradient(135deg, #fbbd08 25%, transparent 0),
    linear-gradient(45deg, #fbbd08 25%, transparent 0),
    linear-gradient(-135deg, #fbbd08 25%, transparent 0),
    linear-gradient(-45deg, #fbbd08 25%, transparent 0);
  background-position: 0 0, 0px 31px, 31px 0px, 31px 31px;
  background-size: 31px 31px;
  background-repeat: repeat;
}

/* 小麦的形状 */
.xiaomai {
  background: linear-gradient(135deg, #fbbd08 25%, transparent 0),
    linear-gradient(45deg, #fbbd08 25%, transparent 0),
    linear-gradient(-135deg, #fbbd08 25%, transparent 0),
    linear-gradient(-45deg, #fbbd08 25%, transparent 0);
  background-position: 0 0, 0px 20px, 20px 0px, 9px 9px;
  background-size: 20px 20px;
  background-repeat: repeat;
}

/* 不知名 = - = */
.hahaha {
  background: linear-gradient(135deg, #fbbd08 25%, transparent 0),
    linear-gradient(45deg, #fbbd08 25%, transparent 0),
    linear-gradient(-135deg, #fbbd08 25%, transparent 0),
    linear-gradient(-45deg, #fbbd08 25%, transparent 0);
  background-position: 0 0, 0px 10px, 31px 0px, 31px 31px;
  background-size: 31px 31px;
  background-repeat: repeat;
}

/* 不知名 = - = */
.hahaha2 {
  background: linear-gradient(135deg, #5f76eb 25%, transparent 0),
    linear-gradient(45deg, #5f76eb 25%, transparent 0),
    linear-gradient(-135deg, #5f76eb 25%, transparent 0),
    linear-gradient(-45deg, #5f76eb 25%, transparent 0);
  background-position: 0 0, 0px 10px, 10px 0px, 50px 31px;
  background-size: 31px 31px;
  background-repeat: repeat;
}

/* 不知名 = - = */
.hahaha3 {
  background: linear-gradient(135deg, #5f76eb 25%, transparent 0),
    linear-gradient(45deg, #5f76eb 25%, transparent 0),
    linear-gradient(-135deg, #5f76eb 25%, transparent 0),
    linear-gradient(-45deg, #5f76eb 25%, transparent 0);
  background-position: 0 0, 0px 10px, 20px 10px, 10px 32px;
  background-size: 40px 40px;
  background-repeat: repeat;
}

/* 不知名 = - = */
.hahaha4 {
  background: linear-gradient(135deg, #5f76eb 25%, transparent 0),
    linear-gradient(45deg, #5f76eb 25%, transparent 0),
    linear-gradient(-135deg, #5f76eb 25%, transparent 0),
    linear-gradient(-45deg, #5f76eb 25%, transparent 0);
  background-position: 0 40px, 0px 20px, 40px 6px, 0px 60px;
  background-size: 60px 60px;
  background-repeat: repeat;
}

/* 圆 */
.circle {
  background-image: radial-gradient(#5f76eb 20%, transparent 0),
    radial-gradient(#5f76eb 20%, transparent 0);
  background-size: 32px 32px;
  background-position: 0 0, 16px 16px;
  background-repeat: repeat;
}

/* 点阵 */
.pointReact {
  background-image: radial-gradient(#000 1px, transparent 0);
  background-size: 22px 22px;
  background-repeat: repeat;
}

/* 实心砖墙 */
.reactBox {
  background-image: linear-gradient(155deg, #515151 25%, transparent 0),
    linear-gradient(-25deg, #515151 25%, transparent 0),
    linear-gradient(155deg, #515151 25%, transparent 0),
    linear-gradient(-25deg, #515151 25%, transparent 0);
  background-size: 64px 32px;
  background-position: 0 0, -32px -16px, 32px 16px, 0px 0px;
  background-repeat: repeat;
}

/* 线条砖墙 */
</style>
