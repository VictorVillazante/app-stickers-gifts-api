<template>
    <div class="card p-3">
        <img :src="gift.images.original.url" class="card-img-top" :alt="gift.id" loading="lazy">
        <div class="card-body">
            <h5 class="card-title">{{ gift.title }}</h5>
            <a :href="gift.images.original.url" class="btn btn-primary" download="">Download</a>
        </div>
    </div>
</template>

<script>
export default {
    props: ['gift']
}
</script>

<style>

</style>