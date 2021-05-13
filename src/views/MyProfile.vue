<template>
  <v-container fluid mt-8>
    <v-row class="d-flex ma-0 pa-0 justify-center">
      <v-col md="8">
        <ProfileMain></ProfileMain>
      </v-col>
    </v-row>
    <v-row class="d-flex ma-0 pa-0 justify-center">
      <v-col md="8">
        <ProfileEjs></ProfileEjs>
      </v-col>
    </v-row>
    <v-row class="d-flex mt-5 pa-0 justify-center">
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