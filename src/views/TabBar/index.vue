<template>
  <div class="sideBarContainer"><slideTab :navList="navList"></slideTab></div>
</template>

<script setup>
import slideTab from "./slideTab.vue"

const navList = ["Vue", "React", "Home", "I'm very happy!"]
</script>

<style scoped></style>
