<template>
  <section id="allProducts" class="all-products">
    <v-container class="df-width">
      <v-col cols="12" sm="12" class="text-center">
        <h2 class="h2 section_title text-uppercase font-weight-bold">
          Nossos Produtos
        </h2>
      </v-col>

      <v-row class="text-center">
        <v-col
          cols="12"
          md="3"
          lg="3"
          v-for="item in products"
          :key="item.id"
        >
          <nuxt-link class="pa-1" :to="`/produto/${item._id}`">
            <v-card flat>
              <v-img height="225px" :src="item.photo"></v-img>
              <v-container class="text-center">
                <h3 class="product_title">{{ item.title }}</h3>
                <div class="product_price pt-1 pb-2">R${{ item.price }},00</div>
              </v-container>
            </v-card>
          </nuxt-link>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
    props: {
        AllProducts: {
            required: true,
            Type: Array
        },        
    }
}
</script>