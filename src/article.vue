<script setup>
import { computed, ref} from 'vue';

const props = defineProps({
    articles: Array,
    searchQuery: String,
})

// リアルタイム検索機能のロジック
// Propsで受け取ったarticlesを直接使わないのは、Propsの受け渡しでは一方向バインディングが形成されるから
// つまり、親であった変更は子に流れるが、子にあった変更は親に流れないため。
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

    <!-- <h2 class="page-title">記事一覧</h2> -->
    <div class="article" v-for="(article, index) in filerDate" :key="article.id">
        <h2>{{ article.title }}</h2>
        <p>{{ article.overview }}</p>
        <div class="check">
            <button @click="article.nice++">👍 {{ article.nice }}</button><br>
            <!-- aタグ使うと毎回サーバーへリクエストするからずれないけど、削除したものが勝手に戻ってる -->
            <!-- <a :href="`/articles/${article.id}`">詳細→</a> -->
            <!-- RouterLink使うとSPAの動きをするから削除動作後ズレが生じる -->
            <RouterLink class="router-link" :to="`/articles/${article.id}`">詳細→</RouterLink>
        </div>
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

.article p{
    padding-top: 2%;
}

.article h2 {
  color: #333;
  border-left: solid 3px rgb(0, 189, 126);/*左線*/
  margin-bottom: 5px;
}

.check{
    display:flex;
    padding-top: 2%;
}

.check button {
    padding: 0;
    font-family: inherit;
    appearance: none;
    cursor: pointer;
    background-color: transparent;
    border: none;
}

.router-link{
    padding-left: 85%;
}

</style>