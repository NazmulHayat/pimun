<template>
    <div class="ble pb-16 pt-5">
        <div id="flipdown" class="flipdown"></div>
    </div>
</template>

<script>

import FlipDown from '../assets/flipdown';

function WaitUntilFlipDownExists()
{
    return new Promise((resolve, reject)=>{
        setInterval(()=>{
            if(document.getElementById("flipdown") != null)
                resolve();
        },10);
        let a=0;
        if(a) reject(); //vue is shit
    });
    
}
export default {
    name: "Timerdamn",
    data: ()=>{
        return {}
    },
    methods:{
         dhet: async()=>
        {
            await WaitUntilFlipDownExists();
            var desiredDate = new Date('August 31, 2023 08:00:00');
            var desiredTimestamp = Math.floor(desiredDate.getTime() / 1000);
            var fku = new FlipDown(desiredTimestamp, document.getElementById("flipdown"));
            fku.start();
        }
    },
    beforeMount(){
        this.dhet();
    }
}

</script>

<style>
    @import '../assets/flipdown.css';
    .flipdown{
        padding-top: 20px;
        font-size: 1.5em;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        margin: auto;
    }
    .ble{
        width: 100%;
    }
</style>