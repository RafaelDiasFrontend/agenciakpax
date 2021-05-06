<template>
  <div class="dashboard">
    <v-form @submit.prevent="onAddClient" ref="form" class="default-form">
      <v-container fluid class="w-85 mt-12 center">
        <v-container>
          <h1 class="h3 my-5">Adicionar Cliente</h1>
          <!-- 1  COL -->
          <v-row>
            <v-col cols="12" sm="12" md="8">
              <v-row>
                <v-col cols="12" sm="12" md="3">
                  <v-text-field v-model="form.name" label="Nome">
                  </v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                  <v-text-field v-model="form.email" label="email">
                  </v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="3">
                  <v-text-field v-model="form.cellPhone" placeholder="Celular">
                  </v-text-field>
                </v-col>
                    <v-col cols="12" sm="12" md="3">
                  <v-text-field v-model="form.address" label="Endereço">
                  </v-text-field>
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
                          {{ item.name }}
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
      form: {
        name: "",
        email: "",
        address: "",
        car: "",
        carModel: "",
        carYear: "",
        carBrand: "",
        cpf: "",
      },
    };
  },
  async asyncData({ $axios }) {
    try {
      let response = await $axios.$get("/api/customers");
      return {
        customers: response.customers,
      };
    } catch (err) {
      console.log(err);
    }
  },
  methods: {
    async onAddClient() {
      try {
        let data = this.form;
        let response = await this.$axios.$post("/api/customers", data);
        this.customers.push(data);
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
