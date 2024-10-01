<script setup lang='ts'>
import type { Product } from '~/types';
import { ref } from 'vue';
import { useCartStore } from '~/stores/cartStore';
import ProductModal from '~/components/Product/ProductModal.vue';

const props = defineProps<Product>();

// Cart functionality
const cartStore = useCartStore();
const handleAddProductToCart = (product: Product) => {
  cartStore.addProductToCart(product);
};

// Modal functionality
const selectedProductId = ref<string | undefined>(undefined);
const showModal = ref(false);

// Open the modal with the selected product's ID
const openModal = (productId: string | number) => {
  selectedProductId.value = String(productId); // Convert productId to string
  showModal.value = true;
};

// Close the modal
const closeModal = () => {
  showModal.value = false;
  selectedProductId.value = undefined;
};
</script>

<template>
  <PrimeCard>
    <!-- Product Image -->
    <template #header>
      <div class="grid place-items-center">
        <img :src="props.image" class="h-64 p-4" />
      </div>
    </template>

    <!-- Product Title and Price -->
    <template #subtitle>
      <div class="flex justify-between items-start">
        <div class="space-y-1">
          <h2 class="font-semibold text-gray-800">{{ props.title }}</h2>
        </div>
        <div>
          <h2 class="text-lg font-bold text-indigo-700 font-Roboto">${{ props.price }}</h2>
        </div>
      </div>
      <p>{{ props.description }}</p>
    </template>

    <!-- Modal Trigger and Add to Cart Button -->
    <template #content>
      <!-- Button to Open Modal -->
      <button
        @click="openModal(props.id)"
        class="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-600"
      >
        View Details
      </button>

      <!-- Add to Cart Button -->
      <PrimeButton
        @click="handleAddProductToCart(props)"
        outlined
        icon="pi pi-shopping-cart"
        label="Add to cart"
        class="w-full"
      />

      <!-- Modal Component -->
      <ProductModal
        :productId="selectedProductId"
        :showModal="showModal"
        :closeModal="closeModal"
      />
    </template>
  </PrimeCard>
</template>
