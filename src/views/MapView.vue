<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const router = useRouter();
const mapContainer = ref(null);


const players = [
  { id: 1, name: 'ProGamer123', lat: 41.3851, lng: 2.1734 },
  { id: 2, name: 'Toxic_Player', lat: 41.3947, lng: 2.1487 },
  { id: 3, name: 'Awp_Demon', lat: 41.3733, lng: 2.1544 },
  { id: 4, name: 'ClutchGod', lat: 41.4036, lng: 2.1744 },
];

onMounted(() => {
  
  const map = L.map(mapContainer.value, {
    zoomControl: false, 
    attributionControl: false
  }).setView([41.3871, 2.1681], 13);

  
  L.tileLayer('https://{s}://{z}/{x}/{y}{r}.png').addTo(map);

  
  players.forEach(player => {
    const marker = L.marker([player.lat, player.lng]).addTo(map);
    
    
    marker.on('click', () => {
      router.push({ name: 'user-profile', params: { id: player.id } });
    });

    
    marker.bindTooltip(player.name, { 
      permanent: true, 
      direction: 'bottom',
      className: 'player-label'
    });
  });
});

const navigateTo = (routeName) => {
  router.push({ name: routeName });
};
</script>

<template>
  <div class="flex flex-col h-screen bg-[#0f121a] overflow-hidden">
    
    
    <header class="bg-[#f2a900] p-4 shadow-md z-10">
      <h1 class="text-black font-bold text-lg">Mapa de Jugadores</h1>
      <p class="text-black text-[10px] opacity-80 uppercase tracking-tighter font-semibold">
        Arrastra para mover / Pellizca para zoom
      </p>
    </header>

    
    <div ref="mapContainer" class="flex-1 z-0"></div>

    
    <nav class="fixed bottom-0 w-full bg-[#050505] border-t border-gray-900 flex justify-around py-3 px-2 z-20">
      <button @click="navigateTo('search')" class="flex flex-col items-center">
        <span class="text-gray-500 text-xs">Buscar</span>
      </button>
      
      <button @click="navigateTo('map')" class="flex flex-col items-center">
        <span class="text-[#f2a900] text-xs font-bold">Mapa</span>
        <div class="h-1 w-1 bg-[#f2a900] rounded-full mt-1"></div>
      </button>

      <button @click="navigateTo('team')" class="flex flex-col items-center">
        <span class="text-gray-500 text-xs">Team</span>
      </button>

      <button @click="navigateTo('profile')" class="flex flex-col items-center">
        <span class="text-gray-500 text-xs">Perfil</span>
      </button>
    </nav>
  </div>
</template>

<style>

.player-label {
  background: #1c2331 !important;
  color: white !important;
  border: 1px solid #374151 !important;
  font-weight: 600 !important;
  font-size: 10px !important;
  border-radius: 4px !important;
  padding: 2px 6px !important;
  box-shadow: 0 2px 4px rgba(0,0,0,0.5) !important;
}


.leaflet-tooltip-top:before, .leaflet-tooltip-bottom:before {
  display: none !important;
}
</style>
