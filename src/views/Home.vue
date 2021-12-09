<template>

<div class="p-8 bg-green-100 text-center text-gray-800">

  <div class="block py-3 border-4 border-green-800 rounded-2xl">
    <h1 class="text-4xl font-mono font-light tracking-tighter">Test y guia de uso de <span class="font-semibold underline uppercase text-green-500">Vue3</span> con <span class="font-semibold underline uppercase text-blue-500">Tailwind CSS</span>:</h1>
  </div>

  <div class="block m-2 text-xl">
    <p>Texto de Prueba <span class="font-extrabold">NPM</span> </p>
  </div>
  <div class="block m-2 p-2 border-2 border-green-900 rounded-md bg-white">
    <p class="text-justify leading-loose">
      Cillum commodo exercitation excepteur fugiat officia esse officia duis. Ipsum ullamco excepteur enim ullamco nulla labore veniam adipisicing amet cupidatat consequat tempor non.
      Cillum commodo exercitation excepteur fugiat officia esse officia duis. Ipsum ullamco excepteur enim ullamco nulla labore veniam adipisicing amet cupidatat consequat tempor non.
      Cillum commodo exercitation excepteur fugiat officia esse officia duis. Ipsum ullamco excepteur enim ullamco nulla labore veniam adipisicing amet cupidatat consequat tempor non.
      Cillum commodo exercitation excepteur fugiat officia esse officia duis. Ipsum ullamco excepteur enim ullamco nulla labore veniam adipisicing amet cupidatat consequat tempor non.
      Cillum commodo exercitation excepteur fugiat officia esse officia duis. Ipsum ullamco excepteur enim ullamco nulla labore veniam adipisicing amet cupidatat consequat tempor non.
      </p>
  </div>
</div>

<div class="bg-blue-200">

  <div class="block p-2 border-b-4 border-blue-800">
    <h1 class="text-4xl font-bold font-mono">Temario</h1>
  </div>

  <div class="bg-indigo-300 m-4 p-1 rounded-lg ring ring-indigo-600 ring-offset-4 shadow-2xl">
    <div class="inline-block">
      <router-link to="/block">
    
        <button class="bg-green-400 px-6 py-2  m-2 rounded-lg ring ring-green-600 ring-offset-2 uppercase text-center font-bold text-gray-800 shadow-lg">block</button>
    
      </router-link>
    </div>
    <div class="inline-block ">
       <router-link to="/flex">
    
        <button class="bg-blue-600 px-6 py-2  m-2 rounded-lg ring ring-blue-600 ring-offset-2 uppercase text-center font-bold text-gray-200 shadow-lg">flex</button>
    
      </router-link>
    </div>
    <div class="inline-block "></div>
    <div class="inline-block "></div>
  </div>

</div>

</template>

<script>

</script>
