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
      template: JSON.parse('{"data":[{"type":"TextUi","name":"receiverAddress","classify":"TextMenu","title":"收件人地址","instance":true,"tag":"span","updateId":"1634024748451","position":{"clientX":124.5,"clientY":69.5},"variable":{"enable":true,"textData":[{"value":"收","key":"","indexes":0},{"value":"件","key":"","indexes":1},{"value":"人","key":"","indexes":2},{"value":"地","key":"","indexes":3},{"value":"址","key":"","indexes":4},{"value":"${receiverAddress}","key":"receiverAddress","indexes":[5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]}]},"default":{"height":72,"width":244,"x":124.5,"y":69.5},"props":{"text":"收件人地址${receiverAddress}","align":"left","fontFamily":"","lineHeight":"","fontSize":"","isBold":false,"hasBorder":false},"id":"kuns50ba","rect":{"x":440,"y":300,"width":244,"height":72,"top":300,"right":684,"bottom":372,"left":440}},{"type":"TextUi","name":"receiverAddress","classify":"TextMenu","title":"收件人地址","instance":true,"tag":"span","updateId":"1634024760756","position":{"clientX":123.5,"clientY":138.5},"variable":{"enable":false,"textData":[{"value":"收","key":"","indexes":0},{"value":"件","key":"","indexes":1},{"value":"人","key":"","indexes":2},{"value":"地","key":"","indexes":3},{"value":"址","key":"","indexes":4},{"value":",","key":"","indexes":5},{"value":"没","key":"","indexes":6},{"value":"有","key":"","indexes":7},{"value":"变","key":"","indexes":8},{"value":"量","key":"","indexes":9}]},"default":{"height":67,"width":316,"x":123.5,"y":138.5},"props":{"text":"收件人地址,没有变量","align":"left","fontFamily":"","lineHeight":"","fontSize":"","isBold":false,"hasBorder":false},"id":"kuns5b88","rect":{"x":439,"y":369,"width":316,"height":67,"top":369,"right":755,"bottom":436,"left":439}},{"name":"barCode","type":"BarcodeUi","classify":"BarcodeMenu","instance":true,"title":"条形码","tag":"img","updateId":"1634024777869","position":{"clientX":27.5,"clientY":373.5},"default":{"height":83,"width":234,"x":27.5,"y":373.5},"variable":{"enable":true,"textData":[{"value":"${qrcodeValue}","key":"qrcodeValue","indexes":[0,1,2,3,4,5,6,7,8,9,10,11,12,13]}]},"props":{"format":"CODE128","lineWidth":2,"bodyHeight":40,"fontSize":14,"displayValue":"1","data":"${qrcodeValue}"},"id":"kuns5hcq","rect":{"x":343,"y":604,"width":234,"height":83,"top":604,"right":577,"bottom":687,"left":343}},{"name":"qrCode","type":"QrCodeUi","classify":"QrCodeMenu","title":"二维码","updateId":"1634024793816","tag":"img","instance":true,"position":{"clientX":125.5,"clientY":181.5},"variable":{"enable":true,"textData":[{"value":"${barcodeValue}","key":"barcodeValue","indexes":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]}]},"default":{"height":169,"width":157,"x":125.5,"y":181.5},"props":{"data":"${barcodeValue}","options":{"margin":4,"width":"","scale":4,"errorCorrectionLevel":"H"}},"id":"kuns5w9f","rect":{"x":441,"y":412,"width":157,"height":169,"top":412,"right":598,"bottom":581,"left":441}}],"options":{"width":500,"height":500},"scheme":"{}"}'),
      variables: {}
    }
  },
  mounted() {
    // 处理特殊类型组件
    this.template.data.map(item => {
      const isQrcode = this.isQrcode(item.type)
      const isBarcode = this.isBarcode(item.type)
      if (isQrcode) {
        this.updateQrcode(item.id , item.props.data, item.props.options)
      } else if (isBarcode) {
        this.updateBarcode(item.id, item.props.data, item.props)
      }
    })
  },
  methods: {
    updateBarcode(className, data, options) {
      try {
        const barcode = require('jsbarcode')
        const { bodyHeight, lineWidth, format, data } = options;
        barcode(`.${className}`, data, {
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
      const { props = {}, position, rect, type } = component
      const { fontSize, fontFamily, lineHeight, align, isBold } = props
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
      const { props, rect, type } = component
      const { borderWidth, fontSize, align } = props
      if (this.isLine(type)) {
        style.border = borderWidth ? `${borderWidth}px solid #000` : ''
        style.width = rect.width + 'px'
        style.height = rect.height + 'px'
      }
      if (this.isBarcode(type)) {
        style.fontSize = fontSize + 'px'
      }
      console.log(type)
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
          console.log(item.key)
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
          domProps: { innerHTML: this.renderText(component)},
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
        domProps: { innerHTML: this.renderText(component)},
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
          style: Object.assign(this.getSelfStyle(component), { width: '100%' }),
          attrs: {
            src: 'src',
            alt: 'barcode',
            draggable: 'false',
            'data-fields': fields
          }
        }),
        component.props.displayValue === '1' && $codeValue
      ])
    },
    getElementByAttr(tag, name, value) {
      let res
      const dom = document.getElementsByTagName(tag);
      for (let i = 0; i < dom.length; i++) {
        if(value === dom[i].getAttribute(name)){
          res = dom[i]
        }
      }
      return res
    },
    setPrintVariables(variables) {
      for (const key in variables) {
        const $imgDom = this.getElementByAttr('img', 'data-fields', key)
        if ($imgDom) {
          console.log($imgDom)
          // this.updateQrcode()
          // this.updateQrcode()
        }
        const $textDom = document.querySelector('.' + key)
        if ($textDom) {
          $textDom.innerHTML = variables[key]
        }
      }
    },
    print(config = {}) {
      const app = this.$refs.app
      const options = this.template.options
      const printOptions = Object.assign({
        isPreview: true,
        count: 1,
        variables: {
        }
      }, config)
      this.setPrintVariables(printOptions.variables)
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
