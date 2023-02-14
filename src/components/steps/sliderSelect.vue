<template>

  <div v-if="pinFeed.length === 0" class="q-pa-md q-gutter-xs">
    <div class="q-gutter-md row justify-center" style="font-size: 2.5em">
      <q-spinner-puff color="primary" />
    </div>
  </div>

  <div v-else class="swiper-overflow-container">
    <div class="container">
      <swiper
        :slides-per-view="2.2"
        :watchSlidesVisibility="true"
        :watchSlidesProgress="true"
        :grid="{ rows: 2 }"
        :spaceBetween="10"
        :loop="false"
        :navigation="true"
        :freeMode="{
enabled: true,
minimumVelocity: 0.01,
momentum: true,
momentumBounceRatio: 0.5,
momentumRatio: 0.5,
momentumVelocityRatio: 0.5
}	"
        :pagination="{ clickable: true }"
        :modules="modules"
      >
        <swiper-slide
          :key="slide.image + index"
          v-for="(slide, index) in pinFeed"
        >
          <label
            class="slider-checkbox"
            :class="{
              selected: selectedPhotos.some(
                (item) => item.image === slide.image
              ),
            }"
            :for="index + slide.image + board"
          >
            <input
              type="checkbox"
              :disabled="
                !selectedPhotos.some((item) => item.image === slide.image) &&
                selectedPhotos.length >= 7
              "
              class="d-none"
              v-model="selectedPhotos"
              :value="slide"
              :id="index + slide.image + board"
            />
            <img class="image" :src="slide.image" />
            <span class="blue-tick"
              ><i class="fa-sharp fa-solid fa-check"></i
            ></span>
          </label>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted, watch } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import { Grid, Pagination, Navigation, FreeMode } from "swiper";
import { api, tourastioApi } from "boot/axios";

export default defineComponent({
  name: "sliderSelect",
  props: ["modelValue", "board", "pinFeedSlider"], //added the prop
  emits: ["update:modelValue"], //component emits the updated prop
  components: { Swiper, SwiperSlide },
  setup(props, context) {
    const pinFeed = ref([]);
    const selectedPhotos = ref([]);

    watch(selectedPhotos, () => {
      context.emit("update:modelValue", selectedPhotos.value);
    });

    watch(() => props.pinFeedSlider,
      (first, second) => {
        pinFeed.value = props.pinFeedSlider;
      }
    );

    onMounted(async () => {
        pinFeed.value = props.pinFeedSlider;
    });


    return {
      pinFeed,
      selectedPhotos,
      modules: [Grid, Pagination, Navigation, FreeMode],
    };
  },
});
</script>
