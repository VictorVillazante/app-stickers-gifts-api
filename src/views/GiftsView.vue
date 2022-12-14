<template>
    <h1>Gifts View</h1>
    <div class="row">
        <div v-for="gift in gifts" class="col-12 col-md-4" :key="gift.id">
            <div class="card p-3" >
                <img :src="gift.images.original.url" class="card-img-top" :alt="gift.id" loading="lazy">
                <div class="card-body">
                    <h5 class="card-title">{{ gift.title }}</h5>
                    <a href="#" class="btn btn-primary">Download</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        gifts: [],
    }),
    created() {
        this.obtenerGifts();
    },
    methods: {
        async obtenerGifts() {
            console.log("Obtener gifts")
            const r = await fetch(`http://api.giphy.com/v1/gifs/search?api_key=vHkuTqE586dExyzjDFyM6gscseBPHAar&q=pikachu&limit=10`);
            const { data } = await r.json();
            console.log(data);
            this.gifts = data;
        }
    }
}
</script>

<style>

</style>