<script setup>
import { computed, ref} from 'vue';
import { inject } from 'vue'

// 記事一覧(App.vue)からのデータ受信
const {newArticle, addArticle} = inject('addArticle')

</script>


<template>
    <h3 class="post-title">投稿ページ</h3>
    <div class="article">
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
        <!-- インラインハンドラー下でのメソッド呼び出しによって、ネイティブイベントを無視してカスタム引数を渡している -->
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

.post-title{
    margin-bottom: 50px;
  border-bottom: solid 3px black;
  padding: 10px;
}


</style>