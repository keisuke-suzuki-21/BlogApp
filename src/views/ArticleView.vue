<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps({
    articles: Array
})

const route = useRoute();

// パラメータとpropsで受け取ったarticlesのマッチングのロジック
const filterArticle = computed(() => {
    let articleData = props.articles
    let articleId = route.params.id
    return articleData[articleId]
})

// 記事削除機能のロジック
function articleDelete(index){
    props.articles.splice(index,1)
}

</script>


<template>
    <h3>Article詳細</h3>
    <div class="articleDetail">
        <div v-if="filterArticle.flg===false">
            <h2>No. {{ filterArticle.id }}</h2>
            <h2>{{ filterArticle.title }}</h2>
            <p>{{ filterArticle.overview }}</p>
            <p>{{ filterArticle.content }}</p>
            <button class="edit" @click="filterArticle.flg = !filterArticle.flg">編集</button>
            <!-- <button><RouterLink @click.native="articleDelete(route.params.id)" to="/">削除</RouterLink></button> -->
            <button><RouterLink @click.native="articleDelete(filterArticle.id)" to="/">削除</RouterLink></button>
        </div>
        <div v-else>
            <input v-model="filterArticle.title">
            <textarea v-model="filterArticle.overview"></textarea>
            <textarea v-model="filterArticle.content"></textarea>
            <button @click="filterArticle.flg = !filterArticle.flg">編集完了</button>
        </div>
</div>
</template>

<style>

.articleDetail{
  background-color: #fff;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 800px;
}

.articleDetail h2 {
  color: #333;
}

.articleDetail textarea{
    width: 700px;
    height: 100px;
}

.edit{
    margin-left: 580px;
}

</style>