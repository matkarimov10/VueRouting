<script setup>
import {useRoute, RouterView, useRouter} from "vue-router";
import {ref, onBeforeMount} from "vue";
import cars from "../data.json"


const route = useRoute()
const router = useRouter()
const car = ref(null)

const {id} = route.params

onBeforeMount(() => {
  car.value = cars.find(c => c.id === parseInt(id))
})


</script>

<template>
  <h1 class="text-center text-xl font-bold mt-6">The Car View</h1>
  <div class="container mx-auto text-center">
    <div v-if="car" class="border mx-auto flex flex-col max-w-lg py-5 mt-4 justify-center rounded-md shadow-xl">
      <div class="my-1 text-blue-700 font-bold">Make: {{car.make}}</div>
      <div class="my-1 font-bold">Body: {{car.body}}</div>
      <div class="my-1 font-bold">Price: {{car.price}}</div>
      <div class="my-1 font-bold">Year: {{car.year}}</div>

      <buttton @click="router.back()" class="px-3 py-2 bg-blue-700 text-white rounded-md mx-24 my-2 cursor-pointer">Go Back</buttton>
      <RouterView/>
    </div>
    <div v-else class="border mx-auto flex flex-col max-w-lg h-40 justify-center rounded-md shadow-xl">
      <div class="my-1 text-blue-700 font-bold">Car Not Found</div>
    </div>

  </div>
</template>

<style scoped>

</style>