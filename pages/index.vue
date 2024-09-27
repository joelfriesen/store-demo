<template>
    <div class="container mx-auto py-10 px-4">
      <!-- Hero Section -->
      <section class="text-center py-20 bg-blue-500 text-white rounded-lg mb-10">
        <h1 class="text-5xl font-bold mb-4">Welcome to Joel Friesen Store Demo</h1>
        <p class="text-lg mb-6">Discover the best products, carefully curated just for you.</p>
        <NuxtLink to="/shop" class="bg-white text-blue-500 font-semibold py-2 px-6 rounded-lg hover:bg-blue-100 transition">Shop Now</NuxtLink>
      </section>
  
      <!-- Featured Products Section -->
      <section v-if="!loading" class="mb-16">
        <h2 class="text-4xl font-bold mb-6 text-center">Featured Products</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Featured products from the store -->
          <div v-for="product in featuredProducts" :key="product.id">
            <ProductCard
              :id="product.id"
              :title="product.title"
              :description="product.description"
              :price="product.price"
              :category="product.category"
              :image="product.image"
              :rating="product.rating"
            />
          </div>
        </div>
      </section>
  
      <!-- Loading state -->
      <section v-else class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="n of 16" :key="n">
          <ProductCardSkeleton />
        </div>
      </section>
  
      <!-- Testimonials Section -->
      <section class="text-center">
        <h2 class="text-4xl font-bold mb-6">What Our Customers Say</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-indigo-200 p-6 rounded-lg shadow">
            <p class="text-lg italic">"Amazing products and great customer service!"</p>
            <p class="mt-4 font-semibold">- Customer 1</p>
          </div>
          <div class="bg-indigo-200 p-6 rounded-lg shadow">
            <p class="text-lg italic">"I love the variety of items. Always find what I need!"</p>
            <p class="mt-4 font-semibold">- Customer 2</p>
          </div>
          <div class="bg-indigo-200 p-6 rounded-lg shadow">
            <p class="text-lg italic">"Fast delivery and the quality is top-notch!"</p>
            <p class="mt-4 font-semibold">- Customer 3</p>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup lang='ts'>

  // Access the product store and the loading state
  const productStore = useProductStore();
  const { loading, products } = storeToRefs(productStore);
  
  // Only show three featured products
  const featuredProducts = computed(() => products.value.slice(0, 3));
  
  // Fetch the products when the page is mounted
  onMounted(() => {
    productStore.fetchProducts();
  });
  </script>
  
  <style scoped>
  /* Add any custom styles if needed */
  </style>  