<template>
  <div class="grid place-items-center">
    <div
      class="py-5 px-20 shadow-sm rounded-md bg-white mt-7 flex flex-col gap-6 items-center justify-center"
    >
      <p class="text-7xl text-gray-900">{{ error.statusCode }}</p>
      <p>Oops..</p>
      <p class="text-sm text-gray-500">{{ error.message }}</p>

      <button class="btn mt-7" @click="clearErrorAndRedirect">Goto Home ...</button>
    </div>
  </div>
</template>
<script setup>

const clearErrorAndRedirect = () => clearError({ redirect: "/" });

defineProps(["error"]);
</script>
