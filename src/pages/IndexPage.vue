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
      v-show="step === 2"
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
      :valid="adultAmount > 0"
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
      subtitle="Weekend getaway or a full long holiday?"
      title="How long would you like
to travel for?"
      class="step flex flex-center"
      :step="step"
    >

      <q-list class="radio-group">
          <q-radio
            left-label
            v-model="tDuration"
            tDuration="0"
            val="0"
            label="Up to 5 days"
          />
        <q-radio left-label v-model="tDuration" val="1" label="1 week" />
        <q-radio left-label v-model="tDuration" val="2" label="2 weeks" />
        <q-radio left-label v-model="tDuration" val="3" label="3-4 weeks" />
        <q-radio left-label v-model="tDuration" val="5" label="5+ weeks" />
      </q-list>
    </form-step>

    <form-step
      v-show="step === 6"
      :valid="selectedPhotos.length > 0"
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
      :valid="priorities.length > 0"
      subtitle="Choose up to 3 things that you find most important during your vacations."
      title="What are your top priorities when treavelling?"
      class="step flex flex-center"
      :step="step"
    >
      <priorities-select v-model="priorities" />
    </form-step>

    <form-step
      v-show="step === 8"
      @changeStep="changeStepp"
      :valid="selectedActivities.length > 0"
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
      v-show="step === 9"
      @changeStep="changeStepp"
      :valid="selectedGastronomy.length > 0"
      subtitle="What are your favourite things to eat on vacations? Select by tapping up to 3 photos."
      title="Gourmet food experience or continental breakfast?"
      class="step flex flex-center"
      :step="step"
    >
      <slider-select
        :pinFeedSlider="pinFeedGastronomy"
        :board="'1141944117954577885'"
        v-model="selectedGastronomy"
      />
    </form-step>

    <form-step
      v-show="step === 10"
      @changeStep="changeStepp"
      subtitle="Let us get to know you a little..."
      title="Are you fancy visiting villages?"
      class="step flex flex-center"
      :step="step"
      :valid="selectedVillages.length > 0"
    >
      <slider-select
        :pinFeedSlider="pinFeedVillages"
        :board="'1141944117954577874'"
        v-model="selectedVillages"
      />
    </form-step>
    <form-step
      v-if="step === 11"
      @changeStep="changeStepp"
      subtitle=""
      title="We created a personalised recommendation for you. Where should we send it?"
      class="step flex flex-center overflow-y q-pt-lg"
      :valid="email != null && email !== '' && confirmTick"
      :step="step"
    >
      <div class="what-you-get-screen">
        <a class="travel-affiliate" href="https://tp.media/r?marker=297832&trs=214891&p=6536&u=https%3A%2F%2Fwww.travelshaker.com&campaign_id=344">
          <img src="~assets/baneris.png" />
        </a>
        <email-input ref="emailref" v-model:emailas="email" v-model:check="confirmTick" class="q-pb-md" />
        <q-btn
          unelevated
          flat
          :disabled="!(email != null && email !== '' && confirmTick)"
          class="btn-main q-mb-sm"
          label="Get my travel plan"
          @click="buildReq"
        />
        <what-you-get />
        <email-input ref="emailref" v-model:emailas="email" v-model:check="confirmTick" class="q-pb-md" />
      </div>
    </form-step>
    <form-step
      v-if="step === 12"
      @changeStep="changeStepp"
      :headerClass="'success-msg'"
      subtitle=" We will analyze your selection and will share the recommended places to visit via e-mail."
      title=""
      class="step flex flex-center overflow-y q-pt-lg"
      :step="step"
    >

    </form-step>
  </q-page>
</template>

