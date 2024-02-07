<template>
  <div>
    <h3>{{ $props.item }}</h3>
    <!-- 자식<input :item="$props.item"> -->
  <button @click="$emit('someEvent')">클릭하기</button>
  </div>
</template>

<script setup>

  const props = defineProps({
    item: String
  })

  const emit = defineEmits(['someEvent']);

</script>

<style lang="scss" scoped>
</style>