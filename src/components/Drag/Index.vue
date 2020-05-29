<template>
  <div ref="drag" :id="aimId" class="drag-warp" :class="activeClass" :style="dragStyle" @click.stop="handleSetCurrent" @mousedown="handleMouseDown" @contextmenu="handleContextMenu">
    <component :is="componentObject.type" v-bind="componentObject.props" :element-id="componentObject.id" :update-id="componentObject.updateId" @complete="init" />
    <drag-resize v-if="resizeVisible" :component-object="componentObject" @resize-down="handleResizeDown"/>
  </div>
</template>

<script>
  import {on, off} from '@/utils/dom';
  import { debounce } from 'throttle-debounce';
  import { mapGetters } from 'vuex';
  export default {
    name: 'Drag',
    props: {
      componentObject: {
        type: Object,
        default() {
          return {};
        },
      },
      aimId: {
        type: String,
        default: '',
      },
      defaultX: {
        type: Number,
        default: 0,
      },
      defaultY: {
        type: Number,
        default: 0,
      },
      updateId: {
        type: String,
        default: '',
      },
    },
    data() {
      return {
        x: '',
        y: '',
        downX: '',
        downY: '',
        resizeDownX: '',
        resizeDownY: '',
        downWidth: '',
        downHeight: '',
        offsetLeft: '',
        offsetTop: '',
        resizeOffsetRight: '',
        resizeOffsetBottom: '',
        board: {},
        active: false,
        defaultWidth: '',
        defaultHeight: '',
        width: '',
        height: '',
        debounceSetPosition: Function,
      };
    },
    destroyed() {
      this.clearAllListener();
    },
    computed: {
      ...mapGetters(['activeComponent']),
      dragStyle() {
        const { width, height, y, x, isLine } = this;
        return {
          width: `${width}px`,
          height: `${height}px`,
          top: `${y}px`,
          left: `${x}px`,
          padding: isLine ? '0' : '0 10px 0 0',
          overflow: isLine ? 'unset' : 'hidden',
        };
      },
      activeClass() {
        const result = [];
        if (this.activeComponent === this.componentObject.id) {
          result.push('is-active');
        }
        if (this.componentObject.type === 'BarcodeUi') {
          result.push('barcode-ui');
        }
        if (this.isLine) {
          result.push('line-ui');
        }
        return result;
      },
      isLine() {
        return this.componentObject.type === 'XLineUi' || this.componentObject.type === 'YLineUi' || this.componentObject.type === 'RectangleUi';
      },
      resizeDisabledY() {
        return this.componentObject.type === 'XLineUi';
      },
      resizeDisabledX() {
        return this.componentObject.type === 'YLineUi';
      },
      resizeVisible() {
        return this.activeClass.includes('is-active');
      },
    },
    mounted() {
      this.debounceSetPosition = debounce(200, this.updateDefaultPosition);
    },
    methods: {
      init() {
        const $drag = this.$refs.drag;
        const element = $drag.firstElementChild;
        const canvas = document.querySelector('.drag-canvas-warp.board-canvas');
        const { width, height } = $drag.getBoundingClientRect();
        const { defaultX, defaultY } = this;
        const { top, left } = element.getBoundingClientRect();
        this.board = canvas.getBoundingClientRect();
        this.offsetLeft = left;
        this.offsetTop = top;
        this.defaultHeight = height;
        this.defaultWidth = width;
        this.width = width;
        this.x = defaultX - left;
        this.y = defaultY - top;
      },
      updateDefaultPosition(e) {
        const { clientX, clientY } = e;
        const payload = {
          id: this.componentObject.id,
          update: {
            updateId: '',
            position: {
              defaultX: clientX,
              defaultY: clientY,
            },
          },
        };
        this.$store.dispatch('components/updateComponent', payload);
      },
      clearAllListener() {
        off(document, 'mousemove', this.handleResizeMove);
        off(document, 'mouseup', this.handleResizeUp);
        off(document, 'mousemove', this.handleMouseMove);
        off(document, 'mouseup', this.handleMouseUp);
      },
      handleMouseDown(e) {
        const { top, left } = e.target.getBoundingClientRect();
        this.downX = e.clientX - left;
        this.downY = e.clientY - top;
        on(document, 'mousemove', this.handleMouseMove);
        on(document, 'mouseup', this.handleMouseUp);
      },
      handleContextMenu() {
        this.clearAllListener();
      },
      handleSetCurrent() {
        const payload = {
          id: this.componentObject.id,
        };
        this.$store.dispatch('components/setActive', payload);
      },
      handleMouseMove(e) {
        const aim = this.aimId;
        const clientX = e.clientX;
        const clientY = e.clientY;
        const boardHeight = this.board.height;
        const boardWidth = this.board.width;
        const x = clientX - this.offsetLeft - this.downX;
        const y = clientY - this.offsetTop - this.downY;
        const $element = document.getElementById(aim);
        const { width, height } = $element.getBoundingClientRect();
        if (x <= 0) {
          this.x = 0;
        } else if ((width + x) >= boardWidth) {
          this.x = boardWidth - width;
        } else {
          this.x = x;
        }
        if (y <= 0) {
          this.y = 0;
        } else if ((height + y) >= boardHeight) {
          this.y = boardHeight - height;
        } else {
          this.y = y;
        }
        this.debounceSetPosition(e);
      },
      handleMouseUp() {
        off(document, 'mousemove', this.handleMouseMove);
        off(document, 'mouseup', this.handleMouseUp);
      },
      handleResizeUp() {
        off(document, 'mousemove', this.handleResizeMove);
        off(document, 'mouseup', this.handleResizeUp);
      },
      handleResizeMove(e) {
        const { clientX, clientY } = e;
        const defaultWidth = this.defaultWidth;
        const defaultHeight = this.defaultHeight;
        const downWidth = this.downWidth;
        const downHeight = this.downHeight;
        const moveX = clientX - this.resizeDownX;
        const moveY = clientY - this.resizeDownY;
        const offsetRight = this.resizeOffsetRight;
        const offsetBottom = this.resizeOffsetBottom;
        const width  = downWidth + moveX;
        const height = downHeight + moveY;
        const heightLimit = height <= defaultHeight;
        const widthLimit = width <= defaultWidth;
        const xEdge = moveX >= offsetRight;
        const yEdge = moveY >= offsetBottom;
        if (!this.resizeDisabledX) {
          if (widthLimit) {
            this.width = defaultWidth;
          } else if (xEdge) {
            this.width = downWidth + offsetRight;
          } else {
            this.width = width;
          }
        }
        if (!this.resizeDisabledY) {
          if (heightLimit) {
            this.height = defaultHeight;
          } else if (yEdge) {
            this.height = downHeight + offsetBottom;
          } else {
            this.height = height;
          }
        }
      },
      handleResizeDown(e) {
        const $drag = this.$refs.drag;
        const { width, height } = $drag.getBoundingClientRect();
        this.resizeOffsetRight = this.board.width - $drag.offsetLeft - width;
        this.resizeOffsetBottom = this.board.height - $drag.offsetTop - height;
        this.resizeDownX = e.clientX;
        this.resizeDownY = e.clientY;
        this.downWidth = width;
        this.downHeight = height;
        on(document, 'mousemove', this.handleResizeMove);
        on(document, 'mouseup', this.handleResizeUp);
        e.stopPropagation();
      },
    },
  };
</script>

<style lang="scss">
  @import "./src/style/variable";
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
    &.is-active {
      border: 1px solid $skyBlue;
      .rectangle-warp {
        border-color: $skyBlue !important;
      }
    }
    .resize-btn {
      position: absolute;
      right: -1px;
      bottom: -3px;
      font-size: 12px;
      transform: scale(.6);
      color: $skyBlue;
    }
    &:hover {
      background-color: rgba(25,143,255, 0.1);
    }
    &.line-ui {
      border: none;
      .line-resize {
        position: absolute;
        height: 100%;
        width: 10px;
        right: 0;
        top: 0;
        background-color: $skyBlue;
      }
    }
  }
</style>
