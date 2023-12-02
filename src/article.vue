<script setup>
import { computed, ref} from 'vue';

const props = defineProps({
    articles: Array,
    searchQuery: String,
})

// リアルタイム検索機能のロジック
const filerDate = computed(() => {
    let articleData = props.articles
    let searchKey = props.searchQuery
    let filerDate =[]

    for(let i in articleData){
        let article = articleData[i]
        if(article.title.indexOf(searchKey) !== -1){
            filerDate.push(article)
        }
    }
    return filerDate
})


</script>

<template>

    <div class="article" v-for="(article, index) in filerDate" :key="article.id">
        <h2>{{ article.title }}</h2>
        <p>{{ article.content }}</p>
        <button @click="article.nice++">👍 {{ article.nice }}</button><br>
        <RouterLink :to="`/articles/${article.id}`">詳細へ</RouterLink>
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

.article textarea{
    width: 700px;
    height: 100px;
}

.edit{
    margin-left: 580px;
}

</style>