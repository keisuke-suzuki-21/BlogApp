<script setup>
import { computed, ref} from 'vue';
import { inject } from 'vue'

// ルートコンポーネントからのデータ受信
const {siteInformation, editSiteInformation} = inject("SiteInformation")

</script>


<template>
    <h3 class="post-title">サイト情報変更ページ</h3>
    <div class="article">
            <label>
                サイト情報<br>
                <textarea
                type="textarea"
                v-model="siteInformation.text"
            ></textarea>
            </label><br>
        <!-- インラインハンドラー下でのメソッド呼び出しによって、ネイティブイベントを無視してカスタム引数を渡している -->
        <button><RouterLink @click="editSiteInformation(siteInformation.text)" to="/">変更</RouterLink></button>
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