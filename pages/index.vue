<template>
  <div>
    <!-- Di sini kita akan menambahkan kode JavaScript untuk mengalihkan pengguna -->
  </div>
</template>

<script>
export default {
  mounted() {
    // Dalam lifecycle hook `mounted()`, kita akan melakukan pengalihan
    // pengguna ke halaman login setelah halaman ini dimuat (setelah rendering).
    this.$router.push("/login");
  },
};
</script>
