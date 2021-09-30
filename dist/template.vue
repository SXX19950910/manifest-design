<template>
  <div v-show="visible" ref="app" id="app">
    ${html}
  </div>
</template>

<script>
export default {
  name: 'DesignTemplate',
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      options: '${options}',
      style: '.canvas-wrapper {\n  background-color: white;\n  border-radius: 2px;\n  position: absolute;\n  margin: 0 auto;\n  box-shadow: 0 0 10px rgba(0, 21, 41, 0.08);\n}\n\n.barcode-wrap {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    justify-content: center;\n}\n.barcode {\n      max-width: 100%;\n      vertical-align: middle;\n      user-select: none;\n}\n.barcode-text {\n      font-size: 20px;\n      font-weight: normal;\n}\n.item {\n    display: none;\n}\n.view-wrapper {\n    width: 100% !important;\n    height: 100% !important;\n}\n.border-canvas {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n.drag-warp {\n    position: absolute;\n    cursor: pointer;\n    border: 1px solid transparent;\n    color: #000;\n    border-radius: 2px;\n    max-width: 100%;\n    max-height: 100%;\n    overflow: hidden;\n    transition: background-color ease .36s;\n}\n\n.text-component .detail {\n    display: inline-block;\n    font-weight: normal;\n    word-break: break-all;\n    word-wrap: break-word;\n    border: 1px solid transparent;\n}'
    }
  },
  methods: {
    print() {
      const app = this.$refs.app
      const options = JSON.parse(this.options)
      const LODOP = window.LODOP
      if (!LODOP) {
        alert('请先安装lodop')
      } else {
        LODOP.PRINT_INIT('');
        LODOP.PRINT_INITA(0, 0)
        LODOP.SET_PRINT_PAGESIZE(1, options.width, options.height);
        LODOP.SET_PRINT_MODE("POS_BASEON_PAPER", true);
        LODOP.SET_PRINT_MODE("PRINT_PAGE_PERCENT", "Full-Page");
        LODOP.ADD_PRINT_HTM(0, 0, '100%', '100%', `<!DOCTYPE html><html class="print-html" lang="en"><head><style>${this.style}</style><title>打印Print</title></head><body>${app.innerHTML}</body></html>`)
        LODOP.PREVIEW()
      }
    }
  }
}
</script>

<style lang="scss">
</style>
