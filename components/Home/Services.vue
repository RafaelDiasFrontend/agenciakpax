  <template>
  <section id="services">
    <v-container fluid data-aos="fade-up" data-aos-duration="1800">
      <h2 class="h2 text-center dark-color">Nossos <b>Serviços</b></h2>
      <v-carousel
        cycle
        height="500"
        hide-delimiter-background
        show-arrows-on-hover
        light
      >
        <v-carousel-item v-for="item in allServices" :key="item.id">
          <v-sheet color='transparant' height="100%" class="pt-12">
            <v-container class="d-flex flex-column text-center justify-center">
              <v-avatar size="150" class="testimonial-avatar" elevation='12'>
                <img :src="item.photo" alt="photo" />
              </v-avatar>
              <h3 class="h2 dark-color">{{ item.name }}</h3>
              <p class="p p-testimonial grey--text">
                {{ item.text }}
              </p>
            </v-container>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      allServices: [
        {
          name: "Site",
          text:
            "Criação de Sites, Layouts e Aplicaões Web. Decole na internet com a performance de nossos projetos web",
        },
        {
          name: "Site",
          text:
            "Criação de Sites, Layouts e Aplicaões Web. Decole na internet com a performance de nossos projetos web",
        },
        {
          name: "Site",
          text:
            "Criação de Sites, Layouts e Aplicaões Web. Decole na internet com a performance de nossos projetos web",
        },
        {
          name: "Site",
          text:
            "Criação de Sites, Layouts e Aplicaões Web. Decole na internet com a performance de nossos projetos web",
        },
        {
          name: "Site",
          text:
            "Criação de Sites, Layouts e Aplicaões Web. Decole na internet com a performance de nossos projetos web",
        },
      ],
    };
  },
  props: {
    allTestimonials: {
      required: true,
      Type: Array,
    },
  },
};
</script>


<style>
#services {
  
 
  background: red;
  min-height: 100vh;
}
.p {
  max-width: 800px;
  margin: 0 auto;
}
</style>