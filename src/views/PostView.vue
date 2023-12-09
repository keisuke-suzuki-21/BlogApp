<script setup>
import { computed, ref} from 'vue';
import { inject } from 'vue'

// const props = defineProps({
//     articles: Array,
    
// })
// 記事一覧(App.vue)からのデータ受信
const {newArticle, addArticle} = inject('addArticle')
console.log(newArticle.value.content)


</script>


<template>
    <h3>投稿ページ</h3>
    <div class="article">
        <h3>投稿フォーム</h3>
            <label>
                title<br>
                <input 
                type="text"
                v-model="newArticle.title"
                >
            </label><br>
            <label>
                overview<br>
                <textarea
                type="textarea"
                v-model="newArticle.overview"
            ></textarea>
            </label><br>
            <label>
                content<br>
                <textarea
                type="textarea"
                v-model="newArticle.content"
            ></textarea>
            </label><br>
        <button><RouterLink @click="addArticle(newArticle.title, newArticle.overview, newArticle.content)" to="/">投稿</RouterLink></button>
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