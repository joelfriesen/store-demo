<script setup lang='ts'>
const productStore = useProductStore();
const { loading } = storeToRefs(productStore)
</script>


<template>
    <div class="container mx-auto py-10 px-4">
      <!-- Hero Section -->
      <section class="text-center py-20 bg-blue-500 text-white rounded-lg mb-10">
        <h1 class="text-5xl font-bold mb-4">Welcome to Joel Friesen Store</h1>
        <p class="text-lg mb-6">Discover the best products, carefully curated just for you.</p>
        <NuxtLink to="/shop" class="bg-white text-blue-500 font-semibold py-2 px-6 rounded-lg hover:bg-blue-100 transition">Shop Now</NuxtLink>
      </section>
  
      <!-- Featured Products Section -->
      <section>
        <h2 class="text-4xl font-bold mb-6 text-center">Featured Products</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Sample product 1 -->
          <div class="bg-white shadow-md rounded-lg overflow-hidden">
            <img src="/images/product1.jpg" alt="Product 1" class="w-full h-48 object-cover" />
            <div class="p-4">
              <h3 class="text-xl font-semibold mb-2">Product 1</h3>
              <p class="text-gray-600 mb-4">High-quality product designed for your needs.</p>
              <p class="text-lg font-bold">$19.99</p>
              <NuxtLink to="/shop" class="block mt-4 bg-blue-500 text-white text-center py-2 rounded-lg hover:bg-blue-600 transition">View Product</NuxtLink>
            </div>
          </div>
  
          <!-- Sample product 2 -->
          <div class="bg-white shadow-md rounded-lg overflow-hidden">
            <img src="/images/product2.jpg" alt="Product 2" class="w-full h-48 object-cover" />
            <div class="p-4">
              <h3 class="text-xl font-semibold mb-2">Product 2</h3>
              <p class="text-gray-600 mb-4">Top-rated product loved by our customers.</p>
              <p class="text-lg font-bold">$29.99</p>
              <NuxtLink to="/shop" class="block mt-4 bg-blue-500 text-white text-center py-2 rounded-lg hover:bg-blue-600 transition">View Product</NuxtLink>
            </div>
          </div>
  
          <!-- Sample product 3 -->
          <div class="bg-white shadow-md rounded-lg overflow-hidden">
            <img src="/images/product3.jpg" alt="Product 3" class="w-full h-48 object-cover" />
            <div class="p-4">
              <h3 class="text-xl font-semibold mb-2">Product 3</h3>
              <p class="text-gray-600 mb-4">Excellent choice for those who seek quality.</p>
              <p class="text-lg font-bold">$39.99</p>
              <NuxtLink to="/shop" class="block mt-4 bg-blue-500 text-white text-center py-2 rounded-lg hover:bg-blue-600 transition">View Product</NuxtLink>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Testimonials Section -->
      <section class="mt-16 text-center">
        <h2 class="text-4xl font-bold mb-6">What Our Customers Say</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-gray-100 p-6 rounded-lg shadow">
            <p class="text-lg italic">"Amazing products and great customer service!"</p>
            <p class="mt-4 font-semibold">- Customer 1</p>
          </div>
          <div class="bg-gray-100 p-6 rounded-lg shadow">
            <p class="text-lg italic">"I love the variety of items. Always find what I need!"</p>
            <p class="mt-4 font-semibold">- Customer 2</p>
          </div>
          <div class="bg-gray-100 p-6 rounded-lg shadow">
            <p class="text-lg italic">"Fast delivery and the quality is top-notch!"</p>
            <p class="mt-4 font-semibold">- Customer 3</p>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  // No additional setup needed for this basic template
  </script>
  
  <style scoped>
  /* Add any custom styles here if needed */
  </style>
  