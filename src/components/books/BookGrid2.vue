<template>
  <div>
    <v-toolbar>
      <v-toolbar-title>{{
        borrowedBooks.length ? "Borrowed Books" : "No books borrowed"
      }}</v-toolbar-title>
    </v-toolbar>
    <ag-grid-vue
      v-if="borrowedBooks.length"
      style="height: 450px"
      class="ag-theme-alpine"
      :columnDefs="borrowColumn"
      :rowData="borrowedBooks"
    >
    </ag-grid-vue>
  </div>
</template>
<script>
import "ag-grid-community/styles/ag-grid.css";
import { AgGridVue } from "ag-grid-vue";
import "ag-grid-community/styles/ag-theme-alpine.css";
import getBorrowColumn from "./service/GetBorrowColumn";
export default {
  name: "BookGrid2",
  components: {
    AgGridVue,
    getBorrowColumn,
  },
  beforeMount() {
    this.borrowColumn = getBorrowColumn();
    this.$store.dispatch("getCurrentUser");
    this.$store.dispatch("getBorrowedBook");
  },
  data() {
    return {
      borrowColumn: [],
      gridOptions: {},
      gridApi: null,
    };
  },
  methods: {
    isLate() {
      const books = this.$store.state.borrowedBooks;
      books.forEach((book) => {});
      return false;
    },
  },
  computed: {
    borrowedBooks: {
      get() {
        let books = this.$store.state.borrowedBooks;
        if (this.role === "user") {
          books = books.filter(
            (item) => item.user == this.$store.state.currentUser.username
          );
        }
        return books;
      },
    },
    role() {
      return this.$store.state.currentUser.role;
    },
  },
};
</script>
