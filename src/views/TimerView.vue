<template>
  <div class="container">
    <h1 class="h1 mb-5">Таймер</h1>
    <MyTimer/>    
  </div>
</template>
  
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import MyTimer from '@/components/MyTimer.vue';

@Options({
  components: {
    MyTimer
  }
})

export default class TimerView extends Vue {}
</script>