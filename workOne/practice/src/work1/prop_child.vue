<template>
  <div>
    <h3>자식화면에 표출 : {{ $props.item }}</h3>
  </div>
</template>

<script setup>

  const props = defineProps({
    item: String
  })

</script>

<style lang="scss" scoped>

</style>