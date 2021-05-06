 <template>
  <section     
    id="news"
    class="news-back"
    data-aos="zoom-out"
    data-aos-duration="2100"
  >
    <div class="news-pelicula">
      <v-container>
        <v-row class="d-flex align-center">
          <v-col
            cols="10"
            md="6"
            xl="4"
            class="mx-auto d-flex flex-column justify-center"
          >
            <h2 class="py-5 h2 white--text text-center">
              Fique por dentro das <b>novidades</b>
            </h2>
            <v-form
              @submit.prevent="addToNewsletter"
              label="fique por dentro das novidades"
            >
              <v-text-field
                outlined
                color="white"
                dark
                v-model="email"
                label="Digite o seu email aqui"
              ></v-text-field>
              <v-btn type="submit" dark block class="btn btn-register block"
                >Enviar</v-btn
              >
            </v-form>
          </v-col>
        </v-row>
      </v-container>
    </div>
    
  </section>
</template>

<script>
export default {
  data() {
    return {
      email: "",
    };
  },
  methods: {
    async addToNewsletter() {
      try {
        let data = {
          email: this.email,
        };
        let newsletters = await this.$axios.$post("/api/newsletters", data);
        this.$swal(
          "Parabens!",
          "Seu email foi adicionado com sucesso!",
          "success"
        );
        this.newsletters.push(data);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style>
.news-pelicula {
  background: linear-gradient(
    90deg,
    rgba(28, 28, 28, 0.41) 0%,
    rgba(33, 33, 33, 0.41) 54%,
    rgba(13, 13, 13, 0.45) 100%
  );
  min-height: 100vh;
  display: grid;
  align-items: center;
 
}
.news-back {  
  background-image: url("~assets/imagens/home/newsletter.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  min-height: 100vh;
  width: 100vw;
  z-index: 0;
}



</style>
