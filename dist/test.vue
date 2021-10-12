<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      template: JSON.parse('{"data":[{"name":"rectangle","type":"RectangleUi","classify":"RectangleMenu","title":"矩形","tag":"div","instance":true,"updateId":"1633943957983","position":{"clientX":0,"clientY":469},"default":{"height":31,"width":500,"x":0,"y":469},"props":{"borderWidth":1},"id":"kj28lr2m","rect":{"x":329.5,"y":699.5,"width":500,"height":31,"top":699.5,"right":829.5,"bottom":730.5,"left":329.5}},{"name":"customText","type":"TextUi","classify":"TextMenu","title":"自定义文本","instance":true,"tag":"span","updateId":"1633943957987","position":{"clientX":7,"clientY":472.5},"default":{"height":25,"width":489,"x":7,"y":472.5},"props":{"text":"版权声明：某某公司声明","align":"left","fontFamily":"","fontSize":"","lineHeight":"","isBold":false,"hasBorder":false},"id":"kj28m59x","rect":{"x":336.5,"y":703,"width":489,"height":25,"top":703,"right":825.5,"bottom":728,"left":336.5}},{"name":"customText","type":"TextUi","classify":"TextMenu","title":"自定义文本","instance":true,"tag":"span","updateId":"1633943957990","position":{"clientX":235,"clientY":473.5},"default":{"height":23,"width":259,"x":235,"y":473.5},"props":{"text":"Ref:123456789","align":"left","fontFamily":"","fontSize":"","lineHeight":"","isBold":false,"hasBorder":false},"id":"kj28nd6s","rect":{"x":564.5,"y":704,"width":259,"height":23,"top":704,"right":823.5,"bottom":727,"left":564.5}},{"type":"TextUi","name":"receiverAddress","classify":"TextMenu","title":"收件人地址","instance":true,"tag":"span","updateId":"1633943957993","position":{"clientX":14,"clientY":113.5},"default":{"height":34,"width":183,"x":14,"y":113.5},"props":{"text":"收件人：某某某","align":"left","fontFamily":"","lineHeight":"","fontSize":"16px","isBold":false,"hasBorder":false},"id":"kj28nxwt","rect":{"x":343.5,"y":344,"width":183,"height":34,"top":344,"right":526.5,"bottom":378,"left":343.5}},{"type":"TextUi","name":"receiverAddress","classify":"TextMenu","title":"收件人地址","instance":true,"tag":"span","updateId":"1633943957996","position":{"clientX":14,"clientY":150.5},"default":{"height":30,"width":139,"x":14,"y":150.5},"props":{"text":"寄件人：ABC","align":"left","fontFamily":"","lineHeight":"","fontSize":"16px","isBold":false,"hasBorder":false},"id":"kj28oejp","rect":{"x":343.5,"y":381,"width":139,"height":30,"top":381,"right":482.5,"bottom":411,"left":343.5}},{"type":"TextUi","name":"receiverAddress","classify":"TextMenu","title":"收件人地址","instance":true,"tag":"span","updateId":"1633943957999","position":{"clientX":15,"clientY":187.5},"default":{"height":58,"width":236,"x":15,"y":187.5},"props":{"text":"收件地址：某某某某大街，多少多少号","align":"left","fontFamily":"","lineHeight":"","fontSize":"16px","isBold":false,"hasBorder":false},"id":"kj28ofhp","rect":{"x":344.5,"y":418,"width":236,"height":58,"top":418,"right":580.5,"bottom":476,"left":344.5}},{"name":"barCode","type":"BarcodeUi","classify":"BarcodeMenu","instance":true,"title":"条形码","tag":"img","updateId":"1633943958001","position":{"clientX":101,"clientY":363.625},"default":{"height":94.875,"width":295.59375,"x":101,"y":363.625},"props":{"format":"CODE128","lineWidth":2,"bodyHeight":40,"fontSize":14,"displayValue":"1","data":"123456789"},"id":"kj28q5od","rect":{"x":430.5,"y":594.125,"width":295.59375,"height":94.875,"top":594.125,"right":726.09375,"bottom":689,"left":430.5}},{"name":"customText","type":"TextUi","classify":"TextMenu","title":"自定义文本","instance":true,"tag":"span","updateId":"1633943958004","position":{"clientX":134,"clientY":307.5},"default":{"height":39,"width":224,"x":134,"y":307.5},"props":{"text":"CD339045453445","align":"left","fontFamily":"Al Bayan","fontSize":"24px","lineHeight":"","isBold":false,"hasBorder":false},"id":"kj28qf4t","rect":{"x":463.5,"y":538,"width":224,"height":39,"top":538,"right":687.5,"bottom":577,"left":463.5}},{"name":"customText","type":"TextUi","classify":"TextMenu","title":"自定义文本","instance":true,"tag":"span","updateId":"1633943958007","position":{"clientX":396,"clientY":104.5},"default":{"height":25,"width":84,"x":396,"y":104.5},"props":{"text":"扫一扫","align":"center","fontFamily":"","fontSize":"","lineHeight":"","isBold":false,"hasBorder":false},"id":"kj28s2is","rect":{"x":725.5,"y":335,"width":84,"height":25,"top":335,"right":809.5,"bottom":360,"left":725.5}},{"name":"customText","type":"TextUi","classify":"TextMenu","title":"自定义文本","instance":true,"tag":"span","updateId":"1633943958009","position":{"clientX":10,"clientY":50.5},"default":{"height":25,"width":84,"x":10,"y":50.5},"props":{"text":"订单金额：","align":"left","fontFamily":"","fontSize":"","lineHeight":"","isBold":false,"hasBorder":false},"id":"kj28sg3o","rect":{"x":339.5,"y":281,"width":84,"height":25,"top":281,"right":423.5,"bottom":306,"left":339.5}},{"name":"customText","type":"TextUi","classify":"TextMenu","title":"自定义文本","instance":true,"tag":"span","updateId":"1633943958013","position":{"clientX":83,"clientY":37.5},"default":{"height":62,"width":148,"x":83,"y":37.5},"props":{"text":"99999","align":"left","fontFamily":"Al Bayan","fontSize":"30px","lineHeight":"","isBold":true,"hasBorder":false},"id":"kj28ssh1","rect":{"x":412.5,"y":268,"width":148,"height":62,"top":268,"right":560.5,"bottom":330,"left":412.5}},{"name":"customText","type":"TextUi","classify":"TextMenu","title":"自定义文本","instance":true,"tag":"span","updateId":"1633943958017","position":{"clientX":377,"clientY":139.5},"default":{"height":59,"width":120,"x":377,"y":139.5},"props":{"text":"ZH","align":"center","fontFamily":"","fontSize":"30px","lineHeight":"","isBold":true,"hasBorder":false},"id":"kj28tuie","rect":{"x":706.5,"y":370,"width":120,"height":59,"top":370,"right":826.5,"bottom":429,"left":706.5}},{"name":"customText","type":"TextUi","classify":"TextMenu","title":"自定义文本","instance":true,"tag":"span","updateId":"1633943958019","position":{"clientX":387,"clientY":187.5},"default":{"height":25,"width":107,"x":387,"y":187.5},"props":{"text":"Made in China","align":"left","fontFamily":"","fontSize":"","lineHeight":"","isBold":false,"hasBorder":false},"id":"kj28ua85","rect":{"x":716.5,"y":418,"width":107,"height":25,"top":418,"right":823.5,"bottom":443,"left":716.5}},{"name":"qrCode","type":"QrCodeUi","classify":"QrCodeMenu","title":"二维码","updateId":"1633943958023","tag":"img","instance":true,"position":{"clientX":395.5,"clientY":10},"default":{"height":102,"width":96,"x":395.5,"y":10},"props":{"data":"https://www.shixiaoxi.cn","options":{"margin":4,"width":"","scale":5,"errorCorrectionLevel":"H"}},"id":"ku6pwkit","rect":{"x":725,"y":240.5,"width":96,"height":102,"top":240.5,"right":821,"bottom":342.5,"left":725}},{"type":"TextUi","name":"receiverAddress","classify":"TextMenu","title":"收件人地址","instance":true,"tag":"span","updateId":"1633943967923","position":{"clientX":0,"clientY":0},"default":{"height":25,"width":84,"x":0,"y":0},"props":{"text":"收件人地址","align":"left","fontFamily":"","lineHeight":"","fontSize":"","isBold":false,"hasBorder":false},"id":"kumg1r72","rect":{"x":329.5,"y":230.5,"width":84,"height":25,"top":230.5,"right":413.5,"bottom":255.5,"left":329.5}}],"options":{"width":500,"height":500},"scheme":"{}"}')
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
      const { props, rect } = component
      const { borderWidth } = props
      if (this.isLine(component.type)) {
        style.border = borderWidth ? `${borderWidth}px solid #000` : ''
        style.width = rect.width + 'px'
        style.height = rect.height + 'px'
      }
      return style
    },
    generateWidget(createElement, component) {
      const renderMap = {
        barcode: (create, instance) => this.renderBarcode(create, instance),
        qrcode: (create, instance) => this.renderQrcode(create, instance)
      }[component.name.toLowerCase()]
      const defaultRender = () => {
        return createElement(component.tag, {
          class: `${component.id} ${component.type}`,
          domProps: { innerHTML: component.props.text || component.props.data},
          style: this.getSelfStyle(component)
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
            src: 'src'
          }
        })
      ])
    },
    renderBarcode(createElement, component) {
      const $codeValue = createElement('span', {
        class: 'barcode-text',
        domProps: { innerHTML: component.props.text || component.props.data},
        style: this.getSelfStyle(component),
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
          style: this.getSelfStyle(component),
          attrs: {
            src: 'src',
            alt: 'barcode',
            draggable: 'false'
          }
        }),
        component.props.displayValue === '1' && $codeValue
      ])
    },
    print() {
      const app = this.$refs.app
      const options = this.template.options
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
