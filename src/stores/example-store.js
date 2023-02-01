import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    step: 1,
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++;
    },
    setStep(payload) {
      this.step = payload;
    },
  },
});
