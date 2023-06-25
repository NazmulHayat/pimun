<template>
    <section class="first">

        <v-contianer class="px-4 images py-4">
            <v-img id="main-logo" src="https://i.ibb.co/b7RQF1C/whitepis.png"></v-img>
            <v-img id="club-logo" class="pl-4" src="https://i.ibb.co/KmsSMNv/munclub.png"></v-img>
        </v-contianer>

        <v-contianer class="px-4 mx-4 pt-4 title text-white">
            <p>PRESIDENCY INTERNATIONAL MODEL UNITED NATIONS 2023</p>
        </v-contianer>

        <v-contianer class="px-4 pt-2 info text-white">
            <p>Aug 31st - Sept 2nd, 2023 | Chittagong, Bangladesh</p>
        </v-contianer>

        <Timerdamn id = "timer" />

        <v-contianer class="buttons px-4 mx-4">
            <div id="shitbtn1" class="mt-4 pt-4 pb-1 pr-4"   justify="center" align="center" >
                <v-btn id="no-bg" target='_blank' href="https://docs.google.com/forms/d/1VBV62Wsq5s_PQ_0MW5XwHAc9_zHwUQLHPJ0lU_txYxI/edit?pli=1"  elevation="24" class="bg-white text-red font-weight-bold" size="large" variant="outlined" >
                  Register as CA
                  </v-btn>
              </div>
              <div id="shitbtn2" class="mt-4 pt-4 pb-1 pl-4"   justify="center" align="center" >
                <v-btn  id="no-bg" elevation="24" class="bg-white text-red font-weight-bold" size="large" variant="outlined" >
                  Register as Delegate
                  </v-btn>
              </div>
        </v-contianer>
    </section>
    
    <div class="emne"></div>
</template>


<script>


import { defineComponent } from 'vue';

import Timerdamn from '@/components/Timerdamn.vue';

export default defineComponent({
  name: "App",
  components: {
    Timerdamn,
  },
  data() {
    return {
    };
  },
});

</script>


<style>
  @import './FirstPage.css';
</style>