<template>
  <div class="test-wrap">
    <test-template :visible="false" ref="template" />
    <el-button @click="handleTest">测试打印</el-button>
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
      this.$refs.template.print({
        variables: {
          receiverAddress: 'value1',
          barcodeValue: 'value2',
          qrcodeValue: 'value3'
        }
      })
    }
  }
}
</script>

<style lang="scss">

</style>
