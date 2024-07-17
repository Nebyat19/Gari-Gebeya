<template>
  <div>
    <div class="container mx-auto p-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-7">
        <div>
          <img
            :src="product.image"
            :alt="product.title"
            class="w-full h-96 object-cover"
          />
        </div>
        <div class="flex flex-col justify-between p-3">
          <div>
            <h1 class="text-3xl font-bold mb-5 text-red-400">
              {{ product.title }}
            </h1>
            <p class="text-grey-400 my-5  text-sm">
              Price - {{ product.price }} ETB
            </p>
            <p class="text-md text-gray-900 font-semibold mt-7 mb-4 py-2 border-b-2">Product description</p>
            <p class="text-gray-500">{{ product.description }}</p>
          </div>

          <div class="flex justify-between mb-10">
           
            <button class="bg-red-500 text-white px-4 py-2 rounded">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const { id } = useRoute().params;

const productUrl = `https://fakestoreapi.com/products/${id}`;

const { data: product } = await useFetch(productUrl, { key: id });

if (!product.value)  throw createError({ statusCode: 404, statusMessage: "Product Not Found", fatal:true });

definePageMeta({
  layout:'products'
})
</script>
