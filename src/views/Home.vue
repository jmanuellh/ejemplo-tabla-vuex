<template>
  <div class="home">
    <agregar-producto />
    <tabla-productos />
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import TablaProductos from "@/components/TablaProductos.vue"
import AgregarProducto from "@/components/AgregarProducto.vue"

export default {
  name: 'Home',
  components: {
    HelloWorld,
    TablaProductos,
    AgregarProducto
  }
}
</script>

    AgregarProducto