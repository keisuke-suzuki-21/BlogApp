<script setup>
import { ref } from 'vue'
const props = defineProps({
    articles: Array
})

const searchQuery = ref("")

</script>

<template>
    <form>
        Search <input name="query" v-model="searchQuery">
    </form>
    
</template>

<style>

</style>






