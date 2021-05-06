<template>
  <section class='dashboard'>
    <v-container class='px-8 py-5'>
      <v-row class="fast-data">
        <!-- total products -->
        <v-col cols="12" md="3">
          <v-card flat class="pa-5">
            <div class="d-flex justify-space-between align-center">
              <span class="count-title font-weight-bold">
              </span>
              <v-icon size="25" color="black">flag</v-icon>
            </div>
          </v-card>
        </v-col>
        <!-- Total Testimonials -->
        <v-col cols="12" md="3">
          <v-card flat class="pa-5">
            <div class="d-flex justify-space-between align-center">
              <span class="count-title font-weight-bold"></span>
              <v-icon size="25" color="black">star_rate</v-icon>
            </div>
          </v-card>
        </v-col>
        <!-- total Users -->
        <v-col cols="12" md="3">
          <v-card flat class="pa-5">
            <div class="d-flex justify-space-between align-center">
              <span class="count-title font-weight-bold"></span>
              <v-icon size="25">add_photo_alternate</v-icon>
            </div>
          </v-card>
        </v-col>
        <!-- Total Stores-->
        <v-col cols="12" md="3">
          <v-card flat class="pa-5">
            <div class="d-flex justify-space-between align-center">
              <span class="count-title font-weight-bold"></span>
              <v-icon size="25">add_business</v-icon>
            </div>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="9">
          <v-card flat>
            <!-- <v-data-table 
             hide-default-footer
              :headers="headers"
              :items="desserts"            
            >
              <template v-slot:item.calories="{ item }">
                <v-chip :color="getColor(item.calories)" dark>
                  {{ item.calories }}
                </v-chip>
              </template>
            </v-data-table> -->
          </v-card>
        </v-col>

        <v-col cols="12" md="3">
          <v-card flat class="pa-12 text-center"> </v-card>
        </v-col>
        <v-container> </v-container>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  layout: "proDash",
  middleware: "auth",
  data() {
    return {
     
    }
  }}
  </script>

  <style>
  .dashboard {
    min-height: 100vh;
    background: rgb(245, 245, 245)!important;
  }
  </style>