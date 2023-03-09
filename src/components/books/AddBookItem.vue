<template>
  <div>
    <v-container align-center justify-center>
      <v-toolbar>
        <v-toolbar-title>Add Book</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <form @submit="addBook">
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
          <v-col class="d-flex justify-space-around">
            <v-btn type="submit" class="mt-4" color="deep-purple" dark
              >Add Book</v-btn
            >
            <v-btn
              type="button"
              @click="cancel"
              class="mt-4"
              color="deep red"
              dark
              >Cancel</v-btn
            >
          </v-col>
        </form>
      </v-card-text>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "AddBookItem",
  data() {
    return {
      title: "",
      ISBN: "",
      category: "",
      price: "",
      quantity: "",
    };
  },

  methods: {
    cancel() {
      this.$router.go(-1);
    },
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

    addBook(e) {
      e.preventDefault();
      const newBook = {
        title: this.title,
        ISBN: this.ISBN,
        category: this.category,
        price: this.price,
        quantity: this.quantity,
        id: Math.floor(Math.random() * 100),
      };
      this.$store.dispatch("addBookAdmin", newBook);
      this.navigateToBookItem();
      this.clearBookData();
    },
  },
 
};
</script>
