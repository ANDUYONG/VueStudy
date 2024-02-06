<template>
  <button :onclick="example">ex) 예시</button><br/><br/>
  <button :onclick="workOne">1. 2개의 텍스트박스 글자 입력하면 제 3의 텍스트박스에 합쳐서 보이도록 만들기</button><br/>
  <button :onclick="workOne">2. 부모화면의 텍스트박스 입력내용 자식화면에 표출</button><br/>
  <button :onclick="workOne">3. 자식화면의 입력내용 부모화면에 표출</button><br/>
</template>

<script setup>
import exampleParent from './example/parent.vue';
import familyParent from './family/parent.vue';
import router from './router'

const example = () => {
  router.push({
    path: '/example/parent',
    component: exampleParent,
  })
};

const workOne = () => {
  router.push({
    path: '/family/parent',
    component: familyParent,
  })
};
</script>

<style lang="scss" scoped>

</style>