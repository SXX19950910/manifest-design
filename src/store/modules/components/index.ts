import barcode from 'jsbarcode';
import Vue from 'vue'
// @ts-ignore
import _ from 'lodash';
import { Notification } from 'element-ui'
// @ts-ignore
import { debounce, throttle } from 'throttle-debounce'
const defaultTemplate = [{
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
}]
const localTemplate: any = localStorage.getItem('templateList') || JSON.stringify(defaultTemplate)
const generateId = () => {
  return Number(Math.random().toString().substr(3, length) + Date.now()).toString(36);
}
const remove = (list: [], prop: string, value: any) => {
  list.map((item: any, index: number) => {
    if (item[prop] === value) {
      list.splice(index, 1)
    }
  })
}
const components = {
  namespaced: true,
  state: {
    activeComponent: '',
    selected: {
      instance: [],
      ids: []
    },
    line: {
      top: '',
      left: ''
    },
    componentMap: {
      senderAddress: {
        name: 'senderAddress',
        type: 'TextUi',
        classify: 'TextMenu',
        title: '寄件人地址',
        updateId: '',
        instance: false,
        tag: 'span',
        position: {
          clientX: '',
          clientY: '',
        },
        default: {
          width: '',
          height: '',
          x: '',
          y: '',
        },
        props: {
          text: '发件人地址',
          align: 'left',
          fontFamily: '',
          lineHeight: '',
          fontSize: '',
          isBold: false,
          hasBorder: false,
        },
      },
      receiverAddress: {
        type: 'TextUi',
        name: 'receiverAddress',
        classify: 'TextMenu',
        title: '收件人地址',
        instance: false,
        tag: 'span',
        updateId: '',
        position: {
          clientX: '',
          clientY: '',
        },
        default: {
          width: '',
          height: '',
          x: '',
          y: '',
        },
        props: {
          text: '收件人地址',
          align: 'left',
          fontFamily: '',
          lineHeight: '',
          fontSize: '',
          isBold: false,
          hasBorder: false,
        },
      },
      barcode: {
        name: 'barCode',
        type: 'BarcodeUi',
        classify: 'BarcodeMenu',
        instance: false,
        title: '条形码',
        tag: 'img',
        updateId: '',
        position: {
          clientX: '',
          clientY: '',
        },
        default: {
          width: '',
          height: '',
          x: '',
          y: '',
        },
        props: {
          format: 'CODE128',
          lineWidth: 2,
          bodyHeight: 40,
          fontSize: 14,
          displayValue: '1',
          data: '123456789',
        },
      },
      xLine: {
        name: 'xLine',
        type: 'XLineUi',
        classify: 'LineMenu',
        instance: false,
        title: '横线',
        tag: 'div',
        updateId: '',
        position: {
          clientX: '',
          clientY: '',
        },
        default: {
          width: 80,
          height: 1,
          x: '',
          y: '',
        },
        props: {
          width: 80,
          height: 1,
          lineType: 'solid'
        },
      },
      yLine: {
        name: 'yLine',
        type: 'YLineUi',
        classify: 'LineMenu',
        title: '竖线',
        updateId: '',
        tag: 'div',
        instance: false,
        position: {
          clientX: '',
          clientY: '',
        },
        default: {
          width: '',
          height: 60,
          x: '',
          y: '',
        },
        props: {
          height: 60,
          width: 1,
        },
      },
      rectangle: {
        name: 'rectangle',
        type: 'RectangleUi',
        classify: 'RectangleMenu',
        title: '矩形',
        tag: 'div',
        instance: false,
        updateId: '',
        position: {
          clientX: '',
          clientY: '',
        },
        default: {
          width: '',
          height: '',
          x: '',
          y: '',
        },
        props: {
          borderWidth: 1,
          lineType: 'solid'
        },
      },
      qrCode: {
        name: 'qrCode',
        type: 'QrCodeUi',
        classify: 'QrCodeMenu',
        title: '二维码',
        updateId: '',
        tag: 'img',
        instance: false,
        position: {
          clientX: '',
          clientY: '',
        },
        default: {
          width: '',
          height: '',
          x: '',
          y: '',
        },
        props: {
          data: 'https://shixiaoxi.cn/',
          options: {
            margin: 4,
            width: '',
            scale: 4,
            errorCorrectionLevel: 'H'
          }
        },
      },
      customText: {
        name: 'customText',
        type: 'TextUi',
        classify: 'TextMenu',
        title: '自定义文本',
        instance: false,
        tag: 'span',
        updateId: '',
        position: {
          clientX: '',
          clientY: '',
        },
        default: {
          width: '',
          height: '',
          x: '',
          y: '',
        },
        props: {
          text: '自定义文本',
          align: 'left',
          fontFamily: '',
          fontSize: '',
          lineHeight: '',
          isBold: false,
          hasBorder: false,
        },
      },
    },
    componentList: [
      {
        title: '地址信息',
        list: [
          {
            title: '收件人地址',
            icon: 'iconfont iconziti1',
            id: 'receiverAddress',
            component: {
              type: 'TextUi',
            },
          },
          {
            title: '发件人地址',
            id: 'senderAddress',
            icon: 'iconfont iconziti1',
            component: {
              type: 'TextUi',
            },
          },
        ],
      },
      {
        title: '商品标签信息',
        list: [
        ],
      },
      {
        title: '构图元素',
        list: [
          {
            title: '自定义文本',
            id: 'customText',
            icon: 'iconfont iconziti1',
            component: {
              type: 'TextUi',
            },
          },
          {
            title: '条形码',
            id: 'barcode',
            icon: 'iconfont icontiaoxingma',
            component: {
              type: 'BarcodeUi',
            },
          },
          {
            title: '二维码',
            id: 'qrCode',
            icon: 'iconfont iconqrcode',
            component: {
              type: 'QrCodeUi',
            },
          },
          {
            title: '横线',
            id: 'xLine',
            icon: 'iconfont iconline',
            component: {
              type: 'XLineUi',
            },
          },
          {
            title: '竖线',
            id: 'yLine',
            icon: 'iconfont icontubiaozhizuo-',
            component: {
              type: 'YLineUi',
            },
          },
          {
            title: '矩形',
            id: 'rectangle',
            icon: 'iconfont iconjuxing',
            component: {
              type: 'YLineUi',
            },
          },
        ],
      },
    ],
    storeList: [],
    templateList: JSON.parse(localTemplate),
    page: {
      width: 500,
      height: 500
    },
    board: {
      x: '',
      y: '',
      minTop: '',
      maxTop: '',
      minLeft: '',
      maxLeft: ''
    },
    storeLoading: true,
    valve: 0
  },
  actions: {
    updateValve({ commit }: any, payload: any) {
      commit('UPDATE_VALVE', payload)
    },
    setPageSize({ commit }: any, payload: any) {
      commit('SET_PAGE_SIZE', payload);
    },
    setLine({ commit }: any, payload = { left: 0, top: 0 }) {
      commit('SET_LINE', payload)
    },
    updateStoreList({ commit }: any, payload: any) {
      commit('UPDATE_STORE_LIST', payload);
    },
    removeActiveComponent({ commit }: any) {
      commit('REMOVE_ACTIVE_COMPONENT')
    },
    addComponent({ commit, state }: any, payload: any) {
      const id = generateId();
      const entity = state.componentMap[payload.componentId];
      if (!entity) {
        throw new Error(`${payload.componentId} 未找到该组件`);
      }
      const component = JSON.parse(JSON.stringify(entity));
      component.id = id;
      const getComponent = Object.assign(component, payload.props);
      commit('ADD_COMPONENT', getComponent);
    },
    setLayoutData({ commit }: any) {
      const $board: any = document.querySelector('.drag-canvas-warp')
      const { x, y } = $board.getBoundingClientRect();
      const minLeft = x
      const maxLeft = x + 500
      const minTop = y
      const maxTop = y + 500
      commit('SET_LAYOUT_DATA', { minLeft, maxLeft, minTop, maxTop, x, y })
    },
    setActive({ commit }: any, id: string) {
      commit('SET_ACTIVE', id || '');
    },
    saveTemplate({ commit, state }: any, payload: any) {
      const list: any = localStorage.getItem('templateList') || '[{"name":"快递面单","data":[{"name":"rectangle","type":"RectangleUi","classify":"RectangleMenu","title":"矩形","tag":"div","instance":true,"updateId":"1608777965136","position":{"clientX":0,"clientY":469},"default":{"height":31,"width":500,"x":0,"y":469},"props":{"borderWidth":1},"id":"kj28lr2m"},{"name":"customText","type":"TextUi","classify":"TextMenu","title":"自定义文本","instance":true,"tag":"span","updateId":"1608777965146","position":{"clientX":7,"clientY":472.5},"default":{"height":25,"width":489,"x":7,"y":472.5},"props":{"text":"版权声明：某某公司声明","align":"left","fontFamily":"","fontSize":"","lineHeight":"","isBold":false,"hasBorder":false},"id":"kj28m59x"},{"name":"customText","type":"TextUi","classify":"TextMenu","title":"自定义文本","instance":true,"tag":"span","updateId":"1608777965159","position":{"clientX":235,"clientY":473.5},"default":{"height":23,"width":259,"x":235,"y":473.5},"props":{"text":"Ref:123456789","align":"left","fontFamily":"","fontSize":"","lineHeight":"","isBold":false,"hasBorder":false},"id":"kj28nd6s"},{"type":"TextUi","name":"receiverAddress","classify":"TextMenu","title":"收件人地址","instance":true,"tag":"span","updateId":"1608777965168","position":{"clientX":14,"clientY":113.5},"default":{"height":34,"width":183,"x":14,"y":113.5},"props":{"text":"收件人：某某某","align":"left","fontFamily":"","lineHeight":"","fontSize":"16px","isBold":false,"hasBorder":false},"id":"kj28nxwt"},{"type":"TextUi","name":"receiverAddress","classify":"TextMenu","title":"收件人地址","instance":true,"tag":"span","updateId":"1608777965183","position":{"clientX":14,"clientY":150.5},"default":{"height":30,"width":139,"x":14,"y":150.5},"props":{"text":"寄件人：ABC","align":"left","fontFamily":"","lineHeight":"","fontSize":"16px","isBold":false,"hasBorder":false},"id":"kj28oejp"},{"type":"TextUi","name":"receiverAddress","classify":"TextMenu","title":"收件人地址","instance":true,"tag":"span","updateId":"1608777965192","position":{"clientX":15,"clientY":187.5},"default":{"height":58,"width":236,"x":15,"y":187.5},"props":{"text":"收件地址：某某某某大街，多少多少号","align":"left","fontFamily":"","lineHeight":"","fontSize":"16px","isBold":false,"hasBorder":false},"id":"kj28ofhp"},{"name":"barCode","type":"BarcodeUi","classify":"BarcodeMenu","instance":true,"title":"条形码","tag":"img","updateId":"1608777965196","position":{"clientX":125,"clientY":341.625},"default":{"height":124.875,"width":320.59375,"x":125,"y":341.625},"props":{"format":"CODE128","lineWidth":2,"bodyHeight":40,"fontSize":14,"displayValue":"1","data":"123456789"},"id":"kj28q5od"},{"name":"customText","type":"TextUi","classify":"TextMenu","title":"自定义文本","instance":true,"tag":"span","updateId":"1608777965201","position":{"clientX":134,"clientY":307.5},"default":{"height":39,"width":224,"x":134,"y":307.5},"props":{"text":"CD339045453445","align":"left","fontFamily":"Al Bayan","fontSize":"24px","lineHeight":"","isBold":false,"hasBorder":false},"id":"kj28qf4t"},{"name":"qrCode","type":"QrCodeUi","classify":"QrCodeMenu","title":"二维码","updateId":"1608777970800","tag":"img","instance":true,"position":{"clientX":387,"clientY":6.625},"default":{"height":106.875,"width":103.453125,"x":387,"y":6.625},"props":{},"id":"kj28rtja"},{"name":"customText","type":"TextUi","classify":"TextMenu","title":"自定义文本","instance":true,"tag":"span","updateId":"1608777965210","position":{"clientX":396,"clientY":104.5},"default":{"height":25,"width":84,"x":396,"y":104.5},"props":{"text":"扫一扫","align":"center","fontFamily":"","fontSize":"","lineHeight":"","isBold":false,"hasBorder":false},"id":"kj28s2is"},{"name":"customText","type":"TextUi","classify":"TextMenu","title":"自定义文本","instance":true,"tag":"span","updateId":"1608777965214","position":{"clientX":10,"clientY":50.5},"default":{"height":25,"width":84,"x":10,"y":50.5},"props":{"text":"订单金额：","align":"left","fontFamily":"","fontSize":"","lineHeight":"","isBold":false,"hasBorder":false},"id":"kj28sg3o"},{"name":"customText","type":"TextUi","classify":"TextMenu","title":"自定义文本","instance":true,"tag":"span","updateId":"1608777965220","position":{"clientX":83,"clientY":37.5},"default":{"height":62,"width":148,"x":83,"y":37.5},"props":{"text":"99999","align":"left","fontFamily":"Al Bayan","fontSize":"30px","lineHeight":"","isBold":true,"hasBorder":false},"id":"kj28ssh1"},{"name":"customText","type":"TextUi","classify":"TextMenu","title":"自定义文本","instance":true,"tag":"span","updateId":"1608777965223","position":{"clientX":377,"clientY":139.5},"default":{"height":59,"width":120,"x":377,"y":139.5},"props":{"text":"ZH","align":"center","fontFamily":"","fontSize":"30px","lineHeight":"","isBold":true,"hasBorder":false},"id":"kj28tuie"},{"name":"customText","type":"TextUi","classify":"TextMenu","title":"自定义文本","instance":true,"tag":"span","updateId":"1608777965225","position":{"clientX":387,"clientY":187.5},"default":{"height":25,"width":107,"x":387,"y":187.5},"props":{"text":"Made in China","align":"left","fontFamily":"","fontSize":"","lineHeight":"","isBold":false,"hasBorder":false},"id":"kj28ua85"}]}]'
      const template = {
        name: payload.name,
        data: _.cloneDeep(state.storeList),
      };
      const newList = JSON.parse(list)
      newList.push(template)
      localStorage.setItem('templateList', JSON.stringify(newList))
      commit('SAVE_TEMPLATE', template);
    },
    batchSelection({ state, commit }: any, payload: any) {
      commit('SET_SELECTION', payload)
    },
    updateBarcode({ state }: any) {
      const current = state.storeList.find((item: any) => item.id === state.activeComponent.id || '') || {};
      const { format, lineWidth, bodyHeight, fontSize } = current.props;
      try {
        barcode(`.${current.id}`, current.props.data, {
          format,
          width: lineWidth,
          height: bodyHeight,
          textMargin: 10,
          fontSize,
          displayValue: false,
        });
      } catch (e) {
        Notification({
          type: 'warning',
          title: '更新失败，参数不匹配',
          message: e,
          duration: 1500,
        });
      }
    },
    updateComponent({ commit, state }: any, payload: any) {
      const current = state.storeList.find((item: any) => item.id === payload.id);
      const newCurrent = _.cloneDeep(current);
      newCurrent.updateId = new Date().getTime().toString();
      const component = Object.assign(newCurrent, payload.update);
      commit('UPDATE_COMPONENT', component);
    },
    clearStoreList({ commit, state }: any, payload: any) {
      commit('CLEAR_STORE_LIST');
    },
    clearSelection({ commit }: any) {
      commit('CLEAR_SELECTION')
    },
    hideStoreLoading({ commit }: any) {
      commit('HIDE_STORE_LOADING')
    }
  },
  mutations: {
    UPDATE_VALVE(state: any, payload: any) {
      if (typeof payload !== 'undefined') {
        state.valve = payload
      } else if (state.valve < 10) {
        state.valve = state.valve + 1
      }
    },
    SET_LINE(state: any, payload: any) {
      const { top = 0, left = 0 } = payload
      state.line.top = top
      state.line.left = left
    },
    SET_LAYOUT_DATA(state: any, payload: any) {
      const { minTop, maxTop, minLeft, maxLeft } = payload
      state.board.maxLeft = maxLeft
      state.board.maxTop = maxTop
      state.board.minLeft = minLeft
      state.board.minTop = minTop
    },
    SET_SELECTION(state: any, payload: any) {
      state.selected = payload.reduce((total: any, current: any) => {
        total.ids.push(current.id)
        total.instance.push(current)
        return total
      }, { instance: [], ids: []  })
    },
    CLEAR_SELECTION(state: any) {
      state.selected.ids = []
      state.selected.instance = []
    },
    SET_PAGE_SIZE(state: any, size: any) {
      state.page.width = size[0]
      state.page.height = size[1]
    },
    SET_ACTIVE(state: any, id: string) {
      state.activeComponent = state.storeList.find((item: any) => item.id === id) || '';
    },
    SAVE_TEMPLATE(state: any, template: object) {
      state.templateList.push(template);
    },
    HIDE_STORE_LOADING(state: any) {
      state.storeLoading = false
    },
    UPDATE_STORE_LIST(state: any, template: any) {
      state.storeLoading = true
      state.storeList = template.map((item: any) => {
        return {...item};
      })
      Vue.nextTick(() => {
        setTimeout(() => {
          state.storeLoading = false
        }, 500)
      })
    },
    CLEAR_STORE_LIST(state: any) {
      state.storeList = [];
      const $board: any = document.querySelector('.drag-canvas-warp.board-canvas');
      const $list = $board.querySelectorAll('.item');
      $list.forEach((item: any) => {
        $board.removeChild(item);
      });
    },
    UPDATE_COMPONENT(state: any, component: any) {
      state.storeList = state.storeList.map((item: any, index: number) => {
        let newItem = {...item};
        if (item.id === component.id) {
          newItem = component;
        }
        return newItem;
      });
    },
    ADD_COMPONENT(state: any, payload: any) {
      state.storeList.push(payload);
    },
    REMOVE_ACTIVE_COMPONENT(state: any) {
      const id = state.activeComponent.id
      if (id) {
        remove(state.storeList, 'id', id)
      } else {
        state.selected.instance.map((item: any) => {
          remove(state.storeList, 'id', item.id)
        })
      }
    }
  },
};

export default components;
