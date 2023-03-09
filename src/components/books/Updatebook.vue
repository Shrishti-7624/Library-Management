<template>
  <div>
    <v-container align-center justify-center>
      <v-toolbar>
        <v-toolbar-title>Update Book</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <form @submit="updateBook">
          <v-text-field
            v-model="title"
            name="title"
            type="text"
            placeholder="Title"
            required
          ></v-text-field>
          <v-text-field
            v-model="ISBN"
            name="ISBN"
            type="number"
            placeholder="ISBN"
            required
          ></v-text-field>
          <v-text-field
            v-model="category"
            name="category"
            type="text"
            placeholder="Category"
            required
          ></v-text-field>
          <v-text-field
            v-model="price"
            name="price"
            type="number"
            placeholder="Price"
            required
          ></v-text-field>
          <v-text-field
            v-model="quantity"
            name="quantity"
            type="number"
            placeholder="Quantity"
            required
          ></v-text-field>
          <v-col class="text-right">
            <v-btn
              type="button"
              @click="cancel"
              class="mt-4 mr-4"
              color="deep purple"
              dark
              >Cancel</v-btn
            >
            <v-btn type="submit" class="mt-4" color="deep blue" dark
              >Update Book</v-btn
            >
          </v-col>
        </form>
      </v-card-text>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Updatebook",
  beforeMount() {},
  data() {
    return {
      id: null,
      books: [],
      title: books[id].title,
      ISBN: books[id].ISBN,
      category: books[id].category,
      price: books[id].price,
      quantity: books[id].quantity,
    };
  },
  computed: {
    getBooks() {
      return this.$store.getters.books;
    },
  },
  beforeMount() {
    this.id = this.$route.params.id;
    this.books = this.getBooks;
  },
  methods: {
    clearBookData() {
      this.title = "";
      this.ISBN = "";
      this.category = "";
      this.price = "";
      this.quantity = "";
    },
    navigateToBookItem() {
      this.$router.push("/bookitem");
    },

    updateBook(e) {
      e.preventDefault();
      const newBook = {
        title: this.title,
        ISBN: this.ISBN,
        category: this.category,
        price: this.price,
        quantity: this.quantity,
        id: Math.floor(Math.random() * 100),
      };
      this.$store.dispatch("updateBook", { newBook: newBook, id: this.id });
      this.navigateToBookItem();
      this.clearBookData();
    },
    cancel() {
      this.$router.go(-1);
    },
  },
};
</script>
