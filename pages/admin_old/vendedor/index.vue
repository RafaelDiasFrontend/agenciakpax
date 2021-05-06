<template>
  <div class="dashboard">
    <v-form @submit.prevent="onAddOwners" class="default-form">
      <v-container fluid class="w-85 mt-12 center">        
        <v-container>
          <h1 class="h3 my-5">Adicionar Vendedor</h1>
          <!-- 1 col -->
          <v-row>
            <v-col cols="12" sm="12" md="8">
              <v-row>
                <!-- Seller Name -->
                <v-col cols="12" sm="12" md="4">
                  <v-text-field
                    v-model="name"
                    placeholder="Nome do Vendedor"
                  >
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

  data() {
    return {      
        name: "",
        about: "",
        selectedFile: null,
        fileName: "",      
        owners: []
    };
  },
  async asyncData({ $axios }) {
    try {
      let response = await $axios.$get("/api/owners");
      return {
        owners: response.owners,
      };
    } catch (err) {
      console.log(err);
    }
  },
  methods: {
    uploadImage(e) {
      this.selectedFile = e;
      this.fileName = e.name;
    },
    async onAddOwners() {
      try {
        let data = new FormData();
        data.append("name", this.name);
        data.append("about", this.about);
        data.append(
          "photo",
          this.selectedFile,
          this.selectedFile.name
        );
        let response = await this.$axios.$post("/api/owners", data);
        this.owners.push(this.name);
        
        console.log(this.name);
            this.$swal(
              'Parabens!',
              'Foi adicionado um vendedor com sucesso!',
              'success'
              ); 
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style>
.dashboard {
  padding: 4em 0;
}
</style>
