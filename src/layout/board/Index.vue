<template>
  <div class="board-warp">
    <drag-canvas class="board-canvas" />
<!--    <tools-drawer />-->
  </div>
</template>

<script>
  import DragCanvas from '@/components/DragCanvas/Index.vue';
  import { ToolsDrawer } from '@/public';
  export default {
    components: {
      DragCanvas,
      ToolsDrawer,
    },
    data() {
      return {
      };
    },
  };
</script>

<style lang="scss">
  .board-warp {
    position: relative;
    .board-canvas {
      width: 460px;
      height: 460px;
      background-color: white;
      border-radius: 2px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      box-shadow: 0 0 10px rgba(0, 21, 41, 0.08);;
    }
  }
</style>
