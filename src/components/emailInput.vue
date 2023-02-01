<template>
  <div class="email-form">
    <q-input class="input-text" outlined v-model="email" label="Email" />
    <q-checkbox
      v-model="confirm"
      label="By checking this, you agree get future information from us."
    />
  </div>
</template>

<script>
import { defineComponent, ref, watch } from "vue";
// todo don't allow to proceed without  confirm
export default defineComponent({
  name: "emailInput",
  props: ["modelValue"], //added the prop
  emits: ["update:modelValue"], //component emits the updated prop

  setup(props, context) {
    const email = ref(null);
    const confirm = ref(false);

    watch(email, () => {
      context.emit("update:modelValue", email.value); //here's what i did wrong, didn't add the prop name to the event name. adding it fixed it. this works
    });

    watch(
      () => props.modelValue,
      (first, second) => {
        email.value = props.modelValue;
      }
    );

    return { email, confirm };
  },
});
</script>
