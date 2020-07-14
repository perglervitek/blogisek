<template>
    
    <v-app-bar
      app
      color="primary"
      dark
    >
      <router-link class="toolbar__title" to="/">
        <v-toolbar-title class="title font-weight-bold ma-2">VUE BLOG</v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      

      <v-btn to="/" class="ma-2">
        <span>Home</span>
      </v-btn>
      <v-btn to="/create" class="ma-2">
        <span>Create post</span>
      </v-btn>
      <v-btn to="/admin" class="ma-2">
        <span>Administration</span>
      </v-btn>
    </v-app-bar>
</template>

<script>
export default {
  name: "navigation",
  data(){
    return {
      appTitle: 'Awesome App',
      sidebar: false,
    }
  },
};
</script>

<style scoped>
  .toolbar__title{
    color: white;
    text-decoration: none;
  }
</style>