<template>
  <v-app>
    <v-main>
      <add-book-item></add-book-item>
    </v-main>
  </v-app>
</template>

<script>
import AddBookItem from "./AddBookItem.vue";
export default {
  name: "ParentBook",
  components: {
    AddBookItem,
  },
};
</script>

<style></style>
