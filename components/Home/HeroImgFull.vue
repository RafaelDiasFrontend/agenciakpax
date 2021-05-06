<template>
  <section id="hero-img">
    <div class="pelicula">
      <v-container>   
      <h1 class='d-none'>agência de publicidade em santos</h1>
      <div class="text-center pa-4">
        <h2 class="hero-title text-center mb-3 white--text">
          Seu Projeto é com a Kpax
        </h2>
        <p class="p grey--text text--lighten-3 pb-6">
          Somos uma agência focada em Desenvolvimento & Marketing Digital.
        </p>
        <a href="#about" v-smooth-scroll="{ duration: 1500 }">
          <v-btn
            large
            color="white"            
            class="px-12 elevation-0 font-weight-bold"
          >
            Saiba Mais</v-btn
          >
        </a>
      </div>
      </v-container>
    </div>
       <span class="arrow-div d-mobile">
        <ArrowScrolldownButton :link="linkHero" />
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
      dialog: false,
      linkHero: "#about",
      DashFirstData: [
        {
          icon: "domain_disabled",
          name: "Industrial",
          route: "/orcamentos/industrial",
        },
        {
          icon: "apartment",
          text: "30",
          name: "Predial",
          route: "/orcamentos/predial",
        },
        {
          icon: "house",
          text: "15",
          name: "residencial",
          route: "/orcamentos/residencial",
        },
        {
          icon: "location_city",
          text: "99",
          name: "Arquitetura",
          route: "/orcamentos/arquitetura",
        },
      ],
    };
  },
};
</script>

<style scoped>
#hero-img {
  background-image: url("~assets/imagens/hero.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;  background-attachment: fixed;
  min-height: 101vh; 
  z-index: -999;
  margin-top: -89px;
  width: 100%;
}
.pelicula {
  width: 100vw;
  height: 101vh;
  background: linear-gradient(
    90deg,
    rgba(28, 28, 28, 0.52) 0%,
    rgba(33, 33, 33, 0.52) 54%,
    rgba(13, 13, 13, 0.52) 100%
  );
  z-index: 20;
  display: grid; 
  align-items: center;
  justify-content: center;
}


.login-card {
  padding: 3em 6em;
  background: rgba(26, 26, 26, 0) !important;
}

.hero-title {
  font-size: 2.125rem !important;
  font-weight: 800;  
  text-rendering: optimizeLegibility;  
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




/* Mobile */
@media only screen and (max-width: 600px) {
 #hero-img {
  background-image: url("~assets/imagens/hero_mobile.jpg");
}

.hero-title {
  font-size: 1.5rem !important;
  font-weight: 800;  
  text-rendering: optimizeLegibility;  
  line-height: 1.2;
  letter-spacing: 0.1em;
  color: #91b5f4;
  margin-bottom: 15px;
}
#hero-img .p {
  font-size: 0.69rem!important;
}
.v-btn {
  padding: 19px 33px!important;
  font-size: 0.73rem!important;
}
  
}
</style>
