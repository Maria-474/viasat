<template>
  <div class="container">
    <h1 class="h1 mb-5">Карта</h1>
    <MyMap/>
  </div>
</template>
  
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import MyMap from '@/components/MyMap.vue';

@Options({
  components: {
    MyMap,
  }
})

export default class MapView extends Vue {}
</script>