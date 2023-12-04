<script setup>
import { computed, ref} from 'vue';

const props = defineProps({
    articles: Array,
    
})

// 投稿機能のロジック
let title = ref("")
let overview = ref("")
let content = ref("")
function addArticle(newTitle, newOverView, newContent){
    props.articles.push({
        id: props.articles.length,
        title: newTitle,
        content: newContent,
        nice: 0,
        flg: false
    })
    title = ref("")
    content = ref("")
}

</script>


<template>
    <h3>投稿ページ</h3>
    <div class="article">
        <h3>投稿フォーム</h3>
            <label>
                title<br>
                <input 
                type="text"
                v-model="title"
                >
            </label><br>
            <label>
                overview<br>
                <textarea
                type="textarea"
                v-model="overview"
            ></textarea>
            </label><br>
            <label>
                content<br>
                <textarea
                type="textarea"
                v-model="content"
            ></textarea>
            </label><br>
        <button><RouterLink @click="addArticle(title, overview, content)" to="/">投稿</RouterLink></button>
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


</style>