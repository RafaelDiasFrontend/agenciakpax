<template>
  <div class="dashboard">
    <v-container class="px-15">
      <h1 class="h3 font-weight-bold mt-1">Add Depoimentos</h1>
      <v-form  ref="form" v-model="valid" @submit.prevent="onAddTestimonials" class="mt-2">
        <v-row>
          <v-col cols="12" sm="12" md="11">
            <v-row>
              <!-- Seller Name -->
              <v-col cols="12" sm="12" md="6" class="py-1">
                <v-text-field
                  v-model="name"
                  solo
                  flat
                  class="pa-0"
                  dense
                  placeholder="Nome do Cliente"
                >
                </v-text-field>
              </v-col>
              <!-- Avatar -->
              <v-col cols="12" md="6" class="py-1">
                <v-file-input
                  dense
                  flat
                  class="pa-0"
                  solo
                  @change="uploadImage"
                  accept="image/png, image/jpeg, image/bmp"
                  placeholder="Imagem"
                  prepend-icon="mdi-account-circle"
                ></v-file-input>
              </v-col>
              <!-- About -->
              <v-col cols="12" sm="12" md="12" class="py-0">
                <v-textarea
                  solo
                  flat
                  class="pa-0"
                  rows="3"
                  v-model="text"
                  placeholder="Depoimento"
                  counter="180"
                  :rules="textMaxRule"
                ></v-textarea>
              </v-col>
              <v-col cols="12" sm="12" class="py-1">
                <v-btn :disabled="!valid" class='white--text' type="submit" light color='#313131' elevation="">Adicionar</v-btn>
              </v-col>
            </v-row>
          </v-col>

          <!-- 2 col -->
        </v-row>
      </v-form>
    </v-container>
  </div>
</template>

<script>
export default {
  layout: "proDash",

  data() {
    return {
      valid: true,
      name: "",
      text: "",
      selectedFile: null,
      fileName: "",
      testimonials: [],
      textMaxRule: [(v) => v.length <= 180 || "Por favor não ultrapasse 180 caracteres"],
    };
  },
  async asyncData({ $axios }) {
    try {
      let response = await $axios.$get("/api/testimonials");
      return {
        testimonials: response.testimonials,
      };
    } catch (err) {
      console.log(err);
    }
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    uploadImage(e) {
      this.selectedFile = e;
      this.fileName = e.name;
    },
    async onAddTestimonials() {
      try {
        let data = new FormData();
        data.append("name", this.name);
        data.append("text", this.text);
        data.append("photo", this.selectedFile, this.selectedFile.name);
        let response = await this.$axios.$post("/api/testimonials", data);
        this.$swal(
          "Parabens!",
          "Depoimento adicionado com sucesso!",
          "success"
        );
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style>
</style>
