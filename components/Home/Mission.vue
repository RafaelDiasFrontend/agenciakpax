<template>
  <section id="services">
    <v-container
      class="services_container df-width"
      data-aos="zoom-in"
      data-aos-duration="2000"
    >
      <h2 class="h2 mb-12 text-center">Nossa <b>Missão</b></h2>
      <v-row class="text-center mb-12">
        <v-col cols="12" md="4">
          <v-container class='primary--text'>            
              <img
                src="~assets/imagens/home/mission/01_mission.svg"
                class="services_img"
                alt="site"
              />
              <h3 class="services_title mb-2">Missão</h3>
              <p>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
              </p>           
          </v-container>
        </v-col>
        <v-col cols="12" md="4">
          <v-container>          
              <img
                src="~assets/imagens/home/mission/02_visao.svg"
                class="services_img"
                alt="site"
              />
              <h3 class="services_title mb-2">Visão</h3>
              <p>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
              </p>           
          </v-container>
        </v-col>
        <v-col cols="12" md="4">
          <v-container>
           <img
                src="~assets/imagens/home/mission/03_valores.svg"
                class="services_img"
                alt="site"
              />
              <h3 class="services_title mb-2">Valores</h3>
              <p>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived.
              </p>           
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {};
</script>

<style>
#services {
  padding: 3.8em 0 4.5em;
  width: 100%;
  margin: 0 auto;
  background: #ebf8ff;
}
.services_container {
  max-width: 1380px;
}

.services_img {
  width: auto;
  height: 150px !important;
  margin-bottom: 25px;
}
.services_title {
  font-size: 1.14rem;
  color: var(--primary-color);
  font-weight: 600;
}
</style>