<template>
  <div class="container">
    <div class="music" :style="{ '--rotate': rotateY }">
      <div class="before">
        <img
          src="../../assets/music/songIcon.png"
          alt=""
          class="songIcon"
          @click="rotateY = -180 + 'deg'"
        />
        <div class="musicList">
          <div
            v-for="(e, index) of musicData"
            :key="index"
            class="item"
            @click="onClickSong(e, index)"
          >
            <PlayingJump v-if="index == playingIndex"></PlayingJump>
            <span class="index" v-else>{{ index + 1 }}</span>
            <img :src="e.cover" alt="" class="coverImg" />
            <div class="info">
              <p class="title">{{ e.title }}</p>
              <p class="author">{{ e.author }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="after">
        <img
          src="../../assets/music/back.png"
          alt=""
          class="backIcon"
          @click="rotateY = 0 + 'deg'"
        />
        <div class="bigCover">
          <img :src="playingItemObject.cover" alt="" />
        </div>
        <p class="songName">{{ playingItemObject.author }}</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "@vue/reactivity";
import PlayingJump from "../Animation/two-table-jump.vue";

const musicData = [
  {
    id: "music1",
    cover: "https://avatars.githubusercontent.com/u/70617237?v=4",
    title: "安眠咒",
    author: "花粥 - 安眠咒",
  },
  {
    id: "music1",
    cover: "https://avatars.githubusercontent.com/u/70617237?v=4",
    title: "山鬼",
    author: "Winky诗 - 山鬼",
  },
  {
    id: "music1",
    cover: "https://avatars.githubusercontent.com/u/70617237?v=4",
    title: "水手公园",
    author: "GALA - 追梦痴子心",
  },
];

const playingIndex = ref(0);
const playingItemObject = ref(musicData[0]);

const rotateY = ref(0);

function onClickSong(item, index) {
  playingItemObject.value = item;
  playingIndex.value = index;
}
</script>

<style lang="scss" scoped>
/* 图片禁止拖拽 */
img {
  -webkit-user-drag: none;
}

.container {
  background-color: #fdf4f7;
  height: calc(100vh - 120px);
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
}

.music {
  width: 350px;
  height: 380px;
  position: relative;

  transform-style: preserve-3d;
  transform: rotateY(var(--rotate));
  transition: all 0.4s ease-out;
}

@mixin base() {
  background-color: #fff;
  width: 350px;
  height: 380px;
  padding: 0 14px;
  border-radius: 37px;
  position: absolute;
}

.before {
  @include base();
  transform: translateZ(2px);
}

.after {
  @include base();
  transform: rotateY(180deg);
}

.musicList {
  padding-top: 95px;

  .item {
    display: flex;
    align-items: center;
    padding: 16px;
    cursor: pointer;
    background-color: #fff;
    border-radius: 10px;
    transition: background-color 0.2s;

    &:hover {
      background-color: rgba(#000, 0.02);
    }
  }

  .index {
    color: #a6a6a6;
    width: 40px;
    text-align: center;
  }

  .info {
    text-align: start;
  }

  .title {
    font-size: 16px;
    font-weight: bolder;
    margin-bottom: 6px;
  }

  .author {
    font-size: 13px;
    color: #707070;
  }
}

@mixin clickIcon() {
  position: absolute;
  top: 33px;
  width: 24px;
  height: 24px;
  cursor: pointer;
}

.songIcon {
  @include clickIcon();
  right: 46px;
}

.backIcon {
  @include clickIcon();
  left: 46px;
}

.coverImg {
  width: 50px;
  height: 50px;
  border-radius: 10px;
  margin: 0 20px;
}

.bigCover {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 95px;

  img {
    width: 210px;
    height: 210px;
    border-radius: 50%;
    display: flex;
    animation: round 30s infinite linear;
  }

  &::after {
    content: "";
    width: 40px;
    height: 40px;
    border-radius: 60px;
    background-color: #fff;
    border: 18px solid #383838;
    position: absolute;
  }

  @keyframes round {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
}

.songName {
  color: #707070;
  font-size: 13px;
  margin-top: 18px;
}
</style>
