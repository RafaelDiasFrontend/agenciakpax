<template>
<div>
  <v-row v-if="numbers.length">
    <v-col  
      cols='12'
      md='1'   
      class="df-width pa-2 font-weight-bold"
      v-for="item in numbers"
      :key="item.id"
      v-text="item"
    ></v-col>
  </v-row>
  <p v-else>Iniciar</p>
  <add-number></add-number>
</div>

</template>

<script>
import AddNumber from './AddNumber'
export default {
    components: {
    AddNumber,
    },
  computed: {
    numbers() {
      return this.$store.getters.numbers;
    },
  },
};
</script>