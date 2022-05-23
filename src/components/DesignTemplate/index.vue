<script>
import Design from '@/core'
export default {
  name: 'DesignTemplate',
  props: {
    template: {
      type: Object,
      default() {
        return {}
      }
    },
  },
  data() {
    return {
      variables: {},
      visible: true,
      styleList: [
        {
          name: '.template-wrap',
          value: '{ position: relative; }'
        },
        {
          name: '.component',
          value: '{ padding: 0 10px 0 0; position: absolute; }'
        },
        {
          name: '.component .detail',
          value: '{  display: inline-block; font-weight: normal; word-break: break-all; word-wrap: break-word; border: 1px solid transparent; }'
        },
        {
          name: '.rectangle-warp',
          value: '{ min-width: 20px; min-height: 20px; height: 100%; }'
        },
        {
          name: '*',
          value: '{ font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif; box-sizing: border-box; }'
        }
      ]
    }
  },
  computed: {
    style() {
      return this.styleList.reduce((total, item) => {
        total = total + `${item.name} ${item.value}`
        return total
      }, '')
    }
  },
  mounted() {
    setTimeout(() => {
      this.initSpecialWidget()
    }, 0)
  },
  methods: {
    initSpecialWidget() {
      const { data } = this.template
      if (!data) return
      data.map((item) => {
        this.updateImg(item)
      })
    },
    updateImg(component) {
      const isQrcode = Design.isQrcode(component.type)
      const isBarcode = Design.isBarcode(component.type)
      const value = component.props.data
      if (isQrcode) {
        this.updateQrcode(component.id, value, component.props.options)
      } else if (isBarcode) {
        this.updateBarcode(component.id, value, component.props)
      }
    },
    updateBarcode(className, value, options) {
      try {
        const barcode = require('jsbarcode')
        const {bodyHeight, lineWidth, format, data} = options;
        barcode(`.${className}`, value || data, {
          format,
          width: lineWidth,
          height: bodyHeight,
          displayValue: false,
        });
      } catch (e) {
        console.error(e)
      }
    },
    updateQrcode(className, data, options) {
      try {
        const qrcode = require('qrcode')
        const config = {
          errorCorrectionLevel: options.errorCorrectionLevel,
          margin: options.margin,
          scale: options.scale,
          type: 'image/jpeg',
          color: {}
        }
        qrcode.toDataURL(data, config, (err, res) => {
          if (err) throw err;
          const $qrs = document.querySelectorAll('.' + className)
          for (const item of $qrs) {
            item.setAttribute('src', res)
          }
        });
      } catch (e) {
        throw new Error('二维码生成失败，请执行cnpm i qrcode命令后重试' + e)
      }
    },
    getElementByAttr(tag, name, value) {
      let res
      const dom = document.getElementsByTagName(tag);
      for (const item of dom) {
        if (value === item.getAttribute(name)) {
          res = item
        }
      }
      return res
    },
    getComponentByVariables(key) {
      return this.template.data.filter((item) => {
        return item.variable && item.variable.textData.filter((v) => v.key === key).length > 0
      })
    },
    preview() {
      if (window.previewWindow) window.previewWindow.close();
      this.$nextTick(() => {
        this.initSpecialWidget()
        const $app = `<style>${this.style}</style>${this.$refs.app.outerHTML}`
        window.previewWindow = window.open();
        window.previewWindow.document.write($app);
        window.previewWindow.document.title = '模板预览'
        // window.previewWindow.print()
        // window.previewWindow.document.close();
      })
    },
    lodopExport(printOptions = {}) {
      const app = this.$refs.app
      const options = this.template.options
      const LODOP = window.LODOP
      const { isPreview } = printOptions
      if (!LODOP) {
        alert('请先安装lodop')
      } else {
        LODOP.PRINT_INIT('');
        LODOP.PRINT_INITA(0, 0);
        LODOP.SET_PRINT_PAGESIZE(1, options.width, options.height);
        LODOP.SET_PRINT_MODE('POS_BASEON_PAPER', true);
        LODOP.SET_PRINT_MODE('PRINT_PAGE_PERCENT', 'Full-Page');
        LODOP.ADD_PRINT_HTM(0, 0, '100%', '100%', `<!DOCTYPE html><html class="print-html" lang="en"><head><style>${this.style}</style><title>打印Print</title></head><body>${app.innerHTML}</body></html>`)
        isPreview ? LODOP.PREVIEW() : LODOP.PRINT()
      }
    },
    setPrintVariables(variables) {
      const setText = (key, value) => {
        const $textDom = document.querySelectorAll('.' + key)
        if ($textDom && $textDom.length > 0) {
          $textDom.forEach((item) => {
            item.innerHTML = value
          })
        }
      }
      for (const key in variables) {
        if (Object.hasOwn(variables, key)) {
          const value = variables[key]
          const component = this.getComponentByVariables(key)
          component.forEach((item) => {
            const isImg = item.tag === 'img'
            if (isImg) {
              item.props.data = value
              this.updateImg(item)
            }
            setText(key, value)
          })
        }
      }
    },
  },
  render(createElement) {
    return new Design({ createElement, template: this.template })
  }
}
</script>

<style lang="scss">
.template-wrap {
  position: relative;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  .component {
    padding: 0 10px 0 0;
    position: absolute;
    color: #000000;

    .QrCodeUi {
      max-width: 100%;
      vertical-align: middle;
      user-select: none;
    }
  }
}
</style>
