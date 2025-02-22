<script setup>
defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="bg-white rounded-xl shadow-lg p-6 w-full max-w-sm shadow-gray-300">
    <img
      :src="'public/assets/' + product.gambar"
      alt="Makanan"
      class="w-full h-60 object-cover rounded-md"
    />
    <h3 class="text-lg font-bold text-gray-900 mt-3">{{ product.nama }}</h3>
    <p class="text-gray-600 mb-5">Harga: Rp {{ product.harga }}</p>
    <router-link
      :to="'/food/' + product.id"
      class="bg-purple-600 hover:bg-white text-white hover:text-purple-600 border border-purple-600 hover:border-white py-2 px-3 rounded"
      >Pesan</router-link
    >
  </div>
</template>
