<script setup>
import Navbar from "../components/Navbar.vue";
import Hero from "../components/Hero.vue";
import CardProduct from "../components/CardProduct.vue";


import { ref, onMounted } from "vue";
import axios from "axios";

// State untuk menyimpan data produk
const products = ref([]);

// Fungsi untuk mengambil data produk
const fetchProducts = async () => {
  try {
    const response = await axios.get("http://localhost:3000/best-products");
    products.value = response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

// Ambil data saat komponen dimuat
onMounted(fetchProducts);
</script>

<template>
  <div>
    <!-- Navbar -->
    <Navbar />

    <!-- Container utama -->
    <div class="container">
      <!-- Hero Section -->
      <Hero />

      <!-- Best Seller Section -->
      <div class="mx-auto px-6 md:pl-64">
        <div class="flex justify-between items-center gap-">
          <h2 class="text-2xl font-bold text-gray-900">
            Best Seller <strong class="text-purple-600">Makanan</strong>
          </h2>
          <router-link to="/food" class="bg-purple-600 text-white py-2 px-6 rounded-lg text-center">
            Lihat Semua
          </router-link>
        </div>

        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5 mb-10 place-items-center "
        >
          <CardProduct
            v-for="product in products"
            :key="product.id"
            :product="product"
            class="w-full max-w-md"
          />
        </div>
      </div>
    </div> 
  </div>
</template>
