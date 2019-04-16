<template>
  <div id="app">
    <img class="vue" src="./assets/logo.png" alt="Vue.js PWA">
    <hello-aframe></hello-aframe>
  </div>
</template>

<script>
import HelloAframe from './components/HelloAframe'
export default {
  name: 'app',
  components: {
    HelloAframe
  }
}
</script>

<style>
body {
  margin: 0;
}
.a-enter-vr-button {
  position: fixed;
  bottom: 20px !important;
}
#app {
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.vue {
  max-height: 50px;
  width: auto;
  position: fixed;
  bottom: 20px;
  left: 20px;
  z-index: 1;
}
</style>