<template>
  <v-app id="main" theme="dark">
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
}
</script>

<style scoped>

#main{
  scroll-behavior: smooth !important;
  background-color: rgb(29, 28, 28);
  overflow-x:hidden !important;
}

</style>