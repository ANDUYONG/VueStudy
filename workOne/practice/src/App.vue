<template>
  <input v-model="firstname" />
  <br>
  <input v-model="lastname" />
  <br>
  <input v-model="fullname" readonly />
  <br>
  <br>

  <parent></parent>
  <child></child>
</template>

<script>
import { computed, ref, watch, readonly } from 'vue';
import child from './components/child.vue';

export default {
  setup() {
    const firstname = ref('');
    const lastname = ref('');
    const fullname = ref('');


    return { 
     firstname,
     lastname,
     fullname,
     };
  },
  computed: {
    fullname() {  //fullName 함수안에 사용한 값들이 바뀔때마다 이 함수가 실행
      return this.firstname+this.lastname
    }
  }
}
</script>

<style lang="scss" scoped>

</style>