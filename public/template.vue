<script>

export default {
  name: 'Manifest-Design',
  props: {
    allowInitLoad: {
      type: Boolean,
      default: true
    },
  },
  data() {
    return {
      template: JSON.parse('{ "value": "${template}" }'),
      variables: {},
      visible: this.allowInitLoad,
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
    // 处理特殊类型组件
    this.initSpecialWidget()
  },
  methods: {
    initSpecialWidget() {
      if (!this.template.data) return
      this.template.data.map((item) => {
        this.updateImg(item)
      })
    },
    setTemplate(template) {
      this.template = template
    },
    updateImg(component, data) {
      const isQrcode = this.isQrcode(component.type)
      const isBarcode = this.isBarcode(component.type)
      const value = data || component.props.data
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
          document.querySelector('.' + className).src = res
        });
      } catch (e) {
        throw new Error('二维码生成失败，请执行cnpm i qrcode命令后重试' + e)
      }
    },
    isQrcode(type) {
      return type === 'QrCodeUi'
    },
    isBarcode(type) {
      return type === 'BarcodeUi'
    },
    isLine(type) {
      return type === 'XLineUi' || type === 'YLineUi' || type === 'RectangleUi';
    },
    isText(type) {
      return type.includes('Text')
    },
    getContainerStyle(component) {
      const {props = {}, position, rect, type} = component
      const {fontSize, fontFamily, lineHeight, align, isBold} = props
      const fontWeight = isBold ? 'bold' : 'normal'
      return {
        fontSize,
        fontFamily,
        lineHeight,
        textAlign: align,
        top: position.clientY + 'px',
        left: position.clientX + 'px',
        fontWeight,
        width: rect.width + 'px',
        height: rect.height + 'px',
        padding: this.isLine(type) ? '0' : '0 10px 0 0'
      }
    },
    getSelfStyle(component) {
      const style = {}
      const {props, type} = component
      const {width, fontSize, align, borderWidth = '1', lineHeight, isBold, hasBorder, height, lineType = 'solid'} = props
      const isXLine = type === 'XLineUi'
      const isYLine = type === 'YLineUi'
      const isBarcode = type === 'BarcodeUi'
      const isText = type.includes('Text')
      const isRectangle = type === 'RectangleUi'
      if (isXLine) {
        style.width = '100%'
        style.borderTop = `${height}px`
        if (lineType === 'solid') {
          style.height = `${height}px`
          style.backgroundColor = '#000'
        } else if (lineType === 'dashed') {
          style.borderTop = `${height}px ${lineType} #000`
        }
      } else if (isYLine) {
        style.width = `${width}px`
        style.minHeight = '100%'
        if (lineType === 'solid') {
          style.backgroundColor = '#000'
        } else if (lineType === 'dashed') {
          style.borderLeft = `${width}px ${lineType} #000`
        }
      } else if (isBarcode) {
        style.fontSize = fontSize + 'px'
      } else if (isText) {
        style.textAlign = align
        style.fontSize = fontSize
        style.lineHeight = lineHeight
        style.border = hasBorder ? '1px solid #000' : '1px solid transparent'
        style.fontWeight = isBold ? 'bold' : '400'
      } else if (isRectangle) {
        style.border = `${borderWidth}px ${lineType} #000`
      }
      return style
    },
    getFields(component) {
      return component.variable ? component.variable.textData.filter((item) => item.key).map((item) => item.key).join('') : null
    },
    renderText(component) {
      let result = ''
      const { variable } = component
      if (variable && variable.enable) {
        component.variable.textData.map((item) => {
          result = result + `<span class="${item.key}">${item.value || item.value}</span>`
        })
      } else {
        result = component.props.text || component.props.data
      }
      return result
    },
    generateWidget(createElement, component) {
      const renderMap = {
        barCode: (create, instance) => this.renderBarcode(create, instance),
        qrCode: (create, instance) => this.renderQrcode(create, instance),
        xLine: (create, instance) => this.renderHorizontalLine(create, instance),
        yLine: (create, instance) => this.renderVerticalLine(create, instance),
        rectangle: (create, instance) => this.renderRectangle(create, instance),
      }[component.name]
      // console.log(component.name)
      const defaultRender = () => {
        const attrs = {
          'data-fields': this.getFields(component)
        }
        return createElement(component.tag, {
          class: 'detail',
          style: this.getSelfStyle(component),
          attrs
        }, [
          createElement('span', {
            class: `${component.id} ${component.type}`,
            domProps: {innerHTML: this.renderText(component)},
          })
        ])
      }
      return createElement('div',
          {
            attrs: {
              id: component.id,
            },
            class: 'component',
            style: this.getContainerStyle(component),
          },
          [
            renderMap ? renderMap(createElement, component) : defaultRender()
          ]
      )
    },
    renderQrcode(createElement, component) {
      return createElement('div', {
        class: 'qr-code-wrap'
      }, [
        createElement('img', {
          class: ['qr-code', component.id],
          ref: 'img',
          style: {
            maxWidth: '100%',
            verticalAlign: 'middle',
            userSelect: 'none'
          },
          attrs: {
            alt: 'qrcode',
            draggable: 'false',
            src: 'src',
            'data-fields': this.getFields(component)
          }
        })
      ])
    },
    renderHorizontalLine(createElement, component) {
      return createElement(component.tag, {
        class: 'x-line-wrap',
        style: this.getSelfStyle(component)
      })
    },
    renderVerticalLine(createElement, component) {
      return createElement(component.tag, {
        class: 'y-line-wrap',
        style: this.getSelfStyle(component)
      })
    },
    renderRectangle(createElement, component) {
      return createElement(component.tag, {
        class: 'rectangle-warp',
        style: this.getSelfStyle(component)
      })
    },
    renderBarcode(createElement, component) {
      const fields = this.getFields(component)
      const $codeValue = createElement('p', {
        class: 'barcode-text',
        domProps: {innerHTML: this.renderText(component)},
        style: this.getSelfStyle(component),
        attrs: {
          'data-fields': fields
        }
      })
      return createElement('div', {
        class: 'barcode-wrap',
        style: {
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center'
        }
      }, [
        createElement('img', {
          ref: 'img',
          class: ['barcode', component.id, component.type],
          style: Object.assign(this.getSelfStyle(component), {width: '100%'}),
          attrs: {
            src: 'src',
            alt: 'barcode',
            draggable: 'false'
          }
        }),
        component.props.displayValue === '1' && $codeValue
      ])
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
        if (variables.hasOwnProperty(key)) {
          const value = variables[key]
          const component = this.getComponentByVariables(key)
          component.forEach((item) => {
            const isImg = item.tag === 'img'
            if (isImg) {
              this.updateImg(item, value)
            }
            setText(key, value)
          })
        }
      }
    },
    print(config = {}) {
      const printOptions = Object.assign({
        isPreview: true,
        count: 1,
        variables: {}
      }, config)
      this.setPrintVariables(printOptions.variables)
      this.$nextTick(() => {
        this.lodopExport(printOptions)
      })
    },
    preview() {
      this.visible = true
      if (window.previewWindow) window.previewWindow.close();
      this.$nextTick(() => {
        this.initSpecialWidget()
        const $app = `<style>${this.style}</style>${this.$refs.app.outerHTML}`
        window.previewWindow = window.open();
        window.previewWindow.document.write($app);
        window.previewWindow.document.title = '模板预览'
        window.previewWindow.print()
        window.previewWindow.document.close();
        this.visible = false
      })
    },
    lodopExport(printOptions) {
      const app = this.$refs.app
      const options = this.template.options
      const LODOP = window.LODOP
      if (!LODOP) {
        alert('请先安装lodop')
      } else {
        LODOP.PRINT_INIT('');
        LODOP.PRINT_INITA(0, 0);
        LODOP.SET_PRINT_PAGESIZE(1, options.width, options.height);
        LODOP.SET_PRINT_MODE('POS_BASEON_PAPER', true);
        LODOP.SET_PRINT_MODE('PRINT_PAGE_PERCENT', 'Full-Page');
        LODOP.ADD_PRINT_HTM(0, 0, '100%', '100%', `<!DOCTYPE html><html class="print-html" lang="en"><head><style>${this.style}</style><title>打印Print</title></head><body>${app.innerHTML}</body></html>`)
        printOptions.isPreview ? LODOP.PREVIEW() : LODOP.PRINT()
      }
    },
    generateBoard() {
      const board = this.template.options
      return {
        class: 'template-wrap',
        style: {
          width: board.width + 'px',
          height: board.height + 'px'
        },
        ref: 'app'
      }
    },
  },
  render(createElement) {
    if (this.visible) {
      return createElement('div', this.generateBoard(), this.template.data.map((component) => {
        return this.generateWidget(createElement, component)
      }))
    } else {
      return createElement(null)
    }
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
