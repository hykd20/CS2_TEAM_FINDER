<script setup>
import { useRouter, useRoute } from 'vue-router';
import { useSwipe } from '@vueuse/core';
import { ref, computed } from 'vue';

const router = useRouter();
const route = useRoute();

const navigationOrder = ['search', 'map', 'team', 'profile'];

const container = ref(null);
const { direction } = useSwipe(container);

const handleSwipe = () => {
  const currentIndex = navigationOrder.indexOf(route.name);
  if (currentIndex === -1) return;

  if (direction.value === 'left') {
    if (currentIndex < navigationOrder.length - 1) {
      const nextRoute = navigationOrder[currentIndex + 1];
      router.push({ name: nextRoute });
    }
  }

  if (direction.value === 'right') {
    if (currentIndex > 0) {
      const prevRoute = navigationOrder[currentIndex - 1];
      router.push({ name: prevRoute });
    }
  }
};


import { watch } from 'vue';
watch(direction, () => {
  if (route.name === 'map') return;
  
  if (direction.value) handleSwipe();
});
</script>

<template>
  <div ref="container" class="h-screen w-screen overflow-hidden">
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
