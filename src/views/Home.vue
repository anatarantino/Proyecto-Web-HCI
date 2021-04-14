<template>
  <v-container>
    <v-row>
      <h1 class="let">¡Bienvenido!</h1>
    </v-row>
    <v-container>

      <v-row>
        <h3 class="subt">Tus últimos entrenamientos</h3>
      </v-row>

      <v-row align="center">
        <v-col cols="4" class="d-flex justify-center align-center">
          <v-sheet
              color="white"
              elevation="15"
              height="150"
              rounded
              width="300"
          >
           <v-toolbar dense color="rgb(103, 103, 103)" elevation="0">
             <v-toolbar-title><h5 class="let">Cardio</h5></v-toolbar-title>
             <v-spacer></v-spacer>
             <v-btn icon>
               <v-icon color="white">mdi-plus</v-icon>
             </v-btn>
           </v-toolbar>
            <v-col>
              <div class="text-caption">Entrada en calor: 15 min</div>
              <div class="text-caption">Ejercitación: 35 min</div>
              <div class="text-caption">Enfriamiento: 10 min</div>
              <v-btn icon x-small>
                <v-icon color="orange">mdi-fire</v-icon>
                <v-icon color="orange">mdi-fire</v-icon>
                <v-icon color="orange">mdi-fire</v-icon>
              </v-btn>
            </v-col>
            <v-col>
              <v-img>
                
              </v-img>
            </v-col>
          </v-sheet>
        </v-col>
        <v-col cols="4" class="d-flex justify-center align-center">
          <v-sheet
              color="rgb(196, 199, 195 )"
              elevation="15"
              height="136"
              rounded
              width="300"
          ></v-sheet>

        </v-col>
      </v-row>
      <v-row align="start">
        <h3 class="subt">Tus últimos entrenamientos</h3>
      </v-row>
      <v-row align="end">
        <v-col cols="4" class="d-flex justify-center align-center">
          <v-sheet
              color="rgb(196, 199, 195 )"
              elevation="15"
              height="136"
              rounded
              width="247"
          ></v-sheet>
        </v-col>
        <v-col cols="4" class="d-flex justify-center align-center">
          <v-sheet
              color="rgb(196, 199, 195 )"
              elevation="15"
              height="136"
              rounded
              width="247"
          ></v-sheet>
        </v-col>
        <v-col cols="4" class="d-flex justify-center align-center">
          <v-sheet
              color="rgb(196, 199, 195 )"
              elevation="15"
              height="136"
              rounded
              width="247"
          ></v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>

export default {
  name: 'Home'
}
</script>

<style scoped>

.let{
  color: white;
}

.subt{
  color: #02ff00;
}

</style>

