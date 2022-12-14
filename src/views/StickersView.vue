<template>
    <h1>Stickers View</h1>
    <Search @busqueda="obtenerStickers"/>
    <Loading v-if="loading"/>
    <div class="row">
        <div v-for="sticker in stickers" class="col-12 col-md-4" :key="sticker.id">
            <Card :gift="sticker"/>
        </div>
    </div>
</template>

<script>
    import Card from '../components/Card.vue';
    import Search from '../components/Search.vue';
    import Loading from '../components/Loading.vue';

export default {
    data: () => ({
        stickers: [],
        loading:true
    }),
    created() {
        this.obtenerStickers();
    },
    methods: {
        async obtenerStickers(buscar="pokemon") {
            if(buscar.trim()===""){
                console.log("vacio");
                alert("sin busqueda");
                return;
            }
            this.loading=true;
            console.log("Obtener gifts")
            const r = await fetch(`http://api.giphy.com/v1/stickers/search?api_key=vHkuTqE586dExyzjDFyM6gscseBPHAar&q=${buscar}&limit=10`);
            const { data } = await r.json();
            console.log(data);
            this.stickers = data;
            this.loading=false;
        }
    },
    components: {Card,Search,Loading}
}
</script>

<style>

</style>