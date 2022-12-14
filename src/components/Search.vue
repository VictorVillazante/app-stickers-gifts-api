<template>
  <form @submit.prevent="getGifts" class="p-3 row text-align-center justify-content-center">
    <div class="col-auto justify-content-center">
        <label for="search">Search</label>
    </div>
    <div class="col-auto">
        <input type="text" class="form-control" v-model.trim="buscar">
    </div>
    <div class="col-auto">
        <button type="submit" class="btn btn-warning">Search</button>
    </div>
  </form>
</template>

<script>
export default {
    data: ()=>({
        buscar:""
    }),
    methods:{
        getGifts(){
           this.$emit('busqueda',this.buscar);
           this.buscar="";
        }
    }
}
</script>

<style>

</style>