<template>
  <div>
    <table>
      <thead>
        <th>Nombre</th>
      </thead>
      <tbody
        v-for="producto in obtenerProductos"
        :key="producto.nombre"
      >
        <td>
          {{ producto.nombre }}
        </td>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters([
      'obtenerProductos'
    ])
  },
}
</script>