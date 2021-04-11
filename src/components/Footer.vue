<template>
  <v-footer app absolute color="rgba(0,0,0,0)" >
    <v-row align="center" justify="end">
      <v-col cols="3" md="2" class="d-flex justify-space-around align-content-center">
        <v-btn
            color="#FFFFFF"
            text
        ><v-icon> mdi-youtube </v-icon>
        </v-btn>
        <v-btn
            color="#FFFFFF"
            text
        ><v-icon> mdi-instagram </v-icon>
        </v-btn>
        <v-btn
            color="#FFFFFF"
            text
        ><v-icon> mdi-twitter </v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>

</style>