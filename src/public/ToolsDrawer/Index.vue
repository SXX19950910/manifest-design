<template>
  <div id="tools-drawer-warp">
    <div class="trigger-area">
      <div class="line-box"></div>
      <div class="trigger-btn">
        <i class="el-icon-caret-top"></i>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        visible: false,
        direction: 'btt',
      };
    },
  };
</script>

<style lang="scss">
  @import "./src/style/variable";
  #tools-drawer-warp {
    .trigger-area {
      width: 100%;
      position: absolute;
      height: 4px;
      bottom: -1px;
      cursor: pointer;
      .line-box {
        height: 3px;
        background-color: $skyBlue;
        z-index: 10;
        visibility: hidden;
        opacity: 0;
        transition: .2s ease all;
        position: relative;
        top: 2px;
      }
      .trigger-btn {
        padding: 4px;
        background-color: white;
        border: 1px solid $border;
        box-shadow: 0 0 10px #dedede;
        position: absolute;
        line-height: 8px;
        bottom: -14px;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 2px;
        color: $generalFontColor;
        cursor: pointer;
        transition: .2s ease all;
        &:hover {
          background-color: $skyBlue;
          color: white;
          border-color: $skyBlue;
          box-shadow: none;
        }
      }
      &:hover {
        .line-box {
          opacity: 1;
          visibility: visible;
        }
      }
    }
  }
</style>
