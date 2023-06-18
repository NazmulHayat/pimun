
<!---
<template>
    <v-row>
      <template v-for="(image,imgIdx) in imageLayout" :key="imgIdx">
        <v-col :cols="image.cols">
          <v-img
            :src="`https://picsum.photos/500/300?image=${image.cols * 20}`"
            cover
            height="100%"
          ></v-img>
        </v-col>
  
        <v-col v-if="image.children" cols="3" class="d-flex flex-column">
          <v-row>
            <v-col v-for="(children,childIdx) in image.children" :key="childIdx" :cols="children.cols">
              <v-img
                :src="`https://picsum.photos/500/300?image=${children.cols + childIdx}`"
                cover
                height="100%"
              ></v-img>
            </v-col>
          </v-row>
        </v-col>
      </template>
    </v-row>
  </template>
-->


<template id="main">
  <v-row>
    <template v-for="(image, imgidx) in imageLayout" :key="imgidx">
      <v-col id="im" :cols="image.cols">
        <v-img :src="require(`@/assets/compressed/${imgidx+1}-compressed.jpg`)" cover height = "100%"></v-img>
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
#main{
  overflow-y: hidden !important;
  scroll-behavior: smooth;
}
  #im{
    padding: .8rem !important;
  }
</style>
