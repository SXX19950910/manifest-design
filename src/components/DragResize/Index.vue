<template>
  <div :class="resizeClass" class="resize-area" :style="resizeStyle">
    <i v-if="!isLine" class="iconfont icontuozhuaidaxiao" :style="iconStyle" @click.stop @mousedown="handleResizeDown" />
    <div v-else class="resize-bar" :style="barStyle" @click.stop @mousedown="handleResizeDown" />
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  export default {
    props: {
      componentObject: {
        type: Object,
        default() {
          return {};
        },
      },
    },
    data() {
      return {
      };
    },
    computed: {
      resizeStyle() {
        const style = {};
        const { isYLine, currentComponent } = this;
        if (isYLine) {
          style.width = `${currentComponent.props.height}px`;
        }
      },
      ...mapGetters(['activeComponent', 'storeList']),
      currentComponent() {
        const { id = '' } = this.activeComponent;
        return this.storeList.find((item) => item.id === id);
      },
      cursorType() {
        const type = {
          'XLineUi': 'col-resize',
          'YLineUi': 'row-resize',
        };
        return type[this.componentObject.type];
      },
      isLine() {
        return this.componentObject.type === 'XLineUi' || this.componentObject.type === 'YLineUi';
      },
      isYLine() {
        return this.componentObject.type === 'YLineUi';
      },
      iconStyle() {
        const { isLine } = this;
        return {
          cursor: isLine ? this.cursorType : 'se-resize',
        };
      },
      barStyle() {
        const { isLine, isYLine, currentComponent } = this;
        const style = {
          cursor: isLine ? this.cursorType : 'se-resize',
          width: this.resizeDisabledX ? '100%' : '16px',
          height: this.resizeDisabledY ? '100%' : '16px',
        };
        if (this.resizeDisabledX) {
          style.bottom = 0;
          style.left = 0;
        }
        if (this.resizeDisabledY) {
          style.top = 0;
          style.right = 0;
        }
        if (isYLine) {
          style.width = `${currentComponent.props.width}px`;
        }
        return style;
      },
      resizeDisabledY() {
        return this.componentObject.type === 'XLineUi';
      },
      resizeDisabledX() {
        return this.componentObject.type === 'YLineUi';
      },
      resizeClass() {
        return this.isLine ? '' : 'resize-btn';
      },
    },
    methods: {
      handleResizeDown(e) {
        this.$emit('resize-down', e);
      },
    },
  };
</script>

<style lang="scss">
  @import "./src/style/variable";
  .resize-area {
    .icontuozhuaidaxiao {
      font-size: 12px;
    }
    .resize-bar {
      position: absolute;
      height: 100%;
      width: 16px;
      display: flex;
      align-items: center;
      background-color: $skyBlue;
      &:after {
        content: '';
        width: 10px;
        height: 10px;
        background-color: $skyBlue;
        border-radius: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
</style>
