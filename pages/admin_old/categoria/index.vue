<template>
  <div class="dashboard">
    <v-form @submit.prevent="onAddCategory" class="default-form">
      <v-container fluid class="w-85 mt-12 center">        
        <h1 class="h3 my-5">Adicionar Categoria</h1>
        <v-container>
          <!-- 1 col -->
          <v-row>
            <v-col cols="12" sm="12" md="8">
              <v-row>
                <v-col cols="12" sm="12" md="6">
                  <v-text-field v-model="type" placeholder="Nome-da-categoria">
                  </v-text-field>
                </v-col>
                <v-col cols="12" sm="12">
                  <v-btn type="submit" color="primary"
                    >Adicionar Categoria</v-btn
                  >
                </v-col>
              </v-row>
            </v-col>

            <!-- 2 col -->
            <v-col cols="12" md="4">          
                <v-row justify="center">
                  <v-col cols="12" sm="12" md="12" lg="12">
                    <v-sheet elevation="10" rounded="xl">
                      <v-sheet
                        class="pa-3 primary text-right"
                        dark
                        rounded="t-xl"
                      >
                        <v-btn icon>
                          <v-icon>mdi-content-save-cog-outline</v-icon>
                        </v-btn>

                        <v-btn class="ml-2" icon>
                          <v-icon>mdi-check-bold</v-icon>
                        </v-btn>
                      </v-sheet>

                      <div class="pa-4">
                        <v-chip-group active-class="primary--text" column>
                          <v-chip v-for="item in categories" :key="item._id">
                            {{ item.type }}
                          </v-chip>
                        </v-chip-group>
                      </div>
                    </v-sheet>
                  </v-col>
                </v-row>
              
            </v-col>
          </v-row>
        </v-container>
      </v-container>
    </v-form>
  </div>
</template>

<script>
export default {
  layout: "proDash",
  data() {
    return {
      type: "",
    };
  },
  async asyncData({ $axios }) {
    try {
      let response = await $axios.$get("/api/categories");
      return {
        categories: response.categories,
      };
    } catch (err) {
      console.log(err);
    }
  },
  methods: {
    async onAddCategory() {
      try {
        let data = { type: this.type };
        let response = await this.$axios.$post("/api/categories", data);
        this.categories.push(data);
        this.$swal("Parabens!", "Categoria adicionada com sucesso!", "success");
      } catch {
        err;
        console.log(err);
      }
    },
  },
};
</script>

<style>
</style>
