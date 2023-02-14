import { defineStore } from "pinia";
import {api} from "boot/axios";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    step: 1,
    img: "~assets/image2.jpg",
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
    setImg(payload) {
      console.log(payload)
      this.img = payload;

      console.log(this.img)
    },
  },
});
