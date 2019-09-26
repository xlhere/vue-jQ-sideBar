<template>
  <div class="vuex">
    <p>{{changableNum}}</p>
    <p v-show="isShow">show</p>
    <p>
       <el-button type="primary" @click="show1">show</el-button>
       <el-button type="primary" @click="hide1">hide</el-button>
       <el-button type="primary" @click="newNum1(5)">sum</el-button>
    </p>
  </div>
</template>

<script>
import {mapState,mapGetters,mapActions,mapMutations} from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'isShow',
      'getChangedNum',
    ]),
    ...mapState(['changableNum'])
  },

  created () {
  },

  methods: {
    ...mapMutations(['show','hide','newNum']),
    show1() {
      this.show()
    },
    hide1() {
      this.hide()
    },
    newNum1(sum) {
      this.newNum(sum)
      console.log(this.$store.state.changableNum)
    }
  }
}
</script>

<style lang="">
.vuex{
  padding: 0 20px;
}
</style>
