<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>


<style>
html, body {
    width: 100% !important;
    overflow-x: hidden !important;
}

</style>


<script>


export default {
  name: 'App',

  data: () => ({
    //
  }),
}
</script>
