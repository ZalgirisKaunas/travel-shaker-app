<template>
  <q-list>
    <q-item tag="label" v-ripple class="radio-group-big">
      <q-item-section>
        <q-item-label
          ><img
            class="selection-img"
            alt="illustration with people and globe"
            src="~assets/male.png"
          />
          Male</q-item-label
        >
      </q-item-section>
      <q-item-section avatar>
        <q-radio
          v-model="gender"
          unchecked-icon="fa-solid fa-check"
          checked-icon="fa-solid fa-check"
          val="male"
          gender="male"
        />
      </q-item-section>
    </q-item>

    <q-item tag="label" v-ripple class="radio-group-big">
      <q-item-section>
        <q-item-label
          ><img
            class="selection-img"
            alt="illustration with people and globe"
            src="~assets/female.png"
          />
          Female</q-item-label
        >
      </q-item-section>
      <q-item-section avatar>
        <q-radio
          v-model="gender"
          unchecked-icon="fa-solid fa-check"
          checked-icon="fa-solid fa-check"
          val="female"
          gender="female"
        />
      </q-item-section>
    </q-item>

    <q-item tag="label" v-ripple class="radio-group-big">
      <q-item-section>
        <q-item-label
          ><img
            class="selection-img"
            alt="illustration with people and globe"
            src="~assets/other.png"
          />
          Other</q-item-label
        >
      </q-item-section>
      <q-item-section avatar>
        <q-radio
          v-model="gender"
          unchecked-icon="fa-solid fa-check"
          checked-icon="fa-solid fa-check"
          val="other"
          gender="other"
        />
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script>
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  name: "genderSelect",
  props: ["modelValue"], //added the prop
  emits: ["update:modelValue"], //component emits the updated prop
  components: {},
  setup(props, context) {
    const gender = ref(props.modelValue);
    watch(gender, () => {
      context.emit("update:modelValue", gender.value); //here's what i did wrong, didn't add the prop name to the event name. adding it fixed it. this works
    });
    return { gender };
  },
});
</script>
