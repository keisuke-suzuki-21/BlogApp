<script setup>


</script>

<template>
    <div class="article">
       <h2><slot name="title"/></h2>
       <p><slot name="content"/></p>
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