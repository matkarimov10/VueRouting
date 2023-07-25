<script setup>
import Home from "./view/Home.vue";
import About from "./view/About.vue";
import {RouterView} from "vue-router";
import {ref} from "vue";

const counter = ref(0)
</script>

<template>
<!--  <Home/>-->
<!--  <About/>-->
  <div class="flex justify-center mt-4">
    <router-link active-class="active" class="m-2 text-xl hover:text-blue-700" to="/">Home</router-link>
    <router-link active-class="active" class="m-2 text-xl hover:text-blue-700" to="/about">About</router-link>
  </div>



<RouterView/>

</template>

<style scoped>
.active{
  font-weight: bold;
  color: blue;
}
</style>
