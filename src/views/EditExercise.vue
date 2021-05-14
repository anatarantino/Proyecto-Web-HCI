<template>
  <v-container v-if="loaded">
    <v-col cols="12">
      <exerciseComp :title="title" :exercise="exerciseInfo"></exerciseComp>
    </v-col>
  </v-container>

</template>

<script>

import exerciseComp from "@/components/ExerciseComp";

export default {
  name: "EditExercise",
  components: {exerciseComp},
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      title: "Editá tu ejecicio",
      exerciseInfo: {
        id: this.id,
        name: '',
        detail: '',
      },
      loaded:false
    }
  },
  created() {
    this.loadData();
  },
  methods: {
    async loadData(){
      const idNum = parseInt(this.id);
      if((this.id !== undefined) && (idNum !== 0)) {
        try {
          this.exerciseInfo = await this.$store.dispatch('getExerciseById',{exerciseId: this.id});
          this.loaded = true;
        }catch(e){
          console.log(e);
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
