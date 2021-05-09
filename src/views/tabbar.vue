<template>
  <div class="sideBarContainer"><slideTab :navList="navList"></slideTab></div>
</template>

<script setup>
import slideTab from "../components/slideTab.vue";

const navList = ["Vue", "React", "Home", "I'm very happy!"];
</script>

<style scoped>
.sideBarContainer {
  height: calc(100vh - 120px);
}
</style>
