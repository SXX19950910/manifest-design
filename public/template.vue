<template>
  <!DOCTYPE html>
  <html v-show="visible" ref="html" lang="en">
    <body>
    <div ref="app" id="app">
      ${html}
    </div>
    </body>
  </html>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
    }
  },
  methods: {
    print() {
      const $app = this.$refs.html
    }
  }
}
</script>

<style lang="scss">

</style>
