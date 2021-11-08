<script>
import components from "@/store/modules/components";

export default {
  name: 'Manifest-Design',
  props: {
    visible: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      style: '* {   font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;  } .template-wrap { position: relative; } .component { padding: 0 10px 0 0; position: absolute; }',
      template: {
        "name": "eeeeee",
        "data": [
          {
            "type": "TextUi",
            "name": "receiverAddress",
            "classify": "TextMenu",
            "title": "收件人地址",
            "instance": true,
            "tag": "span",
            "updateId": "1636365299772",
            "position": {
              "clientX": 29.5,
              "clientY": 42.5
            },
            "variable": {
              "enable": true,
              "textData": [
                {
                  "value": "收",
                  "key": "",
                  "indexes": 0
                },
                {
                  "value": "件",
                  "key": "",
                  "indexes": 1
                },
                {
                  "value": "人",
                  "key": "",
                  "indexes": 2
                },
                {
                  "value": "地",
                  "key": "",
                  "indexes": 3
                },
                {
                  "value": "址",
                  "key": "",
                  "indexes": 4
                },
                {
                  "value": ":",
                  "key": "",
                  "indexes": 5
                },
                {
                  "value": "${receiver}",
                  "key": "receiver",
                  "indexes": [
                    6,
                    7,
                    8,
                    9,
                    10,
                    11,
                    12,
                    13,
                    14,
                    15,
                    16
                  ]
                }
              ]
            },
            "default": {
              "height": 66,
              "width": 370,
              "x": 29.5,
              "y": 42.5
            },
            "props": {
              "text": "收件人地址:${receiver}",
              "align": "left",
              "fontFamily": "",
              "lineHeight": "",
              "fontSize": "",
              "isBold": false,
              "hasBorder": false
            },
            "id": "kvqeuf0v",
            "rect": {
              "x": 442,
              "y": 273,
              "width": 370,
              "height": 66,
              "top": 273,
              "right": 812,
              "bottom": 339,
              "left": 442
            }
          },
          {
            "type": "TextUi",
            "name": "receiverAddress",
            "classify": "TextMenu",
            "title": "收件人地址",
            "instance": true,
            "tag": "span",
            "updateId": "1636365299777",
            "position": {
              "clientX": 30.5,
              "clientY": 90.5
            },
            "variable": {
              "enable": true,
              "textData": [
                {
                  "value": "收",
                  "key": "",
                  "indexes": 0
                },
                {
                  "value": "件",
                  "key": "",
                  "indexes": 1
                },
                {
                  "value": "人",
                  "key": "",
                  "indexes": 2
                },
                {
                  "value": "地",
                  "key": "",
                  "indexes": 3
                },
                {
                  "value": "址",
                  "key": "",
                  "indexes": 4
                },
                {
                  "value": ":",
                  "key": "",
                  "indexes": 5
                },
                {
                  "value": "${receiver}",
                  "key": "receiver",
                  "indexes": [
                    6,
                    7,
                    8,
                    9,
                    10,
                    11,
                    12,
                    13,
                    14,
                    15,
                    16
                  ]
                }
              ]
            },
            "default": {
              "height": 61,
              "width": 369,
              "x": 30.5,
              "y": 90.5
            },
            "props": {
              "text": "收件人地址:${receiver}",
              "align": "left",
              "fontFamily": "",
              "lineHeight": "",
              "fontSize": "",
              "isBold": false,
              "hasBorder": false
            },
            "id": "kvqeuqji",
            "rect": {
              "x": 443,
              "y": 321,
              "width": 369,
              "height": 61,
              "top": 321,
              "right": 812,
              "bottom": 382,
              "left": 443
            }
          },
          {
            "name": "barCode",
            "type": "BarcodeUi",
            "classify": "BarcodeMenu",
            "instance": true,
            "title": "条形码",
            "tag": "img",
            "updateId": "1636365380958",
            "position": {
              "clientX": 36.5,
              "clientY": 207.5
            },
            "default": {
              "height": 83,
              "width": 234,
              "x": 36.5,
              "y": 207.5
            },
            "variable": {
              "enable": true,
              "textData": [
                {
                  "value": "${barcode}",
                  "key": "barcode",
                  "indexes": [
                    0,
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                  ]
                }
              ]
            },
            "props": {
              "format": "CODE128",
              "lineWidth": 2,
              "bodyHeight": 40,
              "fontSize": 14,
              "displayValue": "1",
              "data": "${barcode}"
            },
            "id": "kvqf6xty",
            "rect": {
              "x": 449,
              "y": 438,
              "width": 234,
              "height": 83,
              "top": 438,
              "right": 683,
              "bottom": 521,
              "left": 449
            }
          },
          {
            "name": "qrCode",
            "type": "QrCodeUi",
            "classify": "QrCodeMenu",
            "title": "二维码",
            "updateId": "1636365299785",
            "tag": "img",
            "instance": true,
            "position": {
              "clientX": 36.5,
              "clientY": 310.5
            },
            "variable": {
              "enable": true,
              "textData": [
                {
                  "value": "${qrcode}",
                  "key": "qrcode",
                  "indexes": [
                    0,
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8
                  ]
                }
              ]
            },
            "default": {
              "height": 150,
              "width": 160,
              "x": 36.5,
              "y": 310.5
            },
            "props": {
              "data": "${qrcode}",
              "options": {
                "margin": 4,
                "width": "",
                "scale": 4,
                "errorCorrectionLevel": "H"
              }
            },
            "id": "kvqf6zt4",
            "rect": {
              "x": 449,
              "y": 541,
              "width": 160,
              "height": 150,
              "top": 541,
              "right": 609,
              "bottom": 691,
              "left": 449
            }
          }
        ],
        "options": {
          "width": 500,
          "height": 500
        }
      },
      variables: {}
    }
  },
  mounted() {
    // 处理特殊类型组件
    this.initSpecialWidget()
  },
  methods: {
    initSpecialWidget() {
      this.template.data.map(item => {
        this.updateImg(item)
      })
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
      let style = {}
      const {props, rect, type} = component
      const {borderWidth, fontSize, align} = props
      if (this.isLine(type)) {
        style.border = borderWidth ? `${borderWidth}px solid #000` : ''
        style.width = rect.width + 'px'
        style.height = rect.height + 'px'
      }
      if (this.isBarcode(type)) {
        style.fontSize = fontSize + 'px'
      }
      if (this.isText(type)) {
        style.textAlign = align
        style.fontSize = fontSize
      }
      return style
    },
    getFields(component) {
      return component.variable.textData.filter(item => item.key).map(item => item.key).join('')
    },
    renderText(component) {
      let result = ''
      if (component.variable.enable) {
        component.variable.textData.map(item => {
          result = result + `<span class="${item.key}">${item.value || item.value}</span>`
        })
      } else {
        result = component.props.text || component.props.data
      }
      return result
    },
    generateWidget(createElement, component) {
      const renderMap = {
        barcode: (create, instance) => this.renderBarcode(create, instance),
        qrcode: (create, instance) => this.renderQrcode(create, instance)
      }[component.name.toLowerCase()]
      const defaultRender = () => {
        const attrs = {
          'data-fields': this.getFields(component)
        }
        return createElement(component.tag, {
          class: `${component.id} ${component.type}`,
          domProps: {innerHTML: this.renderText(component)},
          style: this.getSelfStyle(component),
          attrs
        })
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
      for (let i = 0; i < dom.length; i++) {
        if (value === dom[i].getAttribute(name)) {
          res = dom[i]
        }
      }
      return res
    },
    getComponentByVariables(key) {
      return this.template.data.filter(item => {
        return item.variable.textData.filter(v => v.key === key).length > 0
      })
    },
    setPrintVariables(variables) {
      const setText = (key, value) => {
        const $textDom = document.querySelectorAll('.' + key)
        $textDom.length > 0 && $textDom.forEach(item => {
          item.innerHTML = value
        })
      }
      for (const key in variables) {
        const value = variables[key]
        const component = this.getComponentByVariables(key)
        component.forEach(item => {
          const isImg = item.tag === 'img'
          if (isImg) {
            this.updateImg(item, value)
          }
          setText(key, value)
        })
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
        LODOP.SET_PRINT_MODE("POS_BASEON_PAPER", true);
        LODOP.SET_PRINT_MODE("PRINT_PAGE_PERCENT", "Full-Page");
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
  render(createElement, context) {
    return createElement('div', this.generateBoard(), this.template.data.map(component => {
      return this.generateWidget(createElement, component)
    }))
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
