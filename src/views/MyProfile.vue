<template>
  <v-app>
    <MyProfileBase>
    
    </MyProfileBase>
    <div>
      <h1> ESCRIBIENDO ARRIBA DEL COMPONENT</h1>
    </div>
  </v-app>
</template>

<script>
  import MyProfileBase from "../components/MyProfileBase";
  export default {
    name: "MyProfile",
    components: {MyProfileBase}
  }
</script>

<style scoped>

</style>