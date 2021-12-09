<template>
<!--Bases-->
  <div class="bg-gray-200 m-4 rounded-lg border-4 border-gray-800">
    <h1 class="p-1 text-gray-800 text-3xl font-mono uppercase">Bases</h1>
    
    <div class="bg-gray-400 m-4 rounded-lg border-4 border-gray-800">
        <h1 class="p-1 text-gray-800 text-3xl font-mono uppercase">flex flex-col</h1>
        <div class="flex flex-col bg-gray-800 p-8">
          <div class="bg-yellow-300 px-4 py-2 m-2 uppercase text-2xl ">1</div>
          <div class="bg-blue-600 px-4 py-2 m-2 uppercase text-2xl ">2</div>
          <div class="bg-red-300 px-4 py-2 m-2 uppercase text-2xl ">3</div>
        </div>
        <div class="bg-black px-4 py-2 m-2 text-white text-xl font-mono">
          <span class="text-green-400">class</span>
          =
          <span class="text-red-500">"</span>
          <span class="text-yellow-400">flex flex-col</span>
          <span class="text-yellow-100"> ...</span>
          <span class="text-red-500">"</span>
        </div>
    </div>

    <div class="bg-gray-400 m-4 rounded-lg border-4 border-gray-800">
        <h1 class="p-1 text-gray-800 text-3xl font-mono uppercase">flex flex-row</h1>
        <div class="flex flex-row bg-gray-800 p-8">
          <div class="bg-yellow-300 px-4 py-2 m-2 uppercase text-2xl ">1</div>
          <div class="bg-blue-600 px-4 py-2 m-2 uppercase text-2xl ">2</div>
          <div class="bg-red-300 px-4 py-2 m-2 uppercase text-2xl ">3</div>
        </div>
        <div class="bg-black px-4 py-2 m-2 text-white text-xl font-mono">
          <span class="text-green-400">class</span>
          =
          <span class="text-red-500">"</span>
          <span class="text-yellow-400">flex flex-row</span>
          <span class="text-yellow-100"> ...</span>
          <span class="text-red-500">"</span>
        </div>
    </div>

    <div class="bg-gray-400 m-4 rounded-lg border-4 border-gray-800">
        <h1 class="p-1 text-gray-800 text-3xl font-mono uppercase">flex flex-col-reverse</h1>
        <div class="flex flex-col-reverse bg-gray-800 p-8">
          <div class="bg-yellow-300 px-4 py-2 m-2 uppercase text-2xl ">1</div>
          <div class="bg-blue-600 px-4 py-2 m-2 uppercase text-2xl ">2</div>
          <div class="bg-red-300 px-4 py-2 m-2 uppercase text-2xl ">3</div>
        </div>
        <div class="bg-black px-4 py-2 m-2 text-white text-xl font-mono">
          <span class="text-green-400">class</span>
          =
          <span class="text-red-500">"</span>
          <span class="text-yellow-400">flex flex-col-reverse</span>
          <span class="text-yellow-100"> ...</span>
          <span class="text-red-500">"</span>
        </div>
    </div>

    <div class="bg-gray-400 m-4 rounded-lg border-4 border-gray-800">
        <h1 class="p-1 text-gray-800 text-3xl font-mono uppercase">flex flex-row-reverse</h1>
        <div class="flex flex-row-reverse bg-gray-800 p-8">
          <div class="bg-yellow-300 px-4 py-2 m-2 uppercase text-2xl ">1</div>
          <div class="bg-blue-600 px-4 py-2 m-2 uppercase text-2xl ">2</div>
          <div class="bg-red-300 px-4 py-2 m-2 uppercase text-2xl ">3</div>
        </div>
        <div class="bg-black px-4 py-2 m-2 text-white text-xl font-mono">
          <span class="text-green-400">class</span>
          =
          <span class="text-red-500">"</span>
          <span class="text-yellow-400">flex flex-row-reverse</span>
          <span class="text-yellow-100"> ...</span>
          <span class="text-red-500">"</span>
        </div>
    </div>

  </div>

