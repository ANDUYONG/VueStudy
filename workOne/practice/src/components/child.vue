<template>
<div>
  <div> child.vue 부모값 불러오기: {{ title }}</div>
  <div>
  <input type="text" v-model="userName"/> 
    <button @click="sendData">전송하기</button>
  </div>
</div>
</template>

<script>
import { ref, watchEffect } from 'vue'
export default {
  props: {
    title: String,
  },

  setup(props){
  const title = ref(props.title);

  // 부모 컴포넌트에서 title이 변경될 때마다 감시하고 업데이트
  watchEffect(() => {
      title.value = props.title;
      console.log('부모꺼 불러오기',title.value);
  });
    return {
    title,
    };

  },
  methods: {
    sendData () {
      this.$emit('sendData', this.userName)
    }
  },
  data(){
    return {
      userName: ''
    }
  }


}



</script>

<style lang="scss" scoped>

</style>