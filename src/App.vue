<template>
  <nav class="nav justify-content-center">
      <router-link to="/" class="nav-link">Обо мне</router-link>
      <router-link to="/map" class="nav-link">Карта</router-link>
      <router-link to="/timer" class="nav-link">Таймер</router-link>
  </nav>
  <router-view/>
</template>

<script>
  export default {
    name: 'App',
    mounted() {
      this.getStartPoint()
      this.startTimer()
    },
    data() {
      return {
        seconds: localStorage.getItem('timer')
      }
    },
    methods: {
      getStartPoint() {
        if (window.localStorage === undefined) {
          alert('Ошибка! У Вас не работает LocalStorage!');
        } else if (localStorage.getItem('timer') > 0) {
          this.seconds = localStorage.getItem('timer')
        } else {
          localStorage.setItem('timer', 0)
        }
      },
      startTimer() {
        setInterval(() => {
          this.seconds = localStorage.getItem('timer')
          this.seconds++
          localStorage.setItem('timer', this.seconds)
        }, 1000);
      }
    }
  }
</script>

<style>
  @import '~bootstrap/dist/css/bootstrap.css';
</style>