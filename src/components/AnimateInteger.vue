<template>
    <h1>{{ displayValue }}</h1>
  </template>
  
  <script>
  import gsap from "gsap";
  export default {
    name: "App",
    props: ["value"],
    components: {},
    watch: {
      value() {
        gsap.to(this, {
          tweenValue: this.value,
          onUpdate: () => {
            this.displayValue = Math.ceil(this.tweenValue);
          },
        });
      },
    },
    data() {
      return {
        displayValue: this.value,
        tweenValue: this.value,
      };
    },
  };
  </script>
  
  <style>
  </style>