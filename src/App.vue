<template>
  <div id="app">
    <div class="nav">
      <router-link to="/">{{$t('sideBar')}}</router-link>
      <router-link to="/importFile">{{$t('importFile')}}</router-link>
      <router-link to="/vuex">{{$t('vuex')}}</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
</style>
