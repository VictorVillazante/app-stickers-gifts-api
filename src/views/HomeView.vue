<template>
  <h1>Home View</h1>
  <img :src=src :alt=name>
</template>

<script>
import { method } from 'lodash';

export default {
  data: ()=> ({
    src:"",
    name:""
  }),
  created(){
    this.getGifts();
  },
  methods:{
    async getGifts(){
      const dataP=await fetch("https://api.giphy.com/v1/gifs/random?api_key=vHkuTqE586dExyzjDFyM6gscseBPHAar");
      const data=await dataP.json();
      console.log(data.data.images.original.url);
      this.src=data.data.images.original.url;
      this.name=data.data.title;
      
    }
  }
}
</script>

<style>

</style>