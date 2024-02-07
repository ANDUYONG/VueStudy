<template>
  <div>
    <h3>부모<input v-model="item"></h3>
    <child input type="text" :item="item"/>
    <child @someEvent="checkEmit"/>
    <hr>
  </div>
</template>

<script setup>
import child from '@/family/child.vue'
import { ref } from 'vue'

const item = ref('');

const checkEmit = () => {
	console.log('emit 발생')
}


</script>

<style lang="scss" scoped>
</style>