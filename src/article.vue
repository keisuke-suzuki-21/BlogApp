<script setup>
const props = defineProps({
    articles: Array,
    searchQuery: String
})



</script>

<template>
    <div class="article" v-for="article in articles">
        <h2>{{ article.title }}</h2>
        <p>{{ article.content }}</p>
        <button @click="article.nice++">👍 {{ article.nice }}</button>
    </div>
  
</template>

<style>
.article {
  background-color: #fff;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.article h2 {
  color: #333;
}

</style>