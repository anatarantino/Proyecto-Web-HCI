<template>
  <v-container v-if="loaded">
    <v-row>
      <v-col cols="12">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>{{ exercise.name }}</v-list-item-title>
            <v-list-item-subtitle >{{ exercise.detail }}</v-list-item-subtitle>
          </v-list-item-content>
          <v-row pa-3>
            <v-col cols="12" class="d-flex align-center justify-center ma-0 pa-0">
              <v-col cols="5" class="d-flex justify-end align-center">
                <v-text-field
                    label="Repeticiones"
                    v-model="reps"
                    class="mt-0 pt-3 ml-6 mb-4"

                    type="number"
                    min="1"
                    style="width: 50px"
                    color="black"
                    :error-messages="errorReps"
                    @change="update"
                    @blur="$v.reps.$touch()"
                ></v-text-field>
              </v-col>
              <v-col cols="7" class="d-flex justify-end align-center">
                <v-text-field
                    label="Duración (en segundos)"
                    v-model="duration"
                    class="mt-0 pt-3 ml-6 mb-4"
                    type="number"
                    min="1"
                    style="width: 50px"
                    color="black"
                    :error-messages="errorDur"
                    @change="update"
                    @blur="$v.duration.$touch()"
                ></v-text-field>
              </v-col>
            </v-col>
          </v-row>
          <v-list-item-action>
            <v-btn
                :disabled="$v.$invalid"
                icon
                color="transparent"
                @click="check"
            >
              <v-icon color="black">{{icon}}</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-col>
    </v-row>
  </v-container>
  <v-container v-else></v-container>
</template>

<script>
import {required,minValue,maxValue} from 'vuelidate/lib/validators'

export default {
  name: "AddExerciseToBlock",
  props: ["exercise", "section"],
  data() {
    return {
      checkbox: false,
      icon: 'mdi-checkbox-blank-outline',
      reps: '',
      duration: '',
      loaded: false
    }
  },
  created() {
    this.loadDataIfEdited();
  },
  methods: {
    check(){
      if(this.checkbox) {
        this.checkbox = false;
        this.icon = 'mdi-checkbox-blank-outline';
      }else{
        this.checkbox = true;
        this.icon = 'mdi-checkbox-marked';
      }
      this.exercise.repetitions = parseInt(this.reps);
      this.exercise.duration = parseInt(this.duration);
      this.$emit('exMarked', this.checkbox, this.exercise);
    },
    update(){
      this.checkbox = !this.checkbox;
      this.exercise.repetitions = parseInt(this.reps);
      this.exercise.duration = parseInt(this.duration);
      this.$emit('exMarked', this.checkbox, this.exercise);
    },
    loadDataIfEdited(){
      if(this.exercise.changed === true){
        this.checkbox = true;
        this.icon = 'mdi-checkbox-marked';
        this.reps = this.exercise.repetitions;
        this.duration = this.exercise.duration;
      }
      this.loaded = true;
    }
  },
  validations: {
    reps: {
      required,
      minValue: minValue(1),
      maxValue: maxValue(999)
    },
    duration: {
      required,
      minValue: minValue(1),
      maxValue: maxValue(999)
    }
  },
  computed: {
    errorReps() {
      const errors = []
      if (!this.$v.reps.$dirty) {
        return errors
      }
      !this.$v.reps.required && errors.push('Ingrese una cantidad');
      !this.$v.reps.minValue && errors.push('El valor mínimo es 1');
      !this.$v.reps.maxValue && errors.push('El valor máximo es 999');
      return errors
    },
    errorDur() {
      const errors = []
      if (!this.$v.duration.$dirty) {
        return errors
      }
      !this.$v.duration.required && errors.push('Ingrese una cantidad')
      !this.$v.duration.minValue && errors.push('El valor mínimo es 1');
      !this.$v.duration.maxValue && errors.push('El valor máximo es 999');
      return errors
    },

  }
}
</script>

<style scoped>

</style>
