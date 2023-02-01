<template>
  <form style="width: 100%">
    <q-list class="radio-group">
      <q-item tag="label" class="radio-group-big checkboxes-group-small">
        <q-item-section>
          <q-item-label avatar
            ><img class="selection-img" src="~assets/3.png" />
            Sightseeing</q-item-label
          >
        </q-item-section>
        <q-item-section avatar>
          <!--            <q-radio v-model="gender" unchecked-icon="fa-solid fa-check" checked-icon="fa-solid fa-check" val="male" gender="male"/>-->
          <q-checkbox
            v-model="priorities"
            val="sightseeing"
            tDuration="1"
            unchecked-icon="fa-solid fa-check"
            checked-icon="fa-solid fa-check"
          />
        </q-item-section>
      </q-item>

      <q-item tag="label" class="radio-group-big checkboxes-group-small">
        <q-item-section>
          <q-item-label avatar
            ><img class="selection-img" src="~assets/2.png" /> Spectacular
            nature</q-item-label
          >
        </q-item-section>
        <q-item-section avatar>
          <q-checkbox
            v-model="priorities"
            val="nature"
            tDuration="2"
            unchecked-icon="fa-solid fa-check"
            checked-icon="fa-solid fa-check"
          />
        </q-item-section>
      </q-item>

      <q-item tag="label" class="radio-group-big checkboxes-group-small">
        <q-item-section>
          <q-item-label avatar
            ><img class="selection-img" src="~assets/1-list.png" /> Cultural
            activities</q-item-label
          >
        </q-item-section>
        <q-item-section avatar>
          <q-checkbox
            v-model="priorities"
            val="cultural"
            tDuration="3"
            unchecked-icon="fa-solid fa-check"
            checked-icon="fa-solid fa-check"
          />
        </q-item-section>
      </q-item>

      <q-item tag="label" class="radio-group-big checkboxes-group-small">
        <q-item-section>
          <q-item-label avatar
            ><img class="selection-img" src="~assets/icecream.png" /> Food
            experiences</q-item-label
          >
        </q-item-section>
        <q-item-section avatar>
          <q-checkbox
            v-model="priorities"
            val="food"
            tDuration="4"
            unchecked-icon="fa-solid fa-check"
            checked-icon="fa-solid fa-check"
          />
        </q-item-section>
      </q-item>

      <q-item tag="label" class="radio-group-big checkboxes-group-small">
        <q-item-section>
          <q-item-label avatar
            ><img class="selection-img" src="~assets/hat.png" /> Prices and
            smart deals</q-item-label
          >
        </q-item-section>
        <q-item-section avatar>
          <q-checkbox
            v-model="priorities"
            val="deals"
            tDuration="5"
            unchecked-icon="fa-solid fa-check"
            checked-icon="fa-solid fa-check"
          />
        </q-item-section>
      </q-item>

      <q-item tag="label" class="radio-group-big checkboxes-group-small">
        <q-item-section>
          <q-item-label avatar
            ><img class="selection-img" src="~assets/joystick.png" /> Family
            friendly activities</q-item-label
          >
        </q-item-section>
        <q-item-section avatar>
          <q-checkbox
            v-model="priorities"
            val="family"
            tDuration="6"
            unchecked-icon="fa-solid fa-check"
            checked-icon="fa-solid fa-check"
          />
        </q-item-section>
      </q-item>
    </q-list>
  </form>
</template>

<script>
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  name: "prioritiesSelect",
  props: ["modelValue"], //added the prop
  emits: ["update:modelValue"], //component emits the updated prop
  components: {},
  setup(props, context) {
    const priorities = ref(props.modelValue);
    watch(priorities, () => {
      context.emit("update:modelValue", priorities.value); //here's what i did wrong, didn't add the prop name to the event name. adding it fixed it. this works
    });
    return { priorities };
  },
});
</script>
