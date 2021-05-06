  <template>
  <section id="testimonials">
    <div class="test-pelicula">
      <v-container data-aos="zoom-in" data-aos-duration="2000">
        <v-row>
          <v-col cols="10" md="6" class="mx-auto">
            <h2 class="h2 text-center white--text">
              O que falam sobre <b>Nós</b>
            </h2>
            <v-carousel
              cycle
              hide-delimiter-background
              hide-delimiters
              show-arrows-on-hover
              dark
            >
              <v-carousel-item v-for="item in allTestimonials" :key="item.id">
                <v-sheet color="transparent">
                  <v-container
                    class="d-flex flex-column text-center justify-center"
                  >
                    <v-avatar size="150" class="testimonial-avatar">
                      <img :src="item.photo" alt="photo" />
                    </v-avatar>
                    <h3 class="portfolio-title white--text">
                      {{ item.name }}
                    </h3>
                    <p class="p p-testimonial grey--text text--lighten-3">
                      {{ item.text }}
                    </p>
                  </v-container>
                </v-sheet>
              </v-carousel-item>
            </v-carousel>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <span class="arrow-div center d-mobile">
      <ArrowScrolldownButton :link="testLink" />
    </span>
  </section>
</template>

<script>
export default {
  props: {
    allTestimonials: {
      required: true,
      Type: Array,
    },
  },
  data() {
    return {
      testLink: "#team",
    };
  },
};
</script>


<style>
#testimonials {
  background-image: url("~assets/imagens/home/testimonial_kpax.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  min-height: 100vh;
  z-index: -99;
  min-height: 100vh;
}
.test-pelicula {
  display: grid;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  background: linear-gradient(
    90deg,
    rgba(28, 28, 28, 0.59) 0%,
    rgba(33, 33, 33, 0.59) 54%,
    rgba(13, 13, 13, 0.59) 100%
  );
  z-index: -22;
}
.portfolio-title {
  font-size: 1.32rem; 
  margin-bottom: 20px;

}
.testimonial-avatar { 
  margin: 0 auto;
  margin-bottom: 15px;
}
.arrow-absolute {
  position: absolute;
  bottom: 0;
}
.arrow-div {
  margin-top: -90px !important;
  display: grid;
  justify-content: center;
  align-content: center;
  z-index: 999944 !important;
}
.p {
  max-width: 800px;
  margin: 0 auto;
}

@media only screen and (max-width: 600px) {
#testimonials {
  background-image: url("~assets/imagens/home/testimonial_kpax-mobile.jpg");
}
}
</style>