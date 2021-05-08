<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-col cols="12" class="d-flex align-center justify-center">
          <h1 class="font-italic white--text font-weight-regular">{{ routine.title }}</h1>
        </v-col>
        <v-col cols="12" class="d-flex mx-auto" sm="4">
          <v-text-field
              label="Ingresa un nombre para tu rutina"
              filled
              clearable
              dark
              required
              hide-details
              v-model="rout.name"
              color="#4DFF00"
          >
          </v-text-field>
        </v-col>
        <v-col class="d-flex align-center justify-center">
          <v-btn to="/home/createexercise"
                 class="mx-2 text-capitalize"
                 rounded
                 width="150"
                 color="#4DFF00"
          >Crear ejercicio
          </v-btn>
        </v-col>
        <v-row>
          <v-col cols="12" md="8" class="d-flex mx-auto align-center justify-center" v-for="b in bloques" :key="b.id">
            <bloque :bloque="b"></bloque>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" class="d-flex align-center justify-center">
        <v-col cols="6">
          <v-card dark dense>
            <v-container fluid>
              <v-row>
                <v-col cols="12" class="d-flex justify-center align-center pa-0 ma-0">
                  <v-card-title><h3 class="font-weight-regular">Elija el enfoque de su rutina</h3></v-card-title>
                </v-col>
                <div class="pl-2 pr-2 pb-1">
                  <v-chip-group
                      v-model="chosenCategory"
                      active-class="light-green accent-3 black--text "
                      column
                      class="pl-6 pr-2 "
                  >
                    <v-chip v-for="cat in categories" :key="cat.id">{{ cat.name }}</v-chip>
                  </v-chip-group>
                </div>
              </v-row>
            </v-container>
          </v-card>
          <v-container>
            <v-card
                class="mx-auto elevation-4 rounded-l"
                dark
                color="black"
                outlined
            >
              <v-card-actions class="align-center justify-center">
                <h3 class="font-weight-regular">Dificultad</h3>
                <v-rating
                    v-model="difficulty"
                    color="#4DFF00"
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
      </v-col>
      <v-row>
        <v-col cols="12" class="d-flex mx-auto" sm="4">
          <v-textarea
              dark
              prepend-inner-icon="mdi-comment"
              class="mx-2"
              label="Describe tu rutina"
              rows="1"
              auto-grow
          >
          </v-textarea>
        </v-col>
        <v-col cols="12" class="d-flex justify-center">
          <v-btn
              large
              color="black"
              depressed
              rounded
              width="150"
              class="text-capitalize white--text ma-1 pt-1 pb-1"
              to="/home/myroutines"
          >Cancelar
          </v-btn>
          <v-btn
              large
              color="#4DFF00"
              class="text-capitalize ma-1 pt-1 pb-1"
              depressed
              rounded
              width="150"
              to="/home/myroutines"
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
  data() {
    return {
      difficulty: 3,
      bloques: [       //esto vamos a tener que sacarlo de la api
        {
          id: 1,
          name: "Entrada en calor",
          subtitle: "subtitiulo 1",

        },
        {
          id: 2,
          name: "Ejercitación",
          subtitle: "subtitulo 2",
        },
        {
          id: 3,
          name: "Enfriamiento",
          subtitle: ""
        }
      ],
      categories: [],
      chosenCategory: [1],
      rout: {
        name: ''
      }
    }
  },
  created() {
    this.getCategories();
  },
  beforeUpdate() {
    console.log(this.chosenCategory.name);
    console.log(this.chosenCategory.id);
  },
  methods: {
    async getCategories() {
      try {
        const aux = await this.$store.dispatch('getCategories');
        this.categories = aux.content;
      } catch (e) {
        console.log(e);
      }
    }
  },
}
</script>

<style scoped>

</style>