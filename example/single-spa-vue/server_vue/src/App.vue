<template>
  <div id="app" >
    <h1>server vue3</h1>
    <div class="nav" >
      <router-link to="/app_vue2/home">app_vue2 home</router-link>
      <router-link to="/app_vue2/about" >app_vue2 about</router-link>
      <router-link to="/app_vue3/home" >app_vue3 home</router-link>
      <router-link to="/app_vue3/about" >app_vue3 about</router-link>
      <router-link to="/app_react/home">app_react home</router-link>
      <router-link to="/app_react/about" >app_react about</router-link>
    </div>
    <div id="microApp" >

    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style  >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.nav a{
  display: inline-block;
  padding: 0 10px;

  text-decoration: none;  
  font-size: 18px;
  color: #000;
}
</style>
