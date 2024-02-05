<template>
  <div>
    <h3>즐거운 {{ $props.item }} 수업!</h3>
    자식<input :item="$props.item">
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  props: {
    item: String
  },
  setup() {

    return {}
  }
}
</script>

<style lang="scss" scoped>
</style>