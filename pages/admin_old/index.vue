<template>
  <section>
    <v-container class="mt-12">
      <v-row class="fast-data">
        <!-- total products -->
        <v-col cols="12" md="3">
          <v-card flat class="pa-5">
            <div class="d-flex justify-space-between align-center">
              <span class="count-title font-weight-bold">
              </span>
              <v-icon size="25" color="black">flag</v-icon>
            </div>
          </v-card>
        </v-col>
        <!-- Total Testimonials -->
        <v-col cols="12" md="3">
          <v-card flat class="pa-5">
            <div class="d-flex justify-space-between align-center">
              <span class="count-title font-weight-bold"></span>
              <v-icon size="25" color="black">star_rate</v-icon>
            </div>
          </v-card>
        </v-col>
        <!-- total Users -->
        <v-col cols="12" md="3">
          <v-card flat class="pa-5">
            <div class="d-flex justify-space-between align-center">
              <span class="count-title font-weight-bold"></span>
              <v-icon size="25">add_photo_alternate</v-icon>
            </div>
          </v-card>
        </v-col>
        <!-- Total Stores-->
        <v-col cols="12" md="3">
          <v-card flat class="pa-5">
            <div class="d-flex justify-space-between align-center">
              <span class="count-title font-weight-bold"></span>
              <v-icon size="25">add_business</v-icon>
            </div>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="9">
          <v-card flat>
            <!-- <v-data-table 
             hide-default-footer
              :headers="headers"
              :items="desserts"            
            >
              <template v-slot:item.calories="{ item }">
                <v-chip :color="getColor(item.calories)" dark>
                  {{ item.calories }}
                </v-chip>
              </template>
            </v-data-table> -->
          </v-card>
        </v-col>

        <v-col cols="12" md="3">
          <v-card flat class="pa-12 text-center"> </v-card>
        </v-col>
        <v-container> </v-container>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  layout: "proDash",
  middleware: "auth",
  data() {
    return {
      products: [],
      product: "",
      productsQdd: "",
      testiQtd: "",
      portQtd: "",
      headers: [
        {
          text: "Nome da Loja",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Calories", value: "calories" },
        { text: "Avatar (g)", value: "avatar" },
        { text: "Carbs (g)", value: "carbs" },
        { text: "Protein (g)", value: "protein" },
        { text: "Iron (%)", value: "iron" },
      ],
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1%",
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1%",
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: "7%",
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: "8%",
        },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: "16%",
        },
        {
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: "0%",
        },
        {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: "2%",
        },
        {
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: "45%",
        },
        {
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: "22%",
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%",
        },
      ],
    };
  },

  async asyncData({ $axios }) {
    try {
      let responseProducts = await $axios.$get("/api/productCount");
      let responseTestimonial = await $axios.$get("/api/testimonialCount");
      let responsePortfolio = await $axios.$get("/api/portfolioCount");

      return {
        productsQtd: responseProducts.prodQtd,
        testiQtd: responseTestimonial.testiQtd,
        portQtd: responsePortfolio.portQtd,
      };
    } catch (err) {
      console.log(err);
    }
  },
  methods: {
    getColor(calories) {
      if (calories > 400) return "red";
      else if (calories > 200) return "orange";
      else return "green";
    },
    async onDeleteProduct(id, index) {
      try {
        let response = await this.$axios.$delete(`/api/products/${id}`);
        if (response.status) {
          this.products.splice(index, 1);
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style scoped>
.count-title {
  font-size: 1.4rem;
}
.fast-data .v-icon {
  color: rgba(0, 0, 0, 0.87);
}

</style>