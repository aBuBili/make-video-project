<template>
  <div class="container" @mousemove="getMouseLocal" ref="containerRef">
    <div class="content" :style="{ '--rx': rx, '--ry': ry }">
      <p class="title">Hold Near</p>
      <p class="title">Reader to PPlay</p>
      <div class="card">**** **** **** 2148</div>
      <div class="lock"></div>
    </div>

    <div class="panel">
      <div v-show="showPanel">
        <div>
          <h5>实时参数</h5>
          <p>
            有效区域大小： {{ size.width + "px" }} * {{ size.height + "px" }}
          </p>
          <p>鼠标坐标: {{ mx }} * {{ my }}</p>
          <p>旋转角度: {{ rx }} * {{ ry }}</p>
        </div>
        <div>
          <h5>实现步骤：</h5>
          <p>0.将展示的基础元素画好</p>
          <p>
            1.将最外面元素转换为3D：
            <code lang="javascript">transform-style: preserve-3d;</code>
          </p>
          <p>
            2.将色块像Z轴偏移40px：
            <code lang="javascript"> transform: translateZ(40px); </code>
          </p>
          <p>
            3.通过控制3D元素旋转的角度
            <code lang="javascript">
              transform: rotateX( 8deg ) rotateY( 8deg );
            </code>
            实现视觉效果
          </p>
          <p>4.通过mousemove获取鼠标x、y坐标，再计算出3D元素的旋转角度 rx、ry</p>
          <p>
            5.style将角度传递给css
            <code lang="javascript"> :style="{ '--rx': rx, '--ry': ry }" </code>
          </p>
          <p>
            6.在css中获取
            <code lang="javascript">
              transform: rotateX(var(--rx)) rotateY(var(--ry));
            </code>
          </p>
        </div>
      </div>
      <div @click="showPanel = !showPanel" class="controlPanel">
        {{ showPanel ? "隐藏面板" : "显示面板" }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";

const size = reactive({ width: 0, height: 0 });
const containerRef = ref(null);
const showPanel = ref(false);

// 获取 鼠标交互部分的范围
onMounted(() => {
  const { width, height } = containerRef.value.getBoundingClientRect();
  size.width = width;
  size.height = height;
});

// 鼠标坐标
const mx = ref(0);
const my = ref(0);

// rotate 参数
const rx = ref(0);
const ry = ref(0);

// 鼠标移动时执行
function getMouseLocal(e) {
  const { width, height } = size; //有效区域大小
  const { x, y } = e; //鼠标位置
  const degR = 16; //摆动幅度

  ry.value = ((x / (width / (degR * 20))) * 0.1 - degR).toFixed(1) + "deg";
  rx.value = (degR - (y / (height / (degR * 20))) * 0.1).toFixed(1) + "deg";

  mx.value = x;
  my.value = y;
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #86a8e71a;
}

.content {
  width: 220px;
  padding: 20px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 6px 6px 12px #d1d9e6, -6px -6px 12px rgba(255, 255, 255, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;

  /* 最外层设置为3D */
  transform-style: preserve-3d;
  transform: rotateX(var(--rx)) rotateY(var(--ry));
  transition: all 0.1s;
}

.title {
  margin: 0px;
  font-size: 20px;
  text-align: center;
  color: #666;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
}

.card {
  width: 80%;
  height: 80px;
  border-radius: 20px;
  margin: 10px 0 20px 0;
  padding: 20px;
  color: #fff;
  font-size: 16px;
  display: flex;
  align-items: center;
  background: #7f7fd5;
  background: -webkit-linear-gradient(to right, #91eae4, #86a8e7, #7f7fd5);
  background: linear-gradient(-20deg, #91eae4, #86a8e7, #7f7fd5);

  /* card 的z轴偏移量 */
  transform: translateZ(40px);
}

.lock {
  width: 30px;
  height: 30px;
  border: 1px #999 solid;
  border-radius: 50%;
}

.panel {
  position: fixed;
  bottom: 20px;
  left: 20px;
  text-align: start;

  color: #444;
  font-size: 12px;
}

.panelToogle {
  margin: 10px;
  cursor: pointer;
  color: #7f7fd5;
}

.panel div {
  padding: 0 20px;
}

.controlPanel {
  color: #86a8e7;
  cursor: pointer;
  margin: 20px;
}
</style>
