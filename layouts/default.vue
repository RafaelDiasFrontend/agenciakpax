<template>
  <v-app id="kpax">
        <v-container>
      <v-app-bar       
        :clipped-left="$vuetify.breakpoint.lgAndUp"
        app
        flat
        color="transparent"
        class="align-center"
      >
        <v-toolbar-title style="width: 300px" class="ml-1 ml-md-12 pl-md-4">
          <div
            class="font-weight-bold grey--text text--lighten-3 letter-spacing-2 text-initial pr-2"
          >
            <a href="#hero-img" v-smooth-scroll="{ duration: 2000}">
              <div class="text-logo grey--text text--lighten-2">Kpax</div>
            </a>
          </div>
        </v-toolbar-title>

        <v-spacer />
        <ul class="k-nav mr-12 pr-4 grey--text text--lighten-1 hidden-sm-and-down">
          <a href="#about" v-smooth-scroll="{  duration: 1800 }">
            <li>Sobre</li>
          </a>

          <a href="#contact" v-smooth-scroll="{ duration: 1800 }">
            <li>Contato</li>
          </a>

          <a href="#portfolio" v-smooth-scroll="{ duration: 1800 }">
            <li>Portfólio</li>
          </a>
      
          <a href="#testimonials" v-smooth-scroll="{ duration: 1800 }">
            <li>Depoimentos</li>
          </a>
          <a href="#team" v-smooth-scroll="{ duration: 1800 }">
            <li>Equipe</li>
          </a>
          <a href="#footer" v-smooth-scroll="{  duration: 1800 }">
            <li>Cadastre-se</li>
          </a>
        </ul>         

        <v-app-bar-nav-icon
          class='hidden-md-and-up mr-1 mr-md-12' 
          color="white"
         
          light
          @click.stop="drawer = !drawer"
        />

        <template>
          <div class="white--text"></div>
        </template>
      </v-app-bar>    
    </v-container>    


  <v-navigation-drawer   
      class='hidden-md-and-up'
      color="white"
      right
      v-model="drawer"      
      :clipped="$vuetify.breakpoint.lgAndDown"
      app
      tile
      flat
      temporary     
      light
    >    
        <v-list dense class='pt-12'>
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
          <v-list-item v-else :key="item.text" router :to="item.route">
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
    </v-navigation-drawer>

    <v-main>
      <Nuxt />
    </v-main>
    <Footer01 />
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
import footer from "@/components/Footers/Footer01";
export default {
  props: {
    source: String,
  },
  methods: {
    async signOut() {
      await this.$auth.logout();
    },
  },
  computed: {
    ...mapGetters(["getCartLength"]),
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
    drawer: false,
    slugs: "",

    DashFirstData: [
      {
        icon: "face",
        text: "99",
        name: "Perfil",
        route: "/admin/perfil",
      },
      {
        icon: "assignment",
        text: "99",
        name: "Orca",
        route: "/admin/perfil",
      },
    ],
    items: [
      {
        icon: "landscape",
        text: "Hero",
        name: "Hero",
        route: "#hero-img",
      },
      {
        icon: "face",
        text: "Sobre",
        name: "Sobre",
        route: "#about",
      },
        {
        icon: "call",
        text: "Contato",
        name: "Contato",
        route: "#contact",
      },
         {
        icon: "flag",
        text: "Portfolio",
        name: "Portfolio",
        route: "#portfolio",
      },
           {
        icon: "stars",
        text: "Depoimentos",
        name: "Depoimentos",
        route: "#testimonials",
      },
           {
        icon: "groups",
        text: "Equipe",
        name: "Equipe",
        route: "#team",
      },
        {
        icon: "mark_email_read",
        text: "Cadastre-se",
        name: "Cadastre-se",
        route: "#footer",
      },
    ],
  }),
};
</script>

<style>

#kpax .theme--light.v-btn:hover::before {
  opacity: 0;
}

.k-nav {
  display: flex;
}
.k-nav li {
  color: #fff;
  font-weight: 600;
  justify-content: flex-start;
  margin-right: 1.8em;
  font-size: 0.825rem;
  white-space: nowrap;
}
.k-nav li:hover {
  color: #ffffff!important;
  transition: all 0.3s ease;
}
.k-nav .v-btn {
  text-transform: initial;
}
.k-nav .v-btn:hover {
  background: none;
  color: black;
}

.text-logo {
  color: var(--primary-color);
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 5px;
  font-family: var(--primary-font);
}

.theme-color-change {
  padding-top: 8.6em;
}
.darkColor {
  background-color: #161616 !important;
}
.lightColor {
  background-color: #c9c9c9 !important;
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
  padding: 5em 1em !important;
}
.custom-card {
  padding: 3.8em 0 5.2em 0em;
}
.pa-custom {
  padding: 1.6em 1em;
}
.k-footer {
  background: #ebf8ff !important;
  color: var(--primary-color) !important;
}
</style>
