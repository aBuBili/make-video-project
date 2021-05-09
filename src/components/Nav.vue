<template>
  <nav class="nav">
    <img src="../assets/avatar.png" alt="" class="avatar" />

    <a href="https://space.bilibili.com/524406874" class="name">阿不不不_</a>

    <div class="LinkBox">
      <router-link to="/tabbar">TabBar</router-link>
      <router-link to="/css-background">CSS背景</router-link>
    </div>
    
    <!-- 链接 -->
    <a href="https://github.com/aBuBili/make-video-project">
      <img src="../assets/github.png" alt="" class="github" />
    </a>
  </nav>
</template>

<style scoped>
.activeNav {
  color: #6881ff !important;
  border-bottom: 2px solid #6881ff !important;
}

.nav {
  width: calc(100% - 64px);
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
  padding: 0 32px;
}

.nav a {
  height: 54px;
  line-height: 58px;
  font-size: 14px;
  color: #333;
  padding: 0px 20px;
  text-decoration: none;
  transition: all 0.2s;
  border-bottom: 2px solid #fff;
}
.nav .LinkBox {
  flex: 1;
  display: flex;
  align-items: center;
}

.avatar {
  width: 32px;
  border-radius: 40px;
}

.name {
  font-size: 14px;
  font-weight: 600;
  margin: 0px;
  margin-right: 40px;
}

.github {
  width: 24px;
  cursor: pointer;
  margin-top: 16px;
}
</style>
