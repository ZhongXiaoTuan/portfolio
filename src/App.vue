<template>
  <div id="app">
    <home />
  </div>
</template>

<script>
import Home from './pages/Home'

export default {
  name: 'App',
  components: {
    home: Home
  }
}
</script>

<style>
@import url('./asset/iconfont/iconfont.css');
* {
  font-weight: 400;
}
</style>
