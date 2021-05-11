<template>
  <v-card class="rounded-xl">
    <v-container fluid>
      <v-row>
        <v-col class="grey darken-3 d-flex justify-space-between align-center rounded-t-xl" cols="12">
          <h3 class="white--text text-start"> {{ routine.name }} </h3>
          <v-spacer></v-spacer>
          <div>
          <v-icon color="white">{{this.privacyIcon}}</v-icon>
          <v-btn icon to="/home/info">
            <v-icon color="white">mdi-information-outline</v-icon>
          </v-btn>
          </div>
        </v-col>
        <v-col cols="7">
          <v-container >
            <v-row >
              <v-col cols="12" class="d-flex justify-start align-start pa-0">
                <h3 class="font-weight-regular text-start">{{ routine.category.name }} </h3>
              </v-col>
              <v-col cols="12" class="d-flex justify-start align-start pa-0">
                <h4 class="font-weight-light text-start text-truncate" >{{ routine.detail }} </h4>
              </v-col>
              <br><br>
              <v-col cols="4" class="d-flex justify-start align-center pa-0">
                <v-icon color="#4DFF00" size="30" v-for="index in this.difficultyNum+1" :key="index">mdi-fire</v-icon>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
        <v-col cols="5">
          <v-container fluid>
            <v-row>
              <v-col cols="12" class="d-flex justify-end align-center pa-0">
                <v-img
                    position="top"
                    max-height="140"
                    max-width="140"
                    :src="categoryImg"
                ></v-img>
              </v-col>
              <v-col cols="12" class="d-flex justify-start align-center pa-0">
                <h4 class="font-weight-light text-start">{{ this.date }}</h4>
              </v-col>
<!--              <v-col cols="12" class="d-flex justify-end align-center pa-0">-->
<!--                <v-icon color="black" v-for="rating in routine.rating" :key="rating">mdi-star</v-icon>-->
<!--              </v-col>-->
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
      date: new Date(this.routine.date).toLocaleDateString(),
      privacyIcon: ''
    }
  },
  created() {
    this.getPrivacyIcon();
    this.getDifficulties();
  },
  methods: {
    getDifficulties() {
      let index = 1;
      for (let d of this.apiDifficulties) {
        if (this.difficulty === this.apiDifficulties[index]) {
          this.difficultyNum = index
          return;
        }
        index++;
      }
    },
    getPrivacyIcon(){
      if(this.routine.isPublic){
        this.privacyIcon = "mdi-lock"
      }else{
        this.privacyIcon = "mdi-lock-open-variant"
      }
    }
  },
  computed: {
    categoryImg() {
      return require(`../assets/images/${this.routine.category.id}.jpeg`)
    }
  }
}
</script>

<style scoped>

</style>