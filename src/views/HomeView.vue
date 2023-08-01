<template>
  <div class="container">
    <loader />
    <FirstPage />
    <SecondPage />
    <FourthPage />
    <FifthPage />
    <Carousel />
  </div>
</template>

<script>

import { defineComponent } from 'vue';

// Components
import loader from '../components/loader-page.vue';
import FirstPage from '../components/FirstPage.vue';
import SecondPage from '../components/SecondPage.vue';
import FourthPage from '../components/FourthPage.vue';
import FifthPage from '../components/FifthPage.vue';
import Carousel from '@/components/Carousel.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    loader,
    FirstPage,
    SecondPage,
    FourthPage,
    FifthPage,
    Carousel
},
});

</script>


<style>
  @import './Homeview.css';
</style>