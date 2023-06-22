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
          require("../assets/golgal.png"),
          require('../assets/og1.jpg'),
          require("../assets/pimuncollage.png"),
          require("../assets/bg-page.jpg")
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
  background-color: #ffffff;
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