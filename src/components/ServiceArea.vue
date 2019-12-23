<template>
  <div>

  <el-select
    v-model="getProvince"
    @change="setCity"
    multiple
    value-key="code"
    placeholder="省份/地区">
    <el-option
      v-for="item in province"
      :key="item.code"
      :label="item.title"
      :value="item">
    </el-option>
  </el-select>

  <el-select
    v-model="getCity"
    @change="setCountry"
    multiple
    value-key="code"
    placeholder="城市">
    <el-option
      v-for="item in city"
      :key="item.code"
      :label="item.title"
      :value="item">
    </el-option>
   </el-select>

  <el-select
    v-model="getCounty"
    @change="setStreet"
    multiple
    value-key="code"
    placeholder="区/县">
    <el-option
      v-for="item in county"
      :key="item.code"
      :label="item.title"
      :value="item">
    </el-option>
   </el-select>

  <el-select
    v-model="getStreet"
    @change="setVillage"
    multiple
    value-key="code"
    placeholder="街道">
    <el-option
      v-for="item in street"
      :key="item.code"
      :label="item.title"
      :value="item">
    </el-option>
   </el-select>

  <el-select
    v-model="getVillage"
    multiple
    value-key="code"
    placeholder="乡镇">
    <el-option
      v-for="item in village"
      :key="item.code"
      :label="item.title"
      :value="item">
    </el-option>
   </el-select>

  </div>
</template>

