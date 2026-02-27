<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const navigateTo = (routeName) => {
  router.push({ name: routeName });
};
</script>

<template>
  <div class="h-screen bg-[#0f121a] flex flex-col items-center justify-start pt-16 px-6 overflow-y-auto">
    
    
    <div class="w-full max-w-md bg-[#1c2331] rounded-lg p-8 shadow-2xl border border-gray-800">
      
      <h1 class="text-white text-2xl font-medium text-center mb-10">
        Recuperar Contraseña
      </h1>

      <div class="space-y-6">
        <div>
          <label class="block text-gray-400 text-xs mb-2 ml-1">Número de teléfono</label>
          <input 
            type="tel" 
            placeholder="+34 123 456 789"
            class="w-full bg-[#2d3748] text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f2a900] border-transparent border-2 transition-all placeholder-gray-500 text-sm"
          />
        </div>

        
        <button 
          @click="navigateTo('login')"
          class="w-full bg-[#f2a900] hover:bg-[#d49400] text-black font-semibold py-3 rounded-md transition-all shadow-lg text-sm uppercase tracking-wide"
        >
          Enviar código
        </button>
      </div>

      
      <div class="mt-8 flex justify-center">
        <button 
          @click="navigateTo('login')"
          class="text-[#f2a900] hover:underline text-sm font-medium border-b border-[#f2a900]"
        >
          Volver al login
        </button>
      </div>

    </div>
  </div>
</template>
