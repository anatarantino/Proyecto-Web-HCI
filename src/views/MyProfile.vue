<template>
  <v-container fluid mt-8>
    <v-row align="center" justify="space-around">
      <v-col md="4">
        <v-row justify="center">
          <v-avatar color="#D6F2D8" size="150">
            <v-icon color="black" size="80">
              mdi-account
            </v-icon>
          </v-avatar>
        </v-row>
        <v-row justify="center">
          <h2 class="white--text ma-2">
            {{ username }}
          </h2>
        </v-row>
        <v-row justify="center" v-for="tab in tabs" v-bind:key="tab">
          <v-btn
              class="ma-2 pt-6 pb-6"
              v-bind:class="[{ active: currentTab === tab.section }]"
              @click="[currentTab = tab.section, currentComponent = tab.comp]"
              :color="(currentTab === tab.section) ? '#4DFF00' : '#757575'"
              rounded
              width="180"
          >
            <h2 class="custom-transform-class text-none white--text">
              {{ tab.section }}
            </h2>
          </v-btn>
        </v-row>
        <v-row justify="center">
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
        </v-row>
      </v-col>
      <v-col md="8">
        <component v-bind:is="currentComponent"></component>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProfileMain from "../components/ProfileMain";
import ProfileEjs from "../components/ProfileEjs";
import ProfileConfig from "../components/ProfileConfig";
import ProfileTrophies from "../components/ProfileTrophies";
import router from "@/router";

export default {
  name: "MyProfile",
  components: {ProfileMain, ProfileEjs, ProfileConfig, ProfileTrophies},
  data() {
    return {
      username: "Natalia",
      currentComponent: ProfileMain,
      currentTab: "Mi perfil",
      tabs: [
        {
          section: "Mi perfil",
          comp: ProfileMain
        },
        {
          section: "Mis ejercicios",
          comp: ProfileEjs
        },
        {
          section: "Mis logros",
          comp: ProfileTrophies
        },
        {
          section: "Configuración",
          comp: ProfileConfig
        }
      ]
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