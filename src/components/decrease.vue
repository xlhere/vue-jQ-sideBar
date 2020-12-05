<template>
  <div>
    <el-button @click="decrease()">递减</el-button>
  </div>
</template>

<script>
import Bus from '../utils/index.js';

export default {
  data() {
    return {
      num: 10,
      dep: 1,
    }
  },
  methods: {
    decrease() {
      Bus.$emit("decreased", {
        num: this.num,
        dep: this.dep,
      })
    },
  },
}
</script>

