<template>
  <div>
    <v-main>
      <v-container fluid fill-height align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar color="deep-purple" dark>
              <v-toolbar-title>Login Form</v-toolbar-title>
            </v-toolbar>

            <v-card-text>
              <form ref="form" @submit.prevent="login()">
                <v-text-field
                  v-model="name"
                  :class="`form-control ${errors.name ? 'is-invalid' : ``}`"
                  name="name"
                  label="Name"
                  type="text"
                  placeholder="name"
                  required
                ></v-text-field>
                <h5>{{ errors.name }}</h5>
                <v-text-field
                  v-model="password"
                  name="password"
                  label="Password"
                  type="password"
                  placeholder="password"
                  required
                ></v-text-field>
                <h5>{{ errors.password }}</h5>
                <h5>{{ errors.error }}</h5>
                <v-btn
                  type="submit"
                  class="mt-4"
                  color="deep-purple"
                  dark
                  value="log in"
                  >Login</v-btn
                >
              </form>
              <div class="my-4">New User?</div>
              <v-btn @click="navigateToSignUp">Create Your Account</v-btn>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-container>
    </v-main>
  </div>
</template>

<script>
import validateSignIn from "../validation/ValidateSignIn";

export default {
  name: "Login",
  components: {
    validateSignIn,
  },
  data() {
    return {
      name: "",
      password: "",
      errors: {},
    };
  },
  computed: {
    user() {
      this.$store.dispatch("getAllUsers");
      return this.$store.state.users;
    },
  },

  methods: {
    login() {
      let credentials = {
        name: this.name,
        password: this.password,
      };
      const { isInvalid, errors } = validateSignIn(credentials);
      if (isInvalid) this.errors = errors;
      else {
        this.$store.dispatch("getBookData");
        const index = this.user.findIndex(
          (user) => user.username === this.name
        );
        this.$store.dispatch("setLogIn", this.user[index]);
        this.$router.push("/bookitem");
        this.$store.dispatch("getUserData", credentials);
        this.errors = {};
      }
    },
    navigateToSignUp() {
      this.$router.push({ path: `/signup` });
    },
  },
};
</script>
