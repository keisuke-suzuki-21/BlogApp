<script setup>
import { computed } from 'vue';

const props = defineProps({
    articles: Array,
    searchQuery: String,
    title: String,
    content: String
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

// 記事削除機能のロジック
function articleDelete(index){
    props.articles.splice(index,1)
}


// 投稿機能のロジック
const newArticle = computed(()  => {
    let newTitle = props.title
    let newContent = props.content
    let newDate = {
        id: props.articles.length,
        title: newTitle,
        content: newContent,
        nice: 0
    }
    return newDate
})

</script>

<template>

    <div class="article" v-for="(article, index) in filerDate" :key="article.id">
        <div v-if="article.flg===false">
            <h2>{{ article.title }}</h2>
            <p>{{ article.content }}</p>
            <button @click="article.nice++">👍 {{ article.nice }}</button>
            <button class="edit" @click="article.flg = !article.flg">編集</button>
            <button @click="articleDelete(index)">削除</button>
        </div>
        <div v-else>
            <input v-model="article.title">
            <textarea v-model="article.content"></textarea>
            <button @click="article.flg = !article.flg">編集完了</button>
        </div>
    </div>

    <div class="article">
        <h2>{{ newArticle.title }}</h2>
        <p>{{ newArticle.content }}</p>
        <button @click="newArticle.nice++">👍 {{ newArticle.nice }}</button>
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