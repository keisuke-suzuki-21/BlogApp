import { defineStore } from "pinia";

// export const useArticleStore = defineStore("articleStore", {
//     state: () => {
//         return {
//             count: 0
//         }
//     },
//     getters: {
//         double: (state) => {
//             return state.count * 2
//         }
//     },
//     actions:{
//         increment() {
//             this.count++
//         }
//     },
//     persist: true
// })

export const useArticleStore = defineStore("articleStore", {
    const count = ref(0);
    const doubleCount = computed(() => count.value * 2);
	const increment = () => {
		console.log('increment');
		count.value += 1;
		console.log(count.value);
	};
    persist: true
    return { count, doubleCount, increment };
})