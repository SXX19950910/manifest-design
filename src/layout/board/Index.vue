<template>
  <div ref="view" class="board-warp" @scroll="debounceViewScroll" @keyup.prevent>
    <div class="view-wrapper" ref="view" :style="viewWrapStyle" @mousedown.stop="handleMouseDown">
      <div v-if="reactVisible" ref="react" class="react" :style="reactStyle" />
      <div v-loading="$store.state.components.storeLoading" element-loading-text="模板加载中..." class="canvas-wrapper" :style="viewStyle">
        <drag-canvas ref="canvas" class="board-canvas" />
      </div>
    </div>
  </div>
</template>

<script>
  import DragCanvas from '@/components/DragCanvas/Index.vue'
  import _ from 'lodash'
  import { debounce } from 'throttle-debounce'
  import { on, off } from '@/utils/dom'
  export default {
    props: {
      //
    },
    components: {
      DragCanvas
    },
    data() {
      return {
        reactVisible: false,
        view: {
          width: '',
          height: ''
        },
        react: {
          width: '',
          height: '',
          left: '',
          top: ''
        },
        leftRect: {},
        topRect: {},
        rightRect: {},
        downX: '',
        downY: '',
        moveX: '',
        moveY: '',
        timer: '',
        x: 0,
        maxWidth: '',
        debounceViewScroll: Function,
        leftTapKey: 1
      };
    },
    computed: {
      viewStyle() {
        return {
          width: `${this.$store.state.components.page.width}px`,
          height: `${this.$store.state.components.page.height}px`
        }
      },
      viewWrapStyle() {
        const { width, height } = this.view
        return {
          width: `${width}px`,
          height: `${height}px`
        }
      },
      reactStyle() {
        const { react } = this
        return {
          top: react.top + 'px',
          left: react.left + 'px',
          width: react.width + 'px',
          height: react.height + 'px'
        }
      }
    },
    mounted() {
      this.init()
    },
    methods: {
      init() {
        this.setViewStyle()
        this.addListener()
      },
      resetDraw() {
        this.reactVisible = false
        this.downX = ''
        this.downY = ''
        this.react.top = ''
        this.react.left = ''
        this.react.width = ''
        this.react.height = ''
        clearInterval(this.timer)
        this.timer = ''
      },
      initDraw(event) {
        this.leftRect = document.querySelector('.left-menu').getBoundingClientRect()
        this.topRect = document.querySelector('#nav-warp').getBoundingClientRect()
        this.rightRect = document.querySelector('.props-menu-warp').getBoundingClientRect()
        const clientX = event.clientX - this.leftRect.width
        const clientY = event.clientY - this.topRect.height
        const $view = this.$refs.view
        this.downX = clientX + $view.scrollLeft
        this.downY = clientY + $view.scrollTop
        this.maxWidth = this.view.width - clientX
        this.reactVisible = true
      },
      handleMouseDown(e) {
        if (e.buttons !== this.leftTapKey) return
        this.initDraw(e)
        on(document, 'mousemove', this.handleMouseMove)
        on(document, 'mouseup', this.handleMouseUp)
      },
      handleMouseMove(e) {
        const $view = this.$refs.view
        const downX = this.downX
        const downY = this.downY
        const clientX = e.clientX - this.leftRect.width
        const clientY = e.clientY - this.topRect.height
        const moveX = clientX + $view.scrollLeft - downX
        const moveY = clientY + $view.scrollTop - downY
        const isReverseX = moveX < 0
        const isReverseY = moveY < 0
        if (isReverseX) {
          this.react.width = Math.abs(moveX)
          this.react.left = ((downX - moveX) - this.react.width) - this.react.width
        } else {
          this.react.width = moveX
          this.react.left = downX
        }
        if (isReverseY) {
          this.react.height = Math.abs(moveY)
          this.react.top = ((downY - moveY) - this.react.height) - this.react.height
        } else {
          this.react.height = moveY
          this.react.top = downY
        }
        // this.checkAutoScroll(e)
      },
      checkAutoScroll(e) {
        const react = this.$refs.react.getBoundingClientRect()
        const isNearRight = (this.view.width - react.right) <= 5
        const isNearLeft = e.clientX <= 0
        if (isNearRight && !this.timer) {
          this.autoScrollToRight()
        }
        if (isNearLeft && !this.timer) {
          this.autoScrollToLeft()
        }
      },
      handleMouseUp() {
        this.handleSetSelect()
        this.resetDraw()
        off(document, 'mousemove', this.handleMouseMove)
        off(document, 'mouseup', this.handleMouseUp)
      },
      handleSetSelect() {
        const select = []
        const wrapRect = this.$refs.react.getBoundingClientRect()
        this.$store.state.components.storeList.map((item) => {
          const newItem = _.cloneDeep(item)
          const rect = newItem.rect
          const inXArea = (wrapRect.right > rect.right) && (wrapRect.left < rect.left)
          const inYArea = (wrapRect.bottom > rect.bottom) && (wrapRect.top < rect.top)
          if (inXArea && inYArea) {
            select.push(newItem)
          }
        })
        this.$store.dispatch('components/batchSelection', select)
      },
      autoScrollToRight() {
        const THRESHOLD = 5
        const maxScrollX = this.view.width - document.querySelector('.board-warp').offsetWidth
        this.timer = setInterval(() => {
          const scrollLeft = this.$refs.view.scrollLeft
          if (this.react.width < this.maxWidth) {
            this.react.width = this.react.width + THRESHOLD
          }
          if (scrollLeft < maxScrollX) {
            this.$refs.view.scrollLeft = scrollLeft + THRESHOLD
          } else {
            this.$refs.view.scrollLeft = maxScrollX
            clearInterval(this.timer)
            this.timer = ''
          }
        }, 0)
      },
      autoScrollToLeft() {
        //
      },
      addListener() {
        this.debounceViewScroll = debounce(300, this.onViewScroll)
      },
      onViewScroll() {
        this.initDragBasic()
      },
      initDragBasic() {
        this.$refs.canvas.onWindowResize()
      },
      setViewStyle() {
        this.view.width = window.screen.width
        this.view.height = window.screen.height
      }
    }
  };
</script>

<style lang="scss">
  .board-warp {
    position: relative;
    overflow: auto;
    .view-wrapper {
      user-select: none;
      top: 0;
      left: 0;
      touch-action: none;
      .y-help-line {
        border-left: 1px dashed $skyBlue;
        height: 100%;
        position: absolute;
        z-index: 100;
      }
      .x-help-line {
        width: 100%;
        border-bottom: 1px dashed $skyBlue;
        position: absolute;
        z-index: 100;
      }
      .react {
        position: absolute;
        z-index: 8;
        background-color: $light-blue;
      }
    }
    .canvas-wrapper {
      width: 500px;
      height: 500px;
      background-color: white;
      border-radius: 2px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      box-shadow: 0 0 10px rgba(0, 21, 41, 0.08);;
    }
    .board-canvas {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
</style>
