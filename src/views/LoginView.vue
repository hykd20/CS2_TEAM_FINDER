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
      
      <h1 class="text-white text-2xl font-bold text-center mb-8 tracking-tight">
        Login CS2 TeamFinder
      </h1>

      <div class="space-y-6">
        
        <div>
          <label class="block text-gray-400 text-xs uppercase font-bold mb-2">Usuario</label>
          <input 
            type="text" 
            placeholder="nombre_usuario"
            class="w-full bg-[#2d3748] text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f2a900] border-transparent border-2 transition-all placeholder-gray-500"
          />
        </div>

        
        <div>
          <label class="block text-gray-400 text-xs uppercase font-bold mb-2">Contraseña</label>
          <input 
            type="password" 
            placeholder="********"
            class="w-full bg-[#2d3748] text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f2a900] border-transparent border-2 transition-all placeholder-gray-500"
          />
        </div>

        
        <button 
          @click="navigateTo('search')"
          class="w-full bg-[#f2a900] hover:bg-[#d49400] text-black font-extrabold py-3 rounded-md transition-all uppercase tracking-widest text-sm shadow-lg"
        >
          Entrar
        </button>
      </div>

      
      <div class="mt-8 flex flex-col items-center space-y-5">
        <button 
          @click="navigateTo('register')"
          class="text-[#f2a900] hover:text-white transition-colors text-sm font-bold underline decoration-2 underline-offset-4"
        >
          Regístrate
        </button>
        
        <button 
          @click="navigateTo('forgot-password')"
          class="text-gray-400 hover:text-[#f2a900] transition-colors text-xs"
        >
          Olvidé mi contraseña
        </button>
      </div>

    </div>
  </div>
</template>
