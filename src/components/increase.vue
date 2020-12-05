<template>
  <div>
    <el-button @click="increase()">递增</el-button>
  </div>
</template>

<script>
import Bus from '../utils/index.js';

export default {
  data() {
    return {
      num:10,
      dep:1
    }
  },
  methods: {
    increase(){
      Bus.$emit('increased', {
        num:this.num,
        dep:this.dep
      });
    }
  }
}
</script>
