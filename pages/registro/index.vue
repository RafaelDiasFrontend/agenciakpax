<template>
  <div class="register_page mt-12">
    <div class="text-center py-2">
      <DefaultLogo />
    </div>
    <v-container class="mb-12">
      <v-row justify="center">
        <v-col cols="12" md="4" sm="8">
          <v-card class="elevation-3 login-card">
            <h2 class="text-center font-weight-bold py-5">Registrar</h2>
            <v-form action="" class="login-form mt-2" @submit.prevent="register">
              <!-- Name -->
              <v-text-field
                class="pa-0"
                label="Nome"
                v-model="name"
                outlined
              ></v-text-field>
              <!-- Email -->
              <v-text-field
                class="pa-0"
                label="email"
                v-model="email"
                outlined
              ></v-text-field>
              <!-- Password -->
              <v-text-field
                label="senha"
                class="pa-0"
                type="password"
                v-model="password"
                outlined
              ></v-text-field>
              <!-- Submit -->
              <v-btn type="submit" block color="primary">Registrar</v-btn>
              <div class="pt-2">
                <nuxt-link to="login" class="caption gray mt-2"
                  >Já tem uma conta?</nuxt-link
                >
              </div>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import DefaultLogo from "@/components/Logos/DefaultLogo";

export default {
  middleware: "auth",
  auth: "guest",
  components: {
    DefaultLogo,
  },
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async register() {
      try {
        let data = {
          name: this.name,
          email: this.email,
          password: this.password,
        };

        let response = await this.$axios.$post("/api/auth/signup", data);
        console.log(response);

        if (response.success) {
          this.$auth.loginWith("local", {
            data: {
              email: this.email,
              password: this.password,
            },
          });
          this.$router.push("/admin");
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style scoped>
</style>
  