<template>
  <section id="about">
    <div class="pelicula-about d-flex align-center">
      <v-container>
        <v-row class='d-flex align-center'>
          <v-col cols="10" sm='12' md="4" xl="3" class="ml-md-15 d-flex flex-column justify-center mx-xs-auto">
            <div class="k-title mb-5 white--text">
              Juntos Podemos ir Mais longe
            </div>
            <p class="text-left p grey--text text--lighten-3 pb-5">
              Agência kpax é uma agência digital focada em desenvolvimento web.
              Trabalhamos para deixar a sua marca no topo, contamos com a ajuda
              de nosso time, e de nossos clientes para chegarmos a resultados
              magnificos. Nós gostamos de clientes que querem fazer diferença no
              mercado.
            </p>           
          </v-col>
        </v-row>        
      </v-container>        
    </div>
     <span class="arrow-div d-mobile">
        <ArrowScrolldownButton :link="linkAbout" />
      </span> 
  </section>
</template>
<script>
import ArrowScrolldownButton from "@/components/Buttons/ArrowScrolldownButton";
export default {
  components: {
    ArrowScrolldownButton,
  },
  data() {
    return {
      linkAbout: "#contact"
    }
  }
}
</script>


<style scoped>
#about {
  background-image: url("~assets/imagens/home/kpax_about.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  min-height: 100vh;
  z-index: -999;
  width: 100%;
}
.pelicula-about {
  width: 100vw;
  min-height: 100vh;
  background: linear-gradient(
    90deg,
    rgba(28, 28, 28, 0.55) 0%,
    rgba(33, 33, 33, 0.55) 54%,
    rgba(13, 13, 13, 0.55) 100%
  );
  z-index: 20;
}
.arrow-absolute {
  position: absolute;
  bottom: 0; 
 
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
#about {
  background-image: url("~assets/imagens/home/kpax_about-mobile.jpg");
}
  .btn-custom {
    width: 105px !important;
    height: 39px !important;
    margin-left: auto !important;
    margin-right: auto !important;
    margin-top: 7px !important;
  }

  .btn_custom-text {
    font-size: 0.6rem !important;
  }
  .span-custom {
    font-size: 0.75rem !important;
    letter-spacing: 0.2px;
    text-transform: uppercase;
    font-weight: 700;
    color: var(--secondary-color) !important;
  }
  .grid-slide-text {
    display: grid;
    justify-content: center;
    align-content: end;
    grid-gap: 0;
    text-align: center !important;
    max-width: 420px;
    margin-left: 0;
    height: 84vh;
    align-items: center;
  }

  .h1-custom {
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    font-size: 1.39rem;
    text-align: center !important;
  }

  .mobile-card {
    width: 220px !important;
  }
}
</style>