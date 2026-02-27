<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const teamSlots = ref([1, 2, 3, 4, 5]);

const navigateTo = (routeName) => {
  router.push({ name: routeName });
};
</script>

<template>
  <div class="flex flex-col h-screen bg-[#0f121a] overflow-hidden">
    
    <header class="bg-[#f2a900] p-4 shadow-md">
      <h1 class="text-black font-bold text-lg">Mi Equipo</h1>
    </header>


    <main class="flex-1 overflow-y-auto p-5 space-y-6 pb-24">
      <div 
        v-for="slot in teamSlots" 
        :key="slot"
        class="bg-[#161d2b] border border-gray-800 rounded-lg p-6 flex flex-col items-center relative"
      >

        <div class="absolute -top-3 bg-[#f2a900] text-black w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shadow-md">
          {{ slot }}
        </div>

        
        <div class="w-16 h-16 bg-[#2d3748] rounded-lg flex items-center justify-center mb-3">
          <span class="text-red-600 text-4xl font-bold">?</span>
        </div>

        
        <span class="text-gray-500 text-sm font-medium italic">Vacío</span>
      </div>
    </main>

    
    <nav class="fixed bottom-0 w-full bg-[#050505] border-t border-gray-900 flex justify-around py-3 px-2">
      <button @click="navigateTo('search')" class="flex flex-col items-center">
        <span class="text-gray-500 text-xs">Buscar</span>
      </button>
      
      <button @click="navigateTo('map')" class="flex flex-col items-center">
        <span class="text-gray-500 text-xs">Mapa</span>
      </button>

      <button @click="navigateTo('team')" class="flex flex-col items-center">
        <span class="text-[#f2a900] text-xs font-bold">Team</span>
        <div class="h-1 w-1 bg-[#f2a900] rounded-full mt-1"></div>
      </button>

      <button @click="navigateTo('profile')" class="flex flex-col items-center">
        <span class="text-gray-500 text-xs">Perfil</span>
      </button>
    </nav>

  </div>
</template>

<style scoped>
main::-webkit-scrollbar {
  width: 4px;
}
main::-webkit-scrollbar-thumb {
  background: #1c2331;
  border-radius: 10px;
}
</style>
