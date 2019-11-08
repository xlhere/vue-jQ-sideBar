<template>
  <div class="b-map">
    <div id="allmap"></div>
  </div>
</template>
<script>
import getMap from '@/js/bMap'

export default {
  mounted () {
    getMap()
  }
}
</script>
<style lang="">
/* .b-map{
  text-align: center;
  width: 800px;
  height: 500px;
  overflow: hidden;
  margin: 0;
  font-family: "微软雅黑";
} */
#allmap{
  width: 1000px;
  height: 500px;
  overflow: hidden;
  margin-left: 275px;
  font-family: "微软雅黑";
}
</style>
