import { Notification } from 'element-ui'
// import Vue from 'vue'
import store from '@/store'
const style = `
.canvas-wrapper {
  width: 500px;
  height: 500px;
  background-color: white;
  border-radius: 2px;
  position: absolute;
  margin: 0 auto;
  box-shadow: 0 0 10px rgba(0, 21, 41, 0.08);
}
.item {
    display: none;
}
.view-wrapper {
    width: 100% !important;
    height: 100% !important;
}
.border-canvas {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.drag-warp {
    position: absolute;
    cursor: pointer;
    border: 1px solid transparent;
    color: #000;
    border-radius: 2px;
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
    transition: background-color ease .36s;
}

.text-component .detail {
    display: inline-block;
    font-weight: normal;
    word-break: break-all;
    word-wrap: break-word;
    border: 1px solid transparent;
}
`
class PrintHtml {
    constructor(templateName = '', data = {}) {
        this.html = ''
        this.data = data
        this.scheme = store.state.components.storeList || []
        this.lodop = this.initLodop()
    }
    async generateHtml() {
        // this.scheme.map(item => {
        //     PrintHtml.parseElement(item)
        // })
        // const setValue = (variable, value) => {
        //     this.scheme.map(item => {
        //         const text = item.props.text
        //         const isHit = text && text.includes(variable)
        //         if (isHit) {
        //             item.props.text = text.replace(variable, value)
        //         }
        //     })
        // }
        // for (const key in this.data) {
        //     const variable = '${' + key + '}'
        //     const value = this.data[key]
        //     setValue(variable, value)
        // }
        // store.dispatch('components/updateStoreList', this.scheme)
        // await Vue.nextTick()
        this.html = document.querySelector('.board-warp').innerHTML
        return `
                <html lang="en">
                    <head>
                      <meta charset="UTF-8">
                      <title>Title</title>
                      <style>
                        ${style}
                      </style>
                    </head>
                    <body>
                        ${this.html}
                    </body>
                </html>`
    }
    initLodop() {
        let lodop = false
        if (!window.LODOP) {
            Notification.error({
                title: '未找到LODOP',
                dangerouslyUseHTMLString: true,
                message: '请安装<a class="link" href="http://www.c-lodop.com/index.html" target="_blank">LODOP</a>后重试'
            })
        } else {
            lodop = LODOP
        }
        return lodop
    }
    static setStyle() {
        const block = 'block'
        return `display: ${block}; width: 200px`
    }
    static parseWrapper() {
        const div = document.createElement('div')
        div.style.cssText = PrintHtml.setStyle()
        return `<div class="drag-warp" style="${PrintHtml.setStyle()}"></div>`
    }
    static parseElement(element) {
        const warp = PrintHtml.parseWrapper()
        let result = `<${element.tag}>${warp}</${element.tag}>`
        return result
    }
    async painting() {
        if (this.lodop) {
            this.lodop.PRINT_INIT("打印预览")
            this.lodop.SET_PRINT_PAGESIZE()
            this.lodop.ADD_PRINT_HTM('0', '0', '100%', '100%', await this.generateHtml())
            this.lodop.PREVIEW()
        }
    }
}
export default PrintHtml
