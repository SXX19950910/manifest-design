import barcode from 'jsbarcode';
// @ts-ignore
import _ from 'lodash';
import { Notification } from 'element-ui';
const localTemplate: any = localStorage.getItem('templateList') || '[]'
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
  },
  actions: {
    updateStoreList({ commit }: any, payload: any) {
      commit('UPDATE_STORE_LIST', payload);
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
      const list: any = localStorage.getItem('templateList') || []
      const template = {
        name: payload.name,
        data: _.cloneDeep(state.storeList),
      };
      list.push(template)
      localStorage.setItem('templateList', JSON.stringify(list))
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
    SET_ACTIVE(state: any, id: string) {
      state.activeComponent = state.storeList.find((item: any) => item.id === id) || '';
    },
    SAVE_TEMPLATE(state: any, template: object) {
      state.templateList.push(template);
    },
    UPDATE_STORE_LIST(state: any, template: any) {
      state.storeList = template.map((item: any) => {
        return {...item};
      });
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
  },
};

export default components;
