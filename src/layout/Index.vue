<template>
  <div class="app-warp">
    <header-nav />
    <div class="body-area">
      <left-menu class="left-menu" />
      <board ref="board" class="view-box" />
      <right-menu class="right-menu" @page-size-change="onPageSizeChange" />
    </div>
  </div>
</template>

<script>
  import { HeaderNav, LeftMenu, RightMenu, Board } from './index.js';
  import { on, off } from '@/utils/dom.js';
  export default {
    components: {
      HeaderNav,
      LeftMenu,
      RightMenu,
      Board,
    },
    data() {
      return {
      };
    },
    mounted() {
      on(document, 'click', this.handleCancelCurrent);
    },
    methods: {
      handleCancelCurrent() {
        this.$store.dispatch('components/setActive', '');
      },
      onPageSizeChange() {
        this.$refs.board.initDragBasic()
      }
    },
  };
</script>

<style lang="scss">
  @import "./src/style/variable";
  .app-warp {
    .body-area {
      height: calc(100vh - 32px);
      display: flex;
      flex-wrap: nowrap;
      position: relative;
      color: #333;
      .left-menu {
        width: 300px;
        flex-shrink: 0;
        background-color: white;
        box-shadow: 2px 0 6px rgba(0, 21, 41, 0.08);
        position: relative;
        z-index: 90;
      }
      .view-box {
        width: 100%;
        background-color: #e9eef3;
        color: #333;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-image: linear-gradient(45deg,#f5f5f5 25%,rgba(0,0,0,0) 0,rgba(0,0,0,0) 75%,#f5f5f5 0),linear-gradient(45deg,#f5f5f5 25%,rgba(0,0,0,0) 0,rgba(0,0,0,0) 75%,#f5f5f5 0);
        background-size: 20px 20px;
        background-position: 0 0,10px 10px;
      }
      .right-menu {
        flex-shrink: 0;
        background-color: white;
        box-shadow: -2px 0 6px rgba(0, 21, 41, 0.08);
        position: absolute;
        height: 100%;
        right: 0;
        z-index: 90;
        .el-tabs--border-card {
          box-shadow: none;
          border: 0;
          border-top: 1px solid $border;
        }
      }
    }
  }
</style>
