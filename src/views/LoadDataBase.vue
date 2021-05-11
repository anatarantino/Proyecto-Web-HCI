<template>
  <div>
    <h1>Hola gracias por visitar gymate estamos cargando la base de datos</h1>
  </div>
</template>

<script>
export default {
  name: "LoadDataBase",
  created() {
    this.loadData();
  },
  methods: {
   async loadData() {
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
    }
  }
}
</script>

<style scoped>

</style>
