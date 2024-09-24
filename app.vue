<script setup lang="ts">
useHead({
  title: 'Joel Friesen Store Demo'
})
const productStore = useProductStore();
productStore.fetchProducts()
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
    <Toaster position="top-right" richColors closeButton />
  </NuxtLayout>
</template>