<template>
  <div>
    <strong>Planets</strong> <br><br>

    <div v-for="planet in planets" :key="planet.name">
      {{planet.name}} <button>details</button>
    </div>
  </div>
</template>

<script>

import swapi from '../libs/swapi';

export default {
  name: 'Planets',
  data() {
    return {
      planets: {},
    };
  },
  methods: {
    getPlanets() {
      swapi.getPlanets((data) => {
        this.planets = data.results;
      });
    },
  },
  mounted() {
    this.getPlanets();
  },
};
</script>

<style scoped>

</style>
