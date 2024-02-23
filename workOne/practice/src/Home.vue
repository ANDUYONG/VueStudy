<template>
  <h1>========== 과제방 ===========</h1>
  <button :onclick="example">ex) 예시</button><br/><br/>
  <button :onclick="workOne">1. 2개의 텍스트박스 글자 입력하면 제 3의 텍스트박스에 합쳐서 보이도록 만들기</button><br/>
  <button :onclick="workTwo">2. 부모화면의 텍스트박스 입력내용 자식화면에 표출</button><br/>
  <button :onclick="workThree">3. 자식화면의 입력내용 부모화면에 표출</button><br/>
  <button :onclick="workFour">4. 부모안에 있는 자식둘 컨트롤</button><br/>
  <button :onclick="workFive">5. 테이블1 - 테이블 만들기</button><br/>
  <button :onclick="workSix">6. 테이블2 - 테이블의 데이터 이용하기1(로우클릭)</button><br/>
  <button :onclick="workSeven">7. 테이블3 - 테이블의 데이터 이용하기2(셀 클릭)</button><br/>

</template>

<script setup>
import exampleParent from './example/parent.vue';
import fullName from './work1/fullName.vue';
import prop_parent from './work2/prop_parent.vue';
import emit_parent from './work3/emit_parent.vue';
import parent from './work4/parent.vue';
import menutable from './work5/menutable.vue';
import rowclick_parent from './work6/rowclick_parent.vue';
import cellclick_parent from './work7/cellclick_parent.vue';
import router from './router'

const example = () => {
  router.push({
    path: '/example/parent',
    component: exampleParent,
  })
};


const workOne = () => {
  router.push({
    path: '/work1/fullName',
    component: fullName,
  })
};

const workTwo = () => {
  router.push({
    path: '/work2/prop_parent',
    component: prop_parent,
  })
};

const workThree = () => {
  router.push({
    path: '/work3/emit_parent',
    component: emit_parent,
  })
};

const workFour = () => {
  router.push({
    path: '/work4/parent',
    component: parent,
  })
};

const workFive = () => {
  router.push({
    path: '/work5/menutable',
    component: menutable,
  })
};

const workSix = () => {
  router.push({
    path: '/work6/rowclick_parent',
    component: rowclick_parent,
  })
};

const workSeven = () => {
  router.push({
    path: '/work7/cellclick_parent',
    component: cellclick_parent,
  })
};

</script>

<style lang="scss" scoped>

</style>