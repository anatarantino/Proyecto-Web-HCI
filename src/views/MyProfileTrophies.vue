<template>
  <v-container fluid mt-8>
    <v-row align="center" justify="space-around">
      <MyProfileBase></MyProfileBase>
      <v-col md="8">
        <v-card
          class="pa-2 rounded-xl "
          outlined
          max-width="80%"
          height="600"
          elevation="2"
        >
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MyProfileBase from "../components/MyProfileBase";
export default {
  name: "MyProfileTrophies",
  components: {MyProfileBase}
}
</script>

<style scoped>

</style>