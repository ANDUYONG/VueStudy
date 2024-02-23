<template>
  <div>
    <h3>자식2 : <input v-model="secondchildItem" @keydown="$emit('secondEvent', secondchildItem)">
    </h3>
  </div>
</template>

<script setup>
import { ref } from 'vue'

 const emit = defineEmits(['secondEvent']);
 const secondchildItem = ref('');
</script>

<style lang="scss" scoped>

</style>