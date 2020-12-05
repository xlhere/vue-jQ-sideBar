<template>
  <div class="vuex">
    <p>{{changableNum}}</p>
    <p v-show="isShow">show</p>
    <p>
      <el-button @click="show1" type="primary">show</el-button>
      <el-button @click="hide1" type="primary">hide</el-button>
      <el-button @click="newNum1(5)" type="primary">sum</el-button>
    </p>
    <span>{{count}}</span>
  </div>
</template>

<script>
import Bus from '../utils/index.js';
import { mapState, mapGetters, mapActions, mapMutations } from "vuex"

export default {
  computed: {
    ...mapGetters(["isShow", "getChangedNum"]),
    ...mapState(["changableNum"]),
  },
  data() {
    return {
      count:0
    }
  },
  created() {
    Bus.$on('getTarget',val => {
      this.count = val
      console.log(this.count)
    })
  },

  methods: {
    ...mapMutations(["show", "hide", "newNum"]),
    show1() {
      this.show()
    },
    hide1() {
      this.hide()
    },
    newNum1(sum) {
      this.newNum(sum)
      console.log(this.$store.state.changableNum)
    },
  },
}
</script>

<style lang="">
.vuex {
  padding: 0 20px;
}
</style>
