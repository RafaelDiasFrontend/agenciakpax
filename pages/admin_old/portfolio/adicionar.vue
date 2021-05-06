<template>
  <div class="dashboard">
    <v-form @submit.prevent="onAddPortfolio" class="default-form">
      <v-container class="w-85 mt-3 center">
        <!-- 1 col -->
        <v-row>
          <v-col cols="12" sm="12" md="8">
            <h1 style="display: none">Adionar Portfolio</h1>
            <v-row>
              <!-- fullName-->
              <v-col cols="12" sm="12" md="4">
                <v-text-field
                  solo
                  flat
                  label="Título"
                  v-model="title"
                ></v-text-field>
              </v-col>
              <!-- companyName-->
              <v-col cols="12" sm="12" md="4">
                <v-text-field
                  solo
                  flat
                  label="Nome da Empresa"
                  v-model="companyName"
                ></v-text-field>
              </v-col>
              <!-- Category -->
              <v-col cols="12" sm="12" md="4">
                <v-text-field solo flat label="Categoria" v-model="category">
                </v-text-field>
              </v-col>
              <!-- Slug-->
              <v-col cols="12" sm="12" md="6">
                <v-text-field
                  solo
                  flat
                  label="Slug"
                  v-model="slug"
                ></v-text-field>
              </v-col>
              <!-- link-->
              <v-col cols="12" sm="12" md="6">
                <v-text-field
                  solo
                  flat
                  label="Link"
                  v-model="link"
                ></v-text-field>
              </v-col>
              <!-- shortDescription -->
              <v-col cols="12" sm="12" md="12">
                <v-textarea
                  solo
                  flat
                  v-model="shortDescription"
                  name="input-7-4"
                  label="Descrição curta"
                  rows="2"
                ></v-textarea>
              </v-col>
              <!-- Description -->
              <v-col cols="12" sm="12" md="12">
                <v-textarea
                  solo
                  flat
                  v-model="description"
                  name="input-7-4"
                  label="Descrição"
                ></v-textarea>
              </v-col>
              <!-- securityCode -->
              <v-col cols="12" sm="12" md="12">
                <v-file-input
                  @change="uploadImage"
                  accept="image/png, image/jpeg, image/bmp"
                  placeholder="Imagem"
                  flat
                  prepend-icon="mdi-paperclip"
                  solo
                  :show-size="1000"
                ></v-file-input>
              </v-col>
              <!-- add Btn -->
              <v-col cols="12" md="6" class="mt-2">
                <v-btn type="submit" color="primary">Adicionar</v-btn>
              </v-col>
            </v-row>
          </v-col>

          <!-- 2 col -->
          <!-- 2 col -->
        </v-row>
        <v-row> </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script>
export default {
  layout: "proDash",
  data() {
    return {
      title: "",
      companyName: "",
      category: "",
      slug: "",
      shortDescription: "",
      link: "",
      description: "",
      fileName: "",
      selectedFile: null,
    };
  },

  methods: {
    uploadImage(e) {
      this.selectedFile = e;
      console.log(this.selectedFile);
      this.fileName = e.name;
    },
    async onAddPortfolio() {
      let data = new FormData();
      data.append("title", this.title);
      data.append("companyName", this.companyName);
      data.append("category", this.category);
      data.append("slug", this.slug);
      data.append("link", this.link);
      data.append("shortDescription", this.shortDescription);
      data.append("description", this.description);
      data.append("photo", this.selectedFile, this.selectedFile.name);

      let result = await this.$axios
        .$post("/api/clients", data)
        .then(() => {
          this.$swal(
            "Parabens!",
            "Portfólio adicionado com sucesso!",
            "success"
          );
          this.$router.push("./");
        })
        .catch(() => {
          this.$swal("Ops!", "Não foi possível adicionar esse item", "error");
          console.log(err);
        });
    },
  },
};
</script>

<style>
</style>
