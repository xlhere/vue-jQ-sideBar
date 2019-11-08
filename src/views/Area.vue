<template>
  <div class="area">
    <ServiceArea v-bind:message = "areaId" ref="getData"/>
    <el-button type="primary" @click="getAreaData">得到区域</el-button>
  </div>
</template>

<script>
import ServiceArea from '@/components/ServiceArea'

export default {
  components: {
    'ServiceArea': ServiceArea,
  },
  data() {
    return {
      areaId:''
    }
  },

  methods: {
    getAreaData(){
      console.log('🌹',this.$refs.getData.getServiceData())
    }
  }
}
</script>

<style lang="scss" scoped>
.area{
  text-align: center;
}
</style>
