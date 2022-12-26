<template>
    <div class="container">
      <h1 class="h1 mb-5">Таймер</h1>
      
      <p class="h2 mb-3">{{seconds}}</p>

      <button @click="resetTimer" class="btn btn-primary">Сбросить таймер</button>
      
    </div>
  </template>
  
  <script>
  
  
  export default {
    name: 'TimerPage',
    data() {
      return {
        seconds: localStorage.getItem('timer')
      }
    },
    created() {
      this.updateTimer()
    },
    methods: {
      resetTimer() {
        this.seconds = 0
        localStorage.setItem('timer', 0)
      },
      updateTimer() {
        setInterval(() => {
          this.seconds = localStorage.getItem('timer')
        }, 500);
      }
    }
  }
  </script>