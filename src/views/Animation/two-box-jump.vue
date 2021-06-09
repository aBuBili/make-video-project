<template>
  <div class="playing"></div>
</template>

<script setup></script>

<style lang="scss" scoped>
.playing {
  position: relative;
  display: flex;
  align-items: center;
  width: 40px;

  @mixin baseCyl() {
    position: absolute;
    width: 4px;
    height: 16px;
    background-color: #db4865;
    border-radius: 4px;
    animation: change 0.2s infinite alternate;
  }

  &::before {
    @include baseCyl();
    content: "";
    left: 22px;
  }

  &::after {
    @include baseCyl();
    content: "";
    left: 14px;
    animation-delay: 0.2s;
  }

  @keyframes change {
    0% {
      height: 16px;
    }

    100% {
      height: 6px;
    }
  }
}
</style>
