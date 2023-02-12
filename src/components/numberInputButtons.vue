<template>
  <div @click="decrement" class="number-button">-</div>
  <strong class="number-value">{{ number }}</strong>
  <div @click="incrementVal" class="number-button">+</div>
</template>

<script>
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  name: "numberInputButtons",
  props: ["modelValue"], //added the prop
  emits: ["update:modelValue"], //component emits the updated prop

  setup(props, context) {
    const number = ref(props.modelValue);

    watch(number, () => {
      context.emit("update:modelValue", number.value); //here's what i did wrong, didn't add the prop name to the event name. adding it fixed it. this works
    });

    watch(
      () => props.modelValue,
      (first, second) => {
        number.value = props.modelValue;
      }
    );

    const decrement = () => {
      if (number.value !== 0) {
        number.value--;
      }

      if (number.value < 0) {
        number.value = 0;
      }
    };
    const incrementVal = () => {
      number.value++;
    };

    return { number, incrementVal, decrement };
  },
});
</script>

<style>
.number-value {
  min-width: 19px;
  display: inline-block;
}
</style>
