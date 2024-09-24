<script setup lang='ts'>
import type { Product } from '~/types';
const props = defineProps<Product>()

const cartStore = useCartStore();
const handleAddProductToCart = (product: Product) => {
    cartStore.addProductToCart(product)
}
</script>

<template>
    <PrimeCard>
        <template #header>
            <div class="grid place-items-center">
                <img :src="props.image" class="h-64 p-4" />
            </div>
        </template>
        <template #subtitle>
            <div class="flex justify-between items-start ">
                <div class="space-y-1">
                    <h2 class="font-semibold text-gray-800">
                        {{ props.title }}
                    </h2>                    
                </div>
                <div>
                    <h2 class="text-lg font-bold text-indigo-700 font-Roboto">${{ props.price }}</h2>
                </div>
            </div>
            <p>{{ props.description }}</p>
        </template>
        <template #content>
            <PrimeButton @click="handleAddProductToCart(props)" outlined icon="pi pi-shopping-cart" label="Add to cart" class="w-full" />
        </template>
    </PrimeCard>
</template>