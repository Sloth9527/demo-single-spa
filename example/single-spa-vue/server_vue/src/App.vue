<template>
  <div id="app" >
    <h1>server vue3</h1>
    <div class="nav" >
      <router-link to="/app1/home">app1 home</router-link>
      <router-link to="/app1/about" >app1 about</router-link>
      <router-link to="/app2/home" >app2 home</router-link>
      <router-link to="/app2/about" >app2 about</router-link>
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
