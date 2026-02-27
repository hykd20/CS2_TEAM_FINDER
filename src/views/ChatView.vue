<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goBack = () => {
  router.push({ name: 'profile' });
};
</script>

<template>
  <div class="flex flex-col h-screen bg-[#0f121a]">
    <header class="bg-[#f2a900] p-4 shadow-md flex items-center gap-3 shrink-0">
       <button @click="goBack" class="bg-black text-white text-[10px] px-2 py-1 rounded font-bold uppercase">
        Atrás
      </button>
      
      
      <div class="w-10 h-10 bg-black rounded-full flex items-center justify-center border border-gray-800">
        <span class="text-white text-xs">👤</span>
      </div>
      <div>
        <h1 class="text-black font-bold text-sm leading-none">DreamybullxX</h1>
        <span class="text-black text-[10px] opacity-70">En línea</span>
      </div>
    </header>

    <main class="flex-1 overflow-y-auto p-4 space-y-4 flex flex-col">
      <div class="self-start max-w-[80%]">
        <div class="bg-[#1c2331] text-white p-3 rounded-tr-xl rounded-bl-xl rounded-br-xl shadow-md border border-gray-800">
          <p class="text-sm">Hola! Quieres jugar?</p>
          <span class="text-[9px] text-gray-500 mt-1 block">14:23</span>
        </div>
      </div>

      <div class="self-end max-w-[80%]">
        <div class="bg-[#f2a900] text-black p-3 rounded-tl-xl rounded-bl-xl rounded-br-xl shadow-md">
          <p class="text-sm font-medium">Si! Que rol juegas?</p>
          <span class="text-[9px] text-black opacity-60 mt-1 block text-right">14:24</span>
        </div>
      </div>

      <div class="self-start max-w-[80%]">
        <div class="bg-[#1c2331] text-white p-3 rounded-tr-xl rounded-bl-xl rounded-br-xl shadow-md border border-gray-800">
          <p class="text-sm">Rifler, y tu?</p>
          <span class="text-[9px] text-gray-500 mt-1 block">14:24</span>
        </div>
      </div>

      <div class="self-end max-w-[80%]">
        <div class="bg-[#f2a900] text-black p-3 rounded-tl-xl rounded-bl-xl rounded-br-xl shadow-md">
          <p class="text-sm font-medium">AWPer, perfecto</p>
          <span class="text-[9px] text-black opacity-60 mt-1 block text-right">14:25</span>
        </div>
      </div>

    </main>
    <footer class="p-4 bg-[#050505] flex gap-2 items-center shrink-0">
      <div class="flex-1 relative">
        <input 
          type="text" 
          placeholder="Escribe un mensaje..." 
          class="w-full bg-[#1c2331] text-white px-4 py-3 rounded-lg focus:outline-none border border-gray-800 text-sm"
        />
      </div>
      <button class="bg-[#f2a900] w-12 h-10 rounded-lg flex items-center justify-center shadow-lg active:opacity-80">
        <span class="text-xl">▶</span>
      </button>
    </footer>

  </div>
</template>

<style scoped>
main::-webkit-scrollbar {
  width: 0px;
}
</style>
