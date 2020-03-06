<template>
  <div>
    <strong>Species</strong> <br><br>

    <div v-for="(specie)  in species" :key="specie.name">
      {{specie.name}}
    </div>
  </div>
</template>

<script>

import swapi from '../libs/swapi';

export default {
  name: 'Species',
  data() {
    return {
      species: {},
    };
  },
  methods: {
    getSpecies() {
      swapi.getAllSpecies((data) => {
        this.species = data.results;
      });
    },
  },
  mounted() {
    this.getSpecies();
  },
};
</script>

<style scoped>

</style>
