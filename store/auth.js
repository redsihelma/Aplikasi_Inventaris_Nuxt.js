// store/auth.js
export const state = () => ({
  loggedIn: false, // Pastikan ini diatur menjadi true setelah login berhasil
})

export const mutations = {
  SET_LOGGED_IN(state, value) {
    state.loggedIn = value
  }
}

export const actions = {
  async login({ commit }, { username, password }) {
    // Di sini, Anda bisa melakukan request ke API login
    // Untuk contoh ini, kita hanya akan memeriksa apakah username dan password adalah 'admin'
    if (username === 'admin' && password === 'admin') {
      commit('SET_LOGGED_IN', true) // Setelah login berhasil, set state loggedIn menjadi true
      return Promise.resolve()
    } else {
      return Promise.reject(new Error('Username atau password salah.'))
    }
  },
  logout({ commit }) {
    // Lakukan proses logout
    commit('SET_LOGGED_IN', false)
    return Promise.resolve()
  }
}
