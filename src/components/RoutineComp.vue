<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-col cols="12" class="d-flex mx-auto" sm="4">
          <v-text-field
              label="Ingresa un nombre para tu rutina"
              filled
              clearable
              dark
          >
          </v-text-field>
        </v-col>
        <v-row>
          <v-col cols="6" class="d-flex align-center justify-center">
            <bloque></bloque> <!--aca hay que hacer un for por cada bloque-->
          </v-col>
          <v-col cols="6" class="d-flex align-center justify-center">
            <bloque></bloque>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" class="d-flex align-center justify-center">
        <v-btn rounded>Crear nuevo bloque</v-btn>
      </v-col>

      <v-row class="pt-4">

        <v-col cols="6" >

          <v-card dark dense >
            <v-container fluid>
              <v-row>
                <v-col cols="12" class="d-flex justify-center align-center pa-0 ma-0">
                  <v-card-title>Elija el enfoque de su rutina</v-card-title>
                </v-col>



                <!--Aca hay que hacer un for con las categorias-->
                <div class="pl-2 pr-2 pb-1">
                  <v-chip-group
                      v-model="selection"
                      active-class="light-green accent-3 black--text "
                      column
                      class="pl-6 pr-2 "
                  >
                    <v-chip v-for="tag in tags" :key="tag">{{tag}}</v-chip>
                  </v-chip-group>
                </div>
              </v-row>
            </v-container>
          </v-card>

          <v-container>
            <v-card
                class="mx-auto elevation-15 "
                height="50"
                dark
                style="max-width: 400px;"
                color="grey darken-3"
                outlined
                shaped
            >
              <!--poner mas lindo el dificultad-->
              <v-card-actions class="mx-auto">
                Dificultad
                <v-spacer></v-spacer>


                <v-rating
                    color="amber darken-4"
                    empty-icon="mdi-fire"
                    full-icon="mdi-fire"
                    hover
                    length="5"
                    size="30"
                    background-color="white"
                ></v-rating>
              </v-card-actions>
            </v-card>
          </v-container>
        </v-col>


        <v-col cols="6" class="d-flex align-content-center">

          <v-card elevation="0" class="mx-auto" color="transparent" >

            <v-container fluid  >
              <v-row >
                <v-col cols="12" class="d-flex justify-center">
                  <v-btn
                      height="150"
                      width="200"
                      elevation="2"
                      dark

                  >
                    <v-icon
                        size="60"
                        dark
                        right
                        align="center"
                        justify="center"
                    >mdi-image-plus
                    </v-icon>
                  </v-btn>
                </v-col>

              </v-row>
            </v-container>
            <h3 class="my-color font-weight-light" >Agrega una imagen para tu rutina</h3>
          </v-card>
        </v-col>


      </v-row>

      <v-row>


        <v-col cols="12" class="d-flex mx-auto" sm="4" >
          <v-textarea
              dark
              prepend-inner-icon="mdi-comment"
              class="mx-2"
              label="¿Desea agregar un comentario?"
              rows="1">
          </v-textarea>
        </v-col>


        <v-col cols="12" class="d-flex justify-center">
          <v-btn
              x-large
              rounded
              color="red"
              class="text-capitalize ma-1 pt-1 pb-1"
          >Cancelar
          </v-btn>
          <v-btn
              x-large
              rounded
              color="#4DFF00"
              class="text-capitalize ma-1 pt-1 pb-1"
          >Publicar rutina
          </v-btn>
        </v-col>


      </v-row>

    </v-row>
  </v-container>
</template>

<script>

import bloque from "@/components/Bloque";

export default {
  name: "routineComp",
  props: ["routine"],
  components: {bloque},
  data(){
    return{
      items:[
        {title:"titulo",
          subtitle: "subtitulo",

        },
        {title:"titulo 2",
          subtitle: "subtitulo 2",
        }
      ],
      tags: [
        'Cardio',
        'Funcional',
        'Boxeo',
        'Levantamiento',
        'Abdominales',
        'Agregar +'
      ]
    }
  }
}
</script>

<style scoped>
.my-color{
  color: white;
}
</style>