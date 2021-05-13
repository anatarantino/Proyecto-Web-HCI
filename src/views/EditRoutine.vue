<template>
  <v-container>
    <v-col cols="12">
      <routine-comp :title="title" :routine="routine"></routine-comp>
    </v-col>
  </v-container>
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
      routine: {
        name: '',
        detail: '',
        difficultyNum: 0,
        date: 0,
        ispublic: false,
        averageRating: 0,
        username: '',
        avatarUrl: '',
        cycles: [],
        exercises: [],

      }


    }
  },
  methods: {

    async getRoutine() {
      this.progress = 20;
      if (this.id !== "undefined") {
        try {
          const aux1 = await this.$store.dispatch('getRoutineById', {routineId: this.id});
          this.name = aux1.name;
          this.detail = aux1.detail;
          let index = 0;
          for (let d of this.apiDifficulties) {
            if (aux1.difficulty === this.apiDifficulties[index]) {
              this.difficultyNum = index + 1
            }
            index++;
          }
          this.averageRating = aux1.averageRating;
          this.date = aux1.date;
          this.ispublic = aux1.isPublic;
          this.username = aux1.user.username;
          this.avatarUrl = aux1.user.avatarUrl;
          try {
            const aux = await this.$store.dispatch('getRoutineCycles', {routineId: this.id});
            this.cycles = aux.content;
            try {
              const aux2 = await this.$store.dispatch('getCycleExercises', {cycleId: this.cycles[0].id});
              this.exercises[0] = aux2.content
            } catch (e) {
              console.log(e);
            }
            try {
              const aux3 = await this.$store.dispatch('getCycleExercises', {cycleId: this.cycles[1].id});
              this.exercises[1] = aux3.content
            } catch (e) {
              console.log(e);
            }
            try {
              const aux4 = await this.$store.dispatch('getCycleExercises', {cycleId: this.cycles[2].id});
              this.exercises[2] = aux4.content
              this.progress = 80;
            } catch (e) {
              console.log(e);
            }
          } catch (e) {
            console.log(e);
          }
          this.progress = 100;
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
