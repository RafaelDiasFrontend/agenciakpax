<template>
<div class="dashboard">    
    <v-container fluid class="w-85 mt-3 center">       
          <v-select
          :items="items"
          filled
          label="Filled style"
        ></v-select>
    </v-container>

</div>
</template>

<script>

export default {
    layout: 'proDash',  
    }

</script>

<style scoped>

</style>
