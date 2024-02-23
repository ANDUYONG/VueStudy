<!-- 부모 -->
<template>
  <div>
    메뉴 : <input v-model="printmenu" readonly>
    <br>
    가격 : <input v-model="printprice" readonly>  
    <menutable @someEvent="checkEmit"/>
  </div>
</template>


<script setup>
import menutable from '@/work5/menutable.vue'
import { ref } from 'vue'

const printmenu = ref('');
const printprice = ref('');
const checkEmit = (a) => {
  printmenu.value = a.menu,
  printprice.value = a.price;
};


</script>

<style lang="scss" scoped>

</style>