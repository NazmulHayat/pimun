<template>
  <div class="containerr">
    <section class="frst">
        <v-col id="first-pg">
          <v-col class="mt-4" justify="center" align="center">
            <v-img id="pis-logo" :width=250 src="../assets/logo.png"></v-img>
          </v-col>  
          <v-col class="mt-4 pb-0"  justify="center"  elevation="24" align="center"> 
            <div id="parent-wola">
            <p id="wola" class="text-h6 font-weight-bold">REGISTRATION OPEN UNTIL</p>
            </div>
          </v-col>  
          <v-col class="parent"  justify="center" align="center">
            <Timerdamn id="tf"></Timerdamn>
          </v-col>
          <v-col class="fu">
            <v-row justify="center" class="pa-2">
              <div id="shitbtn" class="mt-4 pt-4 pb-1 pr-4"   justify="center" align="center" >
                <v-btn  elevation="24" class="bg-black text-white font-weight-bold" size="large" variant="tonal" >
                  REGISTER AS CA
                  <v-icon class="pl-3"
                  icon="mdi-arrow-right"
                ></v-icon></v-btn>
              </div>
              <div id="shitbtn" class="mt-4 pt-4 pb-1 pl-4"   justify="center" align="center" >
                <v-btn  elevation="24" class="bg-black text-white font-weight-bold" size="large" variant="tonal" >
                  REGISTER AS DELEGATE
                  <v-icon class="pl-3"
                  icon="mdi-arrow-right"
                ></v-icon></v-btn>
              </div>
            </v-row>
            <div class="pa-4">
                <p align="center" style="margin-bottom: auto;" class="text-subtitle mt-0 pt-0 font-weight-bold">31st Aug - 2nd Sept 2023</p>
              </div>
          </v-col>   
          <v-col class="borobhai">   
            <v-col class="abb">
                <div class="arrow bounce mt-4 pa-4">
                  <a class="fa fa-arrow-down fa-2x"  href="#e1">
                    <svg-icon type="mdi" size=50 :path="path"></svg-icon>
                  </a>
                </div>
              </v-col>
              <v-col class="abb">
                <div>
                  <p class="text-white font-weight-bold">Take a look our last International Conference </p>
                </div>
              </v-col>
          </v-col>    
        </v-col> 

      </section>
    <section class="scnd-pg" id="e1" ref="bal"> 
      <thirdpage />
    </section>
  </div>
</template>

<script>

/*
const observer = new IntersectionObserver((entries) => {
  if (entries[0].intersectionRatio <= 0) {
    console.log('ENTER')
    return
  }
  console.log(document.getElementById('cnt').endAmount  );
}, {
  root: null,
  threshold: 0.5, // set offset 0.1 means trigger if atleast 10% of element in viewport
})  

document.addEventListener("DOMContentLoaded", function(){
    
    // your instersectionobserver code here

    console.log(this.$refs);

    observer.observe(document.getElementById('e1'));
  
  
  });

  
*/

import { defineComponent } from 'vue';

import Timerdamn from '@/components/Timerdamn.vue';
//import SecondPage from '@/components/SecondPage.vue';
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiChevronDoubleUp  } from '@mdi/js';
import thirdpage from '@/components/thirdpage.vue';
//import Vue3autocounter from 'vue3-autocounter';



export default defineComponent({
  name: "App",
  components: {
    //'vue3-autocounter': Vue3autocounter,
     Timerdamn,
     //SecondPage,
     SvgIcon,
     thirdpage
  },
  data() {
    return {
      value: 250,
      path: mdiChevronDoubleUp ,
    };
  },
});

</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Arvo&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Arvo&family=Merriweather:wght@900&display=swap');


.borobhai{
  height: auto;
  display: flex;
  flex-direction: column; 

  align-items: flex-end;
}

.abb{
  text-align: center;
  align-items: flex-end;
  justify-content: center;
  padding: 0px !important;
}

#pis-logo{
  filter: brightness(130%);
  filter: contrast(100%);
}


html, body{
  overflow-y:hidden !important;
}

.frst{
  background-image: url("../assets/background-cool-compressed.jpg");
  background-repeat: no-repeat;
  background-size: auto;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  height: 100%;
  display: flex;
  justify-content: center;
  overflow-x:hidden !important;
  overflow-y: hidden !important;
  scroll-behavior: smooth;
}

.scnd-pg{
  background-color: rgb(29, 28, 28);
  background-repeat: no-repeat;
  background-size: auto;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  padding: 20px;
}



section {
  height: 100vh !important;
  display: flex;
  justify-content: center;
  scroll-snap-align: start;
  height: 100vh !important;
}

.containerr{
  overflow-y: scroll;
  overflow-x:hidden !important;
  scroll-behavior: smooth;
  height: 100vh !important;
  
}


#parent-wola{
  display: inline-block;
  padding: 5px 20px 5px 20px;
  /*
  border: 2px solid black;*/
  background-color: rgb(68, 28, 28);
  
}

#wola{
  font-family: 'Arvo', serif !important;
  text-shadow: 2px 2px #3b0303 !important;
}

#shitbtn{
  display:flex;
  justify-content: center;
  align-items: center;
}



.parent{
  padding-top: 15px !important;
}

@media (max-width: 550px) {
  .parent{
    padding-top: 0px !important;
  }

}

#tf{
  /*border: 5px solid white;*/
  color:white;
  margin: 0px !important;
  padding: 0px !important;
}


.bounce {
  -moz-animation: bounce 2s infinite;
  -webkit-animation: bounce 2s infinite;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}

</style>
