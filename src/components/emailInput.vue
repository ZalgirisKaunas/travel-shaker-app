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
  props: {
    emailas: {
      type: String,
      default: "",
      required: true,
    },
    check: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  emits: ["update:check", 'update:emailas'], //component emits the updated prop
  setup(props, context) {
    const email = ref(null);
    const confirm = ref(false);
    watch(email, () => {
      context.emit("update:emailas", email.value);
    });

    watch(confirm, () => {
      context.emit("update:check", confirm.value); //here's what i did wrong, didn't add the prop name to the event name. adding it fixed it. this works
    });

    watch(
      () => props.emailas,
      (first, second) => {
        email.value = props.emailas;
      }
    );

    watch(
      () => props.check,
      (first, second) => {
        confirm.value = props.check;
      }
    );

    return { email, confirm };
  },
});
</script>
