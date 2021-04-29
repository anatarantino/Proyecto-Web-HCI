<template>
  <v-container>
    <v-container class="fill-height">
      <v-row
          align="center"
          justify="end"
      >
        <v-btn
            light
            class="text-capitalize"
            @click.stop="drawer = !drawer"
        >
          Filtros
        </v-btn>
      </v-row>
    </v-container>
    <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
        right
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title><h4>Filtros</h4></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense>
        <v-list-item>
          Dificultad
        </v-list-item>
        <v-rating
            color="#4DFF00"
            empty-icon="mdi-fire"
            full-icon="mdi-fire"
            hover
            length="5"
            size="30"
            background-color="grey darken-3"
        ></v-rating>
        <v-divider></v-divider>
        <v-list-item>
          Puntuación
        </v-list-item>
        <v-rating
            color="black"
            empty-icon="mdi-star-outline"
            full-icon="mdi-star"
            hover
            length="5"
            size="30"
            background-color="grey darken-3"
        ></v-rating>
        <v-divider></v-divider>
        <v-list-item>
          Categoria
        </v-list-item>
        <v-chip-group
            v-model="selection"
            active-class="light-green accent-3 black--text "
            column
            class="pl-6 pr-2 "
        >
          <v-chip v-for="tag in tags" :key="tag">{{ tag }}</v-chip>
        </v-chip-group>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
export default {
  name: "FilterRout",
  data() {
    return {
      drawer: null,
      tags: [
        'Cardio',
        'Funcional',
        'Boxeo',
        'Levantamiento',
        'Abdominales'
      ]
    }
  },
}
</script>

<style scoped>

</style>