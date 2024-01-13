<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router';
import Article from "./articles.vue";
import PostView from './views/PostView.vue';
import EditView from "./views/EditView.vue";
import ArticleView from './views/ShowArticleView.vue';
import SiteInformation from "./siteInformation.vue";
import { provide } from 'vue';
import { useArticlesStore } from "./stores/articlesStore.js";
import { useSiteInformationStore } from "./stores/siteInformationsStore.js";


// piniaを使った記事のシードデータ
const articlesStore = useArticlesStore()
const articles = articlesStore.articles

// 検索に使うクエリー
const searchQuery = ref("")

// 表示コンポーネントのコントロールに使うルートパラメータ
const route = useRoute()



// 記事詳細(ArticleView)へ送る記事削除機能のロジック
function articleDelete(id){
  articles.splice(id,1)
}
// 記事詳細(ArticleView)へのデータ送信
provide('articles',{
  articles,
  articleDelete
});



// 投稿ページ(PostView)へ送る投稿機能のロジック
function addArticle(newTitle, newOverView, newContent){
  articles.push({
        id: articles.length,
        title: newTitle,
        overview: newOverView,
        content: newContent,
        nice: 0,
        flg: false
    })
}
let newArticle = ref({
  title: "",
  overview: "",
  content: ""
})
// 投稿ページへのデータ送信
provide("addArticle", {
  newArticle,
  addArticle
});



// piniaを使ったサイト情報のシードデータ
const siteInformationStore = useSiteInformationStore()
const siteInformation = siteInformationStore.siteInformation


// サイト情報変更ページ(EditView)へ送るProvide
function editSiteInformation(text){
  siteInformation.text = text
}
provide("SiteInformation", {
  siteInformation,
  editSiteInformation
})


</script>

<template>

  <header>
    <div class="header-left">
      <img class="logo" src="./assets/logo.png">
    </div>
    <div class="header-right">
      <h1>エンジニアBlog</h1>
      <nav>
        <RouterLink to="/">トップページ</RouterLink> | 
        <RouterLink to="/post">投稿ページ</RouterLink> | 
        <RouterLink to="/edit">サイト情報編集ページ</RouterLink>
      </nav>
    </div>
    
  </header>

  <main >

    <div class="main-left">
      <!-- マッチしたルーティングのコンポーネントを表示する場所 -->
      <router-view/>

      <!-- 検索フォーム・投稿フォーム・記事一覧 -->
      <!-- ルーティングがホーム（"/"）の時だけ表示 -->
      <div v-if="route.fullPath === '/'">
        <div class="top-title">
          <h3>トップページ</h3>
        </div>
        <div class="search">
          タイトル検索 <input type="text" v-model="searchQuery">
        </div>
        <!-- articlesはストアのプロパティを示している -->
        <Article 
          :articles = "articles"
          :searchQuery = "searchQuery"
        ></Article>
        </div>
      </div>

    <div class="main-right">
      <div>
        <h3>サイト情報</h3>
        <SiteInformation>
          <template v-slot:siteInformation>
            <img src="./assets/programing.png">
            <p class="site-information">{{ siteInformation.text }}</p>
          </template>
        </SiteInformation>
      </div>
    </div>

    <footer>

    </footer>
  </main>

</template>

<style>

/* 　　　ページ構成デザイン　　　 */
header {
  position: fixed;
  margin-top: 0px;
  padding-top: 5px;
  padding-bottom: 5px;
  width: 1200px;
  background-color: #f7f7f7;
  display:flex
}

.header-left{
  width: 10%;
  margin-right: 3%;
}

.header-right{
  width: 87%;
  margin-top: 3%;
}

main{
  padding-top: 180px;
  padding-bottom: 150px;
  width: 1200px;
  background-color: #fff;
  display:flex
}

.main-left{
  width: 70%;
  margin-right: 5%;
  background-color: #f7f7f7;
  padding: 5%;
}

.main-right{
  width: 25%;
  background-color: #f7f7f7;
  padding: 5%;
}

footer{
  position: fixed;
  bottom: 0;
}
/* 　　　ページ構成デザイン　　　 */

/*      ヘッダーデザイン　　　　 */
header img{
  width: 100%;
  height: 100%;
}
/*      ヘッダーデザイン　　　　 */

/*      トップタイトル　　　　 */
.top-title{
  margin-bottom: 50px;
  border-bottom: solid 3px black;
  padding: 10px;
}
.search{
  padding: 20px;
}
/*      トップタイトル　　　 */


/*      サイト情報　　　　　 */
.main-right h3{
  background-color: rgb(67, 67, 67);
  color: #f7f7f7;
  font-weight: bold;
  text-align: center;
}
.main-right img{
  width: 100%;
  height: 100%;
}

/* 　　　サイト情報　　　　　 */

</style>