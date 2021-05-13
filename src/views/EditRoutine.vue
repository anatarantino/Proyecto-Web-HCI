<template>
  <v-container v-if="loaded" >
    <v-col cols="12">
      <routine-comp :title="title" :routine="fullRoutine"></routine-comp>
    </v-col>
  </v-container>
  <v-container v-else></v-container>
</template>

<script>
import routineComp from "@/components/RoutineComp";

export default {
  name: "EditRoutine",
  props: {
    id: {
      type: String,
      required: true
    }
  },
  components: {routineComp},
  data() {
    return {
      title: "Editá tu rutina",
      apiDifficulties: ["rookie", "beginner", "intermediate", "advanced", "expert"],
      fullRoutine: {
        name: '',
        detail: '',
        difficultyNum: 0,
        isPublic: false,
        cycles: [],
        exercises: [],
      },
      loaded: false,

    }
  },
  created() {
    this.loadData();
  },
  methods: {

    async loadData() {
      const idNum = parseInt(this.id);
      if ( (this.id !== undefined) && (idNum !== 0)) {
        try {
          const aux1 = await this.$store.dispatch('getRoutineById', {routineId: this.id});
          this.fullRoutine.name = aux1.name;
          this.fullRoutine.detail = aux1.detail;
          this.fullRoutine.isPublic = aux1.isPublic;
          this.fullRoutine.category = aux1.category;
          let index = 0;
          for (let d of this.apiDifficulties) {
            if (aux1.difficulty === this.apiDifficulties[index]) {
              this.fullRoutine.difficultyNum = index + 1
            }
            index++;
          }
          try {
            const aux = await this.$store.dispatch('getRoutineCycles', {routineId: this.id});
            this.fullRoutine.cycles = aux.content;
            try {
              const aux2 = await this.$store.dispatch('getCycleExercises', {cycleId: this.fullRoutine.cycles[0].id});
              this.fullRoutine.exercises[0] = aux2.content
            } catch (e) {
              console.log(e);
            }
            try {
              const aux3 = await this.$store.dispatch('getCycleExercises', {cycleId: this.fullRoutine.cycles[1].id});
              this.fullRoutine.exercises[1] = aux3.content
            } catch (e) {
              console.log(e);
            }
            try {
              const aux4 = await this.$store.dispatch('getCycleExercises', {cycleId: this.fullRoutine.cycles[2].id});
              this.fullRoutine.exercises[2] = aux4.content
            } catch (e) {
              console.log(e);
            }
          } catch (e) {
            console.log(e);
          }
          this.loaded = true;
        } catch (e) {
          console.log(e);
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
