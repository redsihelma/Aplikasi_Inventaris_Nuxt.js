<!-- pages/crud.vue -->
<template>
  <div>
    <h1>Selamat Datang di Halaman CRUD</h1>
    <p>Silakan kelola data inventaris di sini.</p>
    <h2>Daftar Inventaris</h2>
    <ul>
      <li v-for="item in inventaris" :key="item.id">
        <nuxt-link :to="`/inventaris/${item.id}`">{{ item.nama }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  middleware: "auth",
  async asyncData() {
    // Di sini, Anda bisa melakukan request ke API server untuk mendapatkan daftar inventaris
    const inventaris = await axios.get("/api/inventaris");
    return { inventaris: inventaris.data };
  },
};
</script>
