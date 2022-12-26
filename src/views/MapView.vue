<template>
  <div class="container">
    <h1 class="h1 mb-5">Карта</h1>
    <MyMap/>
  </div>
</template>
  
<script>
  import MyMap from '@/components/MyMap.vue';

  export default {
    name: 'MapPage', 
    components: {
      MyMap
    }   
  }
</script>