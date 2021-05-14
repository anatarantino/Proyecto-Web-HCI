<template>
  <v-container fill-height fluid>
    <v-row align="center" justify="center">
      <v-col cols="11" md="8" class="d-flex align-center justify-center">
        <v-card light color="transparent" class="pa-5" elevation="0">
          <v-img src="../assets/images/logo.png"
                 :max-height="this.$vuetify.breakpoint.smAndDown ? '120':'180'" contain/>
          <h2 class="white--text text-center text-h6 text-md-h4 font-weight-medium my-5">La base de datos ya está cargada</h2>
          <v-col cols="12" class="d-flex align-center justify-center">
            <v-btn class="text-capitalize" rounded to="/home">
              Volver al inicio
            </v-btn>
          </v-col>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "LoadDataBase",
  created() {
    this.loadData();
  },
  data() {
    return {
      value: 0
    }
  },
  methods: {
    async loadData() {
      this.value = 50
      try {
        const aux = await this.$store.dispatch('getCategories');
        if(aux.totalCount === 0){
          try {
            const aux = await this.$store.dispatch('categoriesData');
          } catch(e) {
            console.log(e);
          }
        }
      }catch (e){
        console.log(e);
      }
      this.value = 100
    }
  }
}
</script>

<style scoped>

</style>
