<template>
  <div class="dashboard">
    <v-form @submit.prevent="onUpdateProduct" class="default-form">
      <v-container fluid class="w-85 mt-3 center">        
        <v-container>
        <h1 class="h3 my-5">Atualizar Produto</h1>
          <!-- 1 col -->
          <v-row>
            <v-col cols="12" sm="12" md="8">
              <v-row>
                <v-col cols="12" sm="12" md="6">
                  <label>Categoria</label>
                  <div class="field">
                    <div class="control">
                      <div class="select is-fullwidth text-center">
                        <select v-model="categoryID">                          
                          <option
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
                <v-col cols="12" sm="12" md="6">
                  <label>Vendedor</label>
                   <div class="field">
                    <div class="control">
                      <div class="select is-fullwidth text-center">
                        <select  v-model="ownerID">                          
                          <option
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
                <v-col cols="12" sm="12" md="6">
                  <label>Título do Produto</label>
                  <v-text-field v-model="title" :value="product.title" label="Regular" filled> </v-text-field>
                </v-col>
                <!-- Price -->
                <v-col cols="12" sm="12" md="6">
                  <label>Preço</label>
                  <v-text-field label="Regular" v-model="price" filled :value="product.price"> </v-text-field>
                </v-col>
                  <!-- stockQuantity -->
                <v-col cols="12" sm="12" md="6">
                  <label>Estoque</label>
                  <v-text-field label="Regular" v-model="stockQuantity" filled :value="product.stockQuantity"> </v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="12">
                  <label>Descrição</label>
                  <v-textarea
                    filled
                    :value="product.description"
                    v-model="description"
                    name="input-7-4"
                    label="Filled textarea"                 
                  ></v-textarea>
                </v-col>
                <v-col cols="12" md="12">
                  <label for="">Imagem do Produto</label>
                   <v-file-input                  
                    filled
                    @change="uploadImage"
                    accept="image/png, image/jpeg, image/bmp"
                    placeholder="Trocar Avatar"
                    prepend-icon="mdi-camera"
                  ></v-file-input>             
                </v-col>
                <v-col cols="12" sm="12">
                  <v-btn type='submit' color="primary">Adicionar Produto</v-btn>
                </v-col>
              </v-row>
            </v-col>
            <!-- 2 col -->
            <v-col cols="12" md="4">
              <v-card class="pa-5"> Nome do Produto: <span class='font-weight-bold'>{{ product.title }}</span>
        <v-icon>fas fa-circle-notch fa-spin</v-icon>
         </v-card>
            </v-col>
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
        categoryID: null,
        ownerID: null,
        title: "",
        price: "",
        description: "",
        selectedFile: null,
        stockQuantity: "",
        fileName: "",      
      categories: [],
      SellersList: ["1", "2", "3"],
     
    };
  },
  methods: {
    uploadImage(e) {
      this.selectedFile = e;
      console.log(this.selectedFile);
      this.fileName = e.name;
    },

    async onUpdateProduct() {
      let data = new FormData();
      data.append("title", this.title);
      data.append("price", this.price);
      data.append("description", this.description);
      data.append("ownerID", this.ownerID);
      data.append("categoryID", this.categoryID);
      data.append("stockQuantity", this.stockQuantity);
      data.append("photo", this.selectedFile, this.selectedFile.name);

      let result = await this.$axios.$put(
          `products/${this.$route.params.id}`, data
          );     
    }
  },

  async asyncData({ $axios, params }) {
    try {
      let categories = $axios.$get("/api/categories");
      let owners = $axios.$get("/api/owners");
      let product = $axios.$get(
          `products/${params.id}`
          );
      const [catResponse, ownerResponse, productResponse] = await Promise.all([
        categories,
        owners,
        product
      ]);
      console.log(productResponse);
      return {
        categories: catResponse.categories,
        owners: ownerResponse.owners,
        product: productResponse.products
      };
    } catch (err) {
      console.log(err);
    }
  },
};
</script>

<style>
.dashboard {
  padding: 5em 0;
}
</style>
