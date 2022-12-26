<template>
  <div class="container">    

    <div class="mb-3 row" v-for="item in data" :key="item.param">
      <label for="staticEmail" class="col-sm-3 col-form-label">{{ item.param }}</label>
      <div class="col-sm-9">
      <p class="form-control">
        {{ item.descr }}
      </p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'AboutInfo',
  data() {
    return {
      data: [
        {
          param: 'ФИО',
          descr:'Мария Матвеева'
        },
        {
          param: 'Дата рождения',
          descr:'01.02.1993 г.'
        },
        {
          param: 'Образование',
          descr:'Химический факультет МГУ имени М.В.Ломоносова'
        },
        {
          param: 'Дополнительное образование',
          descr:'Веб-разработка. Онлайн-университет Skillbox'
        },
        {
          param: 'Призвание',
          descr:'Frontend-разработчик в стриминговой платформе viju.ru'
        },
      ]
    }
  }
}
</script>