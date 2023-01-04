<template>
  <div class="container">
    <h1 class="h1 mb-5">Информация обо мне:</h1>
    <AboutInfo />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import AboutInfo from '@/components/AboutInfo.vue'

@Options({
  components: {
    AboutInfo,
  },
})

export default class AboutView extends Vue {}
</script>
