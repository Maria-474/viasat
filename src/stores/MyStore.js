import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMyStore = defineStore('myStore', () => {
  const timer = ref();
  const timerOnLocalStorage = localStorage.getItem('timer');
  
  if (timerOnLocalStorage) {
    timer.value = localStorage.getItem('timer');
  } else {
    timer.value = 0;
  }

  const resetTimer = () => {
    timer.value = 0;
  }

  return {
    timer,
    timerOnLocalStorage,
    resetTimer,
  }
})