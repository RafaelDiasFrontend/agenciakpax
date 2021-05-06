<template>
  <div id="footer" class="footer_background">
    <div class="pelicula-footer white--text">
      <v-container class="df-width pt-5">
        <v-row class="mx-auto">
          <v-col cols="12" sm="12" class="mx-auto mb-15">
            <div class="footer-box mx-auto">
              <h2 class="py-5 h2 text-center">
                Fique por dentro das <b>novidades</b>
              </h2>
              <v-form               
                label="fique por dentro das novidades"
              >
                <v-text-field
                  outlined
                  color="white"
                  dark
                  v-model="email"
                  label="Digite o seu email aqui"
                ></v-text-field>
                <v-btn @click='addToNewsletter' block class="btn btn-register block font-weight-bold"
                  >Enviar</v-btn
                >
              </v-form>
            </div>
          </v-col>
       
        
        <v-col cols='12' class='mt-15'>
          <div
            class="white--text font-weight-bold white--text text-initial text-center"
          >
            <h3 class="text-logo white--text mb-1">kpax</h3>
            <div class="p mb-3">
              Segue a gente
            </div>
          </div>
          <div class="text-center">
            <v-btn
              v-for="item in icons"
              :key="item.id"
              class="mr-4 ml-0 pl-0 white--text"
              icon
              color="#fff"
            >
              <a :href="item.link" target="_blank">
                <v-icon color='white' size="24px">
                  {{ item.icon }}
                </v-icon>
              </a>
            </v-btn>
          </div>

          <div class="mx-auto mt-5">
            <div class="copyright white--text pt-3">
              Desenvolvido por
              <a class="font-weight-bold white--text" href="http://www.agenciakpax.com.br"
                >Kpax</a
              >
            </div>
          </div>
        </v-col>
         </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    email: "",  
    icons: [
      { icon: "mdi-facebook", link: "" },
      { icon: "mdi-whatsapp", link: "https://api.whatsapp.com/send?phone=5513981251672&text=Respondo%20assim%20que%20poss%C3%ADvel.%20%20Obrigado%20%3D)" },
      { icon: "mdi-linkedin", link: "https://www.linkedin.com/company/7798286/admin" },
      { icon: "mdi-instagram", link: "" },
    ],
  }),
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
.footer_background {
  background-image: url("~assets/imagens/home/newsletter.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  min-height: 100vh;
}
.pelicula-footer {
  background: linear-gradient(
    90deg,
    rgba(28, 28, 28, 0.57) 0%,
    rgba(33, 33, 33, 0.57) 54%,
    rgba(13, 13, 13, 0.57) 100%
  );
  min-height: 100vh;
  display: grid;
  align-items: flex-end;
}
.footer-box {
  margin-top: -90px;
  max-width: 551px;
}
.copyright {
  letter-spacing: 3px; 
  font-size: 0.78rem;
  text-align: center;
}
.footer-ul li {
  margin-bottom: 4px;
}
.footer-ul li:hover {
  color: #313131;
  cursor: pointer;
}
.footer-row {
  position: absolute;
  align-items: flex-end;
  display: grid;
  justify-content: center;
}
.footer-row {
 
  bottom: 0;  
  margin: 0 auto!important;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.copyright a:hover {
  color: var(--primary-color);
}
@media only screen and (max-width: 600px) {
.footer_background {
  background-image: url("~assets/imagens/home/newsletter-mobile.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  min-height: 100vh;
}}
</style>
