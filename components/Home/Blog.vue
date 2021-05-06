<template>
   <!-- All Products -->
    <section id="allProducts" class="all-blog">
      <v-container class="df-width"   data-aos="fade-down"
          data-aos-duration="1700">
         <h2 class="h2 mb-12 text-center">Nosso <b>Blog</b></h2>
        <v-col cols="12" sm="12" class="text-left"></v-col>

  
        <v-row class="text-center">
          <v-col
            cols="12"
            md="3"
            lg="4"
            v-for="item in allPosts"
            :key="item.id"
          >
            <nuxt-link class="pa-1" :to="`/produtos/${item.slug}`">
              <v-card flat>
                <v-img height="225px" :src="item.photo" alt="blog-img"></v-img>
                <v-container class="ml-md-3 text-left">
                  <h3 class="product_title">{{ item.title }}</h3>
                  <div class="product_price pt-1 pb-2">
                    {{ item.price }}
                  </div>
                  <v-btn color='primary'>Leia Mais</v-btn>
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
   allPosts: {
     required: true,
     type: Array
   }
 }
}
</script>

<style>
.all-blog {
  background-color: var(--layout-color)!important;
  padding: 3.2em 4em;
}
</style>