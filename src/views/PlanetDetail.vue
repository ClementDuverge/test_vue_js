<template>
    <div>
      <h1>{{detail.name}}</h1>
      {{detail.climate}}
    </div>
</template>

<script>
import swapi from '../libs/swapi';

export default {
  name: 'PlanetDetail',
  data() {
    return {
      detail: {
        name: '',
        climate: '',
      },
    };
  },
  methods: {
    getPlanetDetail() {
      swapi.getPlanet(1, (data) => {
        this.detail = data;
      });
    },
  },
  mounted() {
    this.getPlanetDetail();
  },
};
</script>

<style scoped>

</style>
