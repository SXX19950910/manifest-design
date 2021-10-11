<template>
  <div class="test-wrap">
    <test-template :visible="false" ref="template" />
  </div>
</template>

<script>
import testTemplate from '../../../public/test'
export default {
  components: {
    testTemplate
  },
  data() {
    return {
    }
  },
  methods: {
    handleTest() {
      this.$refs.template.print()
    }
  }
}
</script>

<style lang="scss">

</style>
