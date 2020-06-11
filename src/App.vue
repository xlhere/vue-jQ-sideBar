<template>
  <div id="app">
    <div class="nav">
      <router-link to="/">{{$t('sideBar')}}</router-link>
      <router-link to="/importFile">{{$t('importFile')}}</router-link>
      <router-link to="/vuex">{{$t('vuex')}}</router-link>
      <router-link to="/map">{{$t('map')}}</router-link>
      <router-link to="/screenshot">{{$t('screenshot')}}</router-link>
      <router-link to="/area">区域</router-link>
      <router-link to="/aMap">高德地图</router-link>
      <router-link to="/card">{{$t('card')}}</router-link>
    </div>
    <div class="lang">
       <el-dropdown class="avatar-container right-menu-item hover-effect" trigger="click">
        <div class="avatar-wrapper">
          <span>{{$i18n.locale}}</span>
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown">
          <a v-for="lang in langs" :key="lang" @click="changeLang()">
            <el-dropdown-item>{{lang}}</el-dropdown-item>
          </a>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      langs: Object.keys(this.$i18n.messages)
    }
  },
  created () {
    console.log(this.langs)
  },
  methods: {
    changeLang() {
      const lang = this.$i18n.locale
      this.$i18n.locale = lang==='zh'?'en':'zh'
    }
  }
}
</script>

<style>
body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,
legend,input,textarea,p,blockquote,th,td,hr,button,article,aside,details,
figcaption,figure,footer,header,hgroup,menu,nav,section,template,html{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
  /* background: #e9eff8; */
}
.nav{
  text-align: center;
  font-size: 16px;
  padding: 10px;
}
.lang{
  font-size: 18px;
  position: absolute;
  top: 10px;
  right: 20px;
}
.el-dropdown{
  font-size: 18px;
  color: #000;
  cursor: pointer;
}
</style>
