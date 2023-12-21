import { defineStore } from "pinia";

export const useArticleStore = defineStore("articleStore", {
    state: () => {
        return {
            count: 0
        }
    },
    getters: {
        double: (state) => {
            return state.count * 2
        }
    },
    actions:{
        increment() {
            this.count++
        }
    },
    persist: true
})