import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue' 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { 
      path: '/', 
      name: 'login', 
      component: LoginView 
    },
    { 
      path: '/register', 
      name: 'register', 
      component: () => import('../views/RegisterView.vue') 
    },
    { 
      path: '/forgot-password', 
      name: 'forgot-password', 
      component: () => import('../views/ForgotPasswordView.vue') 
    },
    { 
      path: '/search', 
      name: 'search', 
      component: () => import('../views/SearchView.vue') 
    },
    { 
      path: '/map', 
      name: 'map', 
      component: () => import('../views/MapView.vue') 
    },
    { 
      path: '/team', 
      name: 'team', 
      component: () => import('../views/TeamView.vue') 
    },
    { 
      path: '/profile', 
      name: 'profile', 
      component: () => import('../views/ProfileView.vue') 
    },
    { 
      path: '/chat', 
      name: 'chat', 
      component: () => import('../views/ChatView.vue') 
    },
    { 
      path: '/user/:id', 
      name: 'user-profile', 
      component: () => import('../views/ProfileView.vue') 
    },
  ],
})

export default router
