<template>
  <div>
    <h3>자식화면에 표출 : {{ $props.item }}</h3>
  </div>
</template>
<!-- [Feedback]
  {{ $props.item }} $는 compsitionApi에서는 굳이 쓸필요 없으니 지우는게 좋겠습니다.
-->

<script setup>

  const props = defineProps({
    item: String
  });

</script>

<style lang="scss" scoped>

</style>