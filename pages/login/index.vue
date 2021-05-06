<template>
  <section class="login">
    <h1 class="d-none">Login</h1>
    <v-container>
      <v-row justify="center" align='center' class="login-grid">
        <v-col cols="12" xs="8" sm="8" md="7" lg="6" xl="4">
          <v-card flat class="login-card">
            <h2 class="h2 font-weight-bold py-5">Login</h2>
            <v-form  class="login-form mt-2">
              <!-- Email -->
              <v-text-field
                label="email"
                append-icon="email"
                v-model="email"
                :rules="emailRules"
                class="mb-1"
              ></v-text-field>
              <!-- Password -->
              <v-text-field
                label="senha"
                v-model="password"
                :type="show1 ? 'text' : 'password'"
                :append-icon="show1 ? 'visibility' : 'visibility_off'"
                @click:append="show1 = !show1"
              ></v-text-field>
              <!-- Submit -->
              <v-btn @click='login' block color="primary">Login</v-btn>
            </v-form>          
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
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
      show1: false,
      email: "",
      password: "",
      // Rules
      emailRules: [
        (v) => !!v || "O email é obrigatório",
        (v) => /.+@.+\..+/.test(v) || "O email deve ser válido",
      ],
    };
  },
  methods: {
    async login() {
      this.$auth
        .loginWith("local", {
          data: {
            email: this.email,
            password: this.password,
          },
        })
        .then(() => {
          this.$swal({
            position: "top-end",
            icon: "success",
            title: "Login efetuado com sucesso",
            showConfirmButton: true,
            timer: 1000,
          });
          this.$router.push("/user-dash");
        })
        .catch(() => {
          this.$swal({
            position: "top-end",
            icon: "error",
            title: "Não foi possível fazer o login",
            showConfirmButton: false,
            timer: 2000,
          });
          console.log(err);
          this.$router.push("/login");
        });
    },
  },
};
</script>

<style scoped>
.login {
  margin-top: -89px;
  background: #3f3f3f;
 
}
.img-hero {
  width: 699px;
  height: 100vh;
}
.login-grid {
  min-height: 100vh;
 display: flex;
 align-items: center!important;
}


/* Desktop */
@media only screen and (max-width: 1390px) {
  .img-hero {
    width: 499px;
    height: auto;
  }
}
.login-card {
  padding: 5.5em 6em;
}
/* Desktop */
@media only screen and (max-width: 680px) {
  .container {
    width: 95%;
  }

  .login {
    display: flex;
  }
  .h2 {
    font-size: 1.5rem;
    text-align: center;
  }
  .img-hero {
    width: 499px;
    height: auto;
  }
  .login-card {
    padding: 4em;
  }
  .img-hero {
    display: none;
  }
}
</style>
  