<template>
  <div>
    <h3>첫째 : <input v-model="firstchildItem" @keydown="$emit('firstEvent', firstchildItem)">
    </h3>
  </div>
</template>

<script setup>
import { ref } from 'vue'

 const emit = defineEmits(['firstEvent']);
 const firstchildItem = ref('');
</script>

<style lang="scss" scoped>

</style>