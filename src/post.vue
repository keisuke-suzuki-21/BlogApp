<script setup>

const props = defineProps({
    title: String,
    content: String
})

defineEmits(['update:title', 'update:content'])
</script>

<template>
    <div class="article">
        <h3>投稿フォーム</h3>
        <form>
            <label>
                title<br>
                <input 
                type="text"
                :value="title"
                @input="updateValue('title', $event.target.value)"
                >
            </label><br>
            <label>
                content<br>
                <textarea
                type="textarea"
                :value="content"
                @input="updateValue('content', $event.target.value)"
            ></textarea>
            </label><br>
            <button @click="$emit('onPost',title, content)">投稿</button>
        </form>
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

</style>