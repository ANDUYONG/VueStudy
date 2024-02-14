<template>
  <div>
    <emit_child @someEvent="checkEmit"/>
    부모화면에서 표출 : {{ childItem }}
  </div>
</template>

<script setup>
import emit_child from '@/work3/emit_child.vue'
import { ref } from 'vue'

const childItem = ref('');
const checkEmit = (a) => {
  childItem.value = a;
};
</script>

<style lang="scss" scoped>

</style>