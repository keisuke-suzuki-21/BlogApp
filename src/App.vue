<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router';
import Article from "./article.vue";
import ArticleView from './views/ArticleView.vue';
import PostView from './views/PostView.vue';
import SiteInformation from "./siteInformation.vue";
import { provide } from 'vue';
import { useArticleStore } from "./stores/articlesStore.js";

// ブログ記事のシードデータ
const articles = ref([
  {
    id: 0,
    title: "リモートワークの効果的な実践方法",
    overview: "リモートワークは現代のエンジニアリングで重要な役割を果たしています。この記事では、リモートワークを成功させるための方法やベストプラクティスについて解説します。",
    content: `リモートワークは現代の職場でますます一般的になっています。エンジニアとしてのリモートワークには、効果的なコミュニケーション、タスク管理、そしてモチベーションの維持など、多くの側面があります。効果的なリモートワークを実践するためには、リモートワークに適したツールやテクニックを使いこなす必要があります。例えば、リモートコミュニケーションの手段としてビデオ会議ツールやチャットツールを活用する方法、タスクやプロジェクト管理におけるリモートワーク向けのベストプラクティス、リモートワークでの効果的な時間管理とワークライフバランスの取り方など、幅広いトピックを取り上げます。リモートワークはフレキシブルで効率的な働き方ですが、成功するためには新たなスキルや戦略が求められます。この記事では、それらの要素を包括的にカバーし、リモートワークを成功させるための手助けとなるでしょう。`,
    nice: 0,
    flg: false
  },
  {
    id: 1,
    title: "新しいプログラミング言語の学習ガイド",
    overview: "新しいプログラミング言語を学ぶことはエンジニアにとって常に新たな挑戦です。この記事では、新しい言語を効果的に学習するためのアプローチについて解説します。",
    content: `エンジニアが新しいプログラミング言語を学ぶことは、時に困難な挑戦ですが、その価値は計り知れません。新しい言語を学ぶ際には、基本的な構文から始めて、実際のプロジェクトや演習問題を通じて実践することが重要です。この記事では、新しいプログラミング言語を効果的に学習するための手法とリソースについて詳しく説明します。言語の公式ドキュメントやオンラインコース、コミュニティの利用法、そして実際のプロジェクトへの適用方法など、学習を加速させるためのヒントが満載です。新しい言語を学ぶことは、エンジニアリングスキルの向上に繋がります。このガイドを参考にして、新たな言語をマスターし、自身の技術スタックを拡充させましょう。`,
    nice: 0,
    flg: false
  },
  {
    id: 2,
    title: "エンジニアリングマネージャーへのステップアップガイド",
    overview: "エンジニアからマネージャーへの道は多くの挑戦が待ち受けています。この記事では、エンジニアリングマネージャーになるためのステップアップガイドを提供します。",
    content: `エンジニアリングマネージャーになるためには、技術的なスキルだけでなくリーダーシップやコミュニケーション能力も必要です。この記事では、エンジニアリングマネージャーになるためのステップ、期待される役割、育成すべきスキルについて深く掘り下げます。エンジニアリングマネージャーとしての役割は、技術的な問題解決だけでなく、チームの成長や目標達成のためのリーダーシップも求められます。リーダーシップの鍛錬や、効果的なコミュニケーション戦略の構築、チームのモチベーション管理など、重要なスキルに焦点を当てた内容となっています。エンジニアリングマネージャーへのステップアップを目指す方にとって、有益なガイドとなることでしょう。`,
    nice: 0,
    flg: false
  },
  {
    id: 3,
    title: "セキュリティ意識の向上とベストプラクティス",
    overview: "セキュリティはエンジニアリングの重要な側面です。この記事では、セキュリティ意識の向上とベストプラクティスについて探ります。",
    content: `セキュリティはエンジニアリングの不可欠な側面ですが、それを実践するためには意識を高めることが重要です。セキュリティ意識を高めるためには、潜在的な脅威やセキュリティベストプラクティスを理解し、それに基づいた対策を講じることが必要です。この記事では、セキュリティ意識の向上とベストプラクティスに焦点を当て、セキュリティの基本原則から始めて、セキュリティ脅威の種類やその対策、セキュリティ設計の考え方、そしてセキュリティ意識を育むためのトレーニングや教育プログラムについて解説します。セキュリティ意識を高めることは、エンジニアとしての責任でもあります。この記事を通じて、セキュリティに関する理解を深め、安全なソフトウェア開発やシステム運用に役立ててください。`,
    nice: 0,
    flg: false
  },
  {
    id: 4,
    title: "テクニカルライティングの重要性とスキル向上法",
    overview: "エンジニアにとってテクニカルライティングは重要なスキルです。この記事では、テクニカルライティングの重要性とスキル向上法について探ります。",
    content: `エンジニアにとってテクニカルライティングは、複雑な技術を他の人に伝えるための重要なスキルです。技術的なコンセプトや製品のドキュメント化、クライアントやチームメンバーへの的確な説明など、テクニカルライティングは多岐にわたります。この記事では、テクニカルライティングの重要性とスキル向上法に焦点を当て、効果的な技術文書の作成手法、読みやすいテクニカルな文章の書き方、図表やグラフを活用した説明の方法などを解説します。また、実際のプロジェクトでのテクニカルライティングの実践方法やフィードバックの取り入れ方についても触れます。テクニカルライティングのスキルを向上させることは、エンジニアとしてのコミュニケーション能力を高める上で重要です。この記事を通じて、テクニカルライティングのスキルを発展させ、自身の技術的なコミュニケーション能力を向上させましょう。`,
    nice: 0,
    flg: false
    },
  {
    id: 5,
    title: "プログラミング言語の選択と学習方法",
    overview: "プログラミング言語の選択はエンジニアにとって重要な決断です。この記事では、言語の選択と効果的な学習方法について解説します。",
    content: `プログラミング言語の選択は、エンジニアリングの世界で重要な決断です。新しい言語を学ぶ際には、その言語の用途、コミュニティのサポート、将来性などを考慮する必要があります。この記事では、プログラミング言語を選ぶ際の考慮事項や、各言語の特性、人気のある言語の概要を紹介します。また、効果的な学習方法も重要です。新しい言語を学ぶためのオンラインリソース、プロジェクトや課題を通じた実践的な学習、そしてコーディングスキルを向上させるためのヒントなど、言語を効率的に習得するためのアプローチについても解説します。新しいプログラミング言語を学ぶことはエキサイティングな挑戦です。この記事を通じて、言語の選択や学習方法に関するヒントを得て、新たな言語を習得してみましょう。`,
    nice: 0,
    flg: false
  },
  {
    id: 6,
    title: "関数型プログラミングの基礎と実践",
    overview: "関数型プログラミングはエンジニアにとって新たな視点を提供します。この記事では、関数型プログラミングの基礎と実践について解説します。",
    content: `関数型プログラミングは、新たなアプローチやパラダイムを提供し、エンジニアリングの世界に新たな視点をもたらします。この記事では、関数型プログラミングの基本概念、イミュータブルなデータ、高階関数、再帰などの概要を解説します。また、関数型プログラミングを実践する上でのベストプラクティスや利点についても触れます。関数型プログラミングの特性を活かしたコーディング方法や、副作用を排除する手法、そして実際のプロジェクトへの関数型プログラミングの適用方法など、実践的な側面に焦点を当てた内容となっています。関数型プログラミングを学ぶことで、新たなプログラミングパラダイムを探求し、コーディングスキルを高めてみましょう。`,
    nice: 0,
    flg: false
}
])

