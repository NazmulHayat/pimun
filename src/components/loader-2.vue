<template>
    <div class="page-loader" v-if="!isloaded">
      <div class="cube"></div>
      <div class="cube"></div>
      <div class="cube"></div>
      <div class="cube"></div>
    </div>
  </template>
    
  <script>
  
  function preloadImages(urls, allImagesLoadedCallback) {
    var loadedCounter = 0;
    var toBeLoadedNumber = urls.length;
    urls.forEach(function (url) {
      preloadImage(url, function () {
        loadedCounter++;
        console.log('Number of loaded images: ' + loadedCounter);
        if (loadedCounter == toBeLoadedNumber) {
          allImagesLoadedCallback();
        }
      });
    });
    function preloadImage(url, anImageLoadedCallback) {
      var img = new Image();
      img.onload = anImageLoadedCallback;
      img.src = url;
    }
  }
  
  // Let's call it: NO
  
  
  export default {
    data: () => {
      return {
        isloaded: false
      }
    },
    mounted() {
      document.onreadystatechange = () => {
        if (document.readyState == "complete") {
          preloadImages([
            require("../assets/compressed/1-compressed.jpg"),
            require("../assets/compressed/2-compressed.jpg"),
            require("../assets/compressed/3-compressed.jpg"),
            require("../assets/compressed/4-compressed.jpg"),
            require("../assets/compressed/5-compressed.jpg"),
            require("../assets/compressed/6-compressed.jpg"),
            require("../assets/compressed/7-compressed.jpg"),
            require("../assets/compressed/8-compressed.jpg"),
            require("../assets/compressed/9-compressed.jpg"),
            require("../assets/compressed/10-compressed.jpg"),
            require("../assets/compressed/11-compressed.jpg"),
            require("../assets/compressed/12-compressed.jpg"),
            require("../assets/compressed/13-compressed.jpg"),
            require("../assets/compressed/14-compressed.jpg"),
            require("../assets/compressed/15-compressed.jpg"),
            require("../assets/compressed/16-compressed.jpg"),
            require("../assets/compressed/17-compressed.jpg"),
            require("../assets/compressed/18-compressed.jpg"),
            require("../assets/compressed/19-compressed.jpg"),
            require("../assets/compressed/20-compressed.jpg"),
            require("../assets/compressed/21-compressed.jpg"),
            require("../assets/compressed/22-compressed.jpg"),
            require("../assets/compressed/23-compressed.jpg"),
          ], () => {
            console.log('All images were loaded');
            this.isloaded = true;
          });
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
  }</style>