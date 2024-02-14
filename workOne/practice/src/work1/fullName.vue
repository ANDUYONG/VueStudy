<template>
  <div>
  1번<input type="text" v-model="firstName"> +
  <input type="text" v-model="lastName"><br>
  = <input type="text" v-model="fullName" readonly>
  </div>
</template>
<!-- [Feedback]
  computed get, set하는 방식은 처음보네요 ~
  저도 하나 배우고 갑니다 ~
-->
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
});

</script>

<style lang="scss" scoped>

</style>