<!-- 자식 -->
<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>메뉴</th>
          <th>가격</th>
        </tr>
      </thead>
        <tbody>
          <tr @click="$emit('someEvent', body)" v-for="(body) in bodys" :key="body.menu">
            <td>{{body.menu}}</td>    
            <td>{{body.price}}</td>
          </tr>            
        </tbody>
    </table>
  </div>
</template>

<script setup>
import parent from '@/work6/rowclick_parent.vue'
import { reactive } from "vue";
import { ref } from 'vue'

const bodys = reactive([
  { id:1, menu: "김밥", price: 2000},
  { id:2, menu: "참치김밥", price: 3000},
  { id:3, menu: "라면", price: 3000},
  { id:4, menu: "김치라면", price: 3500},
  { id:5, menu: "떡라면", price: 3500},
  { id:6, menu: "떡볶이", price: 4000},
]);

  const emit = defineEmits(['someEvent']);
  const body = ref('');
  const printmenu = ref('');
  const printprice = ref('');

</script>

<style lang="scss" scoped>

</style>