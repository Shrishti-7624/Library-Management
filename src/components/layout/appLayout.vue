<template>
  <v-app-bar color="deep-purple" dark max-width="1200" class="mx-auto">
    <template>
      <div class="text-center">
        <v-snackbar v-model="snackbar" absolute top right color="success">
          {{ text }}
        </v-snackbar>
      </div>
    </template>

    <v-toolbar-title>Library Management System</v-toolbar-title>
    <v-col class="text-right">
      <v-btn
        class="mx-2"
        Outlined
        dark
        color="danger"
        v-if="isLoggedIn"
        @click="logout"
        >Logout</v-btn
      >
      <v-btn class="mx-2" fab small dark color="primary" v-if="isLoggedIn">{{
        user
      }}</v-btn>
      <v-btn v-else Outlined color="primary" dark @click="navigatetoLogin()">
        Login
      </v-btn>
    </v-col>
  </v-app-bar>
</template>
<script>
export default {
  name: "appLayout",
  methods: {
    navigatetoLogin() {
      if (this.$route.path != "/login") this.$router.push({ path: `/login` });
    },

    logout() {
      this.$store.dispatch("setLogOut");
      this.$router.push({ path: "/login" });
    },
  },
  data() {
    return {
      snackbar: false,
      text: "",
    };
  },
  watch: {
    isLoggedIn(newOne, oldOne) {
      if (newOne != 0) {
        this.snackbar = true;
        this.text = "log in successfully";
      } else {
        this.snackbar = false;
        this.text = "log out";
      }
    },
  },
  computed: {
    isLoggedIn() {
      return (
        this.$store.state.currentUser !== null &&
        this.$store.state.currentUser !== undefined
      );
    },

    user() {
      return this.$store.state.currentUser.username;
    },
  },
};
</script>
