<template>
  <div class="div mt-12">
    <a href="#" @click.prevent="add"> Adicionar um numero Aleatório</a>
  </div>
</template>

<script>
export default {
  methods: {
    add() {
      this.$store.commit('addNumber', Math.floor(math.random() * (100 - 1) + 1));
    },
  },
};
</script>

<style>
</style>