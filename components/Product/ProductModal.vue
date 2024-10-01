<script setup lang="ts">
const props = defineProps({
  productId: String,
  showModal: Boolean,
  closeModal: Function,
});
</script>

<template>
  <div v-if="showModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div class="bg-white rounded-lg shadow-lg p-6 w-1/2 relative">
      <!-- Close Button -->
      <button @click="closeModal" class="absolute top-2 right-2 text-gray-500 hover:text-black">
        &#x2715;
      </button>

      <!-- Product Content (conditionally rendered when the product is loaded) -->
      <div v-if="productId">
        <h2 class="text-2xl font-bold mb-4">Product ID: {{ productId }}</h2>
        <!-- Add content here for product details -->
      </div>

      <!-- Loading State -->
      <div v-else>
        <p>Loading product details...</p>
      </div>
    </div>
  </div>
</template>
