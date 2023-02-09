<template>
  <q-page>
    <div class="q-pt-xl q-mt-xl" v-if="step === 0">
      <Lottie-animation
        ref="anim"
        :animationData="loadingAnim"
        :loop="true"
        :autoPlay="true"
      />
      <h2 class="q-mt-xl">
        Hold tight while we are finding the best travel deals for you...
      </h2>
      <h5 class="feedback text-center">{{ feedback }}</h5>
    </div>

    <form-step
      v-if="step === 1"
      @changeStep="changeStepp"
      title="Let’s see where you should travel next!"
      class="step flex flex-center"
      :step="step"
    >
      <first-step @changeStep="changeStepp" />
    </form-step>

    <form-step
      v-if="step === 2"
      @changeStep="changeStepp"
      subtitle="It doesn’t have to be that exact place, select similarly looking ones!"
      title="Which places have you visited already?"
      class="step flex flex-center q-px-lg"
      :next="false"
      :step="step"
    >
      <second-step v-model="visitedPlaces" :pinFeed="pinFeedVisited" @changeStep="changeStepp" />
    </form-step>

    <form-step
      v-if="step === 3"
      @changeStep="changeStepp"
      subtitle="Let us get to know you a little..."
      title="What is your gender?"
      class="step flex flex-center"
      :step="step"
    >
      <gender-select v-model="gender" />
    </form-step>

    <form-step
      v-if="step === 4"
      @changeStep="changeStepp"
      subtitle="We craft a tailor-made trip for you - free of charge."
      title="What is your group size?"
      class="step flex flex-center"
      :step="step"
    >
      <q-list>
        <q-item>
          <q-item-section class="text-main">Adults</q-item-section>
          <q-item-section class="number-input-buttons" side>
            <number-input-buttons v-model="adultAmount" />
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section>
            <q-item-label class="text-main">Children</q-item-label>
            <q-item-label caption>Ages 2 – 12</q-item-label>
          </q-item-section>
          <q-item-section class="number-input-buttons" side>
            <number-input-buttons v-model="childAmount" />
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section class="text-main">
            <q-item-label class="text-main">Infants</q-item-label>
            <q-item-label caption>Under 2</q-item-label>
          </q-item-section>
          <q-item-section class="number-input-buttons" side>
            <number-input-buttons v-model="infantAmount" />
          </q-item-section>
        </q-item>
      </q-list>
    </form-step>

    <form-step
      v-if="step === 5"
      @changeStep="changeStepp"
      subtitle="Weekend getaway of a full long holiday?"
      title="How long would you like
to travel for?"
      class="step flex flex-center"
      :step="step"
    >
      <q-list class="radio-group">
        <q-item-section>
          <q-radio
            left-label
            v-model="tDuration"
            val="0"
            label="Up to 5 days"
          />
        </q-item-section>
        <q-radio left-label v-model="tDuration" val="1" label="1 week" />
        <q-radio left-label v-model="tDuration" val="2" label="2 weeks" />
        <q-radio left-label v-model="tDuration" val="3" label="3-4 weeks" />
        <q-radio left-label v-model="tDuration" val="5" label="5+ weeks" />
      </q-list>
    </form-step>

    <form-step
      v-if="step === 6"
      @changeStep="changeStepp"
      subtitle="Dream big! We’ll see how we can help."
      title="Which pictures reflect your dream holidays?"
      class="step flex flex-center"
      :step="step"
    >
      <!--      {{ selectedPhotos }}-->
      <slider-select :board="'1141944117954577838'" :pinFeedSlider="pinFeedDream" v-model="selectedPhotos" />
    </form-step>

    <form-step
      v-if="step === 7"
      @changeStep="changeStepp"
      subtitle="Choose up to 3 things that you find most important during your vacations."
      title="What are your top priorities when treavelling?"
      class="step flex flex-center"
      :step="step"
    >
      <priorities-select v-model="priorities" />
    </form-step>

    <form-step
      v-if="step === 8"
      @changeStep="changeStepp"
      subtitle="Let us get to know you a little..."
      title="Which of the experiences are on you bucket list?"
      class="step flex flex-center"
      :step="step"
    >
      <slider-select
        :pinFeedSlider="pinFeedActivities"
        :board="'1141944117954581418'"
        v-model="selectedActivities"
      />
    </form-step>
    <form-step
      v-if="step === 9"
      @changeStep="changeStepp"
      subtitle=""
      title="We created a personalised recommendation for you. Where should we send it?"
      class="step flex flex-center overflow-y q-pt-lg"
      :step="step"
    >
      <div class="what-you-get-screen">
        <email-input v-model="email" class="q-pb-sm" />
        <q-btn
          unelevated
          flat
          class="btn-main q-mb-sm"
          label="Get my travel plan"
          @click="buildReq"
        />
        <what-you-get />
        <email-input v-model="email" class="q-pb-md" />
      </div>
    </form-step>
  </q-page>
</template>

<script>
import { computed, defineComponent, onMounted, ref, watchEffect } from "vue";
import { useCounterStore } from "stores/example-store.js";
import formStep from "components/formStep.vue";
import numberInputButtons from "components/numberInputButtons.vue";
import firstStep from "components/steps/firstStep.vue";
import secondStep from "components/steps/secondStep.vue";
import genderSelect from "components/steps/genderSelect.vue";
import prioritiesSelect from "components/steps/prioritiesSelect.vue";
import whatYouGet from "components/steps/whatYouGet.vue";
import emailInput from "components/emailInput.vue";
import { api, tApi, tourastioApi } from "boot/axios";
import loadingURL from "assets/animations/loading";
import SliderSelect from "components/steps/sliderSelect.vue";


