<script setup lang="ts">
import { computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useProductStore } from '~/stores/productStore';

// Access the product store
const productStore = useProductStore();
const { loading } = storeToRefs(productStore);

// Access the route to get query parameters
const route = useRoute();

// Computed property to filter products based on the "cat" query parameter
const filteredProducts = computed(() => {
  const category = route.query.cat || ''; // Get the 'cat' parameter from the URL (defaults to empty string)
  return productStore.products.filter(product => product.category.toLowerCase() === category.toLowerCase());
});

// Watch for changes in the URL's query parameters and react accordingly
watch(() => route.query.cat, () => {
  // Re-run filter if the category changes in the URL
});
</script>

<template>
  <!-- Loading State: Skeleton Cards -->
  <div v-if="loading" class="grid grid-cols-1 gap-4 p-6 md:grid md:grid-cols-3 lg:grid lg:grid-cols-3 xl:grid xl:grid-cols-4">
    <div v-for="n of 16" :key="n">
      <ProductCardSkeleton />
    </div>
  </div>

  <!-- Products Display: Filtered by Category -->
  <div v-else class="grid grid-cols-1 gap-4 p-6 md:grid md:grid-cols-3 lg:grid lg:grid-cols-3 xl:grid xl:grid-cols-4">
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
