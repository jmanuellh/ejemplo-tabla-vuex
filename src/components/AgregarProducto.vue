<template>
  <div>
    <div>
      <input type="text" v-model="nuevoProducto.nombre">
    </div>
    <div>
      <button @click="agregarProducto(Object.assign({}, nuevoProducto))">Agregar</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      nuevoProducto: {
        nombre: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'agregarProducto'
    ])
  }
}
</script>