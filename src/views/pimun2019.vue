<template id="main">
  <loader />
  <v-row class="mm">
    <template v-for="(image, imgidx) in imageLayout" :key="imgidx">
      <v-col id="im" :cols="image.cols">
        <v-img :src="require(`../assets/compressed/${imgidx + 1}-compressed.jpg`)" cover height="100%" :lazy-src="require(`../assets/compressed/${imgidx + 1}-compressed.jpg`)">
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate color="grey-lighten-5"></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
    </template>
  </v-row>
</template>


<script> 
  import { defineComponent, ref, onMounted } from 'vue';

  // Components
  import loader from '../components/loader-2.vue';
  
  export default defineComponent({
    name: 'pimun2019',
    components: {
      loader,
    },
    setup() {
      const imageLayout = ref([]);

      onMounted(() => {
        if (window.matchMedia("(min-width: 650px)").matches) {
          imageLayout.value = [
            { cols: 5 },
            { cols: 4 },
            { cols: 3 },
            { cols: 4 },
            { cols: 3 },
            { cols: 5 },
            { cols: 3 },
            { cols: 6 },
            { cols: 3 },
            { cols: 7 },
            { cols: 5 },
            { cols: 6 },
            { cols: 6 },
            { cols: 5 },
            { cols: 3 },
            { cols: 4 },
            { cols: 6 },
            { cols: 6 },
          
            { cols: 5 },
            { cols: 3 },
            { cols: 4 },
            { cols: 6 },
            { cols: 6 },
          ];
          console.log("sup nigga");
        } else {
          imageLayout.value = [
            { cols: 6 },
            { cols: 6 },
            { cols: 4 },
            { cols: 8 },
            { cols: 5 },
            { cols: 7 },
            { cols: 4 },
            { cols: 8 },
            { cols: 5 },
            { cols: 7 },
            { cols: 6 },
            { cols: 6 },
            { cols: 5 },
            { cols: 7 },
            { cols: 7 },
            { cols: 5 },
            { cols: 6 },
            { cols: 6 },
          
            { cols: 4 },
            { cols: 8 },
            { cols: 7 },
            { cols: 5 },
            { cols: 12 },
          ];
        }
      });

      return {
        imageLayout,
      };
    },
  });
</script>



<style>

  #im{
    padding: 3px !important;
  }

.mm {
  background-color: black;
  overflow-y: hidden !important;
  scroll-behavior: smooth;
  margin: 0 !important;
}

v-row{
  margin: 0 !important;
}

@media screen and (min-width: 800px) {
  #im{
    padding: 4px !important;
  }
}


@media screen and (min-width: 1000px) {
  #im{
    padding: 4.5px !important;
  }
}

</style>
