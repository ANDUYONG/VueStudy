<template>
  <div>
    <h3>2번 부모 화면의 텍스트 박스 : <input v-model="item"></h3>
    <prop_child input type="text" :item="item"/>
  </div>
</template>
<!-- [Feedback]
    input type="text" 이 부분은 굳이 필요가 없을 것 같습니다.
    필하지 않는 코드는 지우는게 좋아요.
 -->


<script setup>
import prop_child from '@/work1/prop_child.vue'
import { ref } from 'vue'

const item = ref('');
</script>

<style lang="scss" scoped>

</style>