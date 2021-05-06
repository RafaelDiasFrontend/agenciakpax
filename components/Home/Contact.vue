<template>
  <section id="contact">
    <div class="pelicula-contact">
      <v-container>
        <v-row>
          <v-col cols="10" md="4"  xl='3' class='ml-xl-15 mx-xs-auto'>
            <h2 class="h2 mb-10 text-center text-md-left white--text">Entre em <b>Contato</b></h2>
              <v-form @submit.prevent="postContact">
                <v-text-field
                  dark
                  outlined
                  label="nome"
                  v-model="name"                
                ></v-text-field>
                <v-text-field
                  label="email"
                  v-model="email"
                  dark
                  outlined
                ></v-text-field>
                <v-text-field
                  label="assunto"
                  v-model="subject"
                  dark
                  outlined
                ></v-text-field>
                <v-textarea
                  dark
                  outlined
                  v-model="message"
                  name="input-7-4"
                  label="mensagem"
                  value
                  auto-grow
                ></v-textarea>
                <v-btn type="submit" large block class='font-weight-bold'>Enviar Mensagem</v-btn>
              </v-form>
          </v-col>
        </v-row>
      </v-container>    
     </div>
     <span class="arrow-div d-mobile pty">
      <ArrowScrolldownButton :link="contactLink" />
    </span>
  </section>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      subject: "",
      message: "",
      contactLink: "#portfolio",
    };
  },
  methods: {
    async postContact() {
      try {
        let data = {
          name: this.name,
          email: this.email,
          subject: this.subject,
          message: this.message,
        };

        let response = await this.$axios.$post("/api/contacts", data);
        console.log(response);

        if (response.success) {
          this.$auth.loginWith("local", {
            data: {
              name: this.name,
              email: this.email,
              subject: this.subject,
              message: this.message,
            },
          });
          this.$swal(
            "Parabens!",
            "Sua Mensagem foi enviada com sucesso, em breve entraremos em contato =)",
            "success"
          );
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>


<style scoped>
#contact {
  background-image: url("~assets/imagens/home/contato_kpax.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  min-height: 100vh;
  z-index: -999;
  width: 100%;
}
.pelicula-contact {
  width: 100vw;
  min-height: 100vh;
  background: linear-gradient(
    90deg,
    rgba(28, 28, 28, 0.55) 0%,
    rgba(33, 33, 33, 0.55) 54%,
    rgba(13, 13, 13, 0.55) 100%
  );
  z-index: 20;
  display: grid; 
  align-items: center; 
}

.hero-title {
  padding-top: 4.5em !important;
  max-width: 580px !important;
  font-size: 2.125rem !important;
  font-weight: 800;
  letter-spacing: 0.8px;
  text-rendering: optimizeLegibility;

  /* color: #ededede6!important; */
}
.login-card {
  padding: 3em 6em;
  background: rgba(26, 26, 26, 0) !important;
}

.hero-title {
  line-height: 1.2;
  letter-spacing: 0.1em;
  color: #91b5f4;
  margin-bottom: 15px;
}
.hero-grid {
  padding-top: 18em;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}
.hero-subtitle {
  font-size: 17px;
  line-height: 1.55;
  letter-spacing: 0.1em;
  font-weight: 400;
  color: #82a9f2;
  margin-left: 5px;
  margin-bottom: 35px;
}
.img-hero {
  width: 840px;
  height: auto;
}
.animation-1 {
  animation-name: moveInLeft;
  animation-duration: 1.9s;
  animation-timing-function: ease-out;
}

.animation-2 {
  animation: moveInRight 1.9s ease-out;
}

.grid-slide-text {
  display: grid;
  justify-content: left;
  align-content: center;
  grid-gap: 2em;
  text-align: left;
  max-width: 900px;
  margin-left: 15%;
  height: 83vh;
  align-items: center;
}

.grid-slide-text {
  display: grid;
  justify-content: left;
  align-content: center;
  grid-gap: 2em;
  text-align: left;
  max-width: 900px;
  margin-left: 15%;
  height: 83vh;
  align-items: center;
}

.btn-custom {
  height: 53px !important;
  border-radius: 100px;
  width: 189px;
  background-color: var(--primary-color) !important;
  border-color: var(--primary-color) !important;
}

.span-custom {
  font-size: 1.5rem;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}
.arrow-div {
  margin-top: -90px!important;
  display: grid;
  justify-content: center;
  align-content: center;
}

.custom-color {
  color: rgb(212, 212, 212);
}

.width-500 {
  max-width: 550px;
}

/* Desktop */
@media only screen and (max-width: 1370px) {
  .p-custom {
    font-size: 1rem;
    line-height: 0.6;
    font-weight: 400;
  }

  .h1-custom {
    font-size: 1.5rem;
  }

  .btn-custom {
    height: 49px !important;
    font-size: 12px;
    width: 140px;
  }
}

/* large Desktop */
@media only screen and (max-width: 2600px) {
  .intro {
    /* background-image: url('~assets/imagens/integrace_banner-large.png'); */
    background-position: center;
    background-size: cover;
  }
}

@media only screen and (max-width: 900px) {
  .h1-custom {
    font-size: 1.4rem;
  }

  .width-500 {
    max-width: 270px;
  }
}

/* Mobile */
@media only screen and (max-width: 600px) {
  #contact {
  background-image: url("~assets/imagens/home/contato_kpax-mobile.jpg"); 
}
}
</style>


