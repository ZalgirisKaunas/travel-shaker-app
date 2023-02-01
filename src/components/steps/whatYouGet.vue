<template>
  <div class="disclaimer-box">
    <p class="text-body-small">
      We respect your privacy. We will never sell, rent or share your email
      address. That’s more than a policy, it’s our personal guarantee!
    </p>
  </div>
  <h2>What will you get</h2>
  <q-list class="what-you-get">
    <q-item>
      <q-item-section avatar>
        <img src="~assets/1-list.png" />
      </q-item-section>
      <q-item-section>What is this place and how to get there</q-item-section>
    </q-item>
    <q-item>
      <q-item-section avatar>
        <img src="~assets/2.png" />
      </q-item-section>
      <q-item-section>7 things to do and see in the destination</q-item-section>
    </q-item>
    <q-item>
      <q-item-section avatar>
        <img src="~assets/3.png" />
      </q-item-section>
      <q-item-section>Options for different price ranges</q-item-section>
    </q-item>
    <q-item>
      <q-item-section avatar>
        <img src="~assets/4.png" />
      </q-item-section>
      <q-item-section
        >If you want to go deeper, we’ll offer you more planning
        services.</q-item-section
      >
    </q-item>
  </q-list>
</template>

<script>
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  name: "whatYouGet",

  setup(props, context) {},
});
</script>
