<template>
  <div>
      钟媛的个人主页
      <router-link to="resume">简历</router-link>
      <a @click.stop="to('familytree')">家谱树</a>
  </div>
</template>

<script>
export default {
    name: 'home',
    methods: {
        to(url) {
            window.open(url);
        }
    }
}
</script>

<style>

</style>
