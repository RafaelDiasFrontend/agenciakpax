<template>
  <!--REGISTER ADDRESS-->
  <div class="dashboard">
    <v-container class="px-15">
      <h1 class="h3 font-weight-bold">Posts</h1>
      <v-row>
        <v-col cols="12" md="12">
          <nuxt-link
            to="/admin/posts/adicionar"
            class="a-link-normal add-new-address-button"
            style="text-decoration: none"
          >
            <div class="a-box first-desktop-address-tile">
              <div class="a-box-inner a-padding-extra-large">
                <i class="far fa-plus"></i>
                <v-btn dark elevation='0'>Adicionar</v-btn>
              </div>
            </div>
          </nuxt-link>
        </v-col>

        <v-col
          cols="12"
          md="12" 
          v-for="(address, index) in addresses"
          :key="address._id"
        >
          <v-card flat>
            <v-container>
              <v-row class="address-result">
                <!-- fullName -->
                <v-col cols="12" sm="12" md="4" lg="1">
                  <label class="primary--text mb-2 font-weight-bold"
                    >Nome</label
                  >
                  <div>{{ address.fullName }}</div>
                </v-col>
                <!-- City -->
                <v-col cols="12" sm="12" md="4" lg="1">
                  <label class="primary--text mb-2 font-weight-bold"
                    >Cidade</label
                  >
                  <div>{{ address.city }}</div>
                </v-col>
                <!-- State -->
                <v-col cols="12" sm="12" md="4" lg="1">
                  <label class="primary--text mb-2 font-weight-bold"
                    >Estado</label
                  >
                  <div>{{ address.state }}</div>
                </v-col>
                <!-- Zip Code -->
                <v-col cols="12" sm="12" md="4" lg="1">
                  <label class="primary--text mb-2 font-weight-bold">CEP</label>
                  <div>{{ address.zipCode }}</div>
                </v-col>
                <!-- streedAddress  -->
                <v-col cols="12" sm="12" md="4" lg="3">
                  <label class="primary--text mb-2 font-weight-bold"
                    >ENDEREÇO</label
                  >
                  <div>{{ address.streetAddress }}</div>
                </v-col>
                <!-- streedAddress  -->
                <v-col cols="12" sm="12" md="4" lg="2">
                  <label class="primary--text mb-2 font-weight-bold"
                    >Codigo de Segurança</label
                  >
                  <div>{{ address.securityCode }}</div>
                </v-col>
                <!-- phoneNumber  -->
                <v-col cols="12" sm="12" md="4" lg="1">
                  <label class="primary--text mb-2 font-weight-bold"
                    >Telefone</label
                  >
                  <div>{{ address.phoneNumber }}</div>
                </v-col>

                <!-- Edit -->
                <v-col cols="12" sm="12" md="2" lg="2" class="actions">
                  <div>
                    <v-btn
                      fab
                      small
                      color="warning"
                      :to="`/admin/endereco/${address._id}`"
                    >
                      <v-icon>edit</v-icon>
                    </v-btn>
                    <v-btn
                      color="error"
                      @click="onDeleteAddress(address._id, index)"
                      fab
                      small
                      ><v-icon>delete</v-icon>
                    </v-btn>
                    <v-btn
                      color="success"
                      fab
                      small
                      @click="onSetDefault(address._id)"
                    >
                      <v-icon>star</v-icon></v-btn
                    >
                  </div>
                </v-col>

                <!-- Set Address as Default -->
              </v-row>
            </v-container>
          </v-card>
        </v-col>

        <v-col cols="12" sm="12"> </v-col>
      </v-row>
    </v-container>
  </div>
</template>


<script>
export default {
  layout: "proDash",

  // Get All Addresses
  async asyncData({ $axios }) {
    try {
      let testimonials = await $axios.$get("/api/testimonials");
      return {
        testimonials: testimonials.testimonials,
      };
    } catch (err) {
      console.log(err);
    }
  },
  data: () => ({
    testimonials: [],
  }),

  methods: {
    async onDeleteAddress(id, index) {
      try {
        let response = await this.$axios.$delete(`/api/addresses/${id}`);
        if (response.success) {
          this.$swal("Parabens!", "Endereço excluido com sucesso", "success");
          this.addresses.splice(index, 1);
        }
      } catch (err) {
        console.log(err);
      }
    },
    // Axios call to Update
    async onUpdateAddress(id) {
      try {
        let response = await this.$axios.$put(`/api/addresses/${id}`);
      } catch (err) {
        console.log(err);
      }
    },

    // Set Default Address
    async onSetDefault(id) {
      try {
        let response = await this.$axios.$put(`/api/addresses/set/default`, {
          id: id,
        });
        if (response.success) {
          this.$swal(
            "Parabens!",
            "Esse é o seu endereço de entrega agora!",
            "success"
          );

          await this.$auth.fetchUser();
        }
      } catch (err) {
        console.log(err);
        this.$swal("Ops!", "Ocorreu um erro. Tente novamente", "error");
      }
    },
  },
};
</script>

<style scoped>
.dashboard {
  padding: 2em 0 2em 0;
}
.actions {
  display: flex;
  justify-content: flex-end;
}
</style>