//TODO VISA STEP FORMA ISEXTRACTINT I ATSKIRA KOMPONENTA IR SITA PALIKT LABAI TUSCIA
export default defineComponent({
  name: "IndexPage",
  components: {
    SliderSelect,
    emailInput,
    formStep,
    numberInputButtons,
    firstStep,
    secondStep,
    genderSelect,
    prioritiesSelect,
    whatYouGet,
  },
  setup() {
    const feedback = ref("Analyzing your preferences");
    const suggestions = ref([]);
    const visitedPlaces = ref(null);
    const loadingAnim = ref(loadingURL);
    const anim = ref(null);
    const queue = ref([]);
    const offset = 0;
    const step = ref(1);
    const selectedPhotos = ref([]);
    const selectedActivities = ref([]);
    const gender = ref("male");
    const adultAmount = ref(2);
    const childAmount = ref(0);
    const infantAmount = ref(0);
    const tDuration = ref(1);
    const priorities = ref([]);
    const email = ref(null);
    const request = ref(null);
    const pinFeedVisited = ref([]);
    const pinFeedDream = ref([]);
    const pinFeedActivities = ref([]);

    // const sheetDB = ref(SheetDB);
    const buildReq = async () => {
      step.value = 0;
      feedback.value = "Analyzing your preferences";
      const photos = selectedPhotos.value;
      const photos2 = visitedPlaces.value;

      const tags = await getTags(photos, true);
      const tags2 = await getTags(photos2, true);
      const analyzedPhotos = await getTags(visitedPlaces.value, false);
      let visitedCountriesAnalyzed = analyzedPhotos.data.map((item) => ({
        tags: item.tags,
        country:
          item.locationsCities.length > 0
            ? item.locationsCities[0] +
              " " +
              Object.keys(JSON.parse(item.locationsCountries))[0]
            : " " + Object.keys(JSON.parse(item.locationsCountries))[0],
      }));

      console.log('tags');
      console.log(tags);
      console.log(tags2);
      console.log(visitedCountriesAnalyzed);


      const req = {
        id: "",
        email: email.value,
        gender: gender.value,
        duration: tDuration.value,
        adultAmount: adultAmount.value,
        childAmount: childAmount.value,
        infantAmount: infantAmount.value,
        dreamHolidayTags: [...new Set(tags.data.map(tag => tag.tags.map(i => i.name)).flat(1))].join(', '),
        activitiesTags: [...new Set(tags2.data.map(tag => tag.tags.map(i => i.name)).flat(1))].join(', '),
        priorities: priorities.value,
        visitedBefore: visitedCountriesAnalyzed.map(place => place.country).join(', '),
        // visitedPlaces: visitedPlaces.value, // take cities and countries out of this one
      };
      console.log(req);
      request.value = request;

      // const response = await tApi.post("/processRequest", req);
      const d = await api.post("https://pinterest-api.azurewebsites.net/api/google-api?code=i_Nsgoj95MDevkSEnbJg_loKZN89L3kcbcJP_W9P2c9JAzFuK5r9kA==", req);
      console.log(d);
      console.log(d);

      // console.log(response);
      step.value = 9;

    };

    const getPinterest = async (board_id) => {
      const d = await api.post("/pinterest-api", { "board_id" : board_id })

      let items = d.data;
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
      console.log(withLocation.length);

      return withLocation.slice(0, 10);
    };


    const getTags = async (items, analyse = false) => {
      console.log(items);
      return await tourastioApi.post("/analysePhotos", {
        data: items,
        analyse,
      });
    };
    const getRecommendation = async (items) => {
      // const photos = selectedPhotos.value.map(photo => pinFeed.value.find(item => item.image === photo));
      feedback.value = 'Analyzing your preferences';
      const analyzedPhotos = await getTags(visitedPlaces.value, true);
      let reqArray = analyzedPhotos.data
        .map(item => ({
          tags: item.tags,
          country: item.locationsCities.length > 0 ? item.locationsCities[0] + ' ' + Object.keys(JSON.parse(item.locationsCountries))[0] : ' ' + Object.keys(JSON.parse(item.locationsCountries))[0]
        }));

      console.log('analyzedPhotos');
      console.log(analyzedPhotos);
      console.log(reqArray)


      const result = await tourastioApi.post('/recommendCountries', { data: reqArray });
      console.log(result);
      // return result.data;
      return ['s', 's', 's']
    };

    const changeStepp = async (valueToIncrement) => {
      const newStep = step.value + valueToIncrement;
      if (newStep === 9) {
        // step.value = 0;
        // const recommendedCountries = await getRecommendation();
        // step.value = newStep;
        // const country1 = recommendedCountries[0][0];
        // const country2 = recommendedCountries[1][0];
        // const country3 = recommendedCountries[2][0];
        //
        // suggestions.value = [country1, country2, country3];
      }
      if (!newStep < 1) {
        step.value = newStep;
        counterStore.setStep(newStep);
      }
    };
    const counterStore = useCounterStore();
    const counterr = computed(() => counterStore.step);
    watchEffect(() => {
      if (anim.value) {
        anim.value.play();
      }
    });

    onMounted(async () => {
      pinFeedVisited.value = await getPinterest('1141944117954581257');
      pinFeedDream.value = await getPinterest('1141944117954577838');
      pinFeedActivities.value = await getPinterest('1141944117954581418');
    });

    return {
      pinFeedVisited,
      pinFeedDream,
      pinFeedActivities,
      buildReq,
      feedback,
      loadingAnim,
      anim,
      // pinFeed,
      getTags,
      priorities,
      counterStore,
      selectedPhotos,
      selectedActivities,
      step,
      gender,
      queue,
      offset,
      counterr,
      changeStepp,
      adultAmount,
      infantAmount,
      childAmount,
      visitedPlaces,
      tDuration,
      suggestions,
      email,
    };
  },
});
</script>
