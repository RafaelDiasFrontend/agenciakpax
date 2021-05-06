<template>
  <v-container>
        <v-row class="text-center">
          <v-col
            cols="12"
            xs='1'
            sm='6'
            md="4"
            lg="3"
            v-for="item in allProducts"
            :key="item.id"
          >
            <nuxt-link class="pa-1" :to="`/produtos/${item.slug}`">
              <v-card flat>
                <v-img height="225px" :src="item.photo"></v-img>
                <v-container class="text-center">
                  <h3 class="product_title">{{ item.title }}</h3>
                  <div class="product_price pt-1 pb-2">
                    R${{ item.price }},00
                  </div>
                </v-container>
              </v-card>
            </nuxt-link>
          </v-col>
        </v-row>
  </v-container>
</template>

<script>

export default {
  props: {
    allProducts: {
      required: true,
      type: Array,
    },
  }, 
  data() {
    return {
      products: [],
      slickOptions: {
        arows: true,
        dots: true,
        focusOnSelect: true,
        infinite: true,
        speed: 1200,
        autoplay: true,
        slidesToShow: 4,
        touchThreshold: 4,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
              dots: false,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
            },
          },
        ],
      },
    };
  },
};
</script>

<style>
.carousel-wrapper {
  padding: 0em 0;
  margin: 0 auto;
}

.img-wrapper img {
  margin: auto;
  width: 40px;
  height: auto;
  background-color: red;
}
.professional-box {
  border-radius: 14px;
  background-color: #fff;
  box-shadow: 0 0 40px 0 rgba(94, 92, 154, 0.06);
}
.mt-slick {
  margin-top: 0em;
}

.quotation-marks {
  transform: rotateY(3.142rad);
}

.quote-title {
  font-size: 0.94rem;
  line-height: 1.4;
}

.testimonials-card-grid {
  display: grid;
  grid-template-rows: 30px 120px 30px;
  padding: 1em;
  grid-row-gap: 5px;
  margin-left: 0.4em;
}
.professional .testimonials-card-header {
  display: flex;
  align-items: center;
}

.testimonials-card-body {
  display: flex;
  align-items: center !important;
}

.testimonials-card-footer {
  align-items: center !important;
}
</style>
