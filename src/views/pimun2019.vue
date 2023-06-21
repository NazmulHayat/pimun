<template id="main">
  <v-row class="mm">
    <template v-for="(image, imgidx) in imageLayout" :key="imgidx">
      <v-col id="im" :cols="image.cols">
        <v-img :src="require(`../assets/compressed/${imgidx+1}-compressed.jpg`)" cover height = "100%" 
        :lazy-src="require(`../assets/compressed/${imgidx+1}-compressed.jpg`)">
          <template v-slot:placeholder>                                                                                                           
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular
              indeterminate
              color="grey-lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
        
        </v-img>
      </v-col>
      
    </template>
  </v-row>
</template>


<script setup>
  const imageLayout = [
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
    { cols: 7 },
    { cols: 5 },
  ]
</script>


<style>

  #im{
    padding: 7px !important;
  }

.mm {
  background-color: black;
  overflow-y: hidden !important;
  scroll-behavior: smooth;
}
</style>
