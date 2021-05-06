<template>
  <div class="dashboard">
    <v-form @submit.prevent="onAddOwners" class="default-form">
      <v-container fluid class="w-85 mt-12 center">
        <v-container>
          <h1 class="h3 my-5">Classificação</h1>
          <!-- 1 col -->
          <v-row>
            <v-col cols="12" md="12">
              <v-card :loading="loading" class="my-12" max-width="374">
                <template slot="progress">
                  <v-progress-linear
                    color="deep-purple"
                    height="10"
                    indeterminate
                  ></v-progress-linear>
                </template>

                <v-img                 
                  height="250"
                  src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                ></v-img>

                <v-card-title></v-card-title>

                <v-card-text>
                  <v-row align="center" class="mx-0">
                    <v-rating
                      :value="4.5"
                      color="amber"
                      dense
                      half-increments
                      readonly
                      size="14"
                    ></v-rating>

                    <div class="grey--text ml-4">4.5 (413)</div>
                  </v-row>

                  <div class="my-4 subtitle-1">$ • Italian, Cafe</div>

                  <div>
                    Small plates, salads & sandwiches - an intimate setting with
                    12 indoor seats plus patio seating.
                  </div>
                </v-card-text>

                <v-divider class="mx-4"></v-divider>

                <v-card-title>Tonight's availability</v-card-title>

                <v-card-text>
                  <v-chip-group
                    v-model="selection"
                    active-class="deep-purple accent-4 white--text"
                    column
                  >
                    <v-chip>5:30PM</v-chip>

                    <v-chip>7:30PM</v-chip>

                    <v-chip>8:00PM</v-chip>

                    <v-chip>9:00PM</v-chip>
                  </v-chip-group>
                </v-card-text>

                <v-card-actions>
                  <v-btn color="deep-purple lighten-2" text @click="reserve">
                    Reserve
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>

            <v-col cols="12" sm="12" md="8">
              <v-row>
                <!-- Seller Name -->
                <v-col cols="12" sm="12" md="4">
                  <v-text-field v-model="name" placeholder="Nome do Vendedor">
                  </v-text-field>
                </v-col>
                <!-- About -->
                <v-col cols="12" sm="12" md="4">
                  <v-text-field v-model="about" placeholder="Resumo">
                  </v-text-field>
                </v-col>
                <!-- Avatar -->
                <v-col cols="12" md="4">
                  <v-file-input
                    @change="uploadImage"
                    accept="image/png, image/jpeg, image/bmp"
                    placeholder="Imagem de Perfil"
                    prepend-icon="mdi-account-circle"
                  ></v-file-input>
                </v-col>
                <v-col cols="12" sm="12">
                  <v-btn type="submit" color="primary"
                    >Adicionar Vendedor</v-btn
                  >
                </v-col>
              </v-row>
            </v-col>

            <!-- 2 col -->
          </v-row>
        </v-container>
      </v-container>
    </v-form>
  </div>
</template>

<script>
export default {
  layout: "proDash",

  async asynData({ $axios, params }) {
    try {
      let response = await $axios.$get(`/api/products/${params.id}`);
      return {
        product: response.product,
      };
    } catch (err) {
      console.log(err);
    }
  },
};
</script>

  