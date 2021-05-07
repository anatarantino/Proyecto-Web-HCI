<template>
  <v-container fluid mt-8>
    <v-row align="center" justify="space-around">
      <v-col md="8">
        <ProfileMain></ProfileMain>
      </v-col>
    </v-row>
    <v-row align="center" justify="space-around">
      <v-col md="8">
        <ProfileTrophies></ProfileTrophies>
      </v-col>
    </v-row>
    <v-row align="center" justify="space-around">
      <v-col md="8">
        <ProfileEjs></ProfileEjs>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProfileMain from "../components/ProfileMain";
import ProfileEjs from "../components/ProfileEjs";
import ProfileTrophies from "../components/ProfileTrophies";

export default {
  name: "MyProfile",
  components: {ProfileMain, ProfileEjs, ProfileTrophies}
}
</script>

<style scoped>

</style>