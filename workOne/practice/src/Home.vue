<template>
  <h1>========== 과제방 ===========</h1>
  <button :onclick="example">ex) 예시</button><br/><br/>
  <button :onclick="workOne_One">1. 2개의 텍스트박스 글자 입력하면 제 3의 텍스트박스에 합쳐서 보이도록 만들기</button><br/>
  <button :onclick="workOne_Two">2. 부모화면의 텍스트박스 입력내용 자식화면에 표출</button><br/>
  <button :onclick="workOne_Three">3. 자식화면의 입력내용 부모화면에 표출</button><br/>
</template>

<script setup>
import exampleParent from './example/parent.vue';
import fullName from './work1/fullName.vue';
import prop_parent from './work1/prop_parent.vue';
import emit_parent from './work1/emit_parent.vue';
import router from './router'

const example = () => {
  router.push({
    path: '/example/parent',
    component: exampleParent,
  })
};


const workOne_One = () => {
  router.push({
    path: '/work1/fullName',
    component: fullName,
  })
};

const workOne_Two = () => {
  router.push({
    path: '/work1/prop_parent',
    component: prop_parent,
  })
};

const workOne_Three = () => {
  router.push({
    path: '/work1/emit_parent',
    component: emit_parent,
  })
};


</script>

<style lang="scss" scoped>

</style>