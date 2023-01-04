<template>
  <div class="container">
    <p class="h2 mb-3"> {{ store.timer }} </p>
    <button @click="store.resetTimer" class="btn btn-primary">Сбросить таймер</button>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  
  export default defineComponent ({
    name: "MyTimer",
  })
</script>

<script setup lang="ts">
import { useMyStore } from '../stores/MyStore'

const store = useMyStore();

</script>