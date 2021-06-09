<template>
  <SlideTab :navList="navList"></SlideTab>
</template>

<script setup>
import SlideTab from "./slide-tab.vue"

const navList = ["Vue", "React", "Home", "I'm very happy!"]
</script>

<style scoped></style>
