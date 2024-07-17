<template>
  <div class="bg-white shadow-lg p-4 rounded-lg">
    <img
      :src="product.image"
      alt="product.title"
      class="w-full h-48 object-cover"
    />
    <NuxtLink :to="'/products/' + product.id"
      ><h2 class="text-lg font-bold truncate mb-5 mt-2 text-red-400">
        {{ product.title }}
      </h2>
    </NuxtLink>
    <p class="text-gray-500 line-clamp-3 text-sm">{{ product.description }}</p>

    <div class="flex justify-between mt-10">
      <NuxtLink :to="'/products/' + product.id" class="btn"
        >View</NuxtLink
      >
      <p class="text-red-500 font-bold">{{ product.price }}$</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    default: () => ({}),
  },
});
</script>
