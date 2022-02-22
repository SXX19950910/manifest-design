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
      template: JSON.parse('{"data":[{"name":"customText","type":"TextUi","classify":"TextMenu","title":"自定义文本","instance":true,"tag":"span","updateId":"1637572247021","position":{"clientX":0,"clientY":0},"variable":{"enable":false,"textData":[{"value":"使","key":"","indexes":0},{"value":"用","key":"","indexes":1},{"value":"手","key":"","indexes":2},{"value":"册","key":"","indexes":3}]},"default":{"height":65,"width":600,"x":0,"y":0},"props":{"text":"使用手册","align":"center","fontFamily":"","fontSize":"30px","lineHeight":"2.5","isBold":false,"hasBorder":false},"id":"kvqhuc2e","rect":{"x":399,"y":152.5,"width":600,"height":65,"top":152.5,"right":999,"bottom":217.5,"left":399}},{"name":"customText","type":"TextUi","classify":"TextMenu","title":"自定义文本","instance":true,"tag":"span","updateId":"1637572247025","position":{"clientX":26.5,"clientY":107.5},"variable":{"enable":false,"textData":[{"value":"1","key":"","indexes":0},{"value":".","key":"","indexes":1},{"value":"创","key":"","indexes":2},{"value":"建","key":"","indexes":3},{"value":"模","key":"","indexes":4},{"value":"板","key":"","indexes":5},{"value":"，","key":"","indexes":6},{"value":"将","key":"","indexes":7},{"value":"右","key":"","indexes":8},{"value":"侧","key":"","indexes":9},{"value":"组","key":"","indexes":10},{"value":"件","key":"","indexes":11},{"value":"拖","key":"","indexes":12},{"value":"入","key":"","indexes":13},{"value":"页","key":"","indexes":14},{"value":"面","key":"","indexes":15},{"value":"中","key":"","indexes":16},{"value":"间","key":"","indexes":17},{"value":"画","key":"","indexes":18},{"value":"板","key":"","indexes":19},{"value":"，","key":"","indexes":20},{"value":"即","key":"","indexes":21},{"value":"可","key":"","indexes":22},{"value":"创","key":"","indexes":23},{"value":"建","key":"","indexes":24},{"value":"打","key":"","indexes":25},{"value":"印","key":"","indexes":26},{"value":"元","key":"","indexes":27},{"value":"素","key":"","indexes":28},{"value":"。","key":"","indexes":29}]},"default":{"height":36,"width":509,"x":26.5,"y":107.5},"props":{"text":"1.创建模板，将右侧组件拖入页面中间画板，即可创建打印元素。","align":"left","fontFamily":"","fontSize":"16px","lineHeight":"","isBold":false,"hasBorder":false},"id":"kvqhxahl","rect":{"x":425.5,"y":260,"width":509,"height":36,"top":260,"right":934.5,"bottom":296,"left":425.5}},{"name":"customText","type":"TextUi","classify":"TextMenu","title":"自定义文本","instance":true,"tag":"span","updateId":"1637572247033","position":{"clientX":26.5,"clientY":148.5},"variable":{"enable":true,"textData":[{"value":"2","key":"","indexes":0},{"value":".","key":"","indexes":1},{"value":"支","key":"","indexes":2},{"value":"持","key":"","indexes":3},{"value":"插","key":"","indexes":4},{"value":"入","key":"","indexes":5},{"value":"模","key":"","indexes":6},{"value":"板","key":"","indexes":7},{"value":"变","key":"","indexes":8},{"value":"量","key":"","indexes":9},{"value":"功","key":"","indexes":10},{"value":"能","key":"","indexes":11},{"value":"，","key":"","indexes":12},{"value":"例","key":"","indexes":13},{"value":"如","key":"","indexes":14},{"value":"：","key":"","indexes":15},{"value":"${var}","key":"var","indexes":[16,17,18,19,20,21]}]},"default":{"height":52,"width":466,"x":26.5,"y":148.5},"props":{"text":"2.支持插入模板变量功能，例如：${var}","align":"left","fontFamily":"","fontSize":"16px","lineHeight":"","isBold":false,"hasBorder":false},"id":"kvqhzn31","rect":{"x":425.5,"y":301,"width":466,"height":52,"top":301,"right":891.5,"bottom":353,"left":425.5}},{"name":"customText","type":"TextUi","classify":"TextMenu","title":"自定义文本","instance":true,"tag":"span","updateId":"1637572247035","position":{"clientX":26.5,"clientY":193.5},"variable":{"enable":false,"textData":[{"value":"3","key":"","indexes":0},{"value":".","key":"","indexes":1},{"value":"设","key":"","indexes":2},{"value":"计","key":"","indexes":3},{"value":"好","key":"","indexes":4},{"value":"模","key":"","indexes":5},{"value":"板","key":"","indexes":6},{"value":"后","key":"","indexes":7},{"value":"，","key":"","indexes":8},{"value":"可","key":"","indexes":9},{"value":"以","key":"","indexes":10},{"value":"保","key":"","indexes":11},{"value":"存","key":"","indexes":12},{"value":"为","key":"","indexes":13},{"value":"图","key":"","indexes":14},{"value":"片","key":"","indexes":15},{"value":"进","key":"","indexes":16},{"value":"行","key":"","indexes":17},{"value":"打","key":"","indexes":18},{"value":"印","key":"","indexes":19},{"value":"，","key":"","indexes":20},{"value":"也","key":"","indexes":21},{"value":"可","key":"","indexes":22},{"value":"以","key":"","indexes":23},{"value":"点","key":"","indexes":24},{"value":"击","key":"","indexes":25},{"value":"上","key":"","indexes":26},{"value":"方","key":"","indexes":27},{"value":"”","key":"","indexes":28},{"value":"生","key":"","indexes":29},{"value":"成","key":"","indexes":30},{"value":"v","key":"","indexes":31},{"value":"u","key":"","indexes":32},{"value":"e","key":"","indexes":33},{"value":"模","key":"","indexes":34},{"value":"板","key":"","indexes":35},{"value":"组","key":"","indexes":36},{"value":"件","key":"","indexes":37},{"value":"，","key":"","indexes":38},{"value":"按","key":"","indexes":39},{"value":"钮","key":"","indexes":40},{"value":"，","key":"","indexes":41},{"value":"将","key":"","indexes":42},{"value":"模","key":"","indexes":43},{"value":"板","key":"","indexes":44},{"value":"下","key":"","indexes":45},{"value":"载","key":"","indexes":46},{"value":"至","key":"","indexes":47},{"value":"本","key":"","indexes":48},{"value":"地","key":"","indexes":49},{"value":"，","key":"","indexes":50},{"value":"后","key":"","indexes":51},{"value":"续","key":"","indexes":52},{"value":"可","key":"","indexes":53},{"value":"以","key":"","indexes":54},{"value":"通","key":"","indexes":55},{"value":"过","key":"","indexes":56},{"value":"组","key":"","indexes":57},{"value":"件","key":"","indexes":58},{"value":"的","key":"","indexes":59},{"value":"形","key":"","indexes":60},{"value":"式","key":"","indexes":61},{"value":"使","key":"","indexes":62},{"value":"用","key":"","indexes":63},{"value":"该","key":"","indexes":64},{"value":"打","key":"","indexes":65},{"value":"印","key":"","indexes":66},{"value":"模","key":"","indexes":67},{"value":"板","key":"","indexes":68},{"value":"。","key":"","indexes":69}]},"default":{"height":76,"width":542,"x":26.5,"y":193.5},"props":{"text":"3.设计好模板后，可以保存为图片进行打印，也可以点击上方”生成vue模板组件，按钮，将模板下载至本地，后续可以通过组件的形式使用该打印模板。","align":"left","fontFamily":"","fontSize":"16px","lineHeight":"","isBold":false,"hasBorder":false},"id":"kvqi18pd","rect":{"x":425.5,"y":346,"width":542,"height":76,"top":346,"right":967.5,"bottom":422,"left":425.5}},{"name":"customText","type":"TextUi","classify":"TextMenu","title":"自定义文本","instance":true,"tag":"span","updateId":"1637572247039","position":{"clientX":26.5,"clientY":284.5},"variable":{"enable":false,"textData":[{"value":"4","key":"","indexes":0},{"value":".","key":"","indexes":1},{"value":"组","key":"","indexes":2},{"value":"件","key":"","indexes":3},{"value":"形","key":"","indexes":4},{"value":"式","key":"","indexes":5},{"value":"调","key":"","indexes":6},{"value":"用","key":"","indexes":7},{"value":"打","key":"","indexes":8},{"value":"印","key":"","indexes":9},{"value":"方","key":"","indexes":10},{"value":"式","key":"","indexes":11},{"value":"：","key":"","indexes":12},{"value":"t","key":"","indexes":13},{"value":"h","key":"","indexes":14},{"value":"i","key":"","indexes":15},{"value":"s","key":"","indexes":16},{"value":".","key":"","indexes":17},{"value":"$","key":"","indexes":18},{"value":"r","key":"","indexes":19},{"value":"e","key":"","indexes":20},{"value":"f","key":"","indexes":21},{"value":"s","key":"","indexes":22},{"value":".","key":"","indexes":23},{"value":"t","key":"","indexes":24},{"value":"e","key":"","indexes":25},{"value":"m","key":"","indexes":26},{"value":"p","key":"","indexes":27},{"value":"l","key":"","indexes":28},{"value":"a","key":"","indexes":29},{"value":"t","key":"","indexes":30},{"value":"e","key":"","indexes":31},{"value":".","key":"","indexes":32},{"value":"p","key":"","indexes":33},{"value":"r","key":"","indexes":34},{"value":"i","key":"","indexes":35},{"value":"n","key":"","indexes":36},{"value":"t","key":"","indexes":37},{"value":"(","key":"","indexes":38},{"value":"{","key":"","indexes":39},{"value":"\\n","key":"","indexes":40},{"value":" ","key":"","indexes":41},{"value":" ","key":"","indexes":42},{"value":" ","key":"","indexes":43},{"value":" ","key":"","indexes":44},{"value":" ","key":"","indexes":45},{"value":" ","key":"","indexes":46},{"value":" ","key":"","indexes":47},{"value":" ","key":"","indexes":48},{"value":"v","key":"","indexes":49},{"value":"a","key":"","indexes":50},{"value":"r","key":"","indexes":51},{"value":"i","key":"","indexes":52},{"value":"a","key":"","indexes":53},{"value":"b","key":"","indexes":54},{"value":"l","key":"","indexes":55},{"value":"e","key":"","indexes":56},{"value":"s","key":"","indexes":57},{"value":":","key":"","indexes":58},{"value":" ","key":"","indexes":59},{"value":"{","key":"","indexes":60},{"value":"\\n","key":"","indexes":61},{"value":" ","key":"","indexes":62},{"value":" ","key":"","indexes":63},{"value":" ","key":"","indexes":64},{"value":" ","key":"","indexes":65},{"value":" ","key":"","indexes":66},{"value":" ","key":"","indexes":67},{"value":" ","key":"","indexes":68},{"value":" ","key":"","indexes":69},{"value":" ","key":"","indexes":70},{"value":" ","key":"","indexes":71},{"value":"r","key":"","indexes":72},{"value":"e","key":"","indexes":73},{"value":"c","key":"","indexes":74},{"value":"e","key":"","indexes":75},{"value":"i","key":"","indexes":76},{"value":"v","key":"","indexes":77},{"value":"e","key":"","indexes":78},{"value":"r","key":"","indexes":79},{"value":"A","key":"","indexes":80},{"value":"d","key":"","indexes":81},{"value":"d","key":"","indexes":82},{"value":"r","key":"","indexes":83},{"value":"e","key":"","indexes":84},{"value":"s","key":"","indexes":85},{"value":"s","key":"","indexes":86},{"value":":","key":"","indexes":87},{"value":" ","key":"","indexes":88},{"value":"\'","key":"","indexes":89},{"value":"v","key":"","indexes":90},{"value":"a","key":"","indexes":91},{"value":"l","key":"","indexes":92},{"value":"u","key":"","indexes":93},{"value":"e","key":"","indexes":94},{"value":"1","key":"","indexes":95},{"value":"\'","key":"","indexes":96},{"value":",","key":"","indexes":97},{"value":"\\n","key":"","indexes":98},{"value":" ","key":"","indexes":99},{"value":" ","key":"","indexes":100},{"value":" ","key":"","indexes":101},{"value":" ","key":"","indexes":102},{"value":" ","key":"","indexes":103},{"value":" ","key":"","indexes":104},{"value":" ","key":"","indexes":105},{"value":" ","key":"","indexes":106},{"value":" ","key":"","indexes":107},{"value":" ","key":"","indexes":108},{"value":"b","key":"","indexes":109},{"value":"a","key":"","indexes":110},{"value":"r","key":"","indexes":111},{"value":"c","key":"","indexes":112},{"value":"o","key":"","indexes":113},{"value":"d","key":"","indexes":114},{"value":"e","key":"","indexes":115},{"value":"V","key":"","indexes":116},{"value":"a","key":"","indexes":117},{"value":"l","key":"","indexes":118},{"value":"u","key":"","indexes":119},{"value":"e","key":"","indexes":120},{"value":":","key":"","indexes":121},{"value":" ","key":"","indexes":122},{"value":"\'","key":"","indexes":123},{"value":"v","key":"","indexes":124},{"value":"a","key":"","indexes":125},{"value":"l","key":"","indexes":126},{"value":"u","key":"","indexes":127},{"value":"e","key":"","indexes":128},{"value":"2","key":"","indexes":129},{"value":"\'","key":"","indexes":130},{"value":",","key":"","indexes":131},{"value":"\\n","key":"","indexes":132},{"value":" ","key":"","indexes":133},{"value":" ","key":"","indexes":134},{"value":" ","key":"","indexes":135},{"value":" ","key":"","indexes":136},{"value":" ","key":"","indexes":137},{"value":" ","key":"","indexes":138},{"value":" ","key":"","indexes":139},{"value":" ","key":"","indexes":140},{"value":" ","key":"","indexes":141},{"value":" ","key":"","indexes":142},{"value":"q","key":"","indexes":143},{"value":"r","key":"","indexes":144},{"value":"c","key":"","indexes":145},{"value":"o","key":"","indexes":146},{"value":"d","key":"","indexes":147},{"value":"e","key":"","indexes":148},{"value":"V","key":"","indexes":149},{"value":"a","key":"","indexes":150},{"value":"l","key":"","indexes":151},{"value":"u","key":"","indexes":152},{"value":"e","key":"","indexes":153},{"value":":","key":"","indexes":154},{"value":" ","key":"","indexes":155},{"value":"\'","key":"","indexes":156},{"value":"v","key":"","indexes":157},{"value":"a","key":"","indexes":158},{"value":"l","key":"","indexes":159},{"value":"u","key":"","indexes":160},{"value":"e","key":"","indexes":161},{"value":"3","key":"","indexes":162},{"value":"\'","key":"","indexes":163},{"value":"\\n","key":"","indexes":164},{"value":" ","key":"","indexes":165},{"value":" ","key":"","indexes":166},{"value":" ","key":"","indexes":167},{"value":" ","key":"","indexes":168},{"value":" ","key":"","indexes":169},{"value":" ","key":"","indexes":170},{"value":" ","key":"","indexes":171},{"value":" ","key":"","indexes":172},{"value":"}","key":"","indexes":173},{"value":"\\n","key":"","indexes":174},{"value":" ","key":"","indexes":175},{"value":" ","key":"","indexes":176},{"value":" ","key":"","indexes":177},{"value":" ","key":"","indexes":178},{"value":" ","key":"","indexes":179},{"value":" ","key":"","indexes":180},{"value":"}","key":"","indexes":181},{"value":")","key":"","indexes":182},{"value":",","key":"","indexes":183},{"value":" ","key":"","indexes":184},{"value":"调","key":"","indexes":185},{"value":"用","key":"","indexes":186},{"value":"t","key":"","indexes":187},{"value":"e","key":"","indexes":188},{"value":"m","key":"","indexes":189},{"value":"p","key":"","indexes":190},{"value":"l","key":"","indexes":191},{"value":"a","key":"","indexes":192},{"value":"t","key":"","indexes":193},{"value":"e","key":"","indexes":194},{"value":"的","key":"","indexes":195},{"value":"p","key":"","indexes":196},{"value":"r","key":"","indexes":197},{"value":"i","key":"","indexes":198},{"value":"n","key":"","indexes":199},{"value":"t","key":"","indexes":200},{"value":"方","key":"","indexes":201},{"value":"法","key":"","indexes":202},{"value":"，","key":"","indexes":203},{"value":"然","key":"","indexes":204},{"value":"后","key":"","indexes":205},{"value":"传","key":"","indexes":206},{"value":"入","key":"","indexes":207},{"value":"v","key":"","indexes":208},{"value":"a","key":"","indexes":209},{"value":"r","key":"","indexes":210},{"value":"i","key":"","indexes":211},{"value":"a","key":"","indexes":212},{"value":"b","key":"","indexes":213},{"value":"l","key":"","indexes":214},{"value":"e","key":"","indexes":215},{"value":"s","key":"","indexes":216},{"value":"变","key":"","indexes":217},{"value":"量","key":"","indexes":218},{"value":"即","key":"","indexes":219},{"value":"可","key":"","indexes":220},{"value":"，","key":"","indexes":221},{"value":"注","key":"","indexes":222},{"value":"意","key":"","indexes":223},{"value":"v","key":"","indexes":224},{"value":"a","key":"","indexes":225},{"value":"r","key":"","indexes":226},{"value":"i","key":"","indexes":227},{"value":"a","key":"","indexes":228},{"value":"b","key":"","indexes":229},{"value":"l","key":"","indexes":230},{"value":"e","key":"","indexes":231},{"value":"s","key":"","indexes":232},{"value":"对","key":"","indexes":233},{"value":"象","key":"","indexes":234},{"value":"的","key":"","indexes":235},{"value":"k","key":"","indexes":236},{"value":"e","key":"","indexes":237},{"value":"y","key":"","indexes":238},{"value":"要","key":"","indexes":239},{"value":"和","key":"","indexes":240},{"value":"模","key":"","indexes":241},{"value":"板","key":"","indexes":242},{"value":"中","key":"","indexes":243},{"value":"的","key":"","indexes":244},{"value":"变","key":"","indexes":245},{"value":"量","key":"","indexes":246},{"value":"名","key":"","indexes":247},{"value":"称","key":"","indexes":248},{"value":"一","key":"","indexes":249},{"value":"一","key":"","indexes":250},{"value":"对","key":"","indexes":251},{"value":"应","key":"","indexes":252},{"value":"。","key":"","indexes":253}]},"default":{"height":96,"width":554,"x":26.5,"y":284.5},"props":{"text":"4.组件形式调用打印方式：this.$refs.template.print({\\n        variables: {\\n          receiverAddress: \'value1\',\\n          barcodeValue: \'value2\',\\n          qrcodeValue: \'value3\'\\n        }\\n      }), 调用template的print方法，然后传入variables变量即可，注意variables对象的key要和模板中的变量名称一一对应。","align":"left","fontFamily":"","fontSize":"16px","lineHeight":"","isBold":false,"hasBorder":false},"id":"kvqi9lnu","rect":{"x":425.5,"y":437,"width":554,"height":96,"top":437,"right":979.5,"bottom":533,"left":425.5}},{"name":"barCode","type":"BarcodeUi","classify":"BarcodeMenu","instance":true,"title":"条形码","tag":"img","updateId":"1637572247045","position":{"clientX":252,"clientY":501},"default":{"height":83,"width":234,"x":252,"y":501},"variable":{"enable":true,"textData":[{"value":"1","key":"","indexes":0},{"value":"2","key":"","indexes":1},{"value":"3","key":"","indexes":2},{"value":"4","key":"","indexes":3},{"value":"5","key":"","indexes":4},{"value":"6","key":"","indexes":5},{"value":"7","key":"","indexes":6},{"value":"8","key":"","indexes":7},{"value":"9","key":"","indexes":8},{"value":"${barcode}","key":"barcode","indexes":[9,10,11,12,13,14,15,16,17,18]}]},"props":{"format":"CODE128","lineWidth":2,"bodyHeight":40,"fontSize":14,"displayValue":"1","data":"123456789${barcode}"},"id":"kvqiek3l","rect":{"x":651,"y":653.5,"width":234,"height":83,"top":653.5,"right":885,"bottom":736.5,"left":651}},{"name":"qrCode","type":"QrCodeUi","classify":"QrCodeMenu","title":"二维码","updateId":"1637572247057","tag":"img","instance":true,"position":{"clientX":497,"clientY":492},"variable":{"enable":false,"textData":[]},"default":{"height":108,"width":103,"x":497,"y":492},"props":{"data":"https://shixiaoxi.cn/","options":{"margin":4,"width":"","scale":4,"errorCorrectionLevel":"H"}},"id":"kvqif0ub","rect":{"x":896,"y":644.5,"width":103,"height":108,"top":644.5,"right":999,"bottom":752.5,"left":896}},{"name":"xLine","type":"XLineUi","classify":"LineMenu","instance":true,"title":"横线","tag":"div","updateId":"1637572247049","position":{"clientX":1,"clientY":418.5},"default":{"height":1,"width":599,"x":1,"y":418.5},"props":{"width":80,"height":1,"lineType":"solid"},"id":"kvqigdat","rect":{"x":400,"y":571,"width":599,"height":1,"top":571,"right":999,"bottom":572,"left":400}},{"name":"xLine","type":"XLineUi","classify":"LineMenu","instance":true,"title":"横线","tag":"div","updateId":"1637572247052","position":{"clientX":245.5,"clientY":460.5},"default":{"height":1,"width":354,"x":245.5,"y":460.5},"props":{"width":80,"height":1,"lineType":"solid"},"id":"kvqigmhq","rect":{"x":644.5,"y":613,"width":354,"height":1,"top":613,"right":998.5,"bottom":614,"left":644.5}},{"name":"yLine","type":"YLineUi","classify":"LineMenu","title":"竖线","updateId":"1637572247055","tag":"div","instance":true,"position":{"clientX":244.5,"clientY":460.5},"default":{"height":139,"width":1,"x":244.5,"y":460.5},"props":{"height":60,"width":1},"id":"kvqigubr","rect":{"x":643.5,"y":613,"width":1,"height":139,"top":613,"right":644.5,"bottom":752,"left":643.5}},{"name":"rectangle","type":"RectangleUi","classify":"RectangleMenu","title":"矩形","tag":"div","instance":true,"updateId":"1637572268519","position":{"clientX":8,"clientY":429.5},"default":{"height":170,"width":187,"x":8,"y":429.5},"props":{"borderWidth":1,"lineType":"solid"},"id":"kwag8sye","rect":{"x":407,"y":582,"width":187,"height":170,"top":582,"right":594,"bottom":752,"left":407}}],"options":{"width":600,"height":600},"scheme":"{}"}'),
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
        if (variables.hasOwn(key)) {
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
