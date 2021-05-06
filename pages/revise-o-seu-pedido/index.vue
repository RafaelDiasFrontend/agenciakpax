<template>
  <body>
    <!--SHIPPING ADDRESS-->
    <v-container>
      <div class="shipping-address">
        <div class="a-row">
          <h2 class="h2">Revise o seu Pedido:</h2>
          <div class="a-row a-spacing-small a-size-mini"></div>
        </div>
        <v-row class="row">
          <v-col cols="12" xl="9" md="9" sm="12">
            <div class="spc-top a-box a-spacing-small">
              <div class="a-box-inner">
                <v-row>
                  <v-col cols="12" xl="4" lg="6" sm="6">
                    <v-card flat>
                      <v-container>
                        <v-card-title
                          class="d-flex dark-color font-weight-bold"
                        >
                          Endereço de Entrega
                          <v-btn
                            class="ml-2"
                            fab
                            small
                            height="30"
                            width="30"
                            color="primary"
                          >
                            <v-icon small>edit</v-icon>
                          </v-btn>
                        </v-card-title>

                        <v-card-text>
                          <div class="a-row">
                            <div class="displayAddressDiv">
                              <!-- User's address -->
                              <ul class="pa-0 p">
                                <li class="mb-1">
                                  {{
                                    $store.state.auth.user.user.address.fullName
                                  }}
                                </li>
                                <li class="mb-1">
                                  {{
                                    $store.state.auth.user.user.address
                                      .streetAddress
                                  }}
                                </li>
                                <li class="mb-1">
                                  {{ $store.state.auth.user.user.address.city }}
                                </li>
                                <li class="mb-1">
                                  Telefone:
                                  {{
                                    $store.state.auth.user.user.address
                                      .phoneNumber
                                  }}
                                </li>
                              </ul>
                            </div>
                          </div>
                        </v-card-text>
                      </v-container>
                    </v-card>
                  </v-col>

                  <!-- Payment -->
                  <v-col cols="12" xl="4" lg="6" sm="6">
                    <v-card flat>
                      <v-container>
                        <v-card-title
                          class="d-flex dark-color font-weight-bold"
                        >
                          Metodo de Pagamento
                          <v-btn
                            class="ml-2"
                            fab
                            small
                            height="30"
                            width="30"
                            color="primary"
                          >
                            <v-icon small>edit</v-icon>
                          </v-btn>
                        </v-card-title>
                        <v-card-text>
                          <div class="a-row">
                            <ul class="no-bullet-list">
                              <li class="a-spacing-micro">
                                <span class="a-list-item">
                                  Final
                                  <span>XXX</span>
                                </span>
                              </li>
                            </ul>
                          </div>
                        </v-card-text>
                      </v-container>
                    </v-card>

                    <v-card flat max-height="112px">
                      <v-container>
                        <v-card-title
                          class="d-flex dark-color font-weight-bold"
                        >
                          Endereço de Cobrança
                          <v-btn
                            class="ml-2"
                            fab
                            small
                            height="30"
                            width="30"
                            color="primary"
                          >
                            <v-icon small>edit</v-icon>
                          </v-btn>
                        </v-card-title>
                        <v-card-text>
                          <span>Mesmo do Endereço principal</span>
                        </v-card-text>
                      </v-container>
                    </v-card>
                  </v-col>

                  <v-col cols="12" xl="4" lg="6" sm="12">
                    <v-card flat class="a-spacing-base">
                      <v-container>
                        <v-card-title class="dark-color font-weight-bold">
                          Códigos promocionais
                        </v-card-title>
                        <v-row>
                          <v-col
                            cols="12"
                            xl="8"
                            md="7"
                            sm="7"
                            class="pr-0 pb-8"
                          >
                            <v-container>
                              <v-text-field
                                type="text"
                                placeholder="Digite o seu Codigo aqui"
                              />

                              <v-btn color="primary">Aplicar</v-btn>
                            </v-container>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card>
                  </v-col>
                </v-row>
              </div>
            </div>
            <div class="spc-orders a-box">
              <div class="a-box-inner">
                <div class="shipping-group">
                  <!-- Estimated delivery -->
                  <div
                    class="a-row a-color-state a-text-bold a-size-medium a-spacing-small"
                  >
                    Entrega estimada: {{ estimatedDelivery }}
                  </div>
                  <v-row class="row">
                    <!-- Cart -->
                    <v-col
                      cols="12"
                      xl="12"
                      lg="12"
                      sm="12"
                      v-for="product in getCart"
                      :key="product._id"
                    >
                      <v-card flat class="pa-5">
                        <div class="a-row a-spacing-base">
                          <v-row>
                            <!-- Product's photo -->
                            <v-col cols="12" sm="3">
                              <img :src="product.photo" style="width: 100px" />
                            </v-col>
                            <!-- Product's Title -->
                            <v-col cols="12" sm="7">
                              <div class="a-row mb-2">
                                <strong>{{ product.title }}</strong>
                              </div>
                              <!-- Product's owner name -->
                              <div class="a-row a-size-small">
                                <!-- {{ product.owner.name }} -->
                              </div>
                              <div class="a-row">
                                <!-- Product's price -->
                                <span class="primary--text">
                                  <strong dir="ltr"
                                    >R${{
                                      product.price * product.quantity
                                    }}30</strong
                                  >
                                </span>
                              </div>
                              <div class="a-row">
                                <span class="p-small success--text"
                                  >Disponível</span
                                >
                              </div>
                              <!-- Product Quantity -->
                              <span> Quantidade: {{ product.quantity }}</span>
                            </v-col>
                            <v-col cols="12" sm="2" class="dflex align-center">
                              <v-icon color="error">delete</v-icon>
                            </v-col>
                          </v-row>
                        </div>
                      </v-card>
                    </v-col>
                    <v-col cols="12" xl="6" lg="12" sm="6">
                      <v-card flat>
                        <fieldset>
                          <v-card-title class="font-weight-bold dark-color">
                            Escolha o seu metodo de envio
                          </v-card-title>
                          <v-card-text>
                            <!-- Shipping Pac --> 

                            <input
                              type="radio"
                              name="order0"
                              @change="onChooseShipping('pac')"
                              checked="cheked"
                            />
                            <span class="a-radio-label">
                              <span class="a-color-success">
                                <strong>PAC</strong>
                              </span>
                              <span class="ml-8"
                                >R$13,98 &nbsp;-&nbsp; 7 dias
                              </span> 
                            </span>
                          <br />
                         
                              <!-- Shipping fast -->
                              <input
                                type="radio"
                                name="order0"
                                @change="onChooseShipping('sedex')"
                              />
                              <span class="a-radio-label">
                                <span class="">
                                  <strong>SEDEX</strong>
                                </span>                            
                                <span class="ml-4"
                                  >R$49,98&nbsp;-&nbsp; 3 dias                                
                              </span>       
                              </span>                 
                          </v-card-text>
                        </fieldset>
                      </v-card>
                    </v-col>
                  </v-row>
                </div>
              </div>
            </div>
          </v-col>
          <div class="col-xl-3 col-lg-4 col-md-3 col-sm-12 pl-0">
            <div class="a-box-group">
              <div class="a-box a-first">
                <div class="a-box-inner">
                  <div class="a-row a-spacing-micro">
                    <nuxt-link to="/payment">
                      <span class="a-button-place-order"
                        >Place your order in USD</span
                      >
                    </nuxt-link>
                  </div>
                  <div class="a-row a-spacing-small a-size-small a-text-center">
                    By placing your order, you agree to Amazon's
                    <a href="#">privacy notice</a>
                    and
                    <a href="#">conditions of use</a>.
                  </div>
                  <div class="a-row">
                    <div id="tfx-header">
                      <div class="a-box a-alert-info a-spacing-small">
                        <div class="a-box-inner alert-info-no-icon">
                          <strong>
                            Amazon Currency Converter is Enabled. &nbsp;
                            <a href="#" class="a-size-mini">Learn More</a>
                          </strong>
                        </div>
                      </div>
                    </div>
                    <h3 class="a-spacing-micro a-size-base">Order Summary</h3>
                    <div class="order-summary" style="font-size: 12px">
                      <div class="row">
                        <!-- Cart's total price -->
                        <div class="col-sm-6">Items:</div>
                        <div class="col-sm-6 text-right">
                          R$ {{ getCartTotalPrice }}
                        </div>
                      </div>
                      <div class="row">
                        <!-- Shipping cost -->
                        <div class="col-sm-6">Shipping & handling:</div>
                        <div class="col-sm-6 text-right">
                          R$ {{ shippingPrice }}
                        </div>
                      </div>
                      <div class="row mt-2">
                        <div class="col-sm-6"></div>
                        <div class="col-sm-6 text-right">
                          <hr />
                        </div>
                      </div>
                      <!-- Total Price with Shipping -->
                      <div class="row">
                        <div class="col-sm-6">Total Before Tax:</div>
                        <div class="col-sm-6 text-right">R$ {{ getCartTotalPriceWithShipping }} </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-6">
                          Estimated tax to be collected:
                        </div>
                        <div class="col-sm-6 text-right">USD 0.00</div>
                      </div>
                      <hr />
                      <div class="row">
                        <div class="col-sm-6">
                          <div class="a-color-price a-size-medium a-text-bold">
                            Order total:
                          </div>
                        </div>
                        <div class="col-sm-6 text-right">
                          <!-- Total Price with Shipping -->
                          <div class="a-color-price a-size-medium a-text-bold">
                            R$ {{ getCartTotalPriceWithShipping }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="a-box a-last a-color-alternate-background">
                <div class="a-box-inner">
                  <div class="a-spacing-base">
                    <div class="a-row">
                      <span>
                        <i class="fas fa-caret-down"></i>
                        <a href="#">Selected payment currency</a>
                      </span>
                      <fieldset class="pl-3">
                        <span style="margin-left: 1rem">
                          <input
                            type="radio"
                            class="no-js-hide"
                            value="transactional"
                          />
                          <span class="a-radio-label">R$</span>
                        </span>
                        <div class="a-row">
                          <span class="a-size-mini">
                            <a href="#">(Change card currency)</a>
                          </span>
                        </div>
                      </fieldset>
                    </div>
                  </div>
                  <div class="a-size-mini">
                    <div class="a-row a-spacing-mini mb-1">
                      Please note that your country may charge import duties,
                      taxes and fees that you may have to pay ahead of delivery.
                      <a href="#">Learn more</a>
                    </div>
                    <div class="a-row a-spacing-mini mb-1">
                      <a href="#">How are shipping costs calculated?</a>
                    </div>
                    <div class="a-row a-spacing-mini">
                      <a href="#">Why didn't I qualify for free shipping?</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </v-row>
        <div class="a-row a-spacing-small a-spacing-top-small">
          <p class="a-color-secondary a-size-mini">
            Do you need help? Explore our
            <a href="#">Help pages</a> or
            <a href="#">contact us</a>
          </p>
          <p class="a-color-secondary a-size-mini">
            For an item sold by Amazon.com: When you click the "Place your
            order" button, we'll send you an email message acknowledging receipt
            of your order. Your contract to purchase an item will not be
            complete until we send you an email notifying you that the item has
            been shipped.
          </p>
          <p id="state-sales-tax-info" class="a-color-secondary a-size-mini">
            Colorado, Oklahoma, South Dakota and Vermont Purchasers:
            <a href="#"
              >Important information regarding sales tax you may owe in your
              State</a
            >
          </p>
          <div class="a-color-secondary a-size-mini">
            <p class="a-color-secondary a-size-mini">
              Within 30 days of delivery, you may return new, unopened
              merchandise in its original condition. Exceptions and restrictions
              apply. See Amazon.com's
              <a href="#">Returns Policy</a>
              <br />
              <br />Go to the <a href="#">Amazon.com homepage</a> without
              completing your order.
            </p>
          </div>
        </div>
        <hr />
        <p class="a-size-small a-text-center a-color-secondary" data-testid>
          <a href="#">Conditions of Use</a> | <a href="#">Privacy Notice</a> ©
          1996-2019, Amazon.com, Inc.
        </p>
      </div>
    </v-container>
    <!--/SHIPPING ADDRESS-->
  </body>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  async asyncData({ $axios, store }) {
    try {
      let response = await $axios.$post("/api/shipment", { shipment: "pac" });
      store.commit("setShipping", {
        price: response.shipment.price,
        estimatedDelivery: response.shipment.estimated,
      });
      return {
        shippingPrice: response.shipment.price,
        estimatedDelivery: response.shipment.estimated,
      };
    } catch (err) {}
  },
  computed: {
    ...mapGetters(["getCart", "getCartLength", "getCartTotalPrice", "getCartTotalPriceWithShipping"]),
  },
  methods: {
    async onChooseShipping(shipment) {
      try {
        let response = await this.$axios.$post("/api/shipment", {
          shipment: shipment,
        });
        this.$store.commit("setShipping", {
          price: response.shipment.price,
          estimatedDelivery: response.shipment.estimated,
        });

        this.shippingPrice = response.shipment.price;
        this.estimatedDelivery = response.shipment.estimated;
      } catch (err) {}
    },
  },
};
</script>
