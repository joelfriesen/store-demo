<script setup lang='ts'>
import type { Product } from '~/types';

const cartStore = useCartStore()
const props = defineProps<Product>()
</script>

<template>
    <div class="flex items-center justify-between">
        <div class="flex items-start space-x-2">
            <PrimeButton outlined>
                <img :src="props.image" :alt="props.title" class="w-8 h-8 rounded-md" />
            </PrimeButton>
            <div>
                <h2 class="font-bold font-Roboto">{{ props.title }}</h2>
                <h3 class="text-gray-600">{{ props.category }}</h3>
            </div>
        </div>
        <div class="space-y-1">
            <h3 class="font-bold text-center font-Roboto">${{ props.price }}</h3>
            <div class="flex items-center justify-between w-[70px] h-6 px-1.5 bg-green-500 rounded-full">
                <button type="button" @click="cartStore.removeProductFromCart(props.id)">
                    <Icon name="ph:minus" class="text-sm text-white hover:text-gray-200"/>
                </button>
                <p class="text-sm text-white">{{ cartStore.productQuantity(props.id) }}</p>
                <button type="button" @click="cartStore.addProductToCart(props)">
                    <Icon name="ph:plus" class="text-sm text-white hover:text-gray-200"/>
                </button>
            </div>
        </div>
    </div>

    <PrimeDivider type="solid"  />
</template>