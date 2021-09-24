<template>
  <div id="nav-warp">
    <div class="logo-area">
      Design UI
    </div>
    <div class="handle-area">
      <div class="preview-btn" @click="handleGenerateFile">
        <i class="el-icon-magic-stick"></i>
        <span>生成vue模板组件</span>
      </div>
      <div class="preview-btn" @click="handleSaveTemplateToImg">
        <i class="el-icon-picture-outline"></i>
        <span>保存为图片</span>
      </div>
      <div class="preview-btn" @click="handleShowSaveDialog">
        <i class="el-icon-receiving"></i>
        <span>保存为模板</span>
      </div>
      <div class="preview-btn" @click="handleViewTemplate">
        <i class="el-icon-reading"></i>
        <span>打印预览</span>
      </div>
      <div class="preview-btn" @click="handlePrint">
        <i class="el-icon-printer"></i>
        <span>快速打印</span>
      </div>
      <div class="preview-btn" @click="handleClearCanvas">
        <i class="el-icon-magic-stick"></i>
        <span>清空画布</span>
      </div>
    </div>
    <save-dialog ref="save" />
  </div>
</template>

<script>
  import html2canvas from 'html2canvas';
  import saveDialog from './tools/SaveDialog/Index.vue';
  import PrintHtml from '@/public/PrintHtml';
  import core from '@/public/PrintHtml/core.js'
  export default {
    components: {
      saveDialog,
    },
    data() {
      return {
        imgSrc: '',
      };
    },
    mounted() {
      //
    },
    methods: {
      generatePreview(template) {
        const html = `
         <!Doctype html>
      <html>
        <head>
          <title>Desgin Ui 预览</title>
          <style>
            html,body{
              margin: 0;
              padding: 0;
              overflow: auto;
              background-color: #000;
              position: relative;
              height: 100vh;
            }
            .container {
              box-sizing: border-box;
              width: 500px;
              height: 500px;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              background-color: white;
            }
            .text-component .detail {
              display: inline-block;
              font-weight: normal;
              word-break: break-all;
              word-wrap: break-word;
              border: 1px solid transparent;
            }
            .container .item {
              display: none;
            }
            .container .drag-warp {
              position: absolute;
            }
          </style>
        </head>
        <body>
          <div class="container">${template}</div>
        </body>
      </html>`
        return html
      },
      convertBase64UrlToBlob(urlData) {
        const bytes = window.atob(urlData.split(',')[1]);
        const ab = new ArrayBuffer(bytes.length);
        const ia = new Uint8Array(ab);
        for (let i = 0; i < bytes.length; i++) {
          ia[i] = bytes.charCodeAt(i);
        }
        return new Blob( [ab] , {type : 'image/png'});
      },
      handleShowSaveDialog() {
        this.$refs.save.init();
      },
      handlePrint() {
        this.$nextTick(() => {
          const printHtml = new PrintHtml()
          printHtml.painting()
        });
      },
      handleGenerateFile() {
        core.build()
      },
      async handleSaveTemplateToImg() {
        const $el = document.querySelector('.drag-canvas-warp.board-canvas');
        const canvas = await html2canvas($el, {
          allowTaint: true,
          useCORS: true,
          backgroundColor: '#fff',
          width: $el.offsetWidth,
          height: $el.offsetHeight,
          dpi: window.devicePixelRatio * 2,
        });
        const data = canvas.toDataURL('image/png');
        const blob = this.convertBase64UrlToBlob(data);
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `商品标签模板_${new Date().getTime()}`;
        a.click();
        window.URL.revokeObjectURL(url);
      },
      handleViewTemplate() {
        const $template = document.querySelector('.drag-canvas-warp.board-canvas').innerHTML;
        const html = this.generatePreview($template)
        if (window.previewWindow) window.previewWindow.close();
        window.previewWindow = window.open();
        window.previewWindow.document.write(html);
        window.previewWindow.print()
        window.previewWindow.document.close();
      },
      handleClearCanvas() {
        const that = this;
        this.$confirm('此操作将清空画板, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        }).then(() => {
          that.$store.dispatch('components/clearStoreList');
        }).catch();
      },
      handleTest() {
        // const test = '[{"name":"customText","type":"TextUi","classify":"TextMenu","title":"自定义文本","instance":true,"updateId":"1592381360664","position":{"clientX":0,"clientY":8},"default":{"height":396,"width":458,"x":0,"y":8},"props":{"text":"自定义文本","align":"left","fontFamily":"","fontSize":"","lineHeight":"","isBold":false,"hasBorder":false},"id":"kbj2qn8n"},{"name":"barCode","type":"BarcodeUi","classify":"BarcodeMenu","instance":true,"title":"条形码","updateId":"1592381360466","position":{"clientX":140,"clientY":185.75},"default":{"height":175.390625,"width":115.984375,"x":140,"y":185.75},"props":{"format":"CODE128","lineWidth":2,"bodyHeight":40,"fontSize":14,"displayValue":"1","data":"123456789"},"id":"kbj2qq3d"}]'
        // console.log(JSON.parse(test))
        // this.$store.dispatch('components/updateStoreList', JSON.parse(test))
      },
    },
  };
</script>

<style lang="scss">
  @import "./src/style/variable";

  #nav-warp {
    width: 100%;
    height: 32px;
    background-color: white;
    display: flex;
    align-items: center;
    padding: 0 20px;
    box-shadow: $shadowBottom;
    position: relative;
    justify-content: space-between;
    z-index: 100;

    .logo-area {
      color: $skyBlue;
      font-weight: 500;
      font-size: 18px;
    }

    .handle-area {
      display: flex;
      align-items: center;
      height: 100%;
      padding: 10px 0;
      .preview-btn {
        font-size: 14px;
        color: $generalFontColor;
        cursor: pointer;
        margin-right: 15px;
        height: 100%;
        display: flex;
        align-items: center;
        padding-right: 15px;
        border-right: 1px solid $border;
        &:last-of-type {
          margin-right: 0;
        }
        &:hover {
          text-decoration: underline;
          color: $skyBlue;
        }

        i {
          margin-right: 5px;
        }
      }
    }
  }
</style>
