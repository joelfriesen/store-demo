<script setup lang="ts">
import { ref, watch, onBeforeUnmount } from 'vue';
import { useProductStore } from '~/stores/productStore';
import { useCartStore } from '~/stores/cartStore';
import type { Product } from '~/types'; 

// Props received from the parent component with proper typing
const props = defineProps<{
  productId: string;
  showModal: boolean;
  closeModal?: () => void; // Optional function that takes no parameters
}>();

// Function to add an entry to the browser's history
const addHistoryEntry = () => {
  window.history.pushState(null, '', window.location.href); // Push the current URL into the history stack
};

// Reactive variable to hold the product details
const product = ref<Product | undefined>(undefined);

// Declare modalRef to track the modal DOM element
const modalRef = ref<HTMLElement | null>(null);

// Access the product store
const cartStore = useCartStore(); 
const productStore = useProductStore();
const handleAddProductToCart = (product: Product) => {
  cartStore.addProductToCart(product);
};

// Watch for changes in the `productId` prop and fetch the product
watch(() => props.productId, () => {
  if (props.productId && productStore.products.length > 0) {
    product.value = productStore.products.find(p => p.id === parseInt(props.productId!));
  }
});

// Function to handle the browser's back button (popstate event)
const handlePopState = () => {
  props.closeModal?.(); // Safely close the modal if it's open
};


// Handle clicking outside the modal content
const handleClickOutside = (event: MouseEvent) => {
  if (modalRef.value && !modalRef.value.contains(event.target as Node)) {
    props.closeModal?.(); // Safely invoke closeModal if it is defined
  }
};

// Handle escape key press
const handleEscapeKey = (event: KeyboardEvent) => {
  if (event.key === "Escape") {
    props.closeModal?.(); // Safely invoke closeModal if it is defined
  }
};

// Register event listeners when the modal is shown
// Register event listeners when the modal is shown
watch(() => props.showModal, (newVal) => {
  if (newVal) {
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);
    window.addEventListener('popstate', handlePopState); // Listen for the back button (popstate event)
    addHistoryEntry(); // Add a history entry when the modal is opened
  } else {
    document.removeEventListener('mousedown', handleClickOutside);
    document.removeEventListener('keydown', handleEscapeKey);
    window.removeEventListener('popstate', handlePopState); // Clean up the popstate listener
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
    <div ref="modalRef" class="bg-white  shadow-lg p-6 relative w-full min-h-screen rounded-none md:rounded-lg md:min-h-fit md:w-1/2 ">
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

        <PrimeButton
        @click="handleAddProductToCart(product)"
        outlined
        icon="pi pi-shopping-cart"
        label="Add to cart"
        class="w-full"
        />
      </div>

      <!-- Loading State -->
      <div v-else>
        <p>Loading product details...</p>
      </div>
    </div>
  </div>
</template>
