// middleware/auth.js
export default function ({ store, redirect }) {
    // Cek apakah user sudah login atau belum
    if (!store.state.auth.loggedIn) {
      return redirect('/login')
    }
  }
  