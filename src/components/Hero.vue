<script setup></script>

<template>
  <div class="flex flex-col md:flex-row items-center justify-center px-4 py-32">
    <!-- Text Section -->
    <div class="text-center md:text-left max-w-xl mx-auto space-y-5 mr-0">
      <h1 class="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
        Makanan Terbaik, Murah, dan Dijamin Enak
      </h1>
      <p class="text-lg text-gray-700">
        Temukan beragam kuliner lezat hanya di <span class="text-purple-600">Kulinary!</span>
      </p>
      <button
        class="bg-purple-600 hover:bg-white text-white hover:text-purple-600 border border-purple-600 hover:border-white py-2 px-4 rounded mb-8 md:mb-0"
      >
        <router-link to="/food">Pesan Sekarang</router-link>
      </button>
    </div>

    <!-- Image Section -->
    <div class="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg ml-0 md:ml-40">
      <img src="../assets/hero.svg" alt="Hero" class="w-full" />
    </div>
  </div>
</template>
