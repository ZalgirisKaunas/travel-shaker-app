<template>
  <div v-if="pinFeedVisited.length === 0" class="q-pa-md q-gutter-xs">
    <div class="q-gutter-md row justify-center" style="font-size: 2.5em">
      <q-spinner-puff color="primary" />
    </div>
  </div>
  <swiper
    v-show="pinFeedVisited.length > 0"
    class="visited-countries-select"
    :allowTouchMove="false"
    :slides-per-view="1"
    :watchSlidesProgress="true"
    :loop="false"
    :observer="true"
    :observeParents="true"
    :rebuildOnUpdate="true"
    @swiper="onSwiperStack"
  >
    <swiper-slide
      :key="item.image + index"
      v-for="(item, index) in pinFeedVisited"
    >
      <div
        class="pic"
        :key="index + index"
        :style="{ 'background-image': `url(${item.image})` }"
      ></div>
    </swiper-slide>
  </swiper>
  <div class="yes-no-buttons flex" v-if="pinFeedVisited.length > 0">
    <q-btn
      unelevated
      flat
      class="btn-secondary"
      label="Yes"
      @click="yesSlide"
    />
    <q-btn unelevated flat class="btn-secondary" label="No" @click="noSlide" />
  </div>
</template>

<script>
import {defineComponent, ref, onMounted, watch} from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css";
import { api, tourastioApi } from "boot/axios";

export default defineComponent({
  name: "secondStep",
  props: ["modelValue", "pinFeed"], //added the prop
  emits: ["update:modelValue"], //component emits the updated prop
  components: { Swiper, SwiperSlide },
  setup(props, context) {
    const swipe = ref(null);
    const pinFeedVisited = ref([]);
    const visitedPhotos = ref([]);

    const yesSlide = (index) => {
      visitedPhotos.value.push(pinFeedVisited.value[swipe.value.activeIndex]);
      pinFeedVisited.value.splice(swipe.value.activeIndex, 1);

      if (pinFeedVisited.value.length === 0) {
        changeStep(1);
      }

      context.emit("update:modelValue", visitedPhotos.value);
    };

    const noSlide = (index) => {
      pinFeedVisited.value.splice(swipe.value.activeIndex, 1);

      if (pinFeedVisited.value.length === 0) {
        changeStep(1);
      }
    };

    const onSwiperStack = (swiper) => {
      swipe.value = swiper;
      swiper.update();
    };
    const number = ref(props.modelValue);
    const changeStep = (val) => {
      context.emit("changeStep", val);
    };

    watch(() => props.pinFeed,
      (first, second) => {
        pinFeedVisited.value = props.pinFeed;
      }
    );

    onMounted(async () => {
      pinFeedVisited.value = props.pinFeed
    });

    return {
      visitedPhotos,
      number,
      changeStep,
      yesSlide,
      noSlide,
      onSwiperStack,
      pinFeedVisited,
    };
  },
});
</script>
<style>
.visited-countries-select .swiper-slide {
  width: calc(100% + 1px) !important;
}
</style>
