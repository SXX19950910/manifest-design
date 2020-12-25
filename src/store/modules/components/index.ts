import barcode from 'jsbarcode';
import Vue from 'vue'
// @ts-ignore
import _ from 'lodash';
import { Notification } from 'element-ui';
const localTemplate: any = localStorage.getItem('templateList') || '[{"name":"快递面单","data":[{"name":"rectangle","type":"RectangleUi","classify":"RectangleMenu","title":"矩形","tag":"div","instance":true,"updateId":"1608777965136","position":{"clientX":0,"clientY":469},"default":{"height":31,"width":500,"x":0,"y":469},"props":{"borderWidth":1},"id":"kj28lr2m"},{"name":"customText","type":"TextUi","classify":"TextMenu","title":"自定义文本","instance":true,"tag":"span","updateId":"1608777965146","position":{"clientX":7,"clientY":472.5},"default":{"height":25,"width":489,"x":7,"y":472.5},"props":{"text":"版权声明：某某公司声明","align":"left","fontFamily":"","fontSize":"","lineHeight":"","isBold":false,"hasBorder":false},"id":"kj28m59x"},{"name":"customText","type":"TextUi","classify":"TextMenu","title":"自定义文本","instance":true,"tag":"span","updateId":"1608777965159","position":{"clientX":235,"clientY":473.5},"default":{"height":23,"width":259,"x":235,"y":473.5},"props":{"text":"Ref:123456789","align":"left","fontFamily":"","fontSize":"","lineHeight":"","isBold":false,"hasBorder":false},"id":"kj28nd6s"},{"type":"TextUi","name":"receiverAddress","classify":"TextMenu","title":"收件人地址","instance":true,"tag":"span","updateId":"1608777965168","position":{"clientX":14,"clientY":113.5},"default":{"height":34,"width":183,"x":14,"y":113.5},"props":{"text":"收件人：某某某","align":"left","fontFamily":"","lineHeight":"","fontSize":"16px","isBold":false,"hasBorder":false},"id":"kj28nxwt"},{"type":"TextUi","name":"receiverAddress","classify":"TextMenu","title":"收件人地址","instance":true,"tag":"span","updateId":"1608777965183","position":{"clientX":14,"clientY":150.5},"default":{"height":30,"width":139,"x":14,"y":150.5},"props":{"text":"寄件人：ABC","align":"left","fontFamily":"","lineHeight":"","fontSize":"16px","isBold":false,"hasBorder":false},"id":"kj28oejp"},{"type":"TextUi","name":"receiverAddress","classify":"TextMenu","title":"收件人地址","instance":true,"tag":"span","updateId":"1608777965192","position":{"clientX":15,"clientY":187.5},"default":{"height":58,"width":236,"x":15,"y":187.5},"props":{"text":"收件地址：某某某某大街，多少多少号","align":"left","fontFamily":"","lineHeight":"","fontSize":"16px","isBold":false,"hasBorder":false},"id":"kj28ofhp"},{"name":"barCode","type":"BarcodeUi","classify":"BarcodeMenu","instance":true,"title":"条形码","tag":"img","updateId":"1608777965196","position":{"clientX":125,"clientY":341.625},"default":{"height":124.875,"width":320.59375,"x":125,"y":341.625},"props":{"format":"CODE128","lineWidth":2,"bodyHeight":40,"fontSize":14,"displayValue":"1","data":"123456789"},"id":"kj28q5od"},{"name":"customText","type":"TextUi","classify":"TextMenu","title":"自定义文本","instance":true,"tag":"span","updateId":"1608777965201","position":{"clientX":134,"clientY":307.5},"default":{"height":39,"width":224,"x":134,"y":307.5},"props":{"text":"CD339045453445","align":"left","fontFamily":"Al Bayan","fontSize":"24px","lineHeight":"","isBold":false,"hasBorder":false},"id":"kj28qf4t"},{"name":"qrCode","type":"QrCodeUi","classify":"QrCodeMenu","title":"二维码","updateId":"1608777970800","tag":"img","instance":true,"position":{"clientX":387,"clientY":6.625},"default":{"height":106.875,"width":103.453125,"x":387,"y":6.625},"props":{},"id":"kj28rtja"},{"name":"customText","type":"TextUi","classify":"TextMenu","title":"自定义文本","instance":true,"tag":"span","updateId":"1608777965210","position":{"clientX":396,"clientY":104.5},"default":{"height":25,"width":84,"x":396,"y":104.5},"props":{"text":"扫一扫","align":"center","fontFamily":"","fontSize":"","lineHeight":"","isBold":false,"hasBorder":false},"id":"kj28s2is"},{"name":"customText","type":"TextUi","classify":"TextMenu","title":"自定义文本","instance":true,"tag":"span","updateId":"1608777965214","position":{"clientX":10,"clientY":50.5},"default":{"height":25,"width":84,"x":10,"y":50.5},"props":{"text":"订单金额：","align":"left","fontFamily":"","fontSize":"","lineHeight":"","isBold":false,"hasBorder":false},"id":"kj28sg3o"},{"name":"customText","type":"TextUi","classify":"TextMenu","title":"自定义文本","instance":true,"tag":"span","updateId":"1608777965220","position":{"clientX":83,"clientY":37.5},"default":{"height":62,"width":148,"x":83,"y":37.5},"props":{"text":"99999","align":"left","fontFamily":"Al Bayan","fontSize":"30px","lineHeight":"","isBold":true,"hasBorder":false},"id":"kj28ssh1"},{"name":"customText","type":"TextUi","classify":"TextMenu","title":"自定义文本","instance":true,"tag":"span","updateId":"1608777965223","position":{"clientX":377,"clientY":139.5},"default":{"height":59,"width":120,"x":377,"y":139.5},"props":{"text":"ZH","align":"center","fontFamily":"","fontSize":"30px","lineHeight":"","isBold":true,"hasBorder":false},"id":"kj28tuie"},{"name":"customText","type":"TextUi","classify":"TextMenu","title":"自定义文本","instance":true,"tag":"span","updateId":"1608777965225","position":{"clientX":387,"clientY":187.5},"default":{"height":25,"width":107,"x":387,"y":187.5},"props":{"text":"Made in China","align":"left","fontFamily":"","fontSize":"","lineHeight":"","isBold":false,"hasBorder":false},"id":"kj28ua85"}]}]'
const generateId = () => {
  return Number(Math.random().toString().substr(3, length) + Date.now()).toString(36);
};
const components = {
  namespaced: true,
  state: {
    activeComponent: '',
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
          text: '测试寄件人',
          align: 'left',
          fontFamily: 'monospace',
          lineHeight: '1.5',
          fontSize: '16px',
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
          text: '测试收件人名称',
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
          width: '',
          height: '',
          x: '',
          y: '',
        },
        props: {
          width: 100,
          height: 1,
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
          height: '',
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
    storeLoading: true
  },
  actions: {
    setPageSize({ commit }: any, payload: any) {
      commit('SET_PAGE_SIZE', payload);
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
    updateBarcode({ commit, state }: any) {
      const current = state.storeList.find((item: any) => item.id === state.activeComponent.id || '');
      const { format, lineWidth, bodyHeight, displayValue, fontSize } = current.props;
      try {
        barcode(`.${current.id}`, current.props.data, {
          format,
          width: lineWidth,
          height: bodyHeight,
          textMargin: 10,
          fontSize,
          displayValue: displayValue === '1',
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
      const newCurrent = JSON.parse(JSON.stringify(current));
      newCurrent.updateId = new Date().getTime().toString();
      const component = Object.assign(newCurrent, payload.update);
      // console.log(component)
      commit('UPDATE_COMPONENT', component);
    },
    clearStoreList({ commit, state }: any, payload: any) {
      commit('CLEAR_STORE_LIST');
    },
  },
  mutations: {
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
    UPDATE_STORE_LIST(state: any, template: any) {
      state.storeLoading = true
      state.storeList = template.map((item: any) => {
        return {...item};
      });
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
      state.storeList.map((item: any, index: number) => {
        if (item.id === id) {
          state.storeList.splice(index, 1)
        }
      })
    }
  },
};

export default components;