<script>
export default {
  props:["message"],
  data() {
    return {
        province: [],
        city:[],
        county:[],
        street:[],
        village:[],
        getProvince: [],
        getCity:[],
        getCounty:[],
        getStreet:[],
        getVillage:[],

    }
  },
  mounted() {
    let _this = this;
    //请求省份接口
    _this.$axios({
        method: 'post',
        url: '//47.93.9.213/gwcommondata',
        headers: {
            'Authorization': sessionStorage.getItem("Token")
        },
        data: {
        query: `{
                provinces{
                    id
                    code
                    title
                }
                }`,
        }
    }).then(function(res){
        _this.province = res.data.data.provinces;
    })
  },
  methods: {
    //获取数据
    getServiceData:function(){
      var getData = [];
      if(this.getVillage != ''){
          for(var i=0;i < this.getVillage.length;i ++){
              getData.push({"province":this.getVillage[i].town.county.city.province.title,"provinceCode":this.getVillage[i].town.county.city.province.code,
                              "city":this.getVillage[i].town.county.city.title,"cityCode":this.getVillage[i].town.county.city.code,
                              "country":this.getVillage[i].town.county.title,"countryCode":this.getVillage[i].town.county.code,
                              "town":this.getVillage[i].town.title,"townCode":this.getVillage[i].town.code,
                              "village":this.getVillage[i].title,"villageCode":this.getVillage[i].code,
              });
          }
      }else
      if(this.getStreet != '' && this.getVillage == ''){
          for(var i=0;i < this.getStreet.length;i ++){
              getData.push({"province":this.getStreet[i].county.city.province.title,"provinceCode":this.getStreet[i].county.city.province.code,
                              "city":this.getStreet[i].county.city.title,"cityCode":this.getStreet[i].county.city.code,
                              "country":this.getStreet[i].county.title,"countryCode":this.getStreet[i].county.code,
                              "town":this.getStreet[i].title,"townCode":this.getStreet[i].code,
                              "village":'',"villageCode":'',
              });
          }
      }else
      if(this.getCounty != '' && this.getStreet == ''){
          for(var i=0;i < this.getCounty.length;i ++){
              getData.push({"province":this.getCounty[i].city.province.title,"provinceCode":this.getCounty[i].city.province.code,
                              "city":this.getCounty[i].city.title,"cityCode":this.getCounty[i].city.code,
                              "country":this.getCounty[i].title,"countryCode":this.getCounty[i].code,
                              "town":'',"townCode":'',
                              "village":'',"villageCode":'',
              });
          }
      }else
      if(this.getCity != '' && this.getCounty == ''){
          for(var i=0;i < this.getCity.length;i ++){
              getData.push({"province":this.getCity[i].province.title,"provinceCode":this.getCity[i].province.code,
                              "city":this.getCity[i].title,"cityCode":this.getCity[i].code,
                              "country":'',"countryCode":'',
                              "town":'',"townCode":'',
                              "village":'',"villageCode":'',
              });
          }
      }else
      if(this.getProvince != '' && this.getCity == ''){
          for(var i=0;i < this.getProvince.length;i ++){
              getData.push({"province":this.getProvince[i].title,"provinceCode":this.getProvince[i].code,
                              "city":'',"cityCode":'',
                              "country":'',"countryCode":'',
                              "town":'',"townCode":'',
                              "village":'',"villageCode":'',
              });
          }
      }
      return getData;
    },
    //省份数据改变加载城市数据
    setCity:function(e){
      let _this = this;
      _this.getCity = [];
      _this.getCounty = [];
      _this.getStreet = [];
      _this.getVillage = [];
      _this.city = [];
      _this.county = [];
      _this.street = [];
      _this.village = [];
      for(var i=0;i < e.length;i ++){
          //请求城市接口
          _this.$axios({
              method: 'post',
              url: '//47.93.9.213/gwcommondata',
              headers: {
                  'Authorization': sessionStorage.getItem("Token")
              },
              data: {
              query: `{
                      cities(provinceCode:"${e[i].code}"){
                          id
                          code
                          title
                          province{
                          id
                          code
                          title
                          }
                      }
                      }`,
              }
          }).then(function(res){
              for(var i = 0;i <res.data.data.cities.length;i ++){
                  _this.city.push(res.data.data.cities[i]);
              }
          })
      }
    },
    //城市数据改变加载区县数据
    setCountry:function(e){
      let _this = this;
      _this.getCounty = [];
      _this.getStreet = [];
      _this.getVillage = [];
      _this.county = [];
      _this.street = [];
      _this.village = [];
      for(var i=0;i < e.length;i ++){
          //请求城市接口
          _this.$axios({
              method: 'post',
              url: '//47.93.9.213/gwcommondata',
              headers: {
                  'Authorization': sessionStorage.getItem("Token")
              },
              data: {
              query: `{
                      counties(cityCode:"${e[i].code}"){
                          id
                          code
                          title
                          city{
                          id
                          code
                          title
                          province{
                              id
                              code
                              title
                          }
                          }
                      }
                      }`,
              }
          }).then(function(res){
              for(var i = 0;i <res.data.data.counties.length;i ++){
                  _this.county.push(res.data.data.counties[i]);
              }
          })
      }
    },
    //区县数据改变加载街道数据
    setStreet:function(e){

      let _this = this;
      _this.getStreet = [];
      _this.getVillage = [];
      _this.street = [];
      _this.village = [];
      for(var i=0;i < e.length;i ++){
          //请求城市接口
          _this.$axios({
              method: 'post',
              url: '//47.93.9.213/gwcommondata',
              headers: {
                  'Authorization': sessionStorage.getItem("Token")
              },
              data: {
              query: `{
                      towns(countyCode:"${e[i].code}"){
                          id
                          code
                          title
                          county{
                          id
                          code
                          title
                          city{
                              id
                              code
                              title
                              province{
                              id
                              code
                              title
                              }
                          }
                          }
                      }
                      }`,
              }
          }).then(function(res){
              for(var i = 0;i <res.data.data.towns.length;i ++){
                  _this.street.push(res.data.data.towns[i]);
              }
          })
      }
    },
    //街道数据改变加载村镇数据
    setVillage:function(e){
      console.log('🐯',e)
      let _this = this;
      _this.getVillage = [];
      _this.village = [];
      _this.$message('本级加载较慢，请耐心等待5秒在选择...');
      for(var i=0;i < e.length;i ++){
          //请求城市接口
          _this.$axios({
              method: 'post',
              url: '//47.93.9.213/gwcommondata',
              headers: {
                  'Authorization': sessionStorage.getItem("Token")
              },
              data: {
              query: `{
                      villages(townCode:"${e[i].code}"){
                          id
                          code
                          title
                          town{
                          id
                          code
                          title
                          county{
                              id
                              code
                              title
                              city{
                              id
                              code
                              title
                              province{
                                  id
                                  code
                                  title
                              }
                              }
                          }
                          }
                      }
                      }`,
              }
          }).then(function(res){
              for(var i = 0;i <res.data.data.villages.length;i ++){
                  _this.village.push(res.data.data.villages[i]);
              }
          })
      }
    },
    //去重
    removeRepeat:function(data){
        for(var i = 0; i < data.length - 1; i++) {
            for(var j = i+1; j < data.length; j++) {
                if(data[i].code == data[j].code) {
                data.splice(j, 1)
                j = j-1
                }
            }
        }
        return data;
    }

  },
  watch: {
    message(data, oldValue) {
        var provinceData = [];
        var cityData = [];
        var countyData = [];
        var streetData = [];
        var villageData = [];
        for(var i = 0;i <data.length; i ++){
            if(data[i].villageCode){
                villageData.push({"title":data[i].village,"code":data[i].villageCode,"town":{"title":data[i].town,"code":data[i].townCode,"county":{"title":data[i].country,"code":data[i].countryCode,"city":{"title":data[i].city,"code":data[i].cityCode,"province":{"title":data[i].province,"code":data[i].provinceCode}}}}})
                streetData.push({"title":data[i].town,"code":data[i].townCode,"county":{"title":data[i].country,"code":data[i].countryCode,"city":{"title":data[i].city,"code":data[i].cityCode,"province":{"title":data[i].province,"code":data[i].provinceCode}}}})
                countyData.push({"title":data[i].country,"code":data[i].countryCode,"city":{"title":data[i].city,"code":data[i].cityCode,"province":{"title":data[i].province,"code":data[i].provinceCode}}})
                cityData.push({"title":data[i].city,"code":data[i].cityCode,"province":{"title":data[i].province,"code":data[i].provinceCode}})
                provinceData.push({"title":data[i].province,"code":data[i].provinceCode})
            }

            if(!data[i].villageCode && data[i].townCode){
                streetData.push({"title":data[i].town,"code":data[i].townCode,"county":{"title":data[i].country,"code":data[i].countryCode,"city":{"title":data[i].city,"code":data[i].cityCode,"province":{"title":data[i].province,"code":data[i].provinceCode}}}})
                countyData.push({"title":data[i].country,"code":data[i].countryCode,"city":{"title":data[i].city,"code":data[i].cityCode,"province":{"title":data[i].province,"code":data[i].provinceCode}}})
                cityData.push({"title":data[i].city,"code":data[i].cityCode,"province":{"title":data[i].province,"code":data[i].provinceCode}})
                provinceData.push({"title":data[i].province,"code":data[i].provinceCode})
            }

            if(!data[i].townCode && data[i].countryCode){
                countyData.push({"title":data[i].country,"code":data[i].countryCode,"city":{"title":data[i].city,"code":data[i].cityCode,"province":{"title":data[i].province,"code":data[i].provinceCode}}})
                cityData.push({"title":data[i].city,"code":data[i].cityCode,"province":{"title":data[i].province,"code":data[i].provinceCode}})
                provinceData.push({"title":data[i].province,"code":data[i].provinceCode})
            }

            if(!data[i].countryCode && data[i].cityCode){
                cityData.push({"title":data[i].city,"code":data[i].cityCode,"province":{"title":data[i].province,"code":data[i].provinceCode}})
                provinceData.push({"title":data[i].province,"code":data[i].provinceCode})
            }

            if(!data[i].cityCode && data[i].provinceCode){
                provinceData.push({"title":data[i].province,"code":data[i].provinceCode})
            }
        }
        this.getProvince = this.removeRepeat(provinceData)
        this.setCity(provinceData);
        this.getCity = this.removeRepeat(cityData)
        this.setCountry(cityData);
        this.getCounty = this.removeRepeat(countyData);
        this.setStreet(countyData);
        this.getStreet = this.removeRepeat(streetData);
        this.setVillage(streetData);
        this.getVillage = this.removeRepeat(villageData);
    }
  },

}
</script>

<style scoped>
.el-select{
    width:180px;
}
</style>
