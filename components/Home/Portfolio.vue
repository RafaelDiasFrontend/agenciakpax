<template>
  <!-- All Products -->
  <section id="portfolio" class="all-Portfolio">
    <div class="pelicula-portfolio d-flex align-center">
      <v-container class="df-width">
        <h2
          class="h2 mb-lg-5 mb-xl-8 text-center white--text"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          Nosso <b>Portfólio</b>
        </h2>

        <v-row class="text-center fill-height ma-0">
          <v-col
            cols="6"
            md="4"
            lg="3"
            sm="6"           
            v-for="item in allPortfolio"
            class='portfolio'
            :key="item.id"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            <a :href="item.link" target="_blank">
              <v-card class="elevation-15 portfolio_card" style='opacity: 0.9;'>
                <v-img class='port-img' width="auto" :src="item.photo" alt="photo"></v-img>
                <h3 class="py-2 h3">{{ item.title }}</h3>
              </v-card>
            </a>
          </v-col>
        </v-row>
      </v-container>
    </div>
     <span class="arrow-div center d-mobile">
        <ArrowScrolldownButton :link="portLink" />
      </span> 
  </section>
</template>

<script>
import ArrowScrolldownButton from "@/components/Buttons/ArrowScrolldownButton";
export default {
  components: {
    ArrowScrolldownButton,
  },
  props: {
    allPortfolio: {
      required: true,
      type: Array,
    },
  }, 
   data() {
    return {    
      portLink: "#testimonials",
    };
  },
 
};
</script>

<style scoped>
.all-Portfolio {
  background-image: url("~assets/imagens/home/portfolio_kpax.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  min-height: 100vh;
  z-index: -999;
}
.arrow-absolute {
  position: absolute;
  bottom: 0;  
}
.arrow-div {
  margin-top: -90px!important;
  display: grid;
  justify-content: center;
  align-content: center;
  z-index: 80;
}
.pelicula-portfolio  {
  width: 100vw;
  min-height: 100vh;
  background: linear-gradient(
    90deg,
    rgba(28, 28, 28, 0.47) 0%,
    rgba(33, 33, 33, 0.47) 54%,
    rgba(13, 13, 13, 0.47) 100%
  ); 
  z-index: 4;  
}
.portfolio_card {
  width: 510px!important;
  height: auto;
}
.port-img {
  max-width: 310px;
  height: auto;
}

@media only screen and (max-width: 1470px) { 
.h3 {
  font-size: 0.82rem;
}
  .df-width {
    max-width: 980px;
  }
    .port-img {
  width: 100%!important;
  height: auto;
}
.portfolio_card {
  width: 510px!important;
  height: auto;
}
}

@media only screen and (max-width: 600px) { 
  .all-Portfolio {
   background-image: url("~assets/imagens/home/portfolio_kpax-mobile.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  min-height: 120vh;
  z-index: -999;
}
.pelicula-portfolio  {
  min-height: 120vh; 
}
.h3 { 
  font-size: 0.64rem;
} 
}
</style>