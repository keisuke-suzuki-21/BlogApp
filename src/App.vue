<script setup>
import { computed, ref } from 'vue'
import Article from "./article.vue"

// ブログ記事のシードデータ
const articles = ref([
  {id: 0,
  title: "効果的なコーディング",
  content: "コードの可読性向上のための具体的な方法や、命名規則の重要性、コメントの適切な使い方、そしてコードの再利用性を高めるベストプラクティスを掘り下げます。また、テスト駆動開発（TDD）やペアプログラミングなどの開発手法についても紹介します。",
  nice: 0,
  flg: false
  },
  {id: 1,
  title: "未来のテクノロジー",
  content: "人工知能（AI）、ブロックチェーン、量子コンピューティングなど、未来を担うテクノロジーに関する最新の動向や、それらがビジネスや日常生活に与える可能性について考察します。さらに、エッジコンピューティングやバーチャルリアリティ（VR）などの新興技術についても取り上げます。",
  nice: 0,
  flg: false
  },
  {id: 2,
  title: "セキュリティ対策の重要性",
  content: "データ漏洩、サイバー攻撃、権限管理の重要性など、セキュリティの脅威とその対策について解説します。最新のセキュリティテクノロジーやハッキング手法、セキュリティ意識向上のためのトレーニングについても触れます。",
  nice: 0,
  flg: false
  },
  {id: 3,
  title: "データ分析の魅力",
  content: "ビッグデータからの価値抽出方法やデータ可視化ツールの活用、機械学習アルゴリズムの基本的な仕組みについて解説します。また、データドリブンな意思決定や予測分析の重要性に焦点を当て、実際のビジネスケースを通じてその有用性を説明します。",
  nice: 0,
  flg: false
  },
  {id: 4,
  title: "クラウドコンピューティング入門",
  content: "クラウドの基本概念から始まり、主要なクラウドプロバイダー（AWS、Azure、Google Cloudなど）のサービスや機能、セキュリティ、コスト最適化手法について具体的に解説します。また、クラウド移行の手順やベストプラクティスについても紹介します。",
  nice: 0,
  flg: false
  },
  {id: 5,
  title: "モバイルアプリのUI/UXデザイン",
  content: "モバイルアプリの優れたUI/UXデザインの要素やベストプラクティスについて解説します。ユーザーインターフェースの設計原則や使いやすさのためのテクニックを例示します。",
  nice: 0,
  flg: false
  },
  {id: 6,
  title: "プログラミング言語比較ガイド",
  content: "主要なプログラミング言語（Python、JavaScript、Java、Rubyなど）を比較し、それぞれの特徴、用途、利点、欠点について詳しく解説します。",
  nice: 0,
  flg: false
  },
  {id: 7,
  title: "データベース最適化の戦略",
  content: "データベースのパフォーマンスを向上させるための最適化戦略やインデックスの最適な利用方法、クエリのチューニング手法について掘り下げます。",
  nice: 0,
  flg: false
  },
  {id: 8,
  title: "AIのビジネス応用事例",
  content: "人工知能（AI）をビジネスに活用する実際の事例や成功パターンを紹介します。機械学習や自然言語処理などの技術を活かしたビジネスへの応用に焦点を当てます。",
  nice: 0,
  flg: false
  },
  {id: 9,
  title: "エンジニアリングリーダーシップの秘訣",
  content: "エンジニアリーダーに求められるリーダーシップスキルやチームマネジメントのベストプラクティス、技術的なリーダーシップの重要性について論じます。",
  nice: 0,
  flg: false
  }
])


// 検索に使うクエリー
const searchQuery = ref("")

// 投稿機能の準備
const title = ref("")
const content = ref("")



// const title1 = ref("")
// const content1 = ref("")

// 投稿した時にデータを追加するロジック
// function onPost(){
//   let newArticle = {
//     id: 11,
//     title: title.value,
//     content: content.value,
//     nice: 0
//   }
//   articles.push(newArticle)
//   console.log(articles)
//   return articles
// }


// const newArticles = [{id: 9,
//   title: "AIのビジネス応用事例",
//   content: "人工知能（AI）をビジネスに活用する実際の事例や成功パターンを紹介します。機械学習や自然言語処理などの技術を活かしたビジネスへの応用に焦点を当てます。",
//   nice: 0
//   }]
// function add(event){
//   console.log("addの中")
//   console.log(newArticles)
//   newArticles.push({id:11, title:title1.value, content:content1.value, nice:0})
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
            <label>
                title<br>
                <input 
                type="text"
                v-model="title"
                >
            </label><br>
            <label>
                content<br>
                <textarea
                type="textarea"
                v-model="content"
            ></textarea>
            </label><br>
            <button @click="add">投稿</button>
      </div>

    <!-- <div class="article" v-for="article in newArticles" :key="article.id">
      <h2>{{ article.title }}</h2>
      <p>{{ article.content }}</p>
      <button @click="article.nice++">👍 {{ article.nice }}</button>
    </div> -->

      <!-- 動的なpropsだからv-bindを使って送る -->
      <Article 
      :articles = "articles"
      :searchQuery = "searchQuery"
      :title = "title"
      :content = "content"
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
</style>
