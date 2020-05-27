<template>
  <div id="nav-warp">
    <div class="logo-area">
      Design UI
    </div>
    <div class="handle-area">
      <div class="preview-btn" @click="handleViewTemplate">
        <i class="el-icon-reading"></i>
        <span>打印预览</span>
      </div>
      <div class="preview-btn" @click="handleClearCanvas">
        <i class="el-icon-magic-stick"></i>
        <span>清空画布</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {};
    },
    methods: {
      handleViewTemplate() {
        const $template = document.querySelector('.drag-canvas-warp.board-canvas').innerHTML;
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
              width: 460px;
              height: 460px;
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
          <div class="container">${$template}</div>
        </body>
      </html>`;
        if (window.previewWindow) {
          window.previewWindow.close();
        }
        window.previewWindow = window.open();
        window.previewWindow.document.write(html);
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
    },
  };
</script>

<style lang="scss">
  @import "./src/style/variable";

  #nav-warp {
    width: 100%;
    height: 48px;
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

      .preview-btn {
        font-size: 14px;
        color: $generalFontColor;
        cursor: pointer;
        margin-right: 15px;

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
