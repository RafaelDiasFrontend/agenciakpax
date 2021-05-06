<template>
  <div class="dashboard">
    <v-container class="px-15">
      <h1 class="h3 font-weight-bold mt-1">Perfil</h1>
      <v-form
        lazy-validationaction
        class="mt-2"
        @submit.prevent="updateProfile"
      >
        <!-- Name -->
        <v-row>
          <v-col col="12" md="11">
            <v-row>
              <v-col cols="12" md="4" class='py-1'>
                <v-text-field
                  flat
                  solo
                  dense
                  class="pa-0"
                  v-model="name"
                  placeholder="nome"
                  append-icon="face"
                ></v-text-field>
              </v-col>
              <!-- Email -->
              <v-col cols="12" md="4" class='py-1'>
                <v-text-field
                  flat
                  solo
                  dense
                  class="pa-0"
                  label="email"
                  v-model="email"
                  append-icon="email"
                ></v-text-field>
              </v-col>
              <!-- password -->
              <v-col cols="12" md="4" class='py-1'>                
                <v-text-field
                  flat
                  solo
                  dense
                  class="input-group--focused pa-0"
                  v-model="password"
                  :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show ? 'text' : 'password'"
                  label="senha"
                  @click:append="show = !show"
                ></v-text-field>
              </v-col>
            </v-row>

            <!-- Submit -->
            <v-btn type="submit" dark elevation='0'>Atualizar</v-btn>
          </v-col>
        </v-row>
        <!-- 2 Col -->    
      </v-form>
      <v-row>
        <v-col cols="12" sm="12" md='11'>
        <h2 class="h3 font-weight-medium mt-12">Avatar</h2>
          <v-form
            lazy-validationaction
            class="mt-2"
            @submit.prevent="updateProfile"
           
          >
            <v-row>
              <v-col col="12" md="5">
                <v-file-input
                  dense
                  solo
                  flat
                  @change="uploadImage"
                  accept="image/png, image/jpeg, image/bmp"
                  placeholder="Imagem de Perfil"
                  prepend-icon="mdi-account-circle"
                  show-size
                ></v-file-input>
              </v-col>
               <v-col col="12" md="2">
                <!-- Submit -->
                <v-btn type="submit" elevation='0' dark>Upload</v-btn>
              </v-col>
            </v-row>
            <!-- 2 Col -->
            <v-row>
              <v-col cols="12" md="4">
                <v-row justify="center">
                  <v-col cols="12" sm="12" md="12" lg="12"> </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  layout: "proDash",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      show: false,
      uploadImage: [],     
    };
  },

  async asyncData({ $axios }) {
    let profile = await $axios.$get("/api/auth/user");
    return (profile = profile.user);
  },
  methods: {
    async updateProfile() {
      let data = {
        name: this.name,
        email: this.email,
        password: this.password,
      };

      try {
        let response = await this.$axios.$put("/api/auth/user", data);
        if (response.success) {
          this.$swal(
            "Parabens!",
            "Seu dados pessoais foram atualizados com sucesso!",
            "success"
          );
          this.name = "";
          this.email = "";
          this.password = "";

          await this.$auth.fetchUser();
        }
      } catch (error) {
        console.log(err);
      }
    },
  },
};
</script>


<style>
.dashboard {
  padding: 2em 0 2em 0;
}
.btn {
  padding: 0.8em 1.9em;
  color: #fff;
}

.displayNone {
  display: none;
}

.custom-enter,
.custom-leave-to {
  opacity: 0;
}

.custom-enter-active,
.custom-leave-active {
  transition: opacity 2s;
}
</style>