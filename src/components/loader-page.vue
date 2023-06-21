<template>
    <div class="page-loader" v-if="!isloaded">
      <div class="cube"></div>
      <div class="cube"></div>
      <div class="cube"></div>
      <div class="cube"></div>
    </div> 
  </template>
  
  <script>
    export default {
      data: () => {
        return {
          isloaded: false
        }
      },
      mounted() {
        document.onreadystatechange = () => {
          if (document.readyState == "complete") { 
            this.isloaded = true;
          } 
        }
      },
    }
  </script>
  
  <style lang="scss" scoped>
 .page-loader {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #333;
  z-index: 999;
}
.cube {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}
.cube:nth-child(1) {
  background-color: #8CC271;
}
.cube:nth-child(2) {
  background-color: #69BEEB;
}
.cube:nth-child(3) {
  background-color: #F5AA39;
}
.cube:nth-child(4) {
  background-color: #E9643B;
}
.cube:first-child {
  animation: left 1s infinite;
}
.cube:last-child {
  animation: right 1s infinite 0.5s;
}
@keyframes left {
  40% {
    transform: translateX(-60px);
  }
  50% {
    transform: translateX(0);
  }
}
@keyframes right {
  40% {
    transform: translateX(60px);
  }
  50% {
    transform: translateX(0);
  }
}

  </style>