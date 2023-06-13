

const observer = new IntersectionObserver((entries) => {
    if (entries[0].intersectionRatio <= 0) {
      console.log('ENTER')
      return
    }
    console.log('LEAVE')
  }, {
    root: null,
    threshold: 0.1, // set offset 0.1 means trigger if atleast 10% of element in viewport
  })
  
  observer.observe(document.getElementById('e1'));
  
  
  import { defineComponent } from 'vue';
  
  // Components
  /*import HelloWorld from '../components/HelloWorld.vue';*/
  
  import Timerdamn from '@/components/Timerdamn.vue';
  
  
  import Vue3autocounter from 'vue3-autocounter';
  
  export default defineComponent({
    name: "App",
    components: {
      'vue3-autocounter': Vue3autocounter, Timerdamn
    },
    data() {
      return {
        value: 250,
      };
    },
  });