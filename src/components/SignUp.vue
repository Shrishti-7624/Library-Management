<template>
  <v-container fluid fill-height align-center justify-center>
    <v-flex xs12 sm8 md4>
      <v-card class="elevation-12">
        <v-toolbar dark color="deep-purple">
          <v-toolbar-title>Sign Up Form</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <form ref="form" @submit.prevent="registerUser">
            <v-text-field
              v-model="username"
              :class="`form-control ${errors.username ? 'is-invalid' : ``}`"
              name="username"
              label="username"
              type="text"
              placeholder="User Name"
              required
            ></v-text-field>
            <h5>{{ errors.username }}</h5>
            <v-text-field
              v-model="email"
              :class="`form-control ${errors.email ? 'is-invalid' : ``}`"
              name="email"
              label="email"
              type="text"
              placeholder="email"
              required
            ></v-text-field>
            <h5>{{ errors.email }}</h5>

            <v-text-field
              v-model="password"
              :class="`form-control ${errors.password ? 'is-invalid' : ``}`"
              name="password"
              label="password"
              type="password"
              placeholder="Password"
              required
            ></v-text-field>
            <h5>{{ errors.password }}</h5>
            <v-text-field
              v-model="confirmPassword"
              :class="`form-control ${
                errors.confirmPassword ? 'is-invalid' : ``
              }`"
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              placeholder="confirm password"
              required
            ></v-text-field>
            <h5>{{ errors.confirmPassword }}</h5>
            <v-select
              v-model="role"
              :items="items"
              label="Select your role"
            ></v-select>
            <v-col class="d-flex justify-space-around mb-6">
              <v-btn
                type="submit"
                class="mt-4"
                color="deep-purple"
                dark
                value="signup"
                >Sign Up</v-btn
              >
              <v-btn
                type="button"
                @click="cancel"
                class="mt-4"
                color="deep red"
                dark
                value="signup"
                >Cancel</v-btn
              >
            </v-col>
          </form>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-container>
</template>
<script>
import validateSignUp from "../validation/ValidateSignUp";
export default {
  name: "SignUp",
  components: {
    validateSignUp,
  },
  data() {
    return {
      items: ["user", "admin"],
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      errors: {},
      users: [],
      role: "",
    };
  },
  methods: {
    cancel() {
      this.$router.go(-1);
    },
    clearUserData() {
      this.username = "";
      this.email = "";
      this.password = "";
      this.confirmPassword = "";
    },
    navigateToLogin() {
      this.$router.push("/login");
    },
    registerUser() {
      let user = {
        username: this.username,
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword,
        role: this.role,
      };

      const { isInvalid, errors } = validateSignUp(user);
      if (isInvalid) this.errors = errors;
      else {
        this.$store.dispatch("setAllUsers", user);
        this.errors = {};
        this.clearUserData();
        this.navigateToLogin();
      }
    },
  },
 
};
</script>
