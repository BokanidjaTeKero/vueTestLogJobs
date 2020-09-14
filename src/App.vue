<template>
  <div id="app" class="main-page">
    <div>
      <div v-if="!imLogedIn">
        <login-page></login-page>
      </div>
      <div v-else>
        <app-header></app-header>
        <jobs-page></jobs-page>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Jobs from './components/Jobs.vue';
import Login from './components/Login.vue';

export default {
  name: 'App',
  components: {
    'app-header': Header,
    'jobs-page': Jobs,
    'login-page': Login
  },
  computed: {
    imLogedIn(){
            return this.$store.state.imLogedIn
        }
  }
}
</script>

<style lang="scss">
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      background-color: rgba(144, 202, 202, 0.534);
    }
</style>
