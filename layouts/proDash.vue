<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
      :dark="themeDark"
    >
      <!-- Avatar -->
      <div class="text-center white--text mt-6">
        <img :src="$store.state.auth.user.user.photo" class="avatar-menu" />
        <div
          class="h3 white--text py-1 letter-spacing-2 font-weight-bold"
        ></div>
      </div>

      <v-list dense>
        <!-- <a :href="slugs"></a> -->
        <template v-for="item in items" router :to="item.route">
          <v-row v-if="item.heading" :key="item.heading" align="center">
            <v-col cols="6">
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-col>
            <v-col cols="6" class="text-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-col>
          </v-row>

          <v-list-group
       
            v-else-if="item.children"
            :key="item.text"
            v-model="item.model"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon=""
          >
            <template v-slot:activator>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>
                    {{ item.text }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
            <v-list-item
              v-for="(child, i) in item.children"
              :key="i"
              link
              router
              :to="child.route"             
            >
              <v-list-item-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  {{ child.text }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-item v-else :key="item.text" router :to="item.route" link>
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>

      <!-- <v-list-item @click.prevent="signOut" class="logout-bottom">
        <v-list-item-action>
          <v-icon>logout</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title> Sair </v-list-item-title>
        </v-list-item-content>
      </v-list-item> -->

      <div class="mt-12">
        <v-list-item>
          <v-list-item-action>
            <v-switch
              small
              color="dark"
              v-model="themePrimary"
              @change="themeDark = !themeDark"
              class="pa-0 ma-0"
            ></v-switch>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Light</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-action>
            <v-switch
            
              color="#c9c9c9"
              v-model="themeDark"
              @change="themePrimary = !themePrimary"
              class="pa-0 ma-0"
            ></v-switch>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Dark </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </div>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      
      :dark="themeDark"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
        <div
          class="hidden-sm-and-down font-weight-bold text--lighten-3 letter-spacing-2 text-initial pr-2"
        >
          Kpax
        </div>
      </v-toolbar-title>

      <v-spacer />

      <v-toolbar-title style="width: 300px" class="ml-0 pr-10">
        <div
          class="text-right hidden-sm-and-down font-weight-bold text--lighten-3 letter-spacing-2 text-initial"
        >
          {{ $store.state.auth.user.user.name }}
        </div>
      </v-toolbar-title>
      <template>
        <div></div>
      </template>
    </v-app-bar>
    <v-main>
      <Nuxt />
    </v-main>

  </v-app>
</template>

<script>
export default {
  props: {
    source: String,
  },

  methods: {
    onLoading() {
      console.log("$store.state.auth.user.user.photo");
    },
    async signOut() {
      await this.$auth.logout();
    },
  },
  data: () => ({
    menu: [
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me 2" },
    ],

    messages: 11,
    dialog: false,
    themePrimary: true,
    themeDark: false,

    themePrimary: true,
    drawer: true,
    slugs: "", 

    items: [
      {
        icon: "dashboard",
        text: "Principal",
        name: "Currículo",
        route: "/admin",
      },
      {
        icon: "face",
        text: "Meu perfil",
        name: "Perfil",
        route: "/admin/perfil/",
      },      
      {
        icon: "star_rate",
        text: "Depoimentos",
        name: "Depoimentos",
        route: "/admin/depoimentos",
      },
      {
        icon: "image",
        text: "Portfolio",
        name: "Portfolio",
        route: "/admin/portfolio",
      },
      {
        icon: "feed",
        text: "Posts",
        name: "Posts",
        route: "/admin/posts",
      },           
      {
        icon: "mdi-cellphone-link",
        text: "Ir para o App",
        route: "/",
      },
    ],
  }),
};
</script>

<style>
.darkColor {
  background-color: #161616 !important;
}
.lightColor {
  background-color: #f3f3f3 !important;
}
.inspire {
  background-color: #6a737d !important;
}
.bg-content {
  background-color: #f1f2f7;
}
.width-95 {
  max-width: 95%;
}
.custom-padding {
  padding: 1em 1em !important;
}
.custom-card {
  padding: 3.8em 0 5.2em 0em;
}
.pa-custom {
  padding: 1.6em 1em;
}
.avatar-menu {
  width: 100px !important;
  height: 100px !important;
  border-radius: 100px;
}

</style>
