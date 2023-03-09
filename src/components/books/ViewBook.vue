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
    cancel() {
      this.$router.go(-1);
    },
  },
  computed: {
    currentBook() {
      return this.$store.state.books[this.$route.params.id];
    },

    books: {
      get() {
        return this.$store.getters.books;
      },
    },
  },
};
</script>
