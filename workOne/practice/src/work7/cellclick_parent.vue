<!-- 부모 -->
<template>
  <div>
    메뉴 : <input class="blue" v-model="printmenu" readonly>
    <br>
    가격 : <input class="red" v-model="printprice" readonly>  
    <menutable @menuEvent="menucheckEmit" @priceEvent="pricecheckEmit"/>
  </div>
</template>


<script setup>
import menutable from '@/work7/menutable.vue'
import { ref } from 'vue'

const printmenu = ref('');
const printprice = ref('');

const menucheckEmit = (a) =>{ 
  printmenu.value = a;
}


const pricecheckEmit = (b) => {
  printprice.value = b;
}

</script>

<style lang="scss" scoped>

.blue {
  color: blue;
}

.red {
  color: red;
}


</style>