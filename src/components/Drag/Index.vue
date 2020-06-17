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
      isInstance: {
        type: Boolean,
        default: false,
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
      default: {
        type: Object,
        default() {
          return {};
        },
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
        debounceUpdateComponent: Function,
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
        const {id = ''} = this.activeComponent;
        if (id === this.componentObject.id) {
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
      this.debounceUpdateComponent = debounce(200, this.moveEnd);
    },
    methods: {
      init() {
        this.initLayoutScheme();
      },
      initLayoutScheme() {
        const $drag = this.$refs.drag;
        const isInstance = this.isInstance;
        const element = $drag.firstElementChild;
        const defaultData = this.default;
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
        if (isInstance) {
          this.x = defaultData.x;
          this.y = defaultData.y;
          this.width = defaultData.width;
          this.height = defaultData.height || '';
        } else {
          this.x = defaultX - left;
          this.y = defaultY - top;
        }
        this.$nextTick(() => {
          this.debounceUpdateComponent();
        });
      },
      clearAllListener() {
        off(document, 'mousemove', this.handleResizeMove);
        off(document, 'mouseup', this.handleResizeUp);
        off(document, 'mousemove', this.handleMouseMove);
        off(document, 'mouseup', this.handleMouseUp);
      },
      handleMouseDown(e) {
        const $drag = e.path.find((item) => item.className.includes('drag-warp'));
        const { top, left } = $drag.getBoundingClientRect();
        this.downX = e.clientX - left;
        this.downY = e.clientY - top;
        on(document, 'mousemove', this.handleMouseMove);
        on(document, 'mouseup', this.handleMouseUp);
        this.handleSetCurrent();
      },
      handleContextMenu() {
        this.clearAllListener();
      },
      handleSetCurrent() {
        const { id = '' } = this.componentObject;
        this.$store.dispatch('components/setActive', id);
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
        this.debounceUpdateComponent();
      },
      handleMouseUp() {
        off(document, 'mousemove', this.handleMouseMove);
        off(document, 'mouseup', this.handleMouseUp);
      },
      moveEnd() {
        setTimeout(() => {
          const { x, y } = this;
          const dragData = {
            id: this.aimId,
            x,
            y,
            instance: true,
            width: this.width || 0,
            height: this.height || 0,
            position: {
              clientX: x,
              clientY: y,
            },
          };
          this.$emit('move-end', dragData);
        });
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
        this.debounceUpdateComponent();
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
