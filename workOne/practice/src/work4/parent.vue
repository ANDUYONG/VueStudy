<template>
<div class="parent">
    <select v-model="selected">
      <option v-for="option in options" :key="option.num" :value="option.value">
        {{ option.value }}
      </option>
    </select>
    <div>선택됨: {{ selectedNum }}</div>

    <!-- 자식한테 받아옴 -->
    <div class="child-left" v-if="selected === '첫째'">    
      <first @firstEvent="firstcheckEmit"/>
    </div>

    <div class="child-right" v-if="selected === '둘째'">    
      <second @secondEvent="secondcheckEmit" /> 
    </div>

    <div>
      <br>
      <!-- 부모화면 표출 -->
     부모화면 : {{ selected === '첫째' ? firstchildItem : secondchildItem }}
    </div>

</div>
</template>

<script setup>
import first from '@/work4/first.vue'
import second from '@/work4/second.vue'
import { ref, computed } from 'vue'

const firstchildItem = ref('');
const secondchildItem = ref('');

const firstcheckEmit = (a) => {
  firstchildItem.value = a;
};

const secondcheckEmit = (b) => {
  secondchildItem.value = b;
};

const selected = ref('')
const selectedNum = computed(() => {
  const filteredOptions = options.value.filter(option => option.value === selected.value);
  if (filteredOptions.length > 0) {
    return filteredOptions[0].value;
  } else {
    return '';
  }
});


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