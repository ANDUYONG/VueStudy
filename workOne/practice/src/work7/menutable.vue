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
          <tr v-for="(body) in bodys" :key="body.id">
            <td @click="$emit('menuEvent', body.menu)"> {{body.menu}}</td>    
            <td @click="$emit('priceEvent', body.price)">{{body.price}}</td>
          </tr>       
        </tbody>
    </table>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";

const bodys = reactive([
  { id:1, menu: "김밥", price: 2000},
  { id:2, menu: "참치김밥", price: 3000},
  { id:3, menu: "라면", price: 3000},
  { id:4, menu: "김치라면", price: 3500},
  { id:5, menu: "떡라면", price: 3500},
  { id:6, menu: "떡볶이", price: 4000},
]);


const emit = defineEmits(['menuEvent', 'priceEvent']);



</script>

<style lang="scss" scoped>

</style>