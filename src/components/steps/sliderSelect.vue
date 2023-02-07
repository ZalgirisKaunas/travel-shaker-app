<template>
  <div class="swiper-overflow-container">
    <div class="container">
      <swiper
        :slides-per-view="2.2"
        :watchSlidesVisibility="true"
        :watchSlidesProgress="true"
        :grid="{ rows: 2 }"
        :spaceBetween="10"
        :loop="false"
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
            :for="'select' + index"
          >
            <input
              type="checkbox"
              :disabled="
                !selectedPhotos.some((item) => item.image === slide.image) &&
                selectedPhotos.length >= 3
              "
              class="d-none"
              v-model="selectedPhotos"
              :value="slide"
              :id="'select' + index"
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
import "swiper/css";
import { Grid, Pagination } from "swiper";
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
      modules: [Grid, Pagination],
    };
  },
});
</script>
