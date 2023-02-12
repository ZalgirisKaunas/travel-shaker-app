<template class="flex flex-center content-between">
  <div>
    <div>
      <div class="form-header">
        <div v-if="step === 1" class="flex happy-users">
          <img src="~assets/stars.png" />
          <p class="text-body">10 000+ happy users</p>
          <h1 v-if="step === 1">{{ title }}</h1>
        </div>

        <h2 v-if="step !== 1">{{ title }} {{ step }}</h2>
        <div v-if="subtitle" class="text-body">{{ subtitle }}</div>
      </div>
    </div>
    <slot />
    <!--    <button v-if="step > 1" @click="prevStep">Previous</button>-->

    <q-btn
      unelevated
      :disabled="!valid"
      flat
      class="btn-main"
      v-if="step > 1 && next"
      label="Next"
      @click="nextStep"
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "formStep",

  setup(props, context) {
    const nextStep = () => {
      context.emit("changeStep", 1);
    };
    const prevStep = () => {
      context.emit("changeStep", -1);
    };

    return { nextStep, prevStep };
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    valid: {
      type: Boolean,
      default: true,
    },
    step: {
      type: Number,
      required: true,
    },
    subtitle: {
      type: String,
      required: false,
    },
    next: {
      type: Boolean,
      default: true,
      required: false,
    },
  },
});
</script>

<style>
button {
  width: 100%;
}
</style>
