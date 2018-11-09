<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <FiltersExample/>
  </div>
</template>

<script>
import FiltersExample from '@/components/FiltersExample';

export default {
  name: 'app',
  components: {
    FiltersExample,
  },
  created() {
    // Initialize default app currency
    localStorage.setItem('User/selectedCurrency', this.$constants.EUR_SYMBOL);
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
