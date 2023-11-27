<script setup>
import { ref } from 'vue'
import Article from "./article.vue"

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
const searchQuery = ref("記事を検索")

</script>

<template>
  <body class="body">
    <main class="main">
      <div class="search">
        <input v-model="searchQuery">
        <button>search</button>
      </div>
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

.search{
  margin-bottom: 20px;
}

</style>
