<template>
  <nav class="fixed top-0 left-0 w-full bg-white border-b border-gray-800 p-4 shadow-md z-50">
    <div class="flex justify-between items-center mx-4 sm:mx-64">
      <!-- Logo -->
      <router-link to="/" class="text-purple-600 text-lg font-bold">
        Kulinary
      </router-link>
      
      <!-- Mobile Menu Button -->
      <button @click="toggleMenu" class="text-black sm:hidden">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path
            v-if="!isOpen"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16m-16 6h16"
          />
          <path 
            v-else 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            d="M6 18L18 6M6 6l12 12" 
          />
        </svg>
      </button>
      
      <!-- Desktop Navigation -->
      <div class="hidden sm:flex space-x-4">
        <router-link to="/" class="text-black hover:text-purple-600">Home</router-link>
        <router-link to="/about" class="text-black hover:text-purple-600">About</router-link>
        <router-link to="/food" class="text-black hover:text-purple-600">Food</router-link>
        <router-link to="/keranjang" class="text-black hover:text-purple-600 ml-8">
          <i class="fas fa-shopping-cart mr-2"></i>
        </router-link>
      </div>
    </div>
    
    <!-- Mobile Navigation -->
    <div v-if="isOpen" class="sm:hidden mt-2 flex flex-col space-y-2 mx-4">
      <router-link to="/" class="text-black hover:text-purple-600">Home</router-link>
      <router-link to="/about" class="text-black hover:text-purple-600">About</router-link>
      <router-link to="/food" class="text-black hover:text-purple-600">Food</router-link>
      <router-link to="/keranjang" class="text-black hover:text-purple-600">Keranjang</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
