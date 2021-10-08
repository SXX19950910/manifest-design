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
      template: {
        'name': '快递面单',
        'data': [
          {
            'name': 'rectangle',
            'type': 'RectangleUi',
            'classify': 'RectangleMenu',
            'title': '矩形',
            'tag': 'div',
            'instance': true,
            'updateId': '1632996483092',
            'position': {
              'clientX': 0,
              'clientY': 469
            },
            'default': {
              'height': 31,
              'width': 500,
              'x': 0,
              'y': 469
            },
            'props': {
              'borderWidth': 1
            },
            'id': 'kj28lr2m',
            'rect': {
              'x': 681,
              'y': 671.5,
              'width': 500,
              'height': 31,
              'top': 671.5,
              'right': 1181,
              'bottom': 702.5,
              'left': 681
            }
          },
          {
            'name': 'customText',
            'type': 'TextUi',
            'classify': 'TextMenu',
            'title': '自定义文本',
            'instance': true,
            'tag': 'span',
            'updateId': '1632996483096',
            'position': {
              'clientX': 7,
              'clientY': 472.5
            },
            'default': {
              'height': 25,
              'width': 489,
              'x': 7,
              'y': 472.5
            },
            'props': {
              'text': '版权声明：某某公司声明',
              'align': 'left',
              'fontFamily': '',
              'fontSize': '',
              'lineHeight': '',
              'isBold': false,
              'hasBorder': false
            },
            'id': 'kj28m59x',
            'rect': {
              'x': 688,
              'y': 675,
              'width': 489,
              'height': 25,
              'top': 675,
              'right': 1177,
              'bottom': 700,
              'left': 688
            }
          },
          {
            'name': 'customText',
            'type': 'TextUi',
            'classify': 'TextMenu',
            'title': '自定义文本',
            'instance': true,
            'tag': 'span',
            'updateId': '1632996483098',
            'position': {
              'clientX': 235,
              'clientY': 473.5
            },
            'default': {
              'height': 23,
              'width': 259,
              'x': 235,
              'y': 473.5
            },
            'props': {
              'text': 'Ref:123456789',
              'align': 'left',
              'fontFamily': '',
              'fontSize': '',
              'lineHeight': '',
              'isBold': false,
              'hasBorder': false
            },
            'id': 'kj28nd6s',
            'rect': {
              'x': 916,
              'y': 676,
              'width': 259,
              'height': 23,
              'top': 676,
              'right': 1175,
              'bottom': 699,
              'left': 916
            }
          },
          {
            'type': 'TextUi',
            'name': 'receiverAddress',
            'classify': 'TextMenu',
            'title': '收件人地址',
            'instance': true,
            'tag': 'span',
            'updateId': '1632996483100',
            'position': {
              'clientX': 14,
              'clientY': 113.5
            },
            'default': {
              'height': 34,
              'width': 183,
              'x': 14,
              'y': 113.5
            },
            'props': {
              'text': '收件人：某某某',
              'align': 'left',
              'fontFamily': '',
              'lineHeight': '',
              'fontSize': '16px',
              'isBold': false,
              'hasBorder': false
            },
            'id': 'kj28nxwt',
            'rect': {
              'x': 695,
              'y': 316,
              'width': 183,
              'height': 34,
              'top': 316,
              'right': 878,
              'bottom': 350,
              'left': 695
            }
          },
          {
            'type': 'TextUi',
            'name': 'receiverAddress',
            'classify': 'TextMenu',
            'title': '收件人地址',
            'instance': true,
            'tag': 'span',
            'updateId': '1632996483102',
            'position': {
              'clientX': 14,
              'clientY': 150.5
            },
            'default': {
              'height': 30,
              'width': 139,
              'x': 14,
              'y': 150.5
            },
            'props': {
              'text': '寄件人：ABC',
              'align': 'left',
              'fontFamily': '',
              'lineHeight': '',
              'fontSize': '16px',
              'isBold': false,
              'hasBorder': false
            },
            'id': 'kj28oejp',
            'rect': {
              'x': 695,
              'y': 353,
              'width': 139,
              'height': 30,
              'top': 353,
              'right': 834,
              'bottom': 383,
              'left': 695
            }
          },
          {
            'type': 'TextUi',
            'name': 'receiverAddress',
            'classify': 'TextMenu',
            'title': '收件人地址',
            'instance': true,
            'tag': 'span',
            'updateId': '1632996483104',
            'position': {
              'clientX': 15,
              'clientY': 187.5
            },
            'default': {
              'height': 58,
              'width': 236,
              'x': 15,
              'y': 187.5
            },
            'props': {
              'text': '收件地址：某某某某大街，多少多少号',
              'align': 'left',
              'fontFamily': '',
              'lineHeight': '',
              'fontSize': '16px',
              'isBold': false,
              'hasBorder': false
            },
            'id': 'kj28ofhp',
            'rect': {
              'x': 696,
              'y': 390,
              'width': 236,
              'height': 58,
              'top': 390,
              'right': 932,
              'bottom': 448,
              'left': 696
            }
          },
          {
            'name': 'barCode',
            'type': 'BarcodeUi',
            'classify': 'BarcodeMenu',
            'instance': true,
            'title': '条形码',
            'tag': 'img',
            'updateId': '1632996501232',
            'position': {
              'clientX': 101,
              'clientY': 363.625
            },
            'default': {
              'height': 94.875,
              'width': 295.59375,
              'x': 101,
              'y': 363.625
            },
            'props': {
              'format': 'CODE128',
              'lineWidth': 2,
              'bodyHeight': 40,
              'fontSize': 14,
              'displayValue': '1',
              'data': '123456789'
            },
            'id': 'kj28q5od',
            'rect': {
              'x': 782,
              'y': 566.125,
              'width': 295.59375,
              'height': 94.875,
              'top': 566.125,
              'right': 1077.59375,
              'bottom': 661,
              'left': 782
            }
          },
          {
            'name': 'customText',
            'type': 'TextUi',
            'classify': 'TextMenu',
            'title': '自定义文本',
            'instance': true,
            'tag': 'span',
            'updateId': '1632996483108',
            'position': {
              'clientX': 134,
              'clientY': 307.5
            },
            'default': {
              'height': 39,
              'width': 224,
              'x': 134,
              'y': 307.5
            },
            'props': {
              'text': 'CD339045453445',
              'align': 'left',
              'fontFamily': 'Al Bayan',
              'fontSize': '24px',
              'lineHeight': '',
              'isBold': false,
              'hasBorder': false
            },
            'id': 'kj28qf4t',
            'rect': {
              'x': 815,
              'y': 510,
              'width': 224,
              'height': 39,
              'top': 510,
              'right': 1039,
              'bottom': 549,
              'left': 815
            }
          },
          {
            'name': 'customText',
            'type': 'TextUi',
            'classify': 'TextMenu',
            'title': '自定义文本',
            'instance': true,
            'tag': 'span',
            'updateId': '1632996483110',
            'position': {
              'clientX': 396,
              'clientY': 104.5
            },
            'default': {
              'height': 25,
              'width': 84,
              'x': 396,
              'y': 104.5
            },
            'props': {
              'text': '扫一扫',
              'align': 'center',
              'fontFamily': '',
              'fontSize': '',
              'lineHeight': '',
              'isBold': false,
              'hasBorder': false
            },
            'id': 'kj28s2is',
            'rect': {
              'x': 1077,
              'y': 307,
              'width': 84,
              'height': 25,
              'top': 307,
              'right': 1161,
              'bottom': 332,
              'left': 1077
            }
          },
          {
            'name': 'customText',
            'type': 'TextUi',
            'classify': 'TextMenu',
            'title': '自定义文本',
            'instance': true,
            'tag': 'span',
            'updateId': '1632996483112',
            'position': {
              'clientX': 10,
              'clientY': 50.5
            },
            'default': {
              'height': 25,
              'width': 84,
              'x': 10,
              'y': 50.5
            },
            'props': {
              'text': '订单金额：',
              'align': 'left',
              'fontFamily': '',
              'fontSize': '',
              'lineHeight': '',
              'isBold': false,
              'hasBorder': false
            },
            'id': 'kj28sg3o',
            'rect': {
              'x': 691,
              'y': 253,
              'width': 84,
              'height': 25,
              'top': 253,
              'right': 775,
              'bottom': 278,
              'left': 691
            }
          },
          {
            'name': 'customText',
            'type': 'TextUi',
            'classify': 'TextMenu',
            'title': '自定义文本',
            'instance': true,
            'tag': 'span',
            'updateId': '1632996483114',
            'position': {
              'clientX': 83,
              'clientY': 37.5
            },
            'default': {
              'height': 62,
              'width': 148,
              'x': 83,
              'y': 37.5
            },
            'props': {
              'text': '99999',
              'align': 'left',
              'fontFamily': 'Al Bayan',
              'fontSize': '30px',
              'lineHeight': '',
              'isBold': true,
              'hasBorder': false
            },
            'id': 'kj28ssh1',
            'rect': {
              'x': 764,
              'y': 240,
              'width': 148,
              'height': 62,
              'top': 240,
              'right': 912,
              'bottom': 302,
              'left': 764
            }
          },
          {
            'name': 'customText',
            'type': 'TextUi',
            'classify': 'TextMenu',
            'title': '自定义文本',
            'instance': true,
            'tag': 'span',
            'updateId': '1632996483116',
            'position': {
              'clientX': 377,
              'clientY': 139.5
            },
            'default': {
              'height': 59,
              'width': 120,
              'x': 377,
              'y': 139.5
            },
            'props': {
              'text': 'ZH',
              'align': 'center',
              'fontFamily': '',
              'fontSize': '30px',
              'lineHeight': '',
              'isBold': true,
              'hasBorder': false
            },
            'id': 'kj28tuie',
            'rect': {
              'x': 1058,
              'y': 342,
              'width': 120,
              'height': 59,
              'top': 342,
              'right': 1178,
              'bottom': 401,
              'left': 1058
            }
          },
          {
            'name': 'customText',
            'type': 'TextUi',
            'classify': 'TextMenu',
            'title': '自定义文本',
            'instance': true,
            'tag': 'span',
            'updateId': '1632996499925',
            'position': {
              'clientX': 387,
              'clientY': 187.5
            },
            'default': {
              'height': 25,
              'width': 107,
              'x': 387,
              'y': 187.5
            },
            'props': {
              'text': 'Made in China',
              'align': 'left',
              'fontFamily': '',
              'fontSize': '',
              'lineHeight': '',
              'isBold': false,
              'hasBorder': false
            },
            'id': 'kj28ua85',
            'rect': {
              'x': 1068,
              'y': 390,
              'width': 107,
              'height': 25,
              'top': 390,
              'right': 1175,
              'bottom': 415,
              'left': 1068
            }
          },
          {
            'name': 'qrCode',
            'type': 'QrCodeUi',
            'classify': 'QrCodeMenu',
            'title': '二维码',
            'updateId': '1632996483992',
            'tag': 'img',
            'instance': true,
            'position': {
              'clientX': 395.5,
              'clientY': 10
            },
            'default': {
              'height': 102,
              'width': 96,
              'x': 395.5,
              'y': 10
            },
            'props': {
              'data': 'https://www.shixiaoxi.cn',
              'options': {
                'margin': 4,
                'width': '',
                'scale': 5,
                'errorCorrectionLevel': 'H'
              }
            },
            'id': 'ku6pwkit',
            'rect': {
              'x': 1076.5,
              'y': 212.5,
              'width': 96,
              'height': 102,
              'top': 212.5,
              'right': 1172.5,
              'bottom': 314.5,
              'left': 1076.5
            }
          }
        ]
      },
      options: '{"width":500,"height":500}',
      style: '.canvas-wrapper {\n  background-color: white;\n  border-radius: 2px;\n  position: absolute;\n  margin: 0 auto;\n  box-shadow: 0 0 10px rgba(0, 21, 41, 0.08);\n}\n\n.barcode-wrap {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    justify-content: center;\n}\n.barcode {\n      max-width: 100%;\n      vertical-align: middle;\n      user-select: none;\n}\n.barcode-text {\n      font-size: 20px;\n      font-weight: normal;\n}\n.item {\n    display: none;\n}\n.view-wrapper {\n    width: 100% !important;\n    height: 100% !important;\n}\n.border-canvas {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n.drag-warp {\n    position: absolute;\n    cursor: pointer;\n    border: 1px solid transparent;\n    color: #000;\n    border-radius: 2px;\n    max-width: 100%;\n    max-height: 100%;\n    overflow: hidden;\n    transition: background-color ease .36s;\n}\n\n.text-component .detail {\n    display: inline-block;\n    font-weight: normal;\n    word-break: break-all;\n    word-wrap: break-word;\n    border: 1px solid transparent;\n}'
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
      // console.log(component.props)
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
      return createElement('div',
          {
            attrs: {
              id: component.id,
            },
            class: 'component',
            style: this.getContainerStyle(component),
          },
          [
            createElement(component.tag, {
              class: `${component.id} ${component.type}`,
              domProps: { innerHTML: component.props.text || component.props.data},
              style: this.getSelfStyle(component)
            })
          ]
      )
    },
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
    },
    generateBoard() {
      const board = JSON.parse(this.options)
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
