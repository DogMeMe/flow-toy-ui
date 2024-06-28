<template>
  <button class="fl-button" @click="handleClick">
    <slot name="default">点一点</slot>
  </button>
</template>

<style scoped>
@import "../style";
</style>

<script setup lang="ts">
const handleClick = () => {
  console.log("button click......");
};

defineOptions({
  name: "FlButton",
});
</script>
