<template>
  <div v-show="visible" ref="app" id="app">
    <div class="view-wrapper" style="width: 1920px; height: 1080px;"><!---->
      <div class="canvas-wrapper" style="width: 500px; height: 500px;">
        <div class="drag-canvas-warp board-canvas"><!----><!---->
          <div id="kj28lr2m" class="drag-warp line-ui"
               style="padding: 0px; overflow: unset; width: 500px; height: 31px; top: 469px; left: 0px;">
            <div class="rectangle-warp" update-id="1632478101845" style="border: 1px solid rgb(0, 0, 0);"></div>
            <!----></div>
          <div id="kj28m59x" class="drag-warp"
               style="padding: 0px 10px 0px 0px; overflow: hidden; width: 489px; height: 25px; top: 472.5px; left: 7px;">
            <div id="kj28m59x" class="text-component" update-id="1632478101861" align="left"><span
                class="detail" style="font-weight: 400; border: 1px solid transparent;"><span
                class="var-text-wrap"><span>版</span><span>权</span><span>声</span><span>明</span><span>：</span><span>某</span><span>某</span><span>公</span><span>司</span><span>声</span><span>明</span></span></span>
            </div><!----></div>
          <div id="kj28nd6s" class="drag-warp"
               style="padding: 0px 10px 0px 0px; overflow: hidden; width: 259px; height: 23px; top: 473.5px; left: 235px;">
            <div id="kj28nd6s" class="text-component" update-id="1632478101866" align="left"><span
                class="detail" style="font-weight: 400; border: 1px solid transparent;"><span
                class="var-text-wrap"><span>R</span><span>e</span><span>f</span><span>:</span><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span></span></span>
            </div><!----></div>
          <div id="kj28nxwt" class="drag-warp"
               style="padding: 0px 10px 0px 0px; overflow: hidden; width: 183px; height: 34px; top: 113.5px; left: 14px;">
            <div id="kj28nxwt" class="text-component" update-id="1632478101871" align="left"><span
                class="detail" style="font-size: 16px; font-weight: 400; border: 1px solid transparent;"><span
                class="var-text-wrap"><span>收</span><span>件</span><span>人</span><span>：</span><span>某</span><span>某</span><span>某</span></span></span>
            </div><!----></div>
          <div id="kj28oejp" class="drag-warp"
               style="padding: 0px 10px 0px 0px; overflow: hidden; width: 139px; height: 30px; top: 150.5px; left: 14px;">
            <div id="kj28oejp" class="text-component" update-id="1632478101878" align="left"><span
                class="detail" style="font-size: 16px; font-weight: 400; border: 1px solid transparent;"><span
                class="var-text-wrap"><span>寄</span><span>件</span><span>人</span><span>：</span><span>A</span><span>B</span><span>C</span></span></span>
            </div><!----></div>
          <div id="kj28ofhp" class="drag-warp"
               style="padding: 0px 10px 0px 0px; overflow: hidden; width: 236px; height: 58px; top: 187.5px; left: 15px;">
            <div id="kj28ofhp" class="text-component" update-id="1632478101882" align="left"><span
                class="detail" style="font-size: 16px; font-weight: 400; border: 1px solid transparent;"><span
                class="var-text-wrap"><span>收</span><span>件</span><span>地</span><span>址</span><span>：</span><span>某</span><span>某</span><span>某</span><span>某</span><span>大</span><span>街</span><span>，</span><span>多</span><span>少</span><span>多</span><span>少</span><span>号</span></span></span>
            </div><!----></div>
          <div id="kj28q5od" class="drag-warp barcode-ui"
               style="padding: 0px 10px 0px 0px; overflow: hidden; width: 320.594px; height: 124.875px; top: 341.625px; left: 125px;">
            <div class="barcode-wrap" update-id="1632478101887" fontsize="14"><img alt="barcode"
                                                                                       src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN4AAAA8CAYAAAAJ6wQ+AAAAAXNSR0IArs4c6QAABBBJREFUeF7tnNF2wjAMQ9f//2h2aAtrvDiSczK6h7vHURpQLUu2E7bH4/H44g8EQOCjCGwQ76N4sxgI7AhAPAIBBG5AAOLdADpLggDEIwZA4AYEIN4NoLMkCEA8YgAEbkAA4t0AOkuCAMQjBkDgBgQg3g2gsyQI2MTbtq1B67Xh5fX/uAEmXv96c3ZdvJ+6Pj46dd94ffzc2ffL3qfWf73uruOur+5bfQ7q82Xf86+fr/s9Ypy48Zht2FLfS+HlbgSDeOeOOTfw1YOZJbi7PsTrq2VVCCDeqaQoXt9RZKYsy7yuUmSBmiWWTFmU8lcVwlUspcQKB4gH8fYYQvEOKkG8kFKo8drAUJleWUKlIKpWQPHaJ4DVPPFwa6FZK6ICP8ucVULQXBkHePU5KGVH8VC8bnnlJpQqwVVAuk0bVduoLiA1XltrV/FSTuUdF+55PKwmVvOJQNYEiwFaTTzZ9fH/3WzY+VwqAdFcoblCc+XCJqwmVhOr2UEAxTusqDv+yhSaAToD9GEgZc0Tt9adbZ4pq6g+l3o/VhOridXEambCmA94q55c7alU3b3ZTOt2BbMmgSryVQZV1kR9b/fzq0xf7dIpZclep7mSc+n5ClYTq4nV7CiuSjgqkY5pB/HKRbKruNWMj+IdiFUdlFLwzKkohwLxwu/tuoHPzpU2kGcDSb0Pq1nb3P5OBAzQjx/SdhXHJT6K11cwhTOKF1IZO1c8BXGbIJlFiv/PagU2SbfIsEn6xMNVhtk5T9XizBIie59aH8VD8UYNFrqadDX3+FA7UpRCZ0o9m1jdsQjNlUVNELcGUIpDc8WzxooYNFcOBNwT+5xOCDtisJpeTcSxII4FNZkm1kwoXn+zrmvR3AyO4qF4OwKzTRsUD8W7IsAAnU3S3YSiagXGCV4iyZwSxIN4EO/CIQbowZsxQPe6hLOWVnVz3ftS47W1L4p3IsCxoPFP4WfzMIjX7zYyx2OOF7nRWEh1jATFax2Fq9wQD+JBvMugOVo8lXiy69UYCeJBPIgH8d47XLrBcG0icSyIY0HPeGCvptc8U1vs1BjoreAQD+JBvB8pUhs0IF7QctUtdbuCqquoHszsOjRXaK4Ma5XZYjYL6GoGcQOf0wlrrFMMBmVJVQJUCYYBekCcAboXyCjeYd3pao7bKxyE5SDsHiFKyTKnkykixIN4Q+vszpdiIKmAqwaesmCukrqDZ44FtcrsPt9qaZTRD8VD8VC8jjVWtW01Yf9KnIwTGCdgNX/XpP+GeGPHyqsgAAIVBGyrWbkp14IACCxqrgAkCIDAOgRQvHVYcicQsBGAeDZUXAgC6xCAeOuw5E4gYCMA8WyouBAE1iEA8dZhyZ1AwEYA4tlQcSEIrEMA4q3DkjuBgI3AN90xEB85m3zLAAAAAElFTkSuQmCC"
                                                                                       draggable="false"
                                                                                       class="barcode kj28q5od"
                                                                                       style="max-width: 100%; vertical-align: middle; user-select: none;">
              <div class="barcode-text">123456789</div>
            </div><!----></div>
          <div id="kj28qf4t" class="drag-warp"
               style="padding: 0px 10px 0px 0px; overflow: hidden; width: 224px; height: 39px; top: 307.5px; left: 134px;">
            <div id="kj28qf4t" class="text-component" update-id="1632478101892" align="left"><span
                class="detail"
                style="font-family: &quot;Al Bayan&quot;; font-size: 24px; font-weight: 400; border: 1px solid transparent;"><span
                class="var-text-wrap"><span>C</span><span>D</span><span>3</span><span>3</span><span>9</span><span>0</span><span>4</span><span>5</span><span>4</span><span>5</span><span>3</span><span>4</span><span>4</span><span>5</span></span></span>
            </div><!----></div>
          <div id="kj28rtja" class="drag-warp"
               style="padding: 0px 10px 0px 0px; overflow: hidden; width: 103.453px; height: 106.875px; top: 6.625px; left: 387px;">
            <img alt="qr" draggable="false"
                 src="data:image/jpeg;base64,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"
                 class="qr-code-warp" update-id="1632478101895"
                 style="max-width: 100%; vertical-align: middle; user-select: none;"><!----></div>
          <div id="kj28s2is" class="drag-warp"
               style="padding: 0px 10px 0px 0px; overflow: hidden; width: 84px; height: 25px; top: 104.5px; left: 396px;">
            <div id="kj28s2is" class="text-component" update-id="1632478101900" align="center"><span
                class="detail" style="font-weight: 400; border: 1px solid transparent;"><span
                class="var-text-wrap"><span>扫</span><span>一</span><span>扫</span></span></span></div><!----></div>
          <div id="kj28sg3o" class="drag-warp"
               style="padding: 0px 10px 0px 0px; overflow: hidden; width: 84px; height: 25px; top: 50.5px; left: 10px;">
            <div id="kj28sg3o" class="text-component" update-id="1632478101906" align="left"><span
                class="detail" style="font-weight: 400; border: 1px solid transparent;"><span
                class="var-text-wrap"><span>订</span><span>单</span><span>金</span><span>额</span><span>：</span></span></span>
            </div><!----></div>
          <div id="kj28ssh1" class="drag-warp"
               style="padding: 0px 10px 0px 0px; overflow: hidden; width: 148px; height: 62px; top: 37.5px; left: 83px;">
            <div id="kj28ssh1" class="text-component" update-id="1632478101912" align="left"><span
                class="detail"
                style="font-family: &quot;Al Bayan&quot;; font-size: 30px; font-weight: bold; border: 1px solid transparent;"><span
                class="var-text-wrap"><span>9</span><span>9</span><span>9</span><span>9</span><span>9</span></span></span>
            </div><!----></div>
          <div id="kj28tuie" class="drag-warp"
               style="padding: 0px 10px 0px 0px; overflow: hidden; width: 120px; height: 59px; top: 139.5px; left: 377px;">
            <div id="kj28tuie" class="text-component" update-id="1632478101919" align="center"><span
                class="detail" style="font-size: 30px; font-weight: bold; border: 1px solid transparent;"><span
                class="var-text-wrap"><span>Z</span><span>H</span></span></span></div><!----></div>
          <div id="kj28ua85" class="drag-warp"
               style="padding: 0px 10px 0px 0px; overflow: hidden; width: 107px; height: 25px; top: 187.5px; left: 387px;">
            <div id="kj28ua85" class="text-component" update-id="1632478101924" align="left"><span
                class="detail" style="font-weight: 400; border: 1px solid transparent;"><span
                class="var-text-wrap"><span>M</span><span>a</span><span>d</span><span>e</span><span> </span><span>i</span><span>n</span><span> </span><span>C</span><span>h</span><span>i</span><span>n</span><span>a</span></span></span>
            </div><!----></div>
        </div>
        <div class="el-loading-mask" style="display: none;">
          <div class="el-loading-spinner">
            <svg viewBox="25 25 50 50" class="circular">
              <circle cx="50" cy="50" r="20" fill="none" class="path"></circle>
            </svg><!----></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      options: '{"width":500,"height":500}',
      style: '.canvas-wrapper {\n  background-color: white;\n  border-radius: 2px;\n  position: absolute;\n  margin: 0 auto;\n  box-shadow: 0 0 10px rgba(0, 21, 41, 0.08);\n}\n\n.barcode-wrap {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    justify-content: center;\n}\n.barcode {\n      max-width: 100%;\n      vertical-align: middle;\n      user-select: none;\n}\n.barcode-text {\n      font-size: 20px;\n      font-weight: normal;\n}\n.item {\n    display: none;\n}\n.view-wrapper {\n    width: 100% !important;\n    height: 100% !important;\n}\n.border-canvas {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n.drag-warp {\n    position: absolute;\n    cursor: pointer;\n    border: 1px solid transparent;\n    color: #000;\n    border-radius: 2px;\n    max-width: 100%;\n    max-height: 100%;\n    overflow: hidden;\n    transition: background-color ease .36s;\n}\n\n.text-component .detail {\n    display: inline-block;\n    font-weight: normal;\n    word-break: break-all;\n    word-wrap: break-word;\n    border: 1px solid transparent;\n}'
    }
  },
  methods: {
    print() {
      const app = this.$refs.app
      const options = JSON.parse(this.options)
      const LODOP = window.LODOP
      if (!LODOP) {
        alert('请先安装lodop')
      } else {
        LODOP.PRINT_INIT('');
        LODOP.PRINT_INITA(0, 0)
        LODOP.SET_PRINT_PAGESIZE(1, options.width, options.height);
        LODOP.SET_PRINT_MODE("POS_BASEON_PAPER", true);
        LODOP.SET_PRINT_MODE("PRINT_PAGE_PERCENT", "Full-Page");
        LODOP.ADD_PRINT_HTM(0, 0, '100%', '100%', `<!DOCTYPE html><html class="print-html" lang="en"><head><style>${this.style}</style><title>打印Print</title></head><body>${app.innerHTML}</body></html>`)
        LODOP.PREVIEW()
      }
    }
  }
}
</script>

<style lang="scss">
</style>
