<template>
  <div class="inventaris-container">
    <button class="logout-button" @click="logout">Logout</button>
    <h1>Daftar Inventaris</h1>
    <ul>
      <li v-for="item in inventaris" :key="item.id">
        <div class="item-actions">
          <button class="edit-button" @click="editItem(item)">Edit</button>
          <button class="delete-button" @click="confirmDeleteItem(item)">
            Delete
          </button>
        </div>
        <div class="item-info">
          <span>{{ item.nama }}</span>
          <span>Jumlah: {{ item.jumlah }}</span>
        </div>
      </li>
    </ul>
    <form @submit.prevent="addItem" class="form-container">
      <div class="input-container">
        <input v-model="nama" type="text" placeholder="Nama Inventaris" />
        <input v-model="jumlah" type="number" placeholder="Jumlah" />
      </div>
      <button type="submit">Tambah</button>
    </form>

    <!-- Modal konfirmasi untuk menghapus item -->
    <div v-if="itemToDelete" class="modal-overlay">
      <div class="modal">
        <p>Apakah Anda yakin ingin menghapus item "{{ itemToDelete.nama }}"?</p>
        <button @click="deleteItem(itemToDelete)">Ya</button>
        <button @click="cancelDelete">Tidak</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: "auth",
  data() {
    return {
      inventaris: [
        { id: 1, nama: "Meja", jumlah: 5 },
        { id: 2, nama: "Kursi", jumlah: 10 },
        { id: 3, nama: "Lemari", jumlah: 2 },
      ],
      nama: "",
      jumlah: 0,
      itemToDelete: null,
    };
  },
  methods: {
    logout() {
      // Panggil fungsi atau aksi untuk melakukan logout di sini
      // Contoh: Anda bisa menggunakan Vuex untuk mengatur state auth atau session
      // atau memanggil aksi dari Vuex untuk melakukan logout.
      // Misalnya, jika Anda menggunakan Vuex:
      this.$store.dispatch("auth/logout");

      // Setelah logout, arahkan pengguna kembali ke halaman login
      this.$router.push("/login");
    },
    addItem() {
      const newItem = {
        id: this.inventaris.length + 1,
        nama: this.nama,
        jumlah: this.jumlah,
      };
      this.inventaris.push(newItem);
      this.nama = "";
      this.jumlah = 0;
    },
    editItem(item) {
      const namaBaru = prompt("Masukkan nama baru:", item.nama);
      if (namaBaru !== null) {
        item.nama = namaBaru;
      }
      const jumlahBaru = prompt("Masukkan jumlah baru:", item.jumlah);
      if (jumlahBaru !== null) {
        item.jumlah = parseInt(jumlahBaru);
      }
    },
    confirmDeleteItem(item) {
      this.itemToDelete = item;
    },
    deleteItem(item) {
      this.inventaris = this.inventaris.filter((i) => i.id !== item.id);
      this.itemToDelete = null;
    },
    cancelDelete() {
      this.itemToDelete = null;
    },
  },
};
</script>

<style scoped>
.logout-button {
  top: 10px;
  border: none;
  cursor: pointer;
  font-size: 100%;
}
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7); /* Memberikan transparansi */
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Tampilan modal */
.modal {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
}
.inventaris-container {
  max-width: 60%;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  font-size: 32px;
  margin-bottom: 20px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  position: relative;
}

.item-actions {
  display: flex;
  position: absolute; /* Tambahkan properti position */
  top: 0; /* Geser ke atas dengan properti top */
  right: 0; /* Geser ke kanan dengan properti right */
  margin: 5px; /* Tambahkan margin agar tidak terlalu dekat dengan tepi */
}

.edit-button,
.delete-button {
  background-color: #007bff;
  border: none;
  cursor: pointer;
  padding: 8px 16px;
  color: white;
  border-radius: 4px;
  font-size: 14px;
}
.delete-button {
  margin-left: 10%;
  background-color: #dc3545;
  color:white;
}

.modal-button {
  background-color: #007bff;
  border: none;
  cursor: pointer;
  padding: 8px 16px;
  color: white;
  border-radius: 4px;
  font-size: 14px;
}

.form-container {
  margin-top: 10%;
  display: flex;
  align-items: center;
  margin-bottom: 10%;
}

.input-container {
  display: flex;
  flex: 1;
}

input {
  max-width: 40%;
  flex: 1;
  padding: 8px 12px;
  margin-right: 1%;
}

button[type="submit"] {
  margin-top: -0.5%;
  flex: 0;
  padding: 8px 12px;
  background-color: #28a745;
}

/* Responsif */
@media screen and (max-width: 800px) {
  .inventaris-container {
    max-width: 100%;
    padding: 10px;
  }

  .input-container {
    flex-direction: column;
  }

  input {
    margin-right: 0;
    margin-bottom: 10px;
  }
}
</style>
