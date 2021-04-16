<template>
  <v-footer app absolute padless tile height="60px" color="rgba(0,0,0,0)" >
    <v-row align="center" justify="end">
      <v-col cols="3" md="2" class="d-flex justify-space-around align-content-center">
        <v-btn
            color="#FFFFFF"
            text
            href="https://www.youtube.com/"
        ><v-icon> mdi-youtube </v-icon>
        </v-btn>
        <v-btn
            color="#FFFFFF"
            text
            href="https://www.instagram.com/"
        ><v-icon> mdi-instagram </v-icon>
        </v-btn>
        <v-btn
            color="#FFFFFF"
            text
            href="https://www.twitter.com/"
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