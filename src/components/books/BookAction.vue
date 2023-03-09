<template>
  <div>
    <span>
      <v-btn class="ma-2" color="deep blue" small dark @click="viewBook(params, books)">View</v-btn>
      <v-btn v-if="getCurrentUserRole === 'admin' && params.colDef.headerName == 'book'" class="ma-2" color="deep blue" small dark
        @click="editBook(params, books)">Edit</v-btn>
      <v-btn v-if="getCurrentUserRole === 'admin' && params.colDef.headerName == 'book'" class="ma-2" color="deep purple" small dark
        @click="removeBook(params, books)">Delete</v-btn>
    </span>
  </div>
</template>
<script>
export default {
  name: "BookAction",
  computed: {
    books: {
      get() {
        return this.$store.getters.books;
      },
    },
    getCurrentUserRole() {
      return this.$store.state.currentUser.role
    },
  },
  methods: {
   
    viewBook(params, books) {
      let index = 0
      switch (params.colDef.headerName) { 
        case 'book':
          index = books.findIndex(item => item.id === params.data.id)
          if(index != -1) this.$router.push({ path: `/bookdetails/${index}` })
          else alert('Out of Stock')
          break;
        case 'borrowedBook':
          const borrowedBooks = this.$store.state.borrowedBooks
          this.issueBook(borrowedBooks, params, books)
          break;
        case 'issuedBook':
          const issuedBooks = this.$store.state.issuedBooks
          this.issueBook(issuedBooks, params, books)
          break;
      }
    },
    issueBook(data, params, books) {
      const idx = data.findIndex(item => item.id === params.data.id)
      const index = books.findIndex(item => item.title === data[idx].title)
      this.$router.push({ path: `/viewbook/${index}` })
    },
 
    removeBook(params, books) {
      const index = books.findIndex(item => item.id === params.data.id)
      const confirmDeletion = confirm("Are you sure to delete this book?")
      if (confirmDeletion) this.$store.dispatch('deleteBook', index)
    },
 
    editBook(params, books) {
      const index = books.findIndex(item => item.id === params.data.id)
      this.$router.push({ path: `/updatebook/${index}` });
    }
  }
}
</script>
