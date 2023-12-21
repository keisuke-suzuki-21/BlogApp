import { defineStore } from "pinia";
import { computed, ref} from "vue";

//defineStore() を使ってストアを定義し、名前を付けてエクスポート
export const useArticleStore = defineStore('articleStore', () => {
    const count = ref(0)
    const double = computed(() => count.value * 2)
    function increment() {
      count.value++
    }
   
    return { count, double, increment }
  },
  {
    persist: true,
  }
  );