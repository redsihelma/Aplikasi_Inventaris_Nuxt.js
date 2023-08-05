<!-- pages/login.vue -->
<template>
  <div class="login-container">
    <h1>Login</h1>
    <input v-model="username" type="text" placeholder="Username" />
    <input v-model="password" type="password" placeholder="Password" />
    <button @click="login">Login</button>

    <!-- Tampilkan pesan kesalahan jika login gagal -->
    <p v-if="loginError" class="error-message">{{ loginError }}</p>

    <!-- Tampilkan pesan sukses jika login berhasil -->
    <p v-if="loginSuccess" class="success-message">{{ loginSuccess }}</p>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      username: "",
      password: "",
      loginError: "",
      loginSuccess: "",
    };
  },
  methods: {
    ...mapActions("auth", ["login"]),
    async login() {
      // Periksa apakah username dan password sesuai
      if (this.username === "admin" && this.password === "admin") {
        this.loginError = "";
        this.$store.commit("auth/SET_LOGGED_IN", true);
        this.$router.push("/inventaris");
        this.loginSuccess = "Login berhasil!";
      } else {
        this.loginError = "Username atau password salah.";
        this.loginSuccess = "";
      }
    },
  },
};
</script>

<style>
.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
}

input {
  width: 95%;
  padding: 10px;
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
}

button {
  margin-top: 10%;
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.error-message {
  color: red;
  text-align: center;
}

.success-message {
  color: green;
  text-align: center;
}

/* Responsif */
@media screen and (max-width: 600px) {
  .login-container {
    max-width: 100%;
    padding: 10px;
  }
}
</style>
