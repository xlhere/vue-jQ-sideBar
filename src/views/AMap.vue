<template>
  <div>
    <div class="stationMapBox fl">
      <el-amap-search-box class="search-box" :search-option="searchOption" :on-search-result="onSearchResult"></el-amap-search-box>
      <el-amap ref="map" vid="showMapNode" :center="center" :zoom="zoom" :plugin="plugin" :events="events" class="showMap-mapnode">
        <el-amap-marker :position="marker" ></el-amap-marker>
      </el-amap>
    </div>
    <div class="detail">
      <span>详细地址：</span>
      <span>{{detailAddress}}</span>
    </div>
  </div>
</template>

<script>
import { AMapManager } from 'vue-amap'

export default {
  data() {
    return {
      detailAddress:'',
      AMapManager,
      zoom: 12,
      center: [121.638602, 29.886749],
      marker: [121.638602, 29.886749],
      searchOption: {
        city: '全国',
        citylimit: false
      },
      events:{
        'click' : (e) => {
          const _this = this
          this.marker = [e.lnglat.lng, e.lnglat.lat];
            // 这里通过高德 SDK 完成。
            var geocoder = new AMap.Geocoder({
              radius: 1000,
              extensions: "all"
            });
            geocoder.getAddress([e.lnglat.lng ,e.lnglat.lat], function(status, result) {
              if (status === 'complete' && result.info === 'OK') {
                if (result && result.regeocode) {
                  _this.detailAddress =result.regeocode.formattedAddress
                  console.log('哈',result)
                  // $(".detailedAddress").html(result.regeocode.formattedAddress)
                }
              }
            });
        }
      },
      plugin: [{
        pName: 'Geolocation',
        events: {
          init(o) {
            // o 是高德地图定位插件实例
            o.getCurrentPosition((status, result) => {
              if (result && result.position) {
                self.marker = [result.position.lng, result.position.lat];
                self.center = [result.position.lng, result.position.lat];
                // $(".detailedAddress").html(result.formattedAddress);
              }
            });
          }
        }
      }]
    }
  },
  methods: {
    onSearchResult(pois) {
      this.marker = [pois[0].lng, pois[0].lat];
      this.center = [pois[0].lng, pois[0].lat];
      // 这里通过高德 SDK 完成。
      var geocoder = new AMap.Geocoder({
        radius: 1000,
        extensions: "all"
      });
      geocoder.getAddress([pois[0].lng ,pois[0].lat], function(status, result) {
        if (status === 'complete' && result.info === 'OK') {
          if (result && result.regeocode) {
            $(".detailedAddress").html(result.regeocode.formattedAddress);
          }
        }
      });
    },
  }
}
</script>

<style lang="scss" scoped>

.stationMapBox{
  width:750px;
  height:335px;
  position: relative;
  overflow:hidden;
  margin-top:30px;
  margin-left:30px;
}
.search-box {
  position: absolute;
  top: 25px;
  left: 20px;
}
.detail{
  position: absolute;
  top: 80px;
  left: 800px;
  // width: 300px;
  height: 100px;
  font-size: 18px;
}
</style>
