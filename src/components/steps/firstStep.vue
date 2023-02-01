<template>
  <div class="greeting-content">
    <img
      alt="illustration with people and globe"
      src="~assets/illustration-people.png"
    >
    <p class="text-body">Select pictures of what you like & we’re gonna suggest your dream holiday location even you
      didn’t know about!</p>
  </div>

  <q-btn unelevated flat class="btn-main" label="Start" @click="changeStep(1)"/>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
    name: 'firstStep',
    setup(props, context) {


        const number = ref(props.modelValue);
        const changeStep = (val) => {
            context.emit('changeStep', 1)
        };

        return {number, changeStep};
    },
})
</script>
