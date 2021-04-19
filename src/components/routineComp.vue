<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="d-flex mx-auto" sm="4">
        <v-text-field
            label="Ingresa un nombre para tu rutina"
            filled
            clearable
            dark
        >

        </v-text-field>
      </v-col>
      <v-col cols="12" class="d-flex align-center justify-center">
        <bloque></bloque> <!--aca hay que hacer un for por cada bloque-->
      </v-col>
      <v-col class="d-flex align-center justify-center">
        <bloque></bloque>
      </v-col>
      <v-col cols="12" class="d-flex align-center justify-center">
        <v-btn rounded>Crear nuevo bloque</v-btn>
      </v-col>

      <v-col cols="12" class="text-center mx-auto ">
        <v-container >
          <v-card class="mx-auto" max-width="35%" dark outlined dense>
            <v-card-title >Elija el enfoque de su rutina</v-card-title>

            <!--Aca hay que hacer un for con las categorias-->
            <v-chip-group
                v-model="selection"
                active-class="light-green accent-4  white--text "
                column

            >

              <v-chip>Cardio</v-chip>

              <v-chip>Funcional</v-chip>

              <v-chip>Boxeo</v-chip>

              <v-chip>Levantamiento</v-chip>
              <v-chip>Abdominales</v-chip>
              <v-chip>Agregar +</v-chip>
            </v-chip-group>


          </v-card>
        </v-container>
        <v-container>
          <v-card
              class="mx-auto elevation-15 "
              height="50"
              dark
              style="max-width: 400px;"
              color="grey"
              outlined
              shaped
          >
            <!--poner mas lindo el dificultad-->
            <v-card-actions class="mx-auto  ">
              Dificultad
              <v-spacer></v-spacer>


              <v-rating
                  color="#4DFF00"
                  empty-icon="mdi-fire"
                  full-icon="mdi-fire"
                  half-icon="mdi-fire"
                  half-increments
                  hover
                  length="5"
                  size="30"
                  background-color="white"
              ></v-rating>
            </v-card-actions>
          </v-card>
        </v-container>
        <v-col cols="12" class="d-flex align-content-center">

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
            <h3 class="font-weight-light">Agrega una imagen para tu rutina</h3>
          </v-card>
        </v-col>

        <v-row>
          <v-col cols="12" class="d-flex mx-auto" sm="4">
            <v-textarea
                dark
                prepend-inner-icon="mdi-comment"
                class="mx-2"
                label="¿Desea agregar un comentario?"
                rows="1">
            </v-textarea>
          </v-col>
        </v-row>
        <v-row >
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


      </v-col>
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
      ]
    }
  }
}
</script>

<style scoped>

</style>