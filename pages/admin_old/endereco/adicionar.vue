<template>
  <div class="dashboard">
    <v-form @submit.prevent="onAddAddress" class="default-form">
      <v-container class="w-85 mt-3 center">
        <h1 class="h3 my-5">Adicionar Endereço</h1>
        <v-container>
          <!-- 1 col -->
          <v-row>
            <v-col cols="12" sm="12" md="8">
              <v-row>
                <!-- fullName-->
                <v-col cols="12" sm="12" md="3">
                  <v-text-field
                    solo
                    flat
                    label="Nome Completo"
                    v-model="fullName"
                  ></v-text-field>
                </v-col>
                <!-- StreetAddress2-->
                <v-col cols="12" sm="12" md="6">
                  <v-text-field
                    solo
                    flat
                    label="Endereço 1"
                    v-model="streetAddress"
                  ></v-text-field>
                </v-col>
                <!-- ZipCode -->
                <v-col cols="12" sm="12" md="3">
                  <v-text-field solo flat label="CEP" v-model="zipCode">
                  </v-text-field>
                </v-col>
                <!-- City -->
                <v-col cols="12" sm="12" md="3">
                  <v-text-field solo flat label="Cidade" v-model="city">
                  </v-text-field>
                </v-col>
                <!-- State -->
                <v-col cols="12" sm="12" md="3">
                  <v-text-field solo flat label="Estado" v-model="state">
                  </v-text-field>
                </v-col>

                <!-- Phone Number -->
                <v-col cols="12" sm="12" md="3">
                  <v-text-field
                    solo
                    flat
                    label="telefone"
                    v-model="phoneNumber"
                  >
                  </v-text-field>
                </v-col>
                     <!-- securityCode -->
                <v-col cols="12" sm="12" md="3">
                  <v-text-field
                    solo
                    flat
                    label="Codigo de Segurança"
                    v-model="securityCode"
                  >
                  </v-text-field>
                </v-col>
                <!-- deliverInstructions -->
                <v-col cols="12" sm="12" md="12">
                  <v-textarea
                    solo
                    flat
                    v-model="deliverInstructions"
                    name="input-7-4"
                    label="Instruções de Envio"
                    value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
                  ></v-textarea>
                </v-col>           
                <!-- add Btn -->
                <v-col cols="12" md="6" class="mt-2">
                  <v-btn type="submit" color="primary"
                    >Adicionar</v-btn
                  >
                </v-col>
              </v-row>
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
export default {
  layout: "proDash",
  data() {
    return {
      fullName: "",
      streetAddress: "",
      city: "",
      state: "",
      zipCode: "",
      phoneNumber: "",
      deliveryInstructions: "",
      securityCode: "",
    };
  },

  methods: {
    async onAddAddress() {
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

        let response = await this.$axios.$post("/api/addresses", data);
        if (response.success) {
          this.$swal(
            "Parabens!",
            "Endereço adicionado com sucesso!",
            "success"
          );
          this.$router.push('./');
        }
      } catch (err) {
        console.log(err);
        this.$swal(
          "Ops!",
          "Endereço não foi possível adicionar esse end",
          "error"
        );
        
      }
    },
  },
};
</script>

<style>
</style>