<!--Alineación Horizontal-->
  <div class="bg-gray-200 m-4 rounded-lg border-4 border-gray-800">
    <h1 class="p-1 text-gray-800 text-3xl font-mono uppercase">Alineación Horizontal</h1>
    <div class="bg-gray-400 m-4 rounded-lg border-4 border-gray-800">
        <h1 class="p-1 text-gray-800 text-3xl font-mono uppercase">flex justify-start</h1>
        <div class="flex flex-row justify-start bg-gray-800 p-8">
          <div class="bg-yellow-300 px-4 py-2 m-2 uppercase text-2xl ">1</div>
          <div class="bg-blue-600 px-4 py-2 m-2 uppercase text-2xl ">2</div>
          <div class="bg-red-300 px-4 py-2 m-2 uppercase text-2xl ">3</div>
        </div>
        <div class="bg-black px-4 py-2 m-2 text-white text-xl font-mono">
          <span class="text-green-400">class</span>
          =
          <span class="text-red-500">"</span>
          <span class="text-yellow-400">flex flex-row justify-start</span>
          <span class="text-yellow-100"> ...</span>
          <span class="text-red-500">"</span>
          <span class=" font-sans font-light text-xs bg-green-900 px-3 py-1 m-1 rounded-xl"> esta propiedad -> <span class="text-yellow-500" >'flex-row'</span> es totalmente opcional</span> 
        </div>
    </div>

    <div class="bg-gray-400 m-4 rounded-lg border-4 border-gray-800">
        <h1 class="p-1 text-gray-800 text-3xl font-mono uppercase">flex justify-end</h1>
        <div class="flex flex-row justify-end bg-gray-800 p-8">
          <div class="bg-yellow-300 px-4 py-2 m-2 uppercase text-2xl ">1</div>
          <div class="bg-blue-600 px-4 py-2 m-2 uppercase text-2xl ">2</div>
          <div class="bg-red-300 px-4 py-2 m-2 uppercase text-2xl ">3</div>
        </div>
        <div class="bg-black px-4 py-2 m-2 text-white text-xl font-mono">
          <span class="text-green-400">class</span>
          =
          <span class="text-red-500">"</span>
          <span class="text-yellow-400">flex flex-row justify-end</span>
          <span class="text-yellow-100"> ...</span>
          <span class="text-red-500">"</span>
          <span class=" font-sans font-light text-xs bg-green-900 px-3 py-1 m-1 rounded-xl"> esta propiedad -> <span class="text-yellow-500" >'flex-row'</span> es totalmente opcional</span> 
        </div>
    </div>

    <div class="bg-gray-400 m-4 rounded-lg border-4 border-gray-800">
        <h1 class="p-1 text-gray-800 text-3xl font-mono uppercase">flex justify-between</h1>
        <div class="flex flex-row justify-between bg-gray-800 p-8">
          <div class="bg-yellow-300 px-4 py-2 m-2 uppercase text-2xl ">1</div>
          <div class="bg-blue-600 px-4 py-2 m-2 uppercase text-2xl ">2</div>
          <div class="bg-red-300 px-4 py-2 m-2 uppercase text-2xl ">3</div>
        </div>
        <div class="bg-black px-4 py-2 m-2 text-white text-xl font-mono">
          <span class="text-green-400">class</span>
          =
          <span class="text-red-500">"</span>
          <span class="text-yellow-400">flex flex-row justify-between</span>
          <span class="text-yellow-100"> ...</span>
          <span class="text-red-500">"</span>
          <span class=" font-sans font-light text-xs bg-green-900 px-3 py-1 m-1 rounded-xl"> esta propiedad -> <span class="text-yellow-500" >'flex-row'</span> es totalmente opcional</span> 
        </div>
    </div>

    <div class="bg-gray-400 m-4 rounded-lg border-4 border-gray-800">
        <h1 class="p-1 text-gray-800 text-3xl font-mono uppercase">flex justify-around</h1>
        <div class="flex flex-row justify-around bg-gray-800 p-8">
          <div class="bg-yellow-300 px-4 py-2 m-2 uppercase text-2xl ">1</div>
          <div class="bg-blue-600 px-4 py-2 m-2 uppercase text-2xl ">2</div>
          <div class="bg-red-300 px-4 py-2 m-2 uppercase text-2xl ">3</div>
        </div>
    </div>

  </div>

<!--Alineación Vertical-->
  <div class="bg-gray-200 m-4 rounded-lg border-4 border-gray-800">
    <h1 class="p-1 text-gray-800 text-3xl font-mono uppercase">Alineación Vertical</h1>
    <div class="bg-gray-400 m-4 rounded-lg border-4 border-gray-800">
        <h1 class="p-1 text-gray-800 text-3xl font-mono uppercase">flex items-start</h1>
        <div class="h-64 flex flex-row items-start justify-around bg-gray-800 p-8">
          <div class="bg-yellow-300 px-4 py-2 m-2 uppercase text-2xl ">1</div>
          <div class="bg-blue-600 px-4 py-2 m-2 uppercase text-2xl ">2</div>
          <div class="bg-red-300 px-4 py-2 m-2 uppercase text-2xl ">3</div>
        </div>
    </div>

    <div class="bg-gray-400 m-4 rounded-lg border-4 border-gray-800">
        <h1 class="p-1 text-gray-800 text-3xl font-mono uppercase">flex items-center</h1>
        <div class="h-64 flex flex-row items-center justify-around bg-gray-800 p-8">
          <div class="bg-yellow-300 px-4 py-2 m-2 uppercase text-2xl ">1</div>
          <div class="bg-blue-600 px-4 py-2 m-2 uppercase text-2xl ">2</div>
          <div class="bg-red-300 px-4 py-2 m-2 uppercase text-2xl ">3</div>
        </div>
    </div>

    <div class="bg-gray-400 m-4 rounded-lg border-4 border-gray-800">
        <h1 class="p-1 text-gray-800 text-3xl font-mono uppercase">flex items-strech</h1>
        <div class="h-64 flex flex-row items-strech justify-around bg-gray-800 p-8">
          <div class="bg-yellow-300 px-4 py-2 m-2 uppercase text-2xl ">1</div>
          <div class="bg-blue-600 px-4 py-2 m-2 uppercase text-2xl ">2</div>
          <div class="bg-red-300 px-4 py-2 m-2 uppercase text-2xl ">3</div>
        </div>
    </div>

    <div class="bg-gray-400 m-4 rounded-lg border-4 border-gray-800">
        <h1 class="p-1 text-gray-800 text-3xl font-mono uppercase">flex items-baseline (se alinea al texto)</h1>
        <div class="h-64 flex flex-row items-baseline justify-around bg-gray-800 p-8">
          <div class="bg-green-300 px-4 py-2 m-2 uppercase text-2xl ">Hello!!</div>
          <div class="bg-yellow-300 px-4 py-2 m-2 uppercase text-2xl ">1</div>
          <div class="bg-blue-600 px-4 py-2 m-2 uppercase text-2xl ">2</div>
          <div class="bg-red-300 px-4 py-2 m-2 uppercase text-2xl ">3</div>
        </div>
    </div>

  </div>

</template>

<script>
export default {

}
</script>

<style>

</style>