import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productos: [
      {
        nombre: ''
      }
    ]
  },
  getters: {
    obtenerProductos: state => state.productos
  },
  mutations: {
    AGREGAR_PRODUCTO: (state, producto) => state.productos.push(producto)
  },
  actions: {
    agregarProducto: ({commit}, producto) => {
      console.log("entro a Acction agregarProducto")
      commit('AGREGAR_PRODUCTO', producto)
    }
  },
  modules: {
  }
})
