<template>
    <h1>Gifts View</h1>
    <Search @busqueda="obtenerGifts"/>
    <Loading v-if="loading"/>
    <div class="row">
        <div v-for="gift in gifts" class="col-12 col-md-4" :key="gift.id">
            <Card :gift="gift"/>
        </div>
    </div>
</template>

<script>
    import Card from '../components/Card.vue';
    import Search from '../components/Search.vue';
    import Loading from '../components/Loading.vue';

export default {
    data: () => ({
        gifts: [],
        loading:true
    }),
    created() {
        this.obtenerGifts();
    },
    methods: {
        async obtenerGifts(buscar="pokemon") {
            if(buscar.trim()===""){
                console.log("vacio");
                alert("sin busqueda");
                return;
            }
            this.loading=true;
            console.log("Obtener gifts")
            const r = await fetch(`http://api.giphy.com/v1/gifs/search?api_key=vHkuTqE586dExyzjDFyM6gscseBPHAar&q=${buscar}&limit=10`);
            const { data } = await r.json();
            console.log(data);
            this.gifts = data;
            this.loading=false;
        }
    },
    components: {Card,Search,Loading}
}
</script>

<style>

</style>