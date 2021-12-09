<template>

<div class="p-3 pb-4 rounded-b-2xl flex flex-row justify-between items-center bg-gradient-to-r from-blue-500 via-indigo-600 to-green-600">

  <span></span>
  <span></span>
  <span></span>

  <div class="rounded-full border-8 border-white">
    <img id="image" class="object-scale-down" src="../assets//logovue.png" >
  </div>

  <span class="text-white text-8xl font-extrabold">+</span>  

  <div class="rounded-full border-8 border-white">
    <img id="image" class="object-scale-down" src="../assets//logotw.png" >
  </div>

  <span></span>
  <span></span>
  <span></span>

</div>

</template>

<script>
export default {
  name: 'Image',
}
</script>

<style scoped>

  #image{

    width: 150px;
    height: 150px;

  }

</style>
