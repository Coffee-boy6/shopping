<template>
  <h1>打工房</h1>
  <p>你现在有{{ userStore.cash }}元</p>
  <button @click="work()">我来打工</button>
</template>
<script>
import { useUserStore } from "../stores/user";
export default {
  data() {
    const userStore = useUserStore();
    return {
      userStore,
    };
  },
  methods: {
    work() {
      this.userStore.payoff();
    },
  },
};
</script>