<script>
import {computed, defineComponent, onMounted, ref, watchEffect, getCurrentInstance } from "vue";
import {useCounterStore} from "stores/example-store.js";
import formStep from "components/formStep.vue";
import numberInputButtons from "components/numberInputButtons.vue";
import firstStep from "components/steps/firstStep.vue";
import secondStep from "components/steps/secondStep.vue";
import genderSelect from "components/steps/genderSelect.vue";
import prioritiesSelect from "components/steps/prioritiesSelect.vue";
import whatYouGet from "components/steps/whatYouGet.vue";
import emailInput from "components/emailInput.vue";
import {api, tApi, tourastioApi} from "boot/axios";
import loadingURL from "assets/animations/loading";
import SliderSelect from "components/steps/sliderSelect.vue";
import {v4 as uuidv4} from 'uuid';

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
    const selectedGastronomy = ref([]);
    const selectedVillages = ref([]);
    const gender = ref("male");
    const adultAmount = ref(2);
    const childAmount = ref(0);
    const infantAmount = ref(0);
    const tDuration = ref("2");
    const priorities = ref([]);
    const email = ref(null);
    const request = ref(null);
    const pinFeedVisited = ref([]);
    const pinFeedDream = ref([]);
    const pinFeedActivities = ref([]);
    const pinFeedGastronomy = ref([]);
    const pinFeedVillages = ref([]);
    const confirmTick = ref(false);
    const emailref = ref(null);

    const getPinterest = async (board_id, limit = 8, getLoc = true, withDescription = false) => {
      const d = await api.post("/pinterest-api", { "board_id" : board_id, withDescription })
      let items = d.data;
      if (withDescription) {
        items = d.data.filter(
          (i) =>
            i.description !== "" &&
            i.description !== " " &&
            i.media.images &&
            i.media.images["400x300"]
        );
      } else {
        counterStore.setImg(items[0].media.images.originals.url);
        items = items.filter((i) =>
          i.media.images && i.media.images["400x300"]
        )
      }

      items = items.map((item) => ({
        id: item.id,
        description: item.description,
        image: item.media.images["400x300"].url,
      }));
      if (getLoc) {
        const result = await getTags(items);
        let withLocation = result.data.filter(
          (item) =>
            item.locationsCities.length > 0 ||
            item.locationsCountries !== "{}"
        )

        console.log('withLocation');
        console.log(withLocation);

        withLocation = withLocation.map(item => ({ ...item, country: Object.keys(item.locationsCountries)[0] }))

        let seen = new Set();

        let withoutDuplicates = withLocation.filter(function(item) {
          let value = item.country;
          if (seen.has(value)) {
            return false;
          } else {
            seen.add(value);
            return true;
          }
        });

        if (!limit) {
          return withoutDuplicates;
        }

        return withoutDuplicates.slice(0, limit);
      } else {
        if (!limit) {
          return items;
        }

        return items.slice(0, limit);
      }
    };

    (async () => {
      pinFeedVisited.value = await getPinterest('1141944117954581257', false, true, true);
      console.log(pinFeedVisited.value.length);
      console.log(pinFeedVisited.value.length);
      console.log(pinFeedVisited.value.length);
      pinFeedVillages.value = await getPinterest('1141944117954577874', 18, false); // villages

    })()

    const buildReq = async () => {
      step.value = 0;
      feedback.value = "Analyzing your preferences";

      try {
        const photos = selectedPhotos.value;
        // const photos3 = pinFeedVillages.value;
        const photos4 = pinFeedActivities.value;
        const photos5 = pinFeedGastronomy.value;
        const tags = await getTags(photos, true, '2');
        // const tags3 = await getTags(photos3, true, '3');
        const tags4 = await getTags(photos4, true, '4');
        const tags5 = await getTags(photos5, true, '5');
        const analyzedPhotos = await getTags(visitedPlaces.value, false, 'visited places'); // sitas jau turetu but kazkur ??? todo
        let visitedCountriesAnalyzed = analyzedPhotos.data.map((item) => ({
          tags: item.tags,
          country:
            item.locationsCities.length > 0
              ? item.locationsCities[0] +
              " " +
              Object.keys(JSON.parse(item.locationsCountries))[0]
              : " " + Object.keys(JSON.parse(item.locationsCountries))[0],
        }));

        console.log('priorities.value');
        console.log(priorities.value.join(', '));

        const req = {
          id: uuidv4(),
          email: email.value,
          gender: gender.value,
          tripDuration: tDuration.value.toString(),
          adultAmount: adultAmount.value,
          childAmount: childAmount.value,
          infantAmount: infantAmount.value,
          priorities: priorities.value.join(', '),
          dreamHolidayTags: [...new Set(tags.data.map(tag => tag.tags.map(i => i.name)).flat(1))].join(', '),
          gastronomyTags: [...new Set(tags5.data.map(tag => tag.tags.map(i => i.name)).flat(1))].join(', '),
          activitiesTags: [...new Set(tags4.data.map(tag => tag.tags.map(i => i.name)).flat(1))].join(', '),

          visitedBefore: visitedCountriesAnalyzed.map(place => place.country).join(', '),
          // visitedPlaces: visitedPlaces.value, // take cities and countries out of this one
        };
        request.value = request;

        console.log('request');
        console.log(request);

        const d = await api.post("https://pinterest-api.azurewebsites.net/api/google-api?code=i_Nsgoj95MDevkSEnbJg_loKZN89L3kcbcJP_W9P2c9JAzFuK5r9kA==", req);
        const response = await api.post("/processRequest", req);

        console.log(d);
        console.log(d);

        // todo check if success
        getRecommendation(req.id);
      } catch(e) {
        console.log(e);
      }

      step.value = 12;
    };

    const getTags = async (items, analyse = false, debug) => {
      console.log(debug);
      console.log(items);

      if (!items) {
        return { data: [] }
      }

      return await tourastioApi.post("/analysePhotos", {
        data: items.slice(0, 16),
        analyse,
      });
    };
    const getRecommendation = async (id) => {
      // const photos = selectedPhotos.value.map(photo => pinFeed.value.find(item => item.image === photo));
      feedback.value = 'Analyzing your preferences';
      const analyzedPhotos = await getTags(visitedPlaces.value, true);
      let reqArray = analyzedPhotos.data
        .map(item => ({
          tags: item.tags,
          country: item.locationsCities.length > 0 ? item.locationsCities[0] + ' ' + Object.keys(JSON.parse(item.locationsCountries))[0] : ' ' + Object.keys(JSON.parse(item.locationsCountries))[0]
        }));
      const result = await tourastioApi.post('/recommendCountries', { data: reqArray, item_id: id });
      // return result.data;
      return ['s', 's', 's']
    };

    const changeStepp = async (valueToIncrement) => {
      const newStep = step.value + valueToIncrement;

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
      pinFeedDream.value = await getPinterest('1141944117954577837', 18, false); // city sightseeing
      pinFeedActivities.value = await getPinterest('1141944117954581418', 18, false); // experiences
      pinFeedGastronomy.value = await getPinterest('1141944117954577885', 18, false); // gastronomy
      // console.log(emailref.value);
      // console.log(getCurrentInstance().ctx.$refs.emailref);

    });

    return {
      emailref,
      confirmTick,
      pinFeedVisited,
      pinFeedDream,
      pinFeedActivities,
      pinFeedGastronomy,
      pinFeedVillages,
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
      selectedGastronomy,
      selectedVillages,
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
