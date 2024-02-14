<template>
  <div>
  1번<input type="text" v-model="firstName"> +
  <input type="text" v-model="lastName"><br>
  = <input type="text" v-model="fullName" readonly>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const firstName = ref('')
const lastName = ref('')

const fullName = computed({
  // getter
  get() {
    return firstName.value + ' ' + lastName.value
  },
  // setter
  set(newValue) {
    // 참고: 분해 할당 문법을 사용함.
    [firstName.value, lastName.value] = newValue.split(' ')
  }
})

</script>

<style lang="scss" scoped>

</style>