<template>
    <div>
    <v-toolbar>
            <v-toolbar-title>{{ issuedBooks.length ? 'Issue Books' : 'No books issued' }}</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <ag-grid-vue v-if="issuedBooks.length" style="height: 450px" class="ag-theme-alpine"
              :columnDefs="issueColumn" :rowData="issuedBooks">
            </ag-grid-vue>
          </v-card-text>
        </div>
</template>
<script>
  import "ag-grid-community/styles/ag-grid.css";
  import { AgGridVue } from "ag-grid-vue";
import "ag-grid-community/styles/ag-theme-alpine.css";
import getIssueColumn from "./service/GetIssueColumn";
export default {
  

    name:"BookGrid3",
    components:{
        AgGridVue,
        getIssueColumn
    },
    beforeMount(){
        this.issueColumn = getIssueColumn();
         this.$store.dispatch('getCurrentUser')
        this.$store.dispatch('getIssuedBook')
    },
    data(){
        return{
     issueColumn: [],
      gridOptions: {},
      gridApi: null,
        }
    },
    computed:{
 issuedBooks: {
      get() {
        let books = this.$store.state.issuedBooks
        if (this.role === 'user') {
          books = books.filter(item => item.user == this.$store.state.currentUser.username)
        }
        return books
      }
    },
    role() {
      return this.$store.state.currentUser.role
    },
    }

}