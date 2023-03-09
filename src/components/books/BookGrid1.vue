<template>
  <ag-grid-vue
    style="height: 450px"
    class="ag-theme-alpine"
    :columnDefs="columnDefs"
    :rowData="books"
  >
  </ag-grid-vue>
</template>
<script>
import "ag-grid-community/styles/ag-grid.css";
import { AgGridVue } from "ag-grid-vue";
import "ag-grid-community/styles/ag-theme-alpine.css";
import getColumnDefs from "./service/GetColumnDefs";
export default {
  name: "BookGrid1",
  components: {
    AgGridVue,
    getColumnDefs,
  },
  data() {
    return {
      columnDefs: [],

      gridOptions: {},
      gridApi: null,
    };
  },
  beforeMount() {
    this.columnDefs = getColumnDefs();
    this.$store.dispatch("getBookData");
  },
  computed: {
    books() {
      return this.$store.state.books;
    },
  },
};
</script>
