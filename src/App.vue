<script setup>
import { ref } from 'vue'
import Article from "./article.vue"
import Post from "./post.vue"

// ブログ記事のシードデータ
const articles = ref([
  {id: 1,
  title: "効果的なコーディング",
  content: "コードの可読性向上のための具体的な方法や、命名規則の重要性、コメントの適切な使い方、そしてコードの再利用性を高めるベストプラクティスを掘り下げます。また、テスト駆動開発（TDD）やペアプログラミングなどの開発手法についても紹介します。",
  nice: 0
  },
  {id: 2,
  title: "未来のテクノロジー",
  content: "人工知能（AI）、ブロックチェーン、量子コンピューティングなど、未来を担うテクノロジーに関する最新の動向や、それらがビジネスや日常生活に与える可能性について考察します。さらに、エッジコンピューティングやバーチャルリアリティ（VR）などの新興技術についても取り上げます。",
  nice: 0
  },
  {id: 3,
  title: "セキュリティ対策の重要性",
  content: "データ漏洩、サイバー攻撃、権限管理の重要性など、セキュリティの脅威とその対策について解説します。最新のセキュリティテクノロジーやハッキング手法、セキュリティ意識向上のためのトレーニングについても触れます。",
  nice: 0
  },
  {id: 4,
  title: "データ分析の魅力",
  content: "ビッグデータからの価値抽出方法やデータ可視化ツールの活用、機械学習アルゴリズムの基本的な仕組みについて解説します。また、データドリブンな意思決定や予測分析の重要性に焦点を当て、実際のビジネスケースを通じてその有用性を説明します。",
  nice: 0
  },
  {id: 5,
  title: "クラウドコンピューティング入門",
  content: "クラウドの基本概念から始まり、主要なクラウドプロバイダー（AWS、Azure、Google Cloudなど）のサービスや機能、セキュリティ、コスト最適化手法について具体的に解説します。また、クラウド移行の手順やベストプラクティスについても紹介します。",
  nice: 0
  }
])

// 検索に使うクエリー
const searchQuery = ref("")

// 記事投稿に使う空のオブジェクト
let newTitle = ref("")
let newContent = ref("")

// 投稿ボタンを押された時にarticlesにデータを追加する処理
function onPost(newTitle,newContent){
  let newArticle = {
    id: articles.length,
    title: newTitle,
    content: newContent,
    nice: 0
  }
  return articles.push(newArticle)
}

// postコンポーネントから受け取ったデータをarticlesに追加する処理
// function addArticle(title, content){
//   console.log(title)
//   let addArticle = {
//     id: articles.length,
//     title: title,
//     content: content,
//     nice: 0
//   }
//   articles.push(addArticle)
// }

</script>

<template>
  <body class="body">
    <main class="main">
      <h1 class="title">エンジニアBlog</h1>
      <div class="search">
        Search <input type="text" v-model="searchQuery">
      </div>

      <div class="article">
        <h3>投稿フォーム</h3>
        <form>
            <label>
                title<br>
                <input 
                type="text"
                v-model="newTitle"
                >
            </label><br>
            <label>
                content<br>
                <textarea
                type="textarea"
                v-model="newContent"
            ></textarea>
            </label><br>
            <button @click="onPost(newTitle,newContent)">投稿</button>
        </form>
    </div>

      <!-- <Post
      v-model:title = "title"
      v-model:content = "content"
      @on-post="addArticle"
      /> -->


      <Article 
      :articles = "articles"
      :searchQuery = "searchQuery"
      ></Article>
    </main>
  </body>
  
</template>

<style>
.body {
  font-family: Arial, sans-serif;
  margin:  0 auto;
  padding: 0;
  line-height: 1.6;
  background-color: #f7f7f7;
  width: 1200px;
}

.main {
  max-width: 800px;
  margin: 40px auto;
  padding: 0 20px;
}

.title{
  margin: 20px auto;
}

.search{
  margin-bottom: 20px;
}

</style>
