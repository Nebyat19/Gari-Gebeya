<template>
  <div class="grid md:grid-cols-3 lg:grid-cols-4 gap-5">
    <div v-for="product in products" :key="product.id">
      <ProductCard :product="product" />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "products",
});
useHead({
  title: "Gari | Products",
});
const { data: products } = useFetch("https://fakestoreapi.com/products");
</script>
