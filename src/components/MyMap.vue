<template>
  <YandexMap id="map" 
  :settings="settings" 
  :coordinates="center">
    <YandexMarker 
    :coordinates="marker" 
    marker-id="1"
    hint-content="Я тут">
    </YandexMarker>
  </YandexMap>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  
  export default defineComponent ({
    name: "MyMap",
  })
</script>

<script setup lang="ts">
  const settings = {
    apiKey: 'ваш API-ключ',
    lang: 'ru_RU', 
    coordorder: 'latlong', 
    debug: false, 
    version: '2.1' 
  };

  const center = [
    55.75399399999374,
    37.62209300000001 
  ];

  const marker = [
    55.67405725250785,
    37.85915736157226
  ];
</script>

<style scoped>
  #map {
    height: 500px;
  }
</style>