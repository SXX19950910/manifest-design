<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  methods: {
    //
  },
  mounted() {
    console.log(JSON.parse(localStorage.getItem('templateList')))
  },
}
</script>

<style lang="scss">
@import "./style/index";
</style>
