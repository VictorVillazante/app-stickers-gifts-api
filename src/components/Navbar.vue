<template>
  <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
  <div class="container-fluid">
    <RouterLink class="navbar-brand" to="/">Home</RouterLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <RouterLink class="nav-link" to="/" active-class="bg-white text-dark fw-bold">Home</RouterLink>
        <RouterLink class="nav-link" to="/gifts" active-class="bg-success text-dark fw-bold">Gifts</RouterLink>
        <RouterLink class="nav-link" to="/stickers" active-class="bg-primary text-dark fw-bold">Stickers</RouterLink>
        <a class="nav-link disabled">Disabled</a>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
export default {

}
</script>

<style>

</style>