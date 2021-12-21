<template>
  <v-app-bar app elevation="0" outlined>
    <v-toolbar-title>
      <v-btn tag="router-link" :to="{name: 'home'}" text>
        Home
      </v-btn>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn tag="router-link" :to="{name: 'admin'}" text>
        <v-icon left> mdi-shield-crown-outline </v-icon> Administration
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
export default {
  name: "Navigation",
};
</script>