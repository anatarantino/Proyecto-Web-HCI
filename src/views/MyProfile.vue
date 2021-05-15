<template>
  <v-container fluid>
    <v-row justify="center" class="d-flex ma-0 pa-0">
      <v-col cols="12" md="8" class="d-flex justify-center align-center">
        <ProfileMain></ProfileMain>
      </v-col>
    </v-row>
    <v-row class="d-flex ma-0 pa-0 justify-center">
      <v-col cols="12" md="8" >
        <ProfileEjs></ProfileEjs>
      </v-col>
    </v-row>
    <v-row class="d-flex ma-0 pa-4">
      <v-col class="d-flex justify-center align-center">
        <v-btn
            color="#4DFF00"
            elevation="2"
            class="mx-2"
            fab
            to="/home/createexercise/-2"
        >
          <v-icon>
            mdi-plus
          </v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
    <v-col cols="12" class="d-flex justify-center align-center">
      <v-btn
          color="white"
          rounded
          depressed
          absolute
          bottom
          elevation="10"
          class="text-capitalize"
          width="150"
          @click="logout"
      >Cerrar Sesión
      </v-btn>
    </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProfileMain from "../components/ProfileMain";
import ProfileEjs from "../components/ProfileEjs";

export default {
  name: "MyProfile",
  components: {ProfileMain, ProfileEjs},
  methods: {
    async logout() {
      try {
        await this.$store.dispatch('logOut');
        await this.$router.replace('/');
      } catch (e) {
        console.log(e);
      }
    }
  }
}
</script>

<style scoped>

</style>
