<template>
  <v-container
      class="pa-2"
      max-width="90%"
      elevation="2"
  >
    <v-row align="center" class="d-flex ma-0 pa-0">
      <v-col cols="3" ma-0 pa-0>
        <v-row>
          <v-avatar color="#D6F2D8" size="150">
            <v-icon color="black" size="80">
              mdi-account
            </v-icon>
          </v-avatar>
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
      <v-col>
        <v-btn
            color="white"
            rounded
            class="ma-2 pt-6 pb-6"
            width="180"
            @click="logout"
        >
          <h2 class="custom-transform-class text-none">
            Cerrar Sesión
          </h2>
        </v-btn>
      </v-col>
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
  },
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