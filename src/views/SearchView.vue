<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();


const players = ref([
  { id: 1, name: 'ProGamer123', rank: 'Global', role: 'AWP' },
  { id: 2, name: 'NoobMaster', rank: 'Supreme', role: 'Rifle' },
  { id: 3, name: 'CS_King', rank: 'LEM', role: 'Entry' },
  { id: 4, name: 'HeadShot99', rank: 'Global', role: 'AWP' },
  { id: 5, name: 'SprayPray', rank: 'DMG', role: 'Support' },
  { id: 6, name: 'ClutchGod', rank: 'Supreme', role: 'Lurk' },
  { id: 7, name: 'EZ_Win', rank: 'Global', role: 'IGL' },
  { id: 8, name: 'Toxic_Player', rank: 'MGE', role: 'Rifle' },
  { id: 9, name: 'FastAimer', rank: 'Global', role: 'Entry' },
  { id: 10, name: 'SilentKiller', rank: 'Supreme', role: 'Lurk' },
]);


const navigateTo = (routeName) => {
  router.push({ name: routeName });
};
</script>

<template>
  <div class="flex flex-col h-screen bg-[#0f121a] overflow-hidden">
    
    
    <header class="bg-[#f2a900] p-4 shadow-md">
      <h1 class="text-black font-bold text-lg mb-3 uppercase tracking-tight">Buscar Team CS2</h1>
      <div class="relative">
        <input 
          type="text" 
          placeholder="Buscar jugadores..." 
          class="w-full bg-[#1c2331] text-white px-4 py-2 rounded-md focus:outline-none placeholder-gray-500 text-sm border border-transparent focus:border-black/20 transition-all"
        />
      </div>
    </header>

    
    <main class="flex-1 overflow-y-auto p-4 space-y-3 pb-24">
      <div 
        v-for="player in players" 
        :key="player.id"
        @click="navigateTo('profile')"
        class="bg-[#1c2331] p-4 rounded-lg flex justify-between items-center border border-gray-800 cursor-pointer active:scale-[0.98] active:bg-[#2d3748] transition-all duration-100"
      >
        <div class="flex flex-col">
          <h3 class="text-white font-bold text-sm tracking-wide">{{ player.name }}</h3>
          <p class="text-gray-500 text-xs font-medium uppercase">{{ player.rank }}</p>
        </div>
        
        <div class="flex items-center space-x-3">
          <span class="bg-[#f2a900] text-black text-[10px] font-extrabold px-3 py-1 rounded shadow-sm min-w-16.25 text-center uppercase">
            {{ player.role }}
          </span>
          
          <svg xmlns="http://www.w3.org" class="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </main>

    
    <nav class="fixed bottom-0 w-full bg-[#050505] border-t border-gray-900 flex justify-around py-3 px-2 z-50">
      <button @click="navigateTo('search')" class="flex flex-col items-center group">
        <span class="text-[#f2a900] text-xs font-bold transition-colors">Buscar</span>
        <div class="h-1 w-1 bg-[#f2a900] rounded-full mt-1"></div>
      </button>
      
      <button @click="navigateTo('map')" class="flex flex-col items-center group">
        <span class="text-gray-500 group-active:text-white text-xs transition-colors">Mapa</span>
      </button>

      <button @click="navigateTo('team')" class="flex flex-col items-center group">
        <span class="text-gray-500 group-active:text-white text-xs transition-colors">Team</span>
      </button>

      <button @click="navigateTo('profile')" class="flex flex-col items-center group">
        <span class="text-gray-500 group-active:text-white text-xs transition-colors">Perfil</span>
      </button>
    </nav>

  </div>
</template>

<style scoped>
main::-webkit-scrollbar {
  width: 4px;
}
main::-webkit-scrollbar-thumb {
  background: #2d3748;
  border-radius: 10px;
}


div, button {
  -webkit-tap-highlight-color: transparent;
}
</style>
