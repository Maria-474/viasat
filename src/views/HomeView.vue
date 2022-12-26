<template>
  <div class="container">
    <h1 class="h1 mb-5">Информация обо мне:</h1>
    <AboutInfo />
  </div>
</template>

<script>
import AboutInfo from '@/components/AboutInfo.vue'

export default {
  name: 'HomeView',
  components: {
    AboutInfo
  }
}
</script>
