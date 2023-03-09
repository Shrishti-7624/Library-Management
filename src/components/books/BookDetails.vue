<template>
  <v-container>
    <v-card>
      <v-toolbar flat>
        <v-toolbar-title class="flex text-center"
          ><b>Book Details</b></v-toolbar-title
        >
      </v-toolbar>
      <v-container>
        <div v-for="(key, index) in Object.keys(currentBook)" :v-key="index">
          <v-row no-gutters>
            <v-col cols="12" sm="6">
              <v-card outlined tile class="pa-2">{{ key }}</v-card>
            </v-col>
            <v-col cols="12" sm="6">
              <v-card outlined tile class="pa-2">{{ currentBook[key] }}</v-card>
            </v-col>
          </v-row>
        </div>
        <v-col class="d-flex justify-space-between">
          <v-container v-if="getUserCurrentRole === 'user'">
            <v-btn
              v-if="isEmpty === false"
              class="mr-2"
              color="deep blue"
              dark
              @click="borrowBook()"
              >Borrow</v-btn
            >
            <v-btn
              v-if="isEmpty === false"
              color="deep pink"
              dark
              @click="issueBook()"
              >Issue</v-btn
            >
          </v-container>
          <v-container v-else>
            <v-btn color="deep pink" dark @click="editBook()">Edit Book</v-btn>
          </v-container>
          <v-btn color="deep blue" dark @click="cancel">Go back</v-btn>
        </v-col>
      </v-container>
    </v-card>
  </v-container>
</template>
<script>
export default {
  name: "BookDetails",
  beforeMount() {
    this.$store.dispatch("getBookData");
    this.$store.dispatch("getBorrowedBook");
  },

  methods: {
    editBook() {
      this.$router.push({ path: `/updatebook/${this.$route.params.id}` });
    },
    cancel() {
      this.$router.go(-1);
    },
    borrowBook() {
      this.$store.dispatch("borrowBook", this.$route.params.id);
      this.$router.go(-1);
    },
    issueBook() {
      this.$store.dispatch("issueBook", this.$route.params.id);
      this.$router.go(-1);
    },
  },
  computed: {
    currentBook() {
      return this.$store.state.books[this.$route.params.id];
    },
    isEmpty() {
      const current = this.$store.state.books[this.$route.params.id];
      return current.quantity == 0;
    },

    getUserCurrentRole() {
      return this.$store.state.currentUser.role;
    },

    books: {
      get() {
        return this.$store.getters.books;
      },
    },
  },
};
</script>
