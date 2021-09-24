const FileSaver = require('file-saver');
import axios from 'axios'
import store from '@/store'

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
    async generate() {
        const res = await axios.get('/template.vue')
        let template = res.data
        template = template.replace('${html}', this.getHtml()).replace('${options}', JSON.stringify(this.getOptions()))
        return template
    },
    async build() {
        const blob = new Blob([await this.generate()], { type: "text/plain;charset=utf-8" });
        FileSaver.saveAs(blob, "template.vue");
    }
}
