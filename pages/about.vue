<template>
    <div>
        <h1>About</h1>
        <p>This is the about page</p>
        {{ data }}
    </div>
</template>

<script setup>

const {data} = await useFetch('/api/currency/GBP',{
    method:'POST',
    body:{age:22}
})
</script>
