<template>
  <div class="dashboard">
    <v-container fluid class="w-85 mt-3 center">
      <v-select :items="items" filled label="Filled style"></v-select>
    </v-container>
   
  </div>
</template>

<script>
import GetAllProducts from "@/components/Products/GetAllProducts";

export default {
  layout: "proDash",
  components: {
    GetAllProducts,
  },
  data() {
    return {
      products: [],
    };
  },
  async asyncData({ app }) {
    let products = await app.$axios.$get("/api/products");
    return {
      products: products,
    };
  },
};
</script>

<style scoped>
</style>
