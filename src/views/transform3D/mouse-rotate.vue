<template>
  <div class="container" @mousemove="getMouseLocal">
    <div class="content" :style="{ '--rx': rx, '--ry': ry }">
      <p class="title">Hold Near</p>
      <p class="title">Reader to PPlay</p>
      <div class="card">**** **** **** 2148</div>
      <div class="lock"></div>
    </div>
  </div>
</template>

<script setup>
function getMouseLocal(e) {
  const { x, y } = e
  let nx = (x % 80) * 0.1
  let ny = ((y - 56) % 80) * 0.1

  console.log(x, y)

  const rx = nx.toFixed(1) + "deg"
  const ry = ny.toFixed(1) + "deg"

  console.log(rx, ry)
}
</script>

<style scoped>
.container {
  background-color: #f5f6f7;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  width: 220px;
  padding: 20px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  align-items: center;

  transform-style: preserve-3d;
  transform: rotateX(var(--rx)) rotateY(var(--ry));
  transition: all 0.4s;
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
  margin: 20px 0;
  padding: 20px;
  color: #fff;
  font-size: 14px;
  display: flex;
  align-items: center;
  background: #7f7fd5;
  background: -webkit-linear-gradient(to right, #91eae4, #86a8e7, #7f7fd5);
  background: linear-gradient(-20deg, #91eae4, #86a8e7, #7f7fd5);

  transform: translateZ(100px);
}

.lock {
  width: 30px;
  height: 30px;
  border: 1px #999 solid;
  border-radius: 50%;
}
</style>
