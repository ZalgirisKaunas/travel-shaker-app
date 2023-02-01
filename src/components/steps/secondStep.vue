<template>
  <swiper
    class="visited-countries-select"
    :allowTouchMove="false"
    :slides-per-view="1"
    :watchSlidesProgress="true"
    :loop="false"
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
  <div class="yes-no-buttons flex">
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
import { defineComponent, ref, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css";
import { Grid, Pagination } from "swiper";
import { api, tourastioApi } from "boot/axios";

export default defineComponent({
  name: "secondStep",
  props: ["modelValue"], //added the prop
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
    };
    const number = ref(props.modelValue);
    const changeStep = (val) => {
      context.emit("changeStep", val);
    };

    const getPinterest = async () => {
      api
        .get("boards/1141944117954581257/pins", {
          params: {
            page_size: 50,
          },
        })
        .then(async (d) => {
          let items = d.data.items;
          items = items.filter(
            (i) =>
              i.description !== "" &&
              i.description !== " " &&
              i.media.images &&
              i.media.images["600x"]
          );
          items = items.map((item) => ({
            id: item.id,
            description: item.description,
            image: item.media.images["600x"].url,
          }));
          const result = await getTags(items);
          const withLocation = result.data.filter(
            (item) =>
              item.locationsCities.length > 0 ||
              item.locationsCountries !== "{}"
          );
          pinFeedVisited.value = withLocation.slice(0, 10);
        });
    };

    onMounted(async () => {
      await getPinterest();
    });

    const getTags = async (items, analyse = false) => {
      return await tourastioApi.post("/analysePhotos", {
        data: items,
        analyse,
      });
    };

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
