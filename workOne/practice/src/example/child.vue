<template>
  <div>
    <h3>&nbsp;&nbsp;&nbsp;&nbsp;{{ `${props.item} + ${childItem}` }}</h3>
    &nbsp;&nbsp;&nbsp;&nbsp;자식<input v-model="childItem">
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  item: { type: String, default: null },
});

const childItem = ref('');
</script>

<style lang="scss" scoped>
</style>