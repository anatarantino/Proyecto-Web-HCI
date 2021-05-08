<template>
  <v-container
      class="pa-2"
      max-width="90%"
      elevation="2"
  >
    <v-row align="center" class="d-flex ma-0 pa-0">
      <v-col cols="3" class="d-flex align-center justify-center" style="position: relative">
        <v-row>
          <div>
            <v-avatar color="#D6F2D8" size="150">
              <v-icon color="black" size="80">
                mdi-account
              </v-icon>
            </v-avatar>
            <v-btn icon style="position: absolute; bottom: 0;">
              <v-icon color="white">mdi-pencil</v-icon>
            </v-btn>
          </div>
        </v-row>
      </v-col>
      <v-col>
        <v-row justify="left">
          <h1 class="white--text ma-2">
            {{ username }}
          </h1>
        </v-row>
        <v-row justify="left">
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

export default {
  name: "ProfileMain",
  data() {
    return {
      url: ""
    }
  },
  computed: {
    username() {
      return this.$store.getters["user/userData"].username;
    },
    email() {
      return this.$store.getters["user/userData"].email;
    }
  }
}
</script>

<style scoped>
</style>