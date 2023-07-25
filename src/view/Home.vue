<script setup>
import carsData from '../data.json'
import {onMounted, ref, watch} from "vue";
import {useRoute, useRouter} from "vue-router";

const router = useRouter()
const cars = ref(carsData)
const make = ref("")
const route = useRoute()

onMounted(()=>{
  make.value = route.query.make || ""
})

watch(make, () => {
  if (make.value) {
    if (make.value === "All") {
      cars.value = carsData
    }
    else {
      cars.value = carsData.filter(c => c.make === make.value)
    }
  }
})

const handleChange = ()=>{
  router.push({query:{make: make.value}})
}


</script>

<template>
  <div class="container mx-auto">
    <h1 class="text-center text-xl mt-12 font-bold">Home page</h1>
    <h1 class="text-center text-4xl mt-4">Our cars</h1>


    <select @change="handleChange" v-model="make"
            class="max-w-lg flex justify-center mx-auto bg-gray-50 border border-gray-400  text-md rounded-lg  mt-5 w-full p-2.5 dark:bg-gray-700">
      <option value="All">All</option>
      <option value="Chevrolet">Chevrolet</option>
      <option value="Audi">Audi</option>
      <option value="Porsche">Porsche</option>
    </select>


    <div class="flex flex-wrap justify-center mt-4">
      <div
          v-for="car in cars"
          :key="car.id"
          class="shadow-xl m-2 cursor-pointer w-1/4 border border-gray-200 rounded-md p-6"
          @click="router.push(`/car/${car.id}`)"
      >
        <p class="text-3xl text-blue-700 hover:text-blue-800">{{ car.make }}</p>
        <p>${{ car.price }}</p>
      </div>
    </div>

  </div>
</template>

<style scoped>

</style>