<template>
  <div class="container">
    <div class="event-bus">
      <Increase class="inline" />
      <span>{{fontCount}}</span>
      <Decrease class="inline" />
    </div>
    <div>
      <ul>
        <li :key="index" v-for="(item,index) in arr">{{item}}</li>
      </ul>
      <ul>
        <li :key="name" v-for="(value,name) in obj">{{value.age1}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bus from "../utils/index.js"
import Increase from "../components/increase"
import Decrease from "../components/decrease"
export default {
  components: {
    Increase,
    Decrease,
  },
  data() {
    return {
      fontCount: 0,
      arr: [0, 1],
      obj: { name: {
        age:18
      } },
    }
  },
  created() {
    this.changeArr()
  },
  mounted() {
    Bus.$on("increased", ({ num, dep }) => {
      this.fontCount += num
    })
    Bus.$on("decreased", ({ num, dep }) => {
      if (this.fontCount > 0) {
        this.fontCount -= num
      }
    })
  },

  methods: {
    changeArr() {
      this.arr[1] = 2
      // this.obj.name = {age1:19}
      this.obj.name.age1 = 19
      console.log(this.obj)
    },
  },
}
</script>

<style lang="">
.container {
  padding: 20px;
}
.inline {
  display: inline-block;
}
</style>
