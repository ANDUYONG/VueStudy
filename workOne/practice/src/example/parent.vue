<template>
  <div>
    <h2 :style="{ color: 'red' }">* 참고</h2>
    <h4 :style="{ color: 'red' }">&nbsp;&nbsp;&nbsp;&nbsp;- 소스코드를 형식에 맞춰서 하세요.</h4>
    <h4 :style="{ color: 'red' }">&nbsp;&nbsp;&nbsp;&nbsp;- 모든 과제는 CompositionApi로 개발하시기 바랍니다.</h4>
    <h4 :style="{ color: 'red' }">&nbsp;&nbsp;&nbsp;&nbsp;- import경로, router경로 등등 잘 확인하세요.</h4>
    <h4 :style="{ color: 'red' }">&nbsp;&nbsp;&nbsp;&nbsp;- 오류가 난다면 console.log를 찍어 잘 확인해보시기 바랍니다.</h4>
    <br/>
    <h2 :style="{ color: 'blue' }">* 과제추가</h2>
    <h4 :style="{ color: 'blue' }">&nbsp;&nbsp;&nbsp;&nbsp;- 새로운 과제는 main화면에서 버튼을 추가해서 추가해주시기 바랍니다.</h4>
    <br/>
    <h2>* 예시</h2>
    <h3>&nbsp;&nbsp;&nbsp;&nbsp;부모<input v-model="item"></h3>
    <child input type="text" :item="item"></child>
  </div>
</template>

<script setup>
import child from '@/example/child.vue'
import { ref } from 'vue'

const item = ref('');
</script>

<style lang="scss" scoped>
</style>