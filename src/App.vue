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
    this.$nextTick(() => {
      Object.defineProperty(Event.prototype, "path", {
        get() {
          return this.composedPath()
        }
      })
    })
  },
}
</script>

<style lang="scss">
@import "./style/index";
@import "./style/utils";
</style>
