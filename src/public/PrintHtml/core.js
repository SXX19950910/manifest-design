const FileSaver = require('file-saver');
import axios from 'axios';
import store from '@/store';
import scheme from '@/config/scheme';

export default {
    getOptions() {
        const { width, height } = store.state.components.page
        return {
            width,
            height
        }
    },
    getHtml() {
        return document.querySelector('.board-warp').innerHTML
    },
    async generate(data) {
        const res = await axios.get('/template.vue')
        let result = res.data
        const template = {
            data,
            options: this.getOptions(),
            scheme: JSON.stringify(scheme)
        }
        return result.replace('${template}', JSON.stringify(template))
    },
    async build(template) {
        const blob = new Blob([await this.generate(template)], { type: "text/plain;charset=utf-8" });
        FileSaver.saveAs(blob, "template.vue");
    }
}
