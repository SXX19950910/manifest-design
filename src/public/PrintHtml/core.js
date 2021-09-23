const FileSaver = require('file-saver');
import axios from 'axios'

export default {
    async generate() {
        const res = await axios.get('/template.vue')
        return res.data.replace('${html}', document.querySelector('.board-warp').innerHTML)
    },
    async build() {
        const blob = new Blob([await this.generate()], {type: "text/plain;charset=utf-8"});
        FileSaver.saveAs(blob, "template.vue");
    }
}
