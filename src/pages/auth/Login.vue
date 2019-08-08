<template>
  <form class="form-signin">
    <img
      class="mb-4"
      src="/docs/4.3/assets/brand/bootstrap-solid.svg"
      alt=""
      width="72"
      height="72"
    />
    <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
    <label for="inputEmail" class="sr-only">Email address</label>
    <input
      id="inputEmail"
      type="email"
      class="form-control"
      placeholder="Email address"
      required
      autofocus
    />
    <label for="inputPassword" class="sr-only">Password</label>
    <input
      id="inputPassword"
      type="password"
      class="form-control"
      placeholder="Password"
      required
    />
    <div class="checkbox mb-3">
      <label> <input type="checkbox" value="remember-me" /> Remember me </label>
    </div>
    <button class="btn btn-lg btn-primary btn-block" type="submit">
      Sign in
    </button>
    <p class="mt-5 mb-3 text-muted">&copy; 2017-2019</p>
  </form>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  computed: {
    ...mapGetters("auth", [
      "authenticating",
      "authenticationError",
      "authenticationErrorCode"
    ])
  },
  methods: {
    ...mapActions("auth", ["login"]),
    handleSubmit() {
      // Perform a simple validation that email and password have been typed in
      if (this.email != "" && this.password != "") {
        this.login({ email: this.email, password: this.password });
        this.password = "";
      }
    }
  }
};
</script>

<style scoped>
html,
body {
  height: 100%;
}

body {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
