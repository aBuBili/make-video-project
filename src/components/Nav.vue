<template>
  <nav class="nav">
    <img src="../assets/avatar.png" alt="" class="avatar" />
    <span class="name">阿不不不_</span>
    <router-link to="/tabbar">TabBar</router-link>
    <router-link to="/css-background">CSS背景</router-link>
  </nav>
</template>

<style scoped>
.activeNav {
  color: #6881ff !important;
  border-bottom: 2px solid #6881ff !important;
}

.nav {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
  padding: 0 32px;
}

.nav a {
  height: 54px;
  line-height: 54px;
  font-size: 14px;
  color: #333;
  padding: 0px 20px;
  text-decoration: none;
  transition: all 0.2s;
  border-bottom: 2px solid #fff;
}

.avatar {
  width: 32px;
  border-radius: 40px;
  margin-right: 16px;
}

.name {
  font-size: 14px;
  font-weight: 600;
  margin: 0px;
  margin-right: 40px;
}
</style>
