<template>
  <v-container class="df-width mt-12 center text-center">
    <v-row>
      <v-col cols="12" class="mx-auto">
        <StoreTotal />
        <h1 class="h3 store mt-12">Total: {{ sum }}</h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import StoreTotal from "./StoreTotal";
export default {
  components: {
    StoreTotal,
  },
  computed: {
    sum() {
      return this.$store.getters.sum;
    },
  },
};
</script>

<style>
</style>