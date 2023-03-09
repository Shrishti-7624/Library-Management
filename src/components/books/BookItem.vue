<template>
  <v-main>
    <v-container align-center justify-center>
      <v-toolbar>
        <v-toolbar-title>Book List</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn
          v-if="role === 'admin'"
          color="deep blue"
          dark
          @click="naviagteToAddBook"
          >Add Book</v-btn
        >
      </v-toolbar>
      <v-card-text>
        <book-grid-1></book-grid-1>
      </v-card-text>
    </v-container>

    <v-container align-center justify-center>
      <v-card-text>
        <book-grid-2></book-grid-2>
      </v-card-text>
    </v-container>

    <v-container align-center justify-center>
      <book-grid-3></book-grid-3>
    </v-container>
  </v-main>
</template>

<script>
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridVue } from "ag-grid-vue";
import BookGrid1 from "./BookGrid1.vue";
import BookGrid2 from "./BookGrid2.vue";
import BookGrid3 from "./BookGrid3.vue";
import BookAction from "./BookAction.vue";
import Updatebook from "./Updatebook.vue";
export default {
  name: "BookItem",

  components: {
    AgGridVue,
    BookAction,
    Updatebook,
    BookGrid1,
    BookGrid2,
    BookGrid3,
  },
  methods: {
    naviagteToAddBook() {
      this.$router.push("/parentbook");
    },
  },
  computed: {
    role() {
      return this.$store.state.currentUser.role;
    },

    books() {
      return this.$store.state.books;
    },
  },
};
</script>
