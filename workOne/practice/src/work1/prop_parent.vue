<template>
  <div>
    <h3>2번 부모 화면의 텍스트 박스 : <input v-model="item"></h3>
    <prop_child input type="text" :item="item"/>
  </div>
</template>


<script setup>
import prop_child from '@/work1/prop_child.vue'
import { ref } from 'vue'

const item = ref('');
</script>

<style lang="scss" scoped>

</style>