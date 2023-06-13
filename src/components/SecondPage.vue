<template>
    <v-container fill-height align="center">
        <v-col align ="center">

            <v-carousel hide-delimiters cycle="true" theme="dark">
                <v-carousel-item>
                    <div class="img-container">
                        <v-img id="hi" contain src="../assets/background-cool.jpg"></v-img>
                    </div>
                </v-carousel-item>
                <v-carousel-item  id="hi" cover src="../assets/background.jpg">
                </v-carousel-item>
                <v-carousel-item   id="hi" cover center src="../assets/bg2.jpg">
                </v-carousel-item>

            </v-carousel>



            <v-spacer></v-spacer>
            <v-row align="space-around" class="pt-4 mt-4" wrap flex-direction="col">
                <v-col class="ma-4 pa-4"  v-motion-pop-visible  >
                    <v-card class="crd pa-4" elevation="24"  >
                        <div class="bleh text-h3">250+</div>
                        <div  class="text-subtitle">Delegates</div>
                    </v-card>
                </v-col>
                <v-divider vertical thickness="4"/>
                <v-col class="ma-4 pa-4"  v-motion-pop-visible >
                    <v-card class="crd pa-4" elevation="24" >
                        <div class="text-h3">20+</div>
                        <div class="text-subtitle">Executive Board Members</div>
                    </v-card>
                </v-col>
                <v-divider vertical thickness="4" />
                <v-col class="ma-4 pa-4"  v-motion-pop-visible >
                    <v-card class="crd pa-4" elevation="24" >
                        <div class="text-h3">8</div>
                        <div  class="text-subtitle">Committees</div>
                    </v-card> 
                </v-col>
            </v-row>
        </v-col>
    </v-container>
</template>


<style>

#hi{
}

.img-container{
    display: flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
}


section{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

img{
    max-width: 100%;
    height: auto;
    width: auto\9
}



</style>