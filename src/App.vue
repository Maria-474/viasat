<template>
  <nav class="nav justify-content-center">
      <router-link to="/" class="nav-link">Обо мне</router-link>
      <router-link to="/map" class="nav-link">Карта</router-link>
      <router-link to="/timer" class="nav-link">Таймер</router-link>
  </nav>
  <router-view/>
</template>

<script lang="ts">
  import { defineComponent, onMounted } from 'vue'

  export default defineComponent({
    name: 'App',
  })
</script>

<script setup lang="ts">
import { useMyStore } from './stores/MyStore'
const store = useMyStore();

onMounted(() => {
  setInterval(() => {
    store.timer++;
    localStorage.setItem('timer', store.timer);
  }, 1000)
})
</script>

<style>
  @import '~bootstrap/dist/css/bootstrap.css';
</style>