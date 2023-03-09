<template>
  <v-app>
    <v-main>
      <app-layout></app-layout>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import AppLayout from "./components/layout/appLayout.vue";
export default {
  name: "App",
  components: {
    AppLayout,
  },
};
</script>
