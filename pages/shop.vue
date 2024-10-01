<script setup lang="ts">
import { computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useProductStore } from '~/stores/productStore';

// Access the product store
const productStore = useProductStore();
const { loading } = storeToRefs(productStore);

// Access the route to get query parameters
const route = useRoute();

// Utility function to safely handle the 'cat' query parameter
const getCategoryFromQuery = () => {
  const category = route.query.cat;
  return Array.isArray(category) ? category[0] : category || ''; // Always return a string
};

// Computed property to filter products based on the "cat" query parameter
const filteredProducts = computed(() => {
  const category = getCategoryFromQuery(); // Safely get category as string
  
  // If no category is specified, return all products
  if (!category) {
    return productStore.products; // Show all products by default
  }

  // Filter by category
  return productStore.products.filter(product => product.category.toLowerCase() === category.toLowerCase());
});

// Computed property to get the category title for display
const categoryTitle = computed(() => {
  const category = getCategoryFromQuery();
  return category ? category.charAt(0).toUpperCase() + category.slice(1) : 'All Products'; // Capitalize category or show 'All Products'
});
</script>

<template>
  <!-- Display the category title -->
  <h3 class="text-2xl font-bold py-6 text-center">{{ categoryTitle }}</h3>

  <!-- Loading State: Skeleton Cards -->
  <div v-if="loading" class="grid grid-cols-1 gap-4 pb-6 md:grid md:grid-cols-3 lg:grid lg:grid-cols-3 xl:grid xl:grid-cols-4">
    <div v-for="n of 16" :key="n">
      <ProductCardSkeleton />
    </div>
  </div>

  <!-- Products Display: Filtered by Category or All Products -->
  <div v-else class="grid grid-cols-1 gap-4 pb-6 md:grid md:grid-cols-3 lg:grid lg:grid-cols-3 xl:grid xl:grid-cols-4">
    <div v-for="product in filteredProducts" :key="product.id">
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
</template>
