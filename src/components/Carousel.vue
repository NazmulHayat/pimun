<template>
    <v-card
        class="carou mx-auto"
    > 
        <v-carousel show-arrows="hover" 
        :continuous="false"
        cycle
        interval="5000"
        >
            <v-carousel-item
            v-for="(item,i) in slides"
            :key="i"
            :src="item.img"
            cover
            id = "item-img">
            <div id="bod">
                <div>
                    <div id="header1" class=""> Committee: {{ item.short  }}</div>
                </div>
                <div>
                    <div id="agenda"> <span style="font-weight:bolder"> {{ item.topic }} </span> {{ item.agenda }}</div>
                </div>
                <div>
                        
                    <v-btn id="bt" :href="item.pd" target="_blank">
                        Download Research Guide
                    </v-btn>
                </div>
            </div>
            </v-carousel-item>
         </v-carousel>
    </v-card>
</template>


<script>
// function imgSrc(item){
//     return require('../assets/'+item.type+'.png');
// }
export default {
    data (){
        return {
            // method: [
            //   goto(nm)
            // ],
            slides: [
                {idx:'1', img: require('@/assets/undp-min-b.jpg'), header: "United Nation Development Program", short: "UNDP", pd: "https://drive.google.com/file/d/1PCB8cg-Q1W474USUQVy8V0FOpTLGK7WF/view", topic: "Agenda: ",
                  agenda:"Reneweable energy to achieve substainable cities and transport"
                }, 
                {idx:'2', img: require('@/assets/unhcr-min-b.jpg'), header: "United Nations High Commissioner for Refugees", short: "UNHCR", pd: "https://drive.google.com/file/d/1wODcJ6MK-woUagZbsjbXS8jKUUxE5Aiq/view", topic: "Agenda: ",
                agenda:"Legal Status of Refugees and Internally Displaced Persons in Camps"
                },  
                {idx:'3', img: require('@/assets/unicef-min-b.jpg'), header: "United Nations International Children's Emergency Fund", short: "UNICEF", pd: "https://drive.google.com/file/d/1oN0W4l8DYYMgztqEqpZoY_buW3Cxc2I1/view?usp=drive_open", topic: "Agenda: ", 
                  agenda:"Children with disabilities, along with adults with disabilities, are to have full life with dignity."}, 
                {idx:'4', img: require('@/assets/unsc-min-b.jpg'), header: "United Nation Security Council", short: "UNSC", pd: "https://drive.google.com/file/d/1MxkWL93kvN_6W4Dz7blkMp-UhLBPJXSV/view", topic: "Agenda: ", 
                  agenda:"Combating Violent Sectarian Extremism in the Middle"},
                {idx:'5', img: require('@/assets/unw-min-b.jpg'), header: "United Nation Women", short: "UN Women", agenda:"Reproductive Rights for Women Working in the Labour Force", pd:"https://drive.google.com/file/d/1pst_SEYz3Xa0z4PNBSGIUrRZKxX0knX2/view", topic: "Agenda: "},
                {idx:'7', img: require('@/assets/disec-min-b.jpg'), header: 'Disarmament & International Security Committee', short: 'DISEC', agenda: "Curbing the global threat of Cyberterrorism", pd:"https://drive.google.com/file/d/1yDUQavyHOtHPwYj4XW8DHATv2Sq0WAZW/view", topic: "Agenda: "},
                {idx:'6', img: require('@/assets/international_press-min-b.jpg'), header: "International Press", short: "International Press", agenda: "The Power of Visual Storytelling - Photography and Peace Advocacy", pd:"https://drive.google.com/file/d/1_Tjqb277kORQdAy5aRX0YhMfhzLv2Kkx/view", topic: "Theme: "}
            ],
            expand: false
        }
    },
    mounted(){
      this.expand = true;
    }
}
</script>


<style>


@import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@500&display=swap');

#item-img{
    height: 100%;
    background-color: black;
 
}

#bod{
    font-family: 'Chakra Petch', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;;
}


#header1{
    font-size: 35px;
    font-weight: bolder;
    color: white;
    margin-left: 40px;
    margin-right: 40px;

}

#agenda{
    font-family: 'Chakra Petch', sans-serif;
    font-size: 20px;
    font-weight: 500;
    color: white;
    margin-top: 10px;
    margin-left: 40px;
    margin-right: 40px;
}

#bt{
    margin-left: 40px;
    margin-top: 20px;
}



@media  screen and (min-width: 450px) {
    #header1{
        font-size: 40px;
    }
    #agenda{
        font-size: 25px;
    }
}


@media  screen and (min-width: 650px) {
    #header1{
        font-size: 45px;
    }
    #agenda{
        font-size: 32px;
    }
    .v-btn.v-btn--density-default{
        font-size: 16px !important;
        height: calc(var(--v-btn-height) + 10px) !important
    }
}


@media  screen and (min-width: 650px) {
    #header1{
        font-size: 45px;
    }
    #agenda{
        font-size: 32px;
    }
}

@media  screen and (min-width: 800px) {
    #header1{
        font-size: 47px;
    }
    #agenda{
        font-size: 34px;
    }
}

@media  screen and (min-width: 1000px) {
    #header1{
        font-size: 52px;
    }
    #agenda{
        font-size: 39px;
    }
}

</style>