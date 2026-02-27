<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const navigateTo = (routeName) => {
  router.push({ name: routeName });
};
</script>

<template>
  <div class="flex flex-col h-screen bg-[#0f121a] overflow-hidden">
    
    
    <header class="bg-[#f2a900] p-4 shadow-md">
      <h1 class="text-black font-bold text-lg">Mi Perfil</h1>
    </header>

    
    <main class="flex-1 overflow-y-auto p-4 space-y-4 pb-24">
      
      
      <section class="bg-[#1c2331] rounded-lg p-6 flex flex-col items-center border border-gray-800 shadow-lg">
        <div class="w-20 h-20 bg-[#2d3748] rounded-full flex items-center justify-center mb-3 border-2 border-gray-700">
          <span class="text-gray-400 text-3xl">👤</span>
        </div>
        <h2 class="text-white text-xl font-bold mb-6">AlfonsF</h2>
        
        <div class="w-full space-y-3 text-sm mb-6">
          <div class="flex justify-between border-b border-gray-700 pb-2">
            <span class="text-gray-500">Rango:</span>
            <span class="text-white font-medium">Global Elite</span>
          </div>
          <div class="flex justify-between border-b border-gray-700 pb-2">
            <span class="text-gray-500">Rol:</span>
            <span class="text-white font-medium">AWPer</span>
          </div>
        </div>

        <button 
             @click="navigateTo('chat')" 
            class="w-full bg-[#f2a900] hover:bg-[#d49400] text-black font-bold py-2.5 rounded-md transition-colors text-sm uppercase tracking-wider"
        >
            Chat
        </button>
      </section>

      
      <section class="bg-[#1c2331] rounded-lg p-5 border border-gray-800 shadow-lg">
        <h3 class="text-[#f2a900] text-xs font-bold uppercase mb-4 tracking-wider">Mis Estadísticas</h3>
        <div class="grid grid-cols-2 gap-3">
          <div class="bg-[#0f121a] p-4 rounded-md text-center border border-gray-800">
            <p class="text-white text-xl font-bold">156</p>
            <p class="text-gray-500 text-[10px] uppercase">Partidas</p>
          </div>
          <div class="bg-[#0f121a] p-4 rounded-md text-center border border-gray-800">
            <p class="text-[#f2a900] text-xl font-bold">62%</p>
            <p class="text-gray-500 text-[10px] uppercase">Victorias</p>
          </div>
          <div class="bg-[#0f121a] p-4 rounded-md text-center border border-gray-800">
            <p class="text-white text-xl font-bold">1.24</p>
            <p class="text-gray-500 text-[10px] uppercase">K/D Ratio</p>
          </div>
          <div class="bg-[#0f121a] p-4 rounded-md text-center border border-gray-800">
            <p class="text-white text-xl font-bold">890h</p>
            <p class="text-gray-500 text-[10px] uppercase">Jugadas</p>
          </div>
        </div>
      </section>

      
      <section class="bg-[#1c2331] rounded-lg p-5 border border-gray-800 shadow-lg">
        <h3 class="text-[#f2a900] text-xs font-bold uppercase mb-4 tracking-wider">Mapas Favoritos</h3>
        <div class="space-y-3 text-sm">
          <div class="flex justify-between">
            <span class="text-gray-300">Dust2</span>
            <span class="text-gray-500">45 partidas</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-300">Mirage</span>
            <span class="text-gray-500">38 partidas</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-300">Inferno</span>
            <span class="text-gray-500">29 partidas</span>
          </div>
        </div>
      </section>

    </main>

    
    <nav class="fixed bottom-0 w-full bg-[#050505] border-t border-gray-900 flex justify-around py-3 px-2">
      <button @click="navigateTo('search')" class="flex flex-col items-center">
        <span class="text-gray-500 text-xs">Buscar</span>
      </button>
      <button @click="navigateTo('map')" class="flex flex-col items-center">
        <span class="text-gray-500 text-xs">Mapa</span>
      </button>
      <button @click="navigateTo('team')" class="flex flex-col items-center">
        <span class="text-gray-500 text-xs">Team</span>
      </button>
      <button @click="navigateTo('profile')" class="flex flex-col items-center">
        <span class="text-[#f2a900] text-xs font-bold">Perfil</span>
        <div class="h-1 w-1 bg-[#f2a900] rounded-full mt-1"></div>
      </button>
    </nav>

  </div>
</template>
