<template>
<div class="parent">
    <select v-model="selected">
      <option v-for="option in options" :value="option.value" :key="option.num">
        {{ option.num }}
      </option>
    </select>
    <div>선택됨: {{ selected }}</div>
  
    <!-- 자식한테 받아옴 -->
    <div class="child-left" v-if="selected === '첫째'">    
      <first @firstEvent="firstcheckEmit"/>
      부모화면 표출 : {{ firstchildItem }}
    </div>

    <div class="child-right" v-if="selected === '둘째'">    
      <second @secondEvent="secondcheckEmit" />
      부모화면 표출 : {{ secondchildItem }}
    </div>
</div>
</template>

<script setup>
import first from '@/work4/first.vue'
import second from '@/work4/second.vue'
import { ref } from 'vue'

const firstchildItem = ref('');
const secondchildItem = ref('');

const firstcheckEmit = (a) => {
  firstchildItem.value = a;
};

const secondcheckEmit = (b) => {
  secondchildItem.value = b;
  console.log(secondchildItem.value);

};

const selected = ref('')
const options = ref([
  { num: 'first', value: '첫째' },
  { num: 'second', value: '둘째' },
])


</script>

<style lang="scss" scoped>
.parent {
  width: 400px; /* 부모 요소의 너비 지정 */
  margin: 0 auto; /* 가운데 정렬을 위해 좌우 마진을 auto로 설정 */
  text-align: center; /* 부모 요소 내의 자식 요소들을 가운데 정렬 */
}

.child-left {
  text-align: left;
}

.child-right {
  text-align: right;
}

</style>