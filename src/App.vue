<template>
  <SideBar></SideBar>
  <router-view class="router-view-style" />
  <footer class="footer">
    <a href="https://beian.miit.gov.cn/" target="_blank"
      >京ICP备 2021003164 号</a
    >
  </footer>
</template>

<script setup>
import SideBar from "./components/navigation.vue"
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>
body {
  margin: 0px;
}
p {
  margin: 0px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.router-view-style {
  min-height: calc(100vh - 120px);
}

.footer {
  padding: 20px;
}

.footer a {
  font-size: 13px;
  color: #ccc;
  text-decoration: none;
}
</style>
