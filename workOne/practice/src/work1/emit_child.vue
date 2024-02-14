<template>
  <div>
    <h3>3번 자식화면에서 입력 : <input v-model="childItem">
    <button @click="$emit('someEvent', childItem)">전송하기</button></h3>
  </div>
</template>

<script setup>
import emit_child from '@/work1/emit_child.vue'
import { ref } from 'vue'

 const emit = defineEmits(['someEvent','childItem']);
 const childItem = ref('');
</script>

<style lang="scss" scoped>

</style>