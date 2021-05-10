<template>
  <v-card class="rounded-xl">
    <v-container fluid>
      <v-row>
        <v-col class="grey darken-3 d-flex justify-space-between align-center rounded-t-xl" cols="12">
          <h3 class="white--text text-start"> {{ routine.name }} </h3>
          <v-btn icon to="/home/info">
            <v-icon color="white">mdi-information-outline</v-icon>
          </v-btn>
        </v-col>
        <v-col cols="7">
          <v-container fill-height>
            <v-row align="center">
              <v-col cols="12" class="d-flex justify-start align-center pa-0">
                <h4 class="font-weight-light text-start">Categoría: {{ routine.category.name }} </h4>
              </v-col>
              <v-col cols="12" class="d-flex justify-start align-center pa-0">
                <h4 class="font-weight-light text-start">Descripción: {{ routine.detail }}</h4>
              </v-col>
              <v-col cols="12" class="d-flex justify-start align-center pa-0">
                <h4 class="font-weight-light text-start">{{ routine.isPublic ? "Pública" : "Privada" }}</h4>
              </v-col>
              <v-col cols="4" class="d-flex justify-start align-center pa-0">
                <v-icon color="#4DFF00"  v-for="index in this.difficultyNum" :key="index">mdi-fire</v-icon>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
        <v-col cols="5">
          <v-container fluid>
            <v-row>
              <v-col cols="12" class="d-flex justify-end align-center pa-0">
<!--                <v-img-->
<!--                    position="top"-->
<!--                    max-height="150"-->
<!--                    max-width="150"-->
<!--                    :src="categoryImg"-->
<!--                ></v-img>-->
              </v-col>
              <v-col cols="12" class="d-flex justify-end align-center pa-0">
<!--                <v-icon color="black" v-for="rating in routine.rating" :key="rating">mdi-star</v-icon>-->
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "RoutineCard",
  props: ["routine"],
  data() {
    return {
      apiDifficulties: ["rookie", "beginner", "intermediate", "advanced", "expert"],
      difficulty: this.routine.difficulty,
      difficultyNum: 0,
    }
  },
  created() {
    this.getDifficulties();
  },
  methods: {
    getDifficulties() {
      let index = 1;
      for (let d of this.apiDifficulties) {
        if (this.difficulty === this.apiDifficulties[d]) {
          this.difficultyNum = index
          return;
        }
      }
    }
  },
  computed: {

    // categoryImg() {
    //   return require(`../assets/images/${this.routine.category}.jpg`)
    // }
  }
}
</script>

<style scoped>

</style>