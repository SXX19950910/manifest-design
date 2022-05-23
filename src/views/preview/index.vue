<template>
  <div class="preview-wrap">
    <template v-if="list.length">
      <design-template :ref="`template${index}`" v-for="(item, index) in list" :key="index" :template="item" />
    </template>
  </div>
</template>

<script>
import DesignTemplate from "@/components/DesignTemplate";
import { PRINT_TYPE } from '@/config/print'
export default {
  components: {
    DesignTemplate
  },
  data() {
    return {
      printNumber: 0,
      list: [],
      visible: false
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      const query = this.$route.query
      const { templateName, printNumber, printType } = query
      const ignores = ['templateName', 'printNumber']
      const template = this.$store.getters.templateList.find(item => item.name === templateName)
      this.printNumber = Number(printNumber)
      for (let i = 0; i < this.printNumber; i++) {
        this.list.push(template)
      }
      const form = {}
      for (const key in query) {
        if (!ignores.includes(key)) {
          form[key] = query[key]
        }
      }
      this.$nextTick(() => {
        for (let i = 0; i < this.printNumber; i++) {
          this.$refs[`template${i}`][0].setPrintVariables(form)
        }
      })
      if (printType === PRINT_TYPE.BROWSER) {
        this.$nextTick(() => {
          window.print()
        })
      } else if (printType === PRINT_TYPE.LODOP) {
        this.$nextTick(() => {
          setTimeout(() => {
            for (let i = 0; i < this.printNumber; i++) {
              this.$refs[`template${i}`][0].lodopExport({ isPreview: false })
            }
          }, 1000)
        })
      }
    }
  }
}
</script>

<style lang="scss">
.preview-wrap {
}
</style>