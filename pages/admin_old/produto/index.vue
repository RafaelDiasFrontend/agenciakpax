<template>
  <section class="products mt-3">
    <v-form @submit.prevent="onAddProduct" class="default-form">
      <v-container class="mt-12">
        
          <v-row>
            <v-col cols="12" sm="12" md="4">
              <h1 class="a-spacing-medium dark--text">Produto</h1>       
              <v-row>
                <!--Category -->
                <v-col cols="12" sm="12" md="6">
                  <div class="k-label">Categoria</div>
                  <div>
                    <div class="v-text-field input">
                      <div class="custom-dropdown" style="height:100%:">
                        <select
                          class="pa-2 primary--text"
                          style="width: 100%"
                          v-model="categoryID"
                        >
                          <option
                            class="w-100"
                            style=" width:100%:"
                            :value="item._id"
                            v-for="item in categories"
                            :key="item._id"
                          >
                            {{ item.type }}
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                </v-col>
                <!-- Vendedor -->
                <v-col cols="12" sm="12" md="6">
                  <div class="k-label">Vendedor</div>
                  <div>
                    <div class="v-text-field input">
                      <div class="custom-dropdown" style="height:100%:">
                        <select
                          class="pa-2 primary--text"
                          style="width: 100%"
                          v-model="ownerID"
                        >
                          <option
                            class="w-100"
                            style=" width:100%:"
                            :value="item._id"
                            v-for="item in owners"
                            :key="item._id"
                          >                        
                            {{ item.name }}
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                </v-col>
                <!-- title -->
                <v-col cols="12" sm="12" md="4">
                  <v-text-field
                    flat
                    solo
                    placeholder="Título"
                    v-model="title"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="4">
                  <v-text-field
                    flat
                    solo
                    placeholder="Slug"
                    v-model="slug"
                  ></v-text-field>
                </v-col>
                <!-- Price -->
                <v-col cols="12" sm="12" md="2" >
                  <v-text-field flat solo placeholder="Preço" v-model="price">
                  </v-text-field>
                </v-col>
                <!-- stockQuantity -->
                <v-col cols="12" sm="12" md="2">
                  <v-text-field
                    flat
                    solo
                    placeholder="Qtd"
                    v-model="stockQuantity"
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="12" class='pt-0'>
                  <v-textarea
                    flat
                    rows='3'
                    solo
                    v-model="description"
                    name="input-7-4"
                    label="Descrição"
                    value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
                  ></v-textarea>
                </v-col>
                <v-col cols="12" md="6">
                  <v-file-input
                    filled
                    @change="uploadImage"
                    accept="image/png, image/jpeg, image/bmp"
                    label="Imagem do Produto"
                    prepend-icon="mdi-camera"
                  ></v-file-input>
                </v-col>
                <v-col cols="12" md="6" class="mt-2">
                  <v-btn type="submit" color="primary">Adicionar Produto</v-btn>
                </v-col>
              </v-row>
            </v-col>

            <!-- 2 col -->
            <!-- 2 col -->
            <v-col cols="12" md="7" offset='1'>
             <GetAllProducts :allProducts="products" />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="12">
              
            </v-col>
          </v-row>
        </v-container>      
    </v-form>
  </section>
</template>

<script>
import GetAllProducts from "@/components/Products/GetAllProducts";
export default {
  components: {
    GetAllProducts,
  },
  layout: "proDash",
  data() {
    return {
      categoryID: null,
      ownerID: null,
      title: "",
      slug: "",
      price: "",
      description: "",
      selectedFile: null,
      stockQuantity: "",
      fileName: "",    
      SellersList: ["1", "2", "3"],
    };
  },
  async asyncData({ $axios }) {
    try {
      let categories = $axios.$get("/api/categories");
      let owners = $axios.$get("/api/owners");
      let products = $axios.$get("/api/products");

      const [catResponse, ownerResponse, prodResponse] = await Promise.all([
        categories,
        owners,
        products,
      ]);
      console.log([catResponse, ownerResponse, prodResponse]);
      return {
        categories: catResponse.categories,
        owners: ownerResponse.owners,
        products: prodResponse.products,
      };
    } catch (err) {
      console.log(err);
    }
  },
  methods: {
    uploadImage(e) {
      this.selectedFile = e;
      console.log(this.selectedFile);
      this.fileName = e.name;
    },
    async onAddProduct() {
      let data = new FormData();
      data.append("title", this.title);
      data.append("slug", this.slug);
      data.append("price", this.price);
      data.append("description", this.description);
      data.append("ownerID", this.ownerID);
      data.append("categoryID", this.categoryID);
      data.append("stockQuantity", this.stockQuantity);
      data.append("photo", this.selectedFile, this.selectedFile.name);

      let result = await this.$axios.$post("/api/products", data);

      this.$swal("Parabens!", "Produto adicionada com sucesso!", "success");
    },
  },
};
</script>

<style>
.big {
  font-size: 1.2em;
}

.small {
  font-size: 0.7em;
}

.square {
  width: 0.7em;
  height: 0.7em;
  margin: 0.5em;
  display: inline-block;
}

/* Custom dropdown */
.custom-dropdown {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  width: 100%;
}

.custom-dropdown select {
  background-color: #fff;
  color: #313131;
  font-size: inherit;
  padding: 0.5em;
  padding-right: 2.5em;
  border: 0;
  margin: 0;
  border-radius: 3px;
  text-indent: 0.01px;
  text-overflow: "";
  -webkit-appearance: button; /* hide default arrow in chrome OSX */
}

.custom-dropdown::before,
.custom-dropdown::after {
  content: "";
  position: absolute;
  pointer-events: none;
}

.custom-dropdown::after {
  /*  Custom dropdown arrow */
  content: "\25BC";
  height: 1em;
  font-size: 0.625em;
  line-height: 1;
  right: 1.2em;
  top: 50%;
  margin-top: -0.5em;
}

.custom-dropdown::before {
  /*  Custom dropdown arrow cover */
  width: 2em;
  right: 0;
  top: 0;
  bottom: 0;
  border-radius: 0 3px 3px 0;
}

.custom-dropdown select[disabled] {
  color: rgba(0, 0, 0, 0.3);
}

.custom-dropdown select[disabled]::after {
  color: rgba(0, 0, 0, 0.1);
}

.custom-dropdown::before {
  background-color: var(--primary-color);
}

.custom-dropdown::after {
  color: rgba(0, 0, 0, 0.4);
}
.k-label {
  color: rgba(0, 0, 0, 0.87);
  font-size: 16px;
}
</style>
