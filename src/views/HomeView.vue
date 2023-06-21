<template>
  <div class="container">
    <FirstPage />
    <SecondPage />
    <FourthPage />
    <FifthPage />
  </div>
</template>

<script>

import { defineComponent } from 'vue';

// Components
import FirstPage from '../components/FirstPage.vue';
import SecondPage from '../components/SecondPage.vue';
import FourthPage from '../components/FourthPage.vue';
import FifthPage from '../components/FifthPage.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    FirstPage,
    SecondPage,
    FourthPage,
    FifthPage,
  },
});

</script>


<style>
  @import './Homeview.css';
</style>