// 検索に使うクエリー
const searchQuery = ref("")

// 表示コンポーネントのコントロールに使うルートパラメータ
const route = useRoute()

// 記事詳細(ArticleView)へ送る記事削除機能のロジック
function articleDelete(id){
  articles.value.splice(id,1)
}
// 記事詳細(ArticleView)へのデータ送信
provide('articles',{
  articles,
  articleDelete
});

// 投稿ページ(PostView)へ送る投稿機能のロジック
function addArticle(newTitle, newOverView, newContent){
  articles.value.push({
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

// piniaを使ったシードデータ
const articleStore = useArticleStore()


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
        <RouterLink to="/post">投稿ページ</RouterLink>
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
          <!-- piniaテスト -->
          <p>{{ articleStore.count }}</p>
          <button @click="articleStore.increment">+1</button>
        </div>
        <div class="search">
          タイトル検索 <input type="text" v-model="searchQuery">
        </div>
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
            <p class="site-information">ソフトウェアエンジニアの知識やスキルは流動的な面があります。どんどん新しい言語やフレームワークが出てきて、5年前の最新は現代ではレガシーなスキルと言われることも珍しくありません。</p>
            <p>そこで、当サイトではエンジニアブログなるものを作り、常に勉強が必要なソフトウェアエンジニアの手助けになればと考えて作られました。</p>
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
./stores/articlesStore.js