import { defineStore } from "pinia";
import { computed, ref} from "vue";

export const useSiteInformationStore = defineStore("siteInformationStore", () => {
    const siteInformation = ref(
        {
        text: `ソフトウェアエンジニアの知識やスキルは流動的な面があります。どんどん新しい言語やフレームワークが出てきて、5年前の最新は現代ではレガシーなスキルと言われることも珍しくありません。そこで、当サイトではエンジニアブログなるものを作り、常に勉強が必要なソフトウェアエンジニアの手助けになればと考えて作られました。`
        }
    )
    return {siteInformation}
    },
    {
        persist: {
            storage: sessionStorage, 
            // ページ セッションが終了すると、sessionStorage のデータは消去されます。
            },
    }
);