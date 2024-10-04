<script setup lang='ts'>
const cartStore = useCartStore();
const isSidebarOpen = ref(false);
const isMenuOpen = ref(false); // State for toggling the mobile menu

const handleOpenSidebar = () => {
    isSidebarOpen.value = true;
};

const handleCloseSidebar = () => {
    isSidebarOpen.value = false;
};

const toggleMobileMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

const cartHasProducts = computed(() => {
    return cartStore.cart.length >= 1;
});
</script>

<template>
    <header class="sticky top-0 z-10 border bg-white border-gray-100">
        <div class="flex flex-col sm:flex-row items-center justify-between py-4 text-black px-4 sm:px-6">
            <!-- Store Title -->
            <Icon name="unjs:untun" class="text-4xl mx-4" />
            <h1 class="text-xl font-bold md:text-2xl flex items-center justify-between md:w-auto flex-grow">Joel Friesen Store Demo</h1>
            
            <div class="flex items-center justify-between">
                <!-- Desktop Navigation (hidden on small screens) -->
                <nav class="hidden md:flex space-x-6 text-base md:text-lg px-4">
                    <a href="/" class="hover:text-yellow-400 transition-colors duration-300">Home</a>
                    <div class="relative inline-block group">
                        <a href="/shop" class="hover:text-yellow-400 transition-colors duration-300">Shop</a>
                        <div class="absolute hidden group-hover:block mt-2 bg-white border rounded-md shadow-lg w-48 z-10">
                            <a href="/shop?cat=Classic%20Books" class="block px-4 py-2 text-black hover:bg-yellow-400 hover:text-white">Classic Books</a>
                            <a href="/shop?cat=Essential%20Books" class="block px-4 py-2 text-black hover:bg-yellow-400 hover:text-white">Essential Books</a>
                            <a href="/shop?cat=Fantasy%20Books" class="block px-4 py-2 text-black hover:bg-yellow-400 hover:text-white">Fantasy Books</a>
                            <a href="/shop?cat=Brontë%20Books" class="block px-4 py-2 text-black hover:bg-yellow-400 hover:text-white">Brontë Books</a>
                        </div>
                    </div>
                    <a href="/about" class="hover:text-yellow-400 transition-colors duration-300">About Us</a>
                    <a href="/contact" class="hover:text-yellow-400 transition-colors duration-300">Contact Us</a>
                </nav>

                <!-- Hamburger Icon (visible on small screens) -->
                <div class="md:hidden relative px-3 mx-4 py-2 transition-all duration-200 ease-in border border-gray-200 rounded-md hover:bg-gray-100">
                    <button @click="toggleMobileMenu" class="focus:outline-none">
                        <Icon name="heroicons-solid:menu" class="text-xl" />
                    </button>
                </div>

                

                <!-- Cart Button -->
                <div>
                    <button type="button" @click="handleOpenSidebar"
                        class="relative px-3 py-2 transition-all duration-200 ease-in border border-gray-200 rounded-md hover:bg-gray-100">
                        <Icon name="ph:shopping-cart-simple" class="text-xl" />
                        <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-green-500 border-2 border-white rounded-md -top-2 -end-2">
                            {{ cartStore.totalCartProducts }}
                        </div>
                    </button>
                </div>

                <!-- Sidebar Cart -->
                <div>
                    <div class="flex card justify-content-center">
                        <PrimeSidebar v-model:visible="isSidebarOpen" header="My Cart" position="right" class="w-full sm:w-96">
                            <div v-if="!cartHasProducts" class="grid w-full min-h-screen place-items-center">
                                No products available in the cart
                            </div>
                            <div v-else class="flex flex-col justify-between h-full">
                                <div class="overflow-y-scroll h-[650px]">
                                    <div v-for="cartProduct in cartStore.cart" :key="cartProduct.id">
                                        <CartProductCard 
                                            :id="cartProduct.id" 
                                            :title="cartProduct.title"
                                            :description="cartProduct.description" 
                                            :price="cartProduct.price"
                                            :category="cartProduct.category" 
                                            :image="cartProduct.image"
                                            :rating="cartProduct.rating" 
                                        />
                                    </div>
                                </div>
                                <CartProductPaymentDetails @close="handleCloseSidebar"/>
                            </div>
                        </PrimeSidebar>
                    </div>
                </div>
            </div>
        </div>
        <!-- Mobile Menu (visible when toggled, hidden by default) -->
        <div v-if="isMenuOpen" class="md:hidden relative  left-0 w-full bg-white shadow-lg z-20">
            <nav class="flex flex-col space-y-2 text-lg py-4 px-6">
                <a href="/" class="hover:text-yellow-400 transition-colors duration-300">Home</a>
                <a href="/shop" class="hover:text-yellow-400 transition-colors duration-300">Shop</a>
                <a href="/shop?cat=Classic%20Books" class="hover:text-yellow-400 ml-4 transition-colors duration-300">Classic Books</a>
                <a href="/shop?cat=Essential%20Books" class="hover:text-yellow-400  ml-4 transition-colors duration-300">Essential Books</a>
                <a href="/shop?cat=Fantasy%20Books" class="hover:text-yellow-400 ml-4 transition-colors duration-300">Fantasy Books</a>
                <a href="/shop?cat=Brontë%20Books" class="hover:text-yellow-400 ml-4 transition-colors duration-300">Brontë Books</a>
                <a href="/about" class="hover:text-yellow-400 transition-colors duration-300">About Us</a>
                <a href="/contact" class="hover:text-yellow-400 transition-colors duration-300">Contact Us</a>
            </nav>
        </div>
    </header>

</template>

<style scoped>
/* Custom styles to toggle visibility of the mobile menu */
.absolute.md:hidden {
    display: none;
}

.md:hidden {
    display: none;
}

.md\\:hidden {
    display: block;
}
</style>
