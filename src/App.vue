<template>
  <v-app>
    <navigation></navigation>

    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navigation from './components/Navigation';

export default {
  name: 'App',
  components: {
    Navigation,
  }
};
</script>
