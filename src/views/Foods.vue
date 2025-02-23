<script setup>
import Navbar from "../components/Navbar.vue";
import CardProduct from "../components/CardProduct.vue";
import axios from "axios";
import { ref, onMounted, computed } from "vue";

const products = ref([]);
const searchQuery = ref("");

const fetchAllProducts = async () => {
  try {
    const response = await axios.get("http://localhost:3000/products");
    products.value = response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

// Filter produk secara lokal jika API tidak memiliki fitur pencarian
const filteredProducts = computed(() => {
  return products.value.filter(product =>
    product.nama.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

onMounted(fetchAllProducts);
</script>

<template>
  <div>
    <Navbar />
    <div class="max-w-6xl py-14 sm:py px-6 mx-auto mt-6">
      <!-- Judul -->
      <div class="flex justify-between items-center">
        <h2 class="text-2xl font-bold text-gray-900">Daftar Makanan</h2>
      </div>

      <!-- Search Input -->
      <div class="mt-5">
        <div class="flex items-center rounded-md bg-white pl-3 border border-gray-300 focus-within:border-indigo-600">
          <input
            v-model="searchQuery"
            type="text"
            name="search"
            id="search"
            class="w-full py-2 px-3 text-gray-900 placeholder-gray-400 focus:outline-none"
            placeholder="Cari Nama Makanan..."
          />
        </div>
      </div>

      <!-- Grid Produk -->
      <div class="mt-8">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 place-items-center">
          <CardProduct
            v-for="product in filteredProducts"
            :key="product.id"
            :product="product"
            class="w-full max-w-80"
          />
        </div>
      </div>
    </div>
  </div>
</template>
