<template>
  <v-container
      class="pa-2"
      max-width="90%"
      elevation="2"
  >
    <v-row align="center" class="d-flex ma-0 pa-0">
      <v-col cols="3" class="d-flex align-center justify-center" style="position: relative">
        <div style="position: absolute">
          <v-avatar size="150px" class="avatar-border elevation-5">
            <v-img alt="Foto de perfil" :src="profilePic" lazy-src="../assets/images/emptyUser.png"></v-img>
          </v-avatar>
          <v-btn
              class="mx-2"
              fab
              dark
              small
              color="#f8f9fa"
              elevation="5"
              style="position:absolute; bottom:0;right:10px"
              @click="picPopUp=true">
            <v-icon color="black">mdi-pencil</v-icon>
          </v-btn>
          <v-dialog v-model="picPopUp" width="550" >
            <v-card class="pa-6">
              <v-row align="center" justify="center">
                <v-col cols="12" md="8">
                  <v-text-field
                      v-model="url"
                      label="URL"
                      placeholder="URL"
                      outlined
                      clearable
                      color="black"
                      :error-messages="urlErrors"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="8" class="d-flex justify-space-between align-center">
                  <v-btn @click="cancelPicChange" rounded color="black" elevation="5" width="150" class="white--text text-capitalize">
                    Cancelar
                  </v-btn>
                  <v-btn @click="changeProfilePicture" rounded color="white" elevation="5" width="150" class="text-capitalize">
                    Cambiar
                  </v-btn>
                </v-col>
              </v-row>
            </v-card>
          </v-dialog>
        </div>
      </v-col>
      <v-col>
        <v-row >
          <h1 class="white--text ma-2">
            {{ username }}
          </h1>
        </v-row>
        <v-row >
          <h3 class="white--text ma-2">
            {{ email }}
          </h3>
        </v-row>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>



  </v-container>
</template>

<script>
import {minLength, required} from 'vuelidate/lib/validators'
export default {
  name: "ProfileMain",
  data() {
    return {
      picPopUp: false,
      url: ""
    }
  },
  computed: {
    username() {
      return this.$store.getters["user/userData"].username;
    },
    email() {
      return this.$store.getters["user/userData"].email;
    },
    profilePic(){
      return this.$store.getters["user/userData"].avatarUrl;
    },
    urlErrors() {
      const errors = [];
      if (!this.$v.url.$dirty) {
        return errors;
      }
      !this.$v.url.minLength && errors.push(`La Url debe contener por lo menos 3 caracteres`);
      !this.$v.url.required && errors.push('Url requerida');
      return errors;
    }
  },
  methods: {
    cancelPicChange() {
      this.url ="";
      this.picPopUp = false;
    },
    async changeProfilePicture() {
      this.$v.url.$touch();
      if (this.$v.$invalid) {
        this.$v.$touch();
        console.log("Complete los campos");
        return;
      }
      try {
        const data = this.$store.getters["user/userData"];
        data.avatarUrl = this.url;
        await this.$store.dispatch("user/updateProfile", data);
        this.picPopUp = false;
      } catch (e) {
        console.log(e)
      }
    }
  },
  validations: {
    url: {required, minLength: minLength(4)}
  },
}
</script>

<style scoped>
.avatar-border {
  border: 5px solid white
}
</style>
