<template>
  <div class="m-4 p-3">
      <div class="p-8 m-1 mb-4 rounded-lg bg-gradient-to-r from-indigo-400 via-indigo-600 to-indigo-800">
          <div class="flex border-2 border-white p-1">
              <h1 class="text-3xl uppercase text-gray-900 font-bold">display block:</h1>
          </div>
          <div class="block bg-blue-300 m-2 p-4 border-2 rounded-md border-white text-center text-black text-xl font-bold">1</div>
          <div class="block bg-blue-300 m-2 p-4 border-2 rounded-md border-white text-center text-black text-xl font-bold">2</div>
          <div class="block bg-blue-300 m-2 p-4 border-2 rounded-md border-white text-center text-black text-xl font-bold">3</div>
      </div>
      <div class="p-8 m-1 mb-4 rounded-lg bg-gradient-to-r from-green-400 via-green-600 to-green-800">
          <div class="flex border-2 border-white p-1 mb-1">
              <h1 class="text-3xl uppercase text-gray-900 font-bold">display inline-block:</h1>
          </div>
          <div class="border-2 border-white">
              <div class="inline-block bg-blue-300 m-2 p-4 border-2 rounded-md border-white text-center text-black text-xl font-bold">1</div>
              <div class="inline-block bg-blue-300 m-2 p-4 border-2 rounded-md border-white text-center text-black text-xl font-bold">2</div>
              <div class="inline-block bg-blue-300 m-2 p-4 border-2 rounded-md border-white text-center text-black text-xl font-bold">3</div>
          </div>
      </div>
      <div class="p-8 m-1 mb-4 rounded-lg bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-800">
          <div class="flex border-2 border-white p-1  mb-1">
              <h1 class="text-3xl uppercase text-gray-900 font-bold">display inline:</h1>
          </div>
          <div class="border-2 border-white">
              <div class="inline bg-blue-300 m-2 p-4 border-2 rounded-md border-white text-center text-black text-xl font-bold">1</div>
              <div class="inline bg-blue-300 m-2 p-4 border-2 rounded-md border-white text-center text-black text-xl font-bold">2</div>
              <div class="inline bg-blue-300 m-2 p-4 border-2 rounded-md border-white text-center text-black text-xl font-bold">3</div>
          </div>
      </div>
      <div class="p-8 m-1 mb-4 rounded-lg bg-gradient-to-r from-pink-400 via-pink-600 to-pink-800">
          <div class="flex border-2 border-white p-1">
              <h1 class="text-3xl uppercase text-gray-900 font-bold">display hidden:</h1>
          </div>
          <div class="block bg-blue-300 m-2 p-4 border-2 rounded-md border-white text-center text-black text-xl font-bold">1</div>
          <div class="block bg-blue-300 m-2 p-4 border-2 rounded-md border-white text-center text-black text-xl font-bold">2</div>
          <div class="block bg-blue-300 m-2 p-4 border-2 rounded-md border-white text-center text-black text-xl font-bold">3</div>
          <div class="hidden bg-blue-300 m-2 p-4 border-2 rounded-md border-white text-center text-black text-xl font-bold">4</div>
          <div class="block bg-blue-300 m-2 p-4 border-2 rounded-md border-white text-center text-black text-xl font-bold">5</div>
      </div>
      <div class="block rounded-lg p-4 mt-5 text-center bg-green-100">
            <router-link to="/">
                <button class="bg-green-400 px-6 py-2  m-2 rounded-lg ring ring-green-600 ring-offset-2 uppercase text-center font-bold text-gray-800 shadow-lg">regresar</button>
            </router-link>
      </div>
  </div>
</template>

<script>
export default {
    
    }
</script>

<style>

</style>