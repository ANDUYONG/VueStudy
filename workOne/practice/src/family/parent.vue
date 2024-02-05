<template>
  <div>
    <h3>부모<input v-model="item"></h3>

    <child input type="text" :item="item"></child>
  </div>
</template>

<script>
import child from '@/family/child.vue'
import { ref } from 'vue'

export default {
  components: { child },
  setup() {
    const item = ref('');

    return { item }
  }
}
</script>

<style lang="scss" scoped>
</style>