<script setup>
defineProps({
  name: String,
  age: Number,
  gender: String,
  position: Number
})

</script>

<template>
<div class="mx-auto text-center border max-w-2xl mt-6 border-blue-600 rounded-md p-4">
  <h3 class="text-blue-700">Name: {{name}}</h3>
  <p class="text-green-700">Age: {{age}}</p>
  <p class="text-yellow-700">Gender: {{gender}}</p>
  <p>Position: {{position}}</p>
  <button @click="$emit('deleteItem', position)" class="bg-red-500 text-white p-1 flex hover:bg-red-700 rounded-md">Delete Item</button>
</div>


</template>

<style scoped>

</style>