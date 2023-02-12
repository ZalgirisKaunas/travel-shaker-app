<template>
  <swiper
    v-if="counterr === 11"
    class="hero-swiper desktop-only hero-desktop"
    :slides-per-view="1"
    :pagination="{ clickable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    :modules="modules"
  >
    <swiper-slide class="swiper-slide-hero">
      <img src="~assets/image2.jpg" />
    </swiper-slide>
    <swiper-slide class="swiper-slide-hero">
      <img src="~assets/image2.jpg" />
    </swiper-slide>
    <swiper-slide class="swiper-slide-hero">
      <img src="~assets/image2.jpg" />
    </swiper-slide>
  </swiper>

  <q-layout view="lHh Lpr lFf" class="layout_tourastio">
    <q-header class="bg-transparent">
      <q-toolbar :class="{ blur: counterr === 11 }" class="text-center">
        <q-toolbar-title class="text-positive"> Travel Shaker </q-toolbar-title>
      </q-toolbar>

      <swiper
        class="hero-swiper mobile-hero"
        v-if="counterr === 11"
        :slides-per-view="1"
        :pagination="{ clickable: true }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        :modules="modules"
      >
        <swiper-slide class="swiper-slide-hero">
          <img src="~assets/image2.jpg" />
        </swiper-slide>
        <swiper-slide class="swiper-slide-hero">
          <img src="~assets/image2.jpg" />
        </swiper-slide>
        <swiper-slide class="swiper-slide-hero">
          <img src="~assets/image2.jpg" />
        </swiper-slide>
      </swiper>
      <q-linear-progress
        v-if="counterr !== 11"
        :value="progressVal"
        track-color="warning"
        color="black"
      />
    </q-header>

    <q-page-container :class="{ pt: counterr === 11 }">
      <router-view />
    </q-page-container>

    <q-footer elevated>
      <!--      <q-toolbar>-->
      <!--        <q-toolbar-title>-->
      <!--          <q-avatar>-->
      <!--            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">-->
      <!--          </q-avatar>-->
      <!--          <div>Title</div>-->
      <!--        </q-toolbar-title>-->
      <!--      </q-toolbar>-->
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent, ref, computed } from "vue";
import { useCounterStore } from "stores/example-store.js";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css";
import { Pagination } from "swiper";

const linksList = [
  {
    title: "Docs",
    caption: "quasar.dev",
    icon: "school",
    link: "https://quasar.dev",
  },
  {
    title: "Github",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "https://github.com/quasarframework",
  },
  {
    title: "Discord Chat Channel",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "https://chat.quasar.dev",
  },
  {
    title: "Forum",
    caption: "forum.quasar.dev",
    icon: "record_voice_over",
    link: "https://forum.quasar.dev",
  },
  {
    title: "Twitter",
    caption: "@quasarframework",
    icon: "rss_feed",
    link: "https://twitter.quasar.dev",
  },
  {
    title: "Facebook",
    caption: "@QuasarFramework",
    icon: "public",
    link: "https://facebook.quasar.dev",
  },
  {
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev",
  },
];

export default defineComponent({
  name: "MainLayout",
  components: { Swiper, SwiperSlide },

  setup() {
    const leftDrawerOpen = ref(true);
    const counterStore = useCounterStore();
    const counterr = computed(() => counterStore.step);
    const progressVal = computed(() =>
      Number((0.1 * (counterr.value - 1)).toFixed(1))
    );
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };

    return {
      onSwiper,
      onSlideChange,
      modules: [Pagination],
      counterr,
      progressVal,
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
