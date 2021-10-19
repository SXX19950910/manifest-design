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
          receiverAddress: '这里是变量收件人地址',
          barcodeValue: '//shixiaoxi.cn',
          qrcodeValue: '12321321321XY'
        }
      })
    }
  }
}
</script>

<style lang="scss">

</style>
