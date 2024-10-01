<script setup lang="ts">
import { ref, watch, onBeforeUnmount } from 'vue';
import { useProductStore } from '~/stores/productStore';

// Props received from the parent component
const props = defineProps({
  productId: String,
  showModal: Boolean,
  closeModal: Function,
});

// Reactive variable to hold the product details
const product = ref(null);

// Declare modalRef to track the modal DOM element
const modalRef = ref(null); // This tracks the modal DOM element

// Access the product store
const productStore = useProductStore();

// Watch for changes in the `productId` prop and fetch the product
watch(() => props.productId, () => {
  if (props.productId && productStore.products.length > 0) {
    product.value = productStore.products.find(p => p.id === parseInt(props.productId));
  }
});

// Handle clicking outside the modal content
const handleClickOutside = (event) => {
  if (modalRef.value && !modalRef.value.contains(event.target)) {
    props.closeModal();
  }
};

// Handle escape key press
const handleEscapeKey = (event) => {
  if (event.key === "Escape") {
    props.closeModal();
  }
};

// Register event listeners when the modal is shown
watch(() => props.showModal, (newVal) => {
  if (newVal) {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);
  } else {
    document.removeEventListener("mousedown", handleClickOutside);
    document.removeEventListener("keydown", handleEscapeKey);
  }
});

// Clean up event listeners when the component is destroyed
onBeforeUnmount(() => {
  document.removeEventListener("mousedown", handleClickOutside);
  document.removeEventListener("keydown", handleEscapeKey);
});
</script>

<template>
  <div v-if="showModal" class="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50">
    <!-- Modal content wrapper -->
    <div ref="modalRef" class="bg-white rounded-lg shadow-lg p-6 w-1/2 relative">
      <!-- Close Button -->
      <button @click="closeModal" class="absolute top-2 right-2 text-gray-500 hover:text-black">
        &#x2715;
      </button>

      <!-- Product Content (conditionally rendered when the product is loaded) -->
      <div v-if="product">
        <h2 class="text-2xl font-bold mb-4">{{ product.title }}</h2>
        <img :src="product.image" alt="Product Image" class="w-full h-64 object-cover mb-4" />
        
        <!-- Product Description -->
        <p class="text-lg mb-4">{{ product.description }}</p>

        <!-- Price and Category -->
        <div class="flex justify-between items-center">
          <span class="text-xl font-semibold text-indigo-600">${{ product.price }}</span>
          <span class="text-gray-600">{{ product.category }}</span>
        </div>

        <!-- Rating -->
        <div v-if="product.rating" class="mt-4">
          <p class="text-yellow-500 font-semibold">
            Rating: {{ product.rating.rate }} ★ ({{ product.rating.count }} reviews)
          </p>
        </div>
      </div>

      <!-- Loading State -->
      <div v-else>
        <p>Loading product details...</p>
      </div>
    </div>
  </div>
</template>

