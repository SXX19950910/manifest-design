const FileSaver = require('file-saver');
import axios from 'axios';
import store from '@/store';
import scheme from '@/config/scheme';
const config = require('./../../../config')

export default {
    getOptions() {
        const { width, height } = store.state.components.page
        return {
            width,
            height
        }
    },
    async generate(data) {
        const flag = '{ "value": "${template}" }'
        const url = config.isDev ? '/template.vue' : 'https://shixiaoxi.cn/design/template.vue'
        const res = await axios.get(url)
        let result = res.data
        const template = {
            data,
            options: this.getOptions(),
            scheme: JSON.stringify(scheme)
        }
        return result.replace(flag, JSON.stringify(template))
    },
    async build(template) {
        const blob = new Blob([await this.generate(template)], { type: "text/plain;charset=utf-8" });
        FileSaver.saveAs(blob, "template.vue");
    }
}
