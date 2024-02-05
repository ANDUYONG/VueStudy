<template>
<div>parent 부모값 입력하기:

<input type="text" v-model="title" /></div>
<child :title="title"></child>

<child @sendData="ShowData">
</child>

자식한테 받아온값: {{ receivedData }}


</template>

<script>
import child from './child.vue'

export default {


   data () {
    return {
      title: '',
      receivedData: '',
    }
  },
  
  components: {
    child
  },

  methods:{
    ShowData(data) {
      this.receivedData = data;
      console.log('이벤트수신');
      console.log('자식한테 받아온값', this.receivedData);
    }
    },

}


</script>
<style lang="scss" scoped>
</style>