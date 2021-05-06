<template>
  <div class="dashboard">
    <v-form @submit.prevent="onUpdateAddress" class="default-form">
      <v-container class="mt-12">
        <h1 class="h3 my-5">Editar Endereço</h1>

        <v-container>
          <!-- 1 col -->
          <v-row>
            <v-col cols="12" sm="12" md="12">
              <v-row>
                <!-- fullName-->
                <v-col cols="12" sm="12" md="2">
                  <v-text-field
                    label="Nome"
                    v-model="fullName"
                    placeholder="Nome"
                  ></v-text-field>
                </v-col>
                <!-- City -->
                <v-col cols="12" sm="12" md="1">
                  <v-text-field
                    label="Cidade"
                    v-model="city"
                    placeholder="Cidade"
                  >
                  </v-text-field>
                </v-col>
                <!-- State -->
                <v-col cols="12" sm="12" md="1">
                  <v-text-field label="Estado" v-model="state"> </v-text-field>
                </v-col>
                <!-- ZipCode -->
                <v-col cols="12" sm="12" md="1">
                  <v-text-field
                    label="CEP"
                    v-model="zipCode"
                    placeholder="XXXXX-XXX"
                    v-mask="zipCodeMask"
                  >
                  </v-text-field>
                </v-col>
                <!-- Phone Number -->
                <v-col cols="12" sm="12" md="2">
                  <v-text-field
                    label="telefone"
                    v-model="phoneNumber"
                    v-mask="phoneMask"
                    placeholder="(XX) XXXXX-XXXX"
                  >
                  </v-text-field>
                </v-col>
                <!-- StreetAddress2-->
                <v-col cols="12" sm="12" md="3">
                  <v-text-field
                    label="Endereço"
                    placeholder="Endereço"
                    v-model="streetAddress"
                  ></v-text-field>
                </v-col>
                <!-- securityCode -->
                <v-col cols="12" sm="12" md="2">
                  <v-text-field
                    label="Codigo de Segurança"
                    v-model="securityCode"
                    placeholder="Código de segurança"
                  >
                  </v-text-field>
                </v-col>
                <!-- deliverInstructions -->
                <v-col cols="12" sm="12" md="12">
                  <v-textarea
                    filled
                    v-model="deliverInstructions"
                    label="Instruções de Envio"
                    rows="2"
                  ></v-textarea>
                </v-col>
                <!-- add Btn -->
                <v-col cols="12" md="6" class="mt-2">
                  <v-btn type="submit" color="primary"
                    >Adicionar Endereço</v-btn
                  >
                </v-col>
              </v-row>
              <!-- Arrow Back -->
              <div class='mt-2'>
              <nuxt-link to="./">
                <v-icon large color='primary' >arrow_back</v-icon>
              </nuxt-link>
              </div>
            </v-col>

            <!-- 2 col -->
            <!-- 2 col -->
          </v-row>
          <v-row> </v-row>
        </v-container>
      </v-container>
    </v-form>
  </div>
</template>

<script>
import { mask } from "vue-the-mask";
export default {
  layout: "proDash",
  directives: {
    mask,
  },
  data() {
    return {
      fullName: "",
      streetAddress: "",
      city: "",
      state: "",
      zipCode: "",
      phoneNumber: "",
      deliverInstructions: "",
      securityCode: "",
      //Masks
      phoneMask: "(##) #####-####",
      zipCodeMask: "#####-###",
    };
  },

  methods: {
    async asyncData({ $axios }) {
      let response = await $axios.$get(`/api/addresses/${id}`);
      return (response = response.data);
    },

    async onUpdateAddress() {
      try {
        let data = {
          fullName: this.fullName,
          streetAddress: this.streetAddress,
          city: this.city,
          state: this.state,
          zipCode: this.zipCode,
          phoneNumber: this.phoneNumber,
          deliverInstructions: this.deliverInstructions,
          securityCode: this.securityCode,
        };

        let response = await this.$axios.$put(
          `/api/addresses/${this.$route.params.id}`,
          data
        );

        if (response.success) {
          this.$swal("Parabens!", "Endereço editado com sucesso!", "success");
          this.fullName = "";
          this.streetAddress = "";
          this.city = "";
          this.state = "";
          this.zipCode = "";
          this.phoneNumber = "";
          this.deliverInstructions = "";
          this.securityCode = "";
          this.$router.push('./');
        }
      } catch (err) {
        console.log(err);
        this.$swal("Ops!", "não foi possível editar", "error");
      }
    },
  },
};
</script>

<style>
</style